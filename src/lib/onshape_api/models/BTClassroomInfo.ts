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
import type { BTGlobalTreeNodeInfo } from './BTGlobalTreeNodeInfo';
import {
    BTGlobalTreeNodeInfoFromJSON,
    BTGlobalTreeNodeInfoFromJSONTyped,
    BTGlobalTreeNodeInfoToJSON,
} from './BTGlobalTreeNodeInfo';
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';

/**
 * 
 * @export
 * @interface BTClassroomInfo
 */
export interface BTClassroomInfo extends BTGlobalTreeNodeInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTClassroomInfo
     */
    educator?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTClassroomInfo
     */
    numberOfAssignments?: number;
    /**
     * 
     * @type {number}
     * @memberof BTClassroomInfo
     */
    numberOfMembers?: number;
    /**
     * 
     * @type {number}
     * @memberof BTClassroomInfo
     */
    state?: number;
    /**
     * 
     * @type {string}
     * @memberof BTClassroomInfo
     */
    stateName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTClassroomInfo
     */
    title?: string;
}

/**
 * Check if a given object implements the BTClassroomInfo interface.
 */
export function instanceOfBTClassroomInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTClassroomInfoFromJSON(json: any): BTClassroomInfo {
    return BTClassroomInfoFromJSONTyped(json, false);
}

export function BTClassroomInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTClassroomInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTGlobalTreeNodeInfoFromJSONTyped(json, ignoreDiscriminator),
        'educator': !exists(json, 'educator') ? undefined : json['educator'],
        'numberOfAssignments': !exists(json, 'numberOfAssignments') ? undefined : json['numberOfAssignments'],
        'numberOfMembers': !exists(json, 'numberOfMembers') ? undefined : json['numberOfMembers'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'stateName': !exists(json, 'stateName') ? undefined : json['stateName'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function BTClassroomInfoToJSON(value?: BTClassroomInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTGlobalTreeNodeInfoToJSON(value),
        'educator': value.educator,
        'numberOfAssignments': value.numberOfAssignments,
        'numberOfMembers': value.numberOfMembers,
        'state': value.state,
        'stateName': value.stateName,
        'title': value.title,
    };
}

