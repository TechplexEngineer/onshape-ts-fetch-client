/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
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
 * @interface BTAddressInfo
 */
export interface BTAddressInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    countryCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    stateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAddressInfo
     */
    zip?: string;
}

/**
 * Check if a given object implements the BTAddressInfo interface.
 */
export function instanceOfBTAddressInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAddressInfoFromJSON(json: any): BTAddressInfo {
    return BTAddressInfoFromJSONTyped(json, false);
}

export function BTAddressInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAddressInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'stateCode': !exists(json, 'stateCode') ? undefined : json['stateCode'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
    };
}

export function BTAddressInfoToJSON(value?: BTAddressInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'city': value.city,
        'country': value.country,
        'countryCode': value.countryCode,
        'id': value.id,
        'state': value.state,
        'stateCode': value.stateCode,
        'zip': value.zip,
    };
}

