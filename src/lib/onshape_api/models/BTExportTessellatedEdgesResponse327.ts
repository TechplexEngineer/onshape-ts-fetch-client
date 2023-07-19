/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTExportTessellatedBody3398 } from './BTExportTessellatedBody3398';
import {
    BTExportTessellatedBody3398FromJSON,
    BTExportTessellatedBody3398FromJSONTyped,
    BTExportTessellatedBody3398ToJSON,
} from './BTExportTessellatedBody3398';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

/**
 * 
 * @export
 * @interface BTExportTessellatedEdgesResponse327
 */
export interface BTExportTessellatedEdgesResponse327 {
    /**
     * 
     * @type {Array<BTExportTessellatedBody3398>}
     * @memberof BTExportTessellatedEdgesResponse327
     */
    bodies?: Array<BTExportTessellatedBody3398>;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedEdgesResponse327
     */
    btType?: string;
    /**
     * 
     * @type {GBTErrorStringEnum}
     * @memberof BTExportTessellatedEdgesResponse327
     */
    errorEnum?: GBTErrorStringEnum;
}

/**
 * Check if a given object implements the BTExportTessellatedEdgesResponse327 interface.
 */
export function instanceOfBTExportTessellatedEdgesResponse327(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedEdgesResponse327FromJSON(json: any): BTExportTessellatedEdgesResponse327 {
    return BTExportTessellatedEdgesResponse327FromJSONTyped(json, false);
}

export function BTExportTessellatedEdgesResponse327FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedEdgesResponse327 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodies': !exists(json, 'bodies') ? undefined : ((json['bodies'] as Array<any>).map(BTExportTessellatedBody3398FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'errorEnum': !exists(json, 'errorEnum') ? undefined : GBTErrorStringEnumFromJSON(json['errorEnum']),
    };
}

export function BTExportTessellatedEdgesResponse327ToJSON(value?: BTExportTessellatedEdgesResponse327 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodies': value.bodies === undefined ? undefined : ((value.bodies as Array<any>).map(BTExportTessellatedBody3398ToJSON)),
        'btType': value.btType,
        'errorEnum': GBTErrorStringEnumToJSON(value.errorEnum),
    };
}

