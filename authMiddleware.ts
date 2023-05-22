import {ErrorContext, FetchParams, Middleware, ResponseContext} from "./onshape_api";

const uint8ArrayToByteString = function (input: Uint8Array): string {
    return String.fromCharCode.apply(null, input as any)
}

async function signDataHmac256(secretKey: string, data: string): Promise<string> {
    const enc = new TextEncoder(/*"utf-8"*/);
    const algorithm = {name: "HMAC", hash: "SHA-256"};

    const key = await crypto.subtle.importKey("raw", enc.encode(secretKey), algorithm, false, ["sign", "verify"]);
    const signature = await crypto.subtle.sign(algorithm.name, key, enc.encode(data));
    const digest = new Uint8Array(signature);

    return btoa(uint8ArrayToByteString(digest))
}

// creates random 25-character string
const buildNonce = function () {
    const chars = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ];
    let nonce = '';
    for (let i = 0; i < 25; i++) {
        nonce += chars[Math.floor(Math.random() * chars.length)];
    }
    return nonce;
};

export const copyObject = function (object: any) {
    return JSON.parse(JSON.stringify(object));
    console.log("copyObject", object);
    if (object === null || typeof object !== 'object') {
        return object;
    }
    const copy = {} as any;
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        if (object.hasOwn(keys[i])) {
            copy[keys[i]] = copyObject(object[keys[i]]);
        }
    }
    return copy;
};

export const buildHeaders = async ({accessKey, secretKey, method, path, queryString, inputHeaders}: {
    accessKey: string,
    secretKey: string,
    method: string,
    path: string,
    queryString: string,
    inputHeaders: any
}) => {
    const headers = copyObject(inputHeaders);
    // the Date header needs to be reasonably (5 minutes) close to the server time when the request is received
    const authDate = new Date().toUTCString();
    // the On-Nonce header is a random (unique) string that serves to identify the request
    const onNonce = buildNonce();
    if (!('Content-Type' in headers)) {
        headers['Content-Type'] = 'application/json';
    }
    // the Authorization header needs to have this very particular format, which the server uses to validate the request
    // the access key is provided for the server to retrieve the API key; the signature is encrypted with the secret key
    const hmacString = (
        method +
        '\n' +
        onNonce +
        '\n' +
        authDate +
        '\n' +
        headers['Content-Type'] +
        '\n' +
        path +
        '\n' +
        queryString +
        '\n'
    ).toLowerCase();
    const signature = await signDataHmac256(secretKey, hmacString);

    const asign = 'On ' + accessKey + ':HmacSHA256:' + signature;

    headers['On-Nonce'] = onNonce;
    headers['Date'] = authDate;
    headers['Authorization'] = asign;

    if (!('Accept' in headers)) {
        headers['Accept'] = 'application/vnd.onshape.v1+json';
    }

    return headers;
}

export const buildDWMVEPath = function (opts: {
    resource: string;
    d?: string;
    w?: string;
    v?: string;
    m?: string;
    e?: string;
    subresource?: string;
}) {
    let path = '/api/' + opts.resource + '/d/' + opts.d;
    if ('w' in opts) {
        path += '/w/' + opts.w;
    } else if ('v' in opts) {
        path += '/v/' + opts.v;
    } else if ('m' in opts) {
        path += '/m/' + opts.m;
    }
    if ('e' in opts && opts["e"]) {
        path += '/e/' + opts.e;
    }
    if ('subresource' in opts && opts["subresource"]) {
        path += '/' + opts.subresource;
    }

    return path;
};

export const buildQueryString = function (opts: { query: any }) {
    if (!('query' in opts) || typeof opts.query !== 'object' || opts.query == null) {
        return '';
    }
    return new URLSearchParams(opts.query).toString();
    // return queryString.stringify(opts.query);
};

export const inputHeadersFromOpts = function (opts: { headers?: any }) {
    return !('headers' in opts) || typeof opts.headers !== 'object' || opts.headers == null
        ? {}
        : copyObject(opts.headers);
};


const APIKeyAuthMiddleware = (secretKey: string, accessKey: string) => {
    return {
        async pre(context: ResponseContext): Promise<FetchParams | void> {
            // console.log("----pre ---");
            let url = new URL(context.url)
            let baseUrl = url.hostname;
            let queryString = url.search;

            let inputHeaders = context.init.headers;

            let path = url.pathname;

            const headerParams = {
                accessKey,
                secretKey,
                method: 'GET',
                path,
                queryString,
                inputHeaders
            };
            // console.log("headerParams", headerParams);

            const headers = await buildHeaders(headerParams);
            if (queryString !== '') queryString = '?' + queryString;
            const requestUrl = baseUrl + path + queryString;

            // console.log("context.url:", context.url);
            // console.log("requestUrl:", requestUrl);
            //
            // console.log("context.init.headers", context.init.headers);
            // console.log("headers", headers);
            context.init.headers = headers;

            return {url: context.url, init: context.init};
        },

        async post(context: ResponseContext): Promise<Response | void> {
            // console.log("post", await context.response.text());
            return context.response;
        },
        async onError(context: ErrorContext): Promise<Response | void> {
            // console.log("Error", context.error);
            return context.response
        }
    }
};
export default APIKeyAuthMiddleware;
// export class APIKeyAuthMiddleware implements Middleware {


// async post(context: ResponseContext): Promise<Response | void> {
//     // console.log("post", await context.response.text());
//     return context.response;
// }
//
// async onError(context: ErrorContext): Promise<Response | void> {
//     // console.log("Error", context.error);
//     return context.response
// }

// }