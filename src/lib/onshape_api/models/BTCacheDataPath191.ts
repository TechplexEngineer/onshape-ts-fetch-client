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
 * @interface BTCacheDataPath191
 */
export interface BTCacheDataPath191 {
    /**
     * 
     * @type {string}
     * @memberof BTCacheDataPath191
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCacheDataPath191
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCacheDataPath191
     */
    elementId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCacheDataPath191
     */
    immutablePathContentsShouldExist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCacheDataPath191
     */
    isImmutableContextPath?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCacheDataPath191
     */
    key?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCacheDataPath191
     */
    keyContainsConfiguration?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCacheDataPath191
     */
    useLocalFileCache?: boolean;
}

/**
 * Check if a given object implements the BTCacheDataPath191 interface.
 */
export function instanceOfBTCacheDataPath191(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCacheDataPath191FromJSON(json: any): BTCacheDataPath191 {
    return BTCacheDataPath191FromJSONTyped(json, false);
}

export function BTCacheDataPath191FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCacheDataPath191 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'immutablePathContentsShouldExist': !exists(json, 'immutablePathContentsShouldExist') ? undefined : json['immutablePathContentsShouldExist'],
        'isImmutableContextPath': !exists(json, 'isImmutableContextPath') ? undefined : json['isImmutableContextPath'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'keyContainsConfiguration': !exists(json, 'keyContainsConfiguration') ? undefined : json['keyContainsConfiguration'],
        'useLocalFileCache': !exists(json, 'useLocalFileCache') ? undefined : json['useLocalFileCache'],
    };
}

export function BTCacheDataPath191ToJSON(value?: BTCacheDataPath191 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'immutablePathContentsShouldExist': value.immutablePathContentsShouldExist,
        'isImmutableContextPath': value.isImmutableContextPath,
        'key': value.key,
        'keyContainsConfiguration': value.keyContainsConfiguration,
        'useLocalFileCache': value.useLocalFileCache,
    };
}

