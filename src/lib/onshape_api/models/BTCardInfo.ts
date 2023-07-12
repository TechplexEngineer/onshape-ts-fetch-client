/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAddressInfo } from './BTAddressInfo';
import {
    BTAddressInfoFromJSON,
    BTAddressInfoFromJSONTyped,
    BTAddressInfoToJSON,
} from './BTAddressInfo';

/**
 * 
 * @export
 * @interface BTCardInfo
 */
export interface BTCardInfo {
    /**
     * 
     * @type {BTAddressInfo}
     * @memberof BTCardInfo
     */
    billingAddress?: BTAddressInfo;
    /**
     * 
     * @type {number}
     * @memberof BTCardInfo
     */
    expMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCardInfo
     */
    expYear?: number;
    /**
     * 
     * @type {string}
     * @memberof BTCardInfo
     */
    last4?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCardInfo
     */
    type?: string;
}

/**
 * Check if a given object implements the BTCardInfo interface.
 */
export function instanceOfBTCardInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCardInfoFromJSON(json: any): BTCardInfo {
    return BTCardInfoFromJSONTyped(json, false);
}

export function BTCardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCardInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billingAddress': !exists(json, 'billingAddress') ? undefined : BTAddressInfoFromJSON(json['billingAddress']),
        'expMonth': !exists(json, 'expMonth') ? undefined : json['expMonth'],
        'expYear': !exists(json, 'expYear') ? undefined : json['expYear'],
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function BTCardInfoToJSON(value?: BTCardInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billingAddress': BTAddressInfoToJSON(value.billingAddress),
        'expMonth': value.expMonth,
        'expYear': value.expYear,
        'last4': value.last4,
        'type': value.type,
    };
}

