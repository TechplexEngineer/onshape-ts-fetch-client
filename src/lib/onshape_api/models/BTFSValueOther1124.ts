/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { GBTPType } from './GBTPType';
import {
    GBTPTypeFromJSON,
    GBTPTypeFromJSONTyped,
    GBTPTypeToJSON,
} from './GBTPType';

/**
 * 
 * @export
 * @interface BTFSValueOther1124
 */
export interface BTFSValueOther1124 extends BTFSValue1888 {
    /**
     * 
     * @type {string}
     * @memberof BTFSValueOther1124
     */
    btType?: string;
    /**
     * 
     * @type {GBTPType}
     * @memberof BTFSValueOther1124
     */
    type?: GBTPType;
}

/**
 * Check if a given object implements the BTFSValueOther1124 interface.
 */
export function instanceOfBTFSValueOther1124(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFSValueOther1124FromJSON(json: any): BTFSValueOther1124 {
    return BTFSValueOther1124FromJSONTyped(json, false);
}

export function BTFSValueOther1124FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFSValueOther1124 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFSValue1888FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'type': !exists(json, 'type') ? undefined : GBTPTypeFromJSON(json['type']),
    };
}

export function BTFSValueOther1124ToJSON(value?: BTFSValueOther1124 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFSValue1888ToJSON(value),
        'btType': value.btType,
        'type': GBTPTypeToJSON(value.type),
    };
}

