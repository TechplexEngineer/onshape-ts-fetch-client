/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAppElementContentEntryInfo } from './BTAppElementContentEntryInfo';
import {
    BTAppElementContentEntryInfoFromJSON,
    BTAppElementContentEntryInfoFromJSONTyped,
    BTAppElementContentEntryInfoToJSON,
} from './BTAppElementContentEntryInfo';
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';

/**
 * 
 * @export
 * @interface BTAppElementContentInfo
 */
export interface BTAppElementContentInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAppElementContentInfo
     */
    changeId?: string;
    /**
     * 
     * @type {Array<BTAppElementContentEntryInfo>}
     * @memberof BTAppElementContentInfo
     */
    data?: Array<BTAppElementContentEntryInfo>;
    /**
     * The numeric code identifying the error that occurred, if one occurred.
     * @type {number}
     * @memberof BTAppElementContentInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppElementContentInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppElementContentInfo
     */
    errorValue?: BTAppElementErrorCode;
}

/**
 * Check if a given object implements the BTAppElementContentInfo interface.
 */
export function instanceOfBTAppElementContentInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppElementContentInfoFromJSON(json: any): BTAppElementContentInfo {
    return BTAppElementContentInfoFromJSONTyped(json, false);
}

export function BTAppElementContentInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementContentInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': !exists(json, 'changeId') ? undefined : json['changeId'],
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BTAppElementContentEntryInfoFromJSON)),
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
    };
}

export function BTAppElementContentInfoToJSON(value?: BTAppElementContentInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': value.changeId,
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BTAppElementContentEntryInfoToJSON)),
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
    };
}

