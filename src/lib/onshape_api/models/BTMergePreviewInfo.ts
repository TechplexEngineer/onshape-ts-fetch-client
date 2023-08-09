/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.20169-88260985a0b6
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTElementMergeInfo } from './BTElementMergeInfo';
import {
    BTElementMergeInfoFromJSON,
    BTElementMergeInfoFromJSONTyped,
    BTElementMergeInfoToJSON,
} from './BTElementMergeInfo';

/**
 * 
 * @export
 * @interface BTMergePreviewInfo
 */
export interface BTMergePreviewInfo {
    /**
     * 
     * @type {string}
     * @memberof BTMergePreviewInfo
     */
    branchPointMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMergePreviewInfo
     */
    branchPointVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMergePreviewInfo
     */
    branchPointWorkspaceId?: string;
    /**
     * 
     * @type {Array<BTElementMergeInfo>}
     * @memberof BTMergePreviewInfo
     */
    changes?: Array<BTElementMergeInfo>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMergePreviewInfo
     */
    isBranchPointAtStart?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMergePreviewInfo
     */
    sourceMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMergePreviewInfo
     */
    targetMicroversionId?: string;
}

/**
 * Check if a given object implements the BTMergePreviewInfo interface.
 */
export function instanceOfBTMergePreviewInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMergePreviewInfoFromJSON(json: any): BTMergePreviewInfo {
    return BTMergePreviewInfoFromJSONTyped(json, false);
}

export function BTMergePreviewInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMergePreviewInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branchPointMicroversionId': !exists(json, 'branchPointMicroversionId') ? undefined : json['branchPointMicroversionId'],
        'branchPointVersionId': !exists(json, 'branchPointVersionId') ? undefined : json['branchPointVersionId'],
        'branchPointWorkspaceId': !exists(json, 'branchPointWorkspaceId') ? undefined : json['branchPointWorkspaceId'],
        'changes': !exists(json, 'changes') ? undefined : ((json['changes'] as Array<any>).map(BTElementMergeInfoFromJSON)),
        'isBranchPointAtStart': !exists(json, 'isBranchPointAtStart') ? undefined : json['isBranchPointAtStart'],
        'sourceMicroversionId': !exists(json, 'sourceMicroversionId') ? undefined : json['sourceMicroversionId'],
        'targetMicroversionId': !exists(json, 'targetMicroversionId') ? undefined : json['targetMicroversionId'],
    };
}

export function BTMergePreviewInfoToJSON(value?: BTMergePreviewInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branchPointMicroversionId': value.branchPointMicroversionId,
        'branchPointVersionId': value.branchPointVersionId,
        'branchPointWorkspaceId': value.branchPointWorkspaceId,
        'changes': value.changes === undefined ? undefined : ((value.changes as Array<any>).map(BTElementMergeInfoToJSON)),
        'isBranchPointAtStart': value.isBranchPointAtStart,
        'sourceMicroversionId': value.sourceMicroversionId,
        'targetMicroversionId': value.targetMicroversionId,
    };
}

