/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RequestOptions
 */
export interface RequestOptions {
    /**
     * 
     * @type {string}
     * @memberof RequestOptions
     */
    apiKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestOptions
     */
    connectTimeout?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestOptions
     */
    idempotencyKey?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestOptions
     */
    readTimeout?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestOptions
     */
    stripeAccount?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestOptions
     */
    stripeVersion?: string;
}

/**
 * Check if a given object implements the RequestOptions interface.
 */
export function instanceOfRequestOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestOptionsFromJSON(json: any): RequestOptions {
    return RequestOptionsFromJSONTyped(json, false);
}

export function RequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiKey': !exists(json, 'apiKey') ? undefined : json['apiKey'],
        'connectTimeout': !exists(json, 'connectTimeout') ? undefined : json['connectTimeout'],
        'idempotencyKey': !exists(json, 'idempotencyKey') ? undefined : json['idempotencyKey'],
        'readTimeout': !exists(json, 'readTimeout') ? undefined : json['readTimeout'],
        'stripeAccount': !exists(json, 'stripeAccount') ? undefined : json['stripeAccount'],
        'stripeVersion': !exists(json, 'stripeVersion') ? undefined : json['stripeVersion'],
    };
}

export function RequestOptionsToJSON(value?: RequestOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiKey': value.apiKey,
        'connectTimeout': value.connectTimeout,
        'idempotencyKey': value.idempotencyKey,
        'readTimeout': value.readTimeout,
        'stripeAccount': value.stripeAccount,
        'stripeVersion': value.stripeVersion,
    };
}

