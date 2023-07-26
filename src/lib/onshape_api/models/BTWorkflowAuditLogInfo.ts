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
import type { BTPublishedWorkflowId } from './BTPublishedWorkflowId';
import {
    BTPublishedWorkflowIdFromJSON,
    BTPublishedWorkflowIdFromJSONTyped,
    BTPublishedWorkflowIdToJSON,
} from './BTPublishedWorkflowId';
import type { BTWorkflowAuditLogEntryInfo } from './BTWorkflowAuditLogEntryInfo';
import {
    BTWorkflowAuditLogEntryInfoFromJSON,
    BTWorkflowAuditLogEntryInfoFromJSONTyped,
    BTWorkflowAuditLogEntryInfoToJSON,
} from './BTWorkflowAuditLogEntryInfo';

/**
 * 
 * @export
 * @interface BTWorkflowAuditLogInfo
 */
export interface BTWorkflowAuditLogInfo {
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogInfo
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogInfo
     */
    debugMicroversionId?: string;
    /**
     * 
     * @type {Array<BTWorkflowAuditLogEntryInfo>}
     * @memberof BTWorkflowAuditLogInfo
     */
    entries?: Array<BTWorkflowAuditLogEntryInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowAuditLogInfo
     */
    objectId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTWorkflowAuditLogInfo
     */
    objectType?: number;
    /**
     * 
     * @type {BTPublishedWorkflowId}
     * @memberof BTWorkflowAuditLogInfo
     */
    publishedWorkflowId?: BTPublishedWorkflowId;
}

/**
 * Check if a given object implements the BTWorkflowAuditLogInfo interface.
 */
export function instanceOfBTWorkflowAuditLogInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowAuditLogInfoFromJSON(json: any): BTWorkflowAuditLogInfo {
    return BTWorkflowAuditLogInfoFromJSONTyped(json, false);
}

export function BTWorkflowAuditLogInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowAuditLogInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'debugMicroversionId': !exists(json, 'debugMicroversionId') ? undefined : json['debugMicroversionId'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTWorkflowAuditLogEntryInfoFromJSON)),
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'publishedWorkflowId': !exists(json, 'publishedWorkflowId') ? undefined : BTPublishedWorkflowIdFromJSON(json['publishedWorkflowId']),
    };
}

export function BTWorkflowAuditLogInfoToJSON(value?: BTWorkflowAuditLogInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyId': value.companyId,
        'debugMicroversionId': value.debugMicroversionId,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTWorkflowAuditLogEntryInfoToJSON)),
        'objectId': value.objectId,
        'objectType': value.objectType,
        'publishedWorkflowId': BTPublishedWorkflowIdToJSON(value.publishedWorkflowId),
    };
}

