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
/**
 * 
 * @export
 * @interface BTDocumentHistoryInfo
 */
export interface BTDocumentHistoryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentHistoryInfo
     */
    canBeRestored?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentHistoryInfo
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentHistoryInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentHistoryInfo
     */
    microversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentHistoryInfo
     */
    nextMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentHistoryInfo
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentHistoryInfo
     */
    username?: string;
}

/**
 * Check if a given object implements the BTDocumentHistoryInfo interface.
 */
export function instanceOfBTDocumentHistoryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentHistoryInfoFromJSON(json: any): BTDocumentHistoryInfo {
    return BTDocumentHistoryInfoFromJSONTyped(json, false);
}

export function BTDocumentHistoryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentHistoryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canBeRestored': !exists(json, 'canBeRestored') ? undefined : json['canBeRestored'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'microversionId': !exists(json, 'microversionId') ? undefined : json['microversionId'],
        'nextMicroversionId': !exists(json, 'nextMicroversionId') ? undefined : json['nextMicroversionId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
    };
}

export function BTDocumentHistoryInfoToJSON(value?: BTDocumentHistoryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canBeRestored': value.canBeRestored,
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'description': value.description,
        'microversionId': value.microversionId,
        'nextMicroversionId': value.nextMicroversionId,
        'userId': value.userId,
        'username': value.username,
    };
}

