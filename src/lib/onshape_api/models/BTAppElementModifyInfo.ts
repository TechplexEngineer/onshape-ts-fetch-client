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
import type { BTAppElementErrorCode } from './BTAppElementErrorCode';
import {
    BTAppElementErrorCodeFromJSON,
    BTAppElementErrorCodeFromJSONTyped,
    BTAppElementErrorCodeToJSON,
} from './BTAppElementErrorCode';
import type { BTDiffJsonResponse2725 } from './BTDiffJsonResponse2725';
import {
    BTDiffJsonResponse2725FromJSON,
    BTDiffJsonResponse2725FromJSONTyped,
    BTDiffJsonResponse2725ToJSON,
} from './BTDiffJsonResponse2725';

/**
 * 
 * @export
 * @interface BTAppElementModifyInfo
 */
export interface BTAppElementModifyInfo {
    /**
     * The latest change id for the element, after the edit was committed.
     * @type {string}
     * @memberof BTAppElementModifyInfo
     */
    changeId: string;
    /**
     * The id of the edited element.
     * @type {string}
     * @memberof BTAppElementModifyInfo
     */
    elementId?: string;
    /**
     * The ids of the edited elements, if multiple elements were edited.
     * @type {Array<string>}
     * @memberof BTAppElementModifyInfo
     */
    elementIds?: Array<string>;
    /**
     * The numeric code identifying the error that occurred, if one occurred.
     * @type {number}
     * @memberof BTAppElementModifyInfo
     */
    errorCode?: number;
    /**
     * A human-readable value for the error that occurred, if one occurred.
     * @type {string}
     * @memberof BTAppElementModifyInfo
     */
    errorDescription?: string;
    /**
     * 
     * @type {BTAppElementErrorCode}
     * @memberof BTAppElementModifyInfo
     */
    errorValue?: BTAppElementErrorCode;
    /**
     * 
     * @type {BTDiffJsonResponse2725}
     * @memberof BTAppElementModifyInfo
     */
    jsonDifference?: BTDiffJsonResponse2725;
    /**
     * The latest change id for the element, before the edit was made.
     * @type {string}
     * @memberof BTAppElementModifyInfo
     */
    parentChangeId?: string;
    /**
     * When committing a transaction, this field indicates if the properties of the application element were changed after the transaction was created.
     * @type {boolean}
     * @memberof BTAppElementModifyInfo
     */
    propertyEditsMerged?: boolean;
    /**
     * The id of the transaction in which the edit was applied.
     * @type {string}
     * @memberof BTAppElementModifyInfo
     */
    transactionId?: string;
}

/**
 * Check if a given object implements the BTAppElementModifyInfo interface.
 */
export function instanceOfBTAppElementModifyInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "changeId" in value;

    return isInstance;
}

export function BTAppElementModifyInfoFromJSON(json: any): BTAppElementModifyInfo {
    return BTAppElementModifyInfoFromJSONTyped(json, false);
}

export function BTAppElementModifyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppElementModifyInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeId': json['changeId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementIds': !exists(json, 'elementIds') ? undefined : json['elementIds'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorDescription': !exists(json, 'errorDescription') ? undefined : json['errorDescription'],
        'errorValue': !exists(json, 'errorValue') ? undefined : BTAppElementErrorCodeFromJSON(json['errorValue']),
        'jsonDifference': !exists(json, 'jsonDifference') ? undefined : BTDiffJsonResponse2725FromJSON(json['jsonDifference']),
        'parentChangeId': !exists(json, 'parentChangeId') ? undefined : json['parentChangeId'],
        'propertyEditsMerged': !exists(json, 'propertyEditsMerged') ? undefined : json['propertyEditsMerged'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
    };
}

export function BTAppElementModifyInfoToJSON(value?: BTAppElementModifyInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeId': value.changeId,
        'elementId': value.elementId,
        'elementIds': value.elementIds,
        'errorCode': value.errorCode,
        'errorDescription': value.errorDescription,
        'errorValue': BTAppElementErrorCodeToJSON(value.errorValue),
        'jsonDifference': BTDiffJsonResponse2725ToJSON(value.jsonDifference),
        'parentChangeId': value.parentChangeId,
        'propertyEditsMerged': value.propertyEditsMerged,
        'transactionId': value.transactionId,
    };
}

