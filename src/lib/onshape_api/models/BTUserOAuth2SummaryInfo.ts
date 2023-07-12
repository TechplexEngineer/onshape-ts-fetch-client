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
import type { BTCompanySummaryInfo } from './BTCompanySummaryInfo';
import {
    BTCompanySummaryInfoFromJSON,
    BTCompanySummaryInfoFromJSONTyped,
    BTCompanySummaryInfoToJSON,
} from './BTCompanySummaryInfo';
import type { BTRole } from './BTRole';
import {
    BTRoleFromJSON,
    BTRoleFromJSONTyped,
    BTRoleToJSON,
} from './BTRole';
import type { GlobalPermissionInfo } from './GlobalPermissionInfo';
import {
    GlobalPermissionInfoFromJSON,
    GlobalPermissionInfoFromJSONTyped,
    GlobalPermissionInfoToJSON,
} from './GlobalPermissionInfo';

/**
 * 
 * @export
 * @interface BTUserOAuth2SummaryInfo
 */
export interface BTUserOAuth2SummaryInfo {
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    clientId?: string;
    /**
     * 
     * @type {BTCompanySummaryInfo}
     * @memberof BTUserOAuth2SummaryInfo
     */
    company?: BTCompanySummaryInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserOAuth2SummaryInfo
     */
    companyPlan?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    documentationName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    documentationNameOverride?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    firstName?: string;
    /**
     * 
     * @type {GlobalPermissionInfo}
     * @memberof BTUserOAuth2SummaryInfo
     */
    globalPermissions?: GlobalPermissionInfo;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    image?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserOAuth2SummaryInfo
     */
    isGuest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserOAuth2SummaryInfo
     */
    isLight?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTUserOAuth2SummaryInfo
     */
    lastLoginTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    lastName?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserOAuth2SummaryInfo
     */
    oauth2Scopes?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserOAuth2SummaryInfo
     */
    personalMessageAllowed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    planGroup?: string;
    /**
     * 
     * @type {number}
     * @memberof BTUserOAuth2SummaryInfo
     */
    role?: number;
    /**
     * 
     * @type {Set<BTRole>}
     * @memberof BTUserOAuth2SummaryInfo
     */
    roles?: Set<BTRole>;
    /**
     * 
     * @type {number}
     * @memberof BTUserOAuth2SummaryInfo
     */
    source?: number;
    /**
     * 
     * @type {number}
     * @memberof BTUserOAuth2SummaryInfo
     */
    state?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTUserOAuth2SummaryInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTUserOAuth2SummaryInfo interface.
 */
export function instanceOfBTUserOAuth2SummaryInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserOAuth2SummaryInfoFromJSON(json: any): BTUserOAuth2SummaryInfo {
    return BTUserOAuth2SummaryInfoFromJSONTyped(json, false);
}

export function BTUserOAuth2SummaryInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserOAuth2SummaryInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'company': !exists(json, 'company') ? undefined : BTCompanySummaryInfoFromJSON(json['company']),
        'companyPlan': !exists(json, 'companyPlan') ? undefined : json['companyPlan'],
        'documentationName': !exists(json, 'documentationName') ? undefined : json['documentationName'],
        'documentationNameOverride': !exists(json, 'documentationNameOverride') ? undefined : json['documentationNameOverride'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'globalPermissions': !exists(json, 'globalPermissions') ? undefined : GlobalPermissionInfoFromJSON(json['globalPermissions']),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'isGuest': !exists(json, 'isGuest') ? undefined : json['isGuest'],
        'isLight': !exists(json, 'isLight') ? undefined : json['isLight'],
        'lastLoginTime': !exists(json, 'lastLoginTime') ? undefined : (new Date(json['lastLoginTime'])),
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'oauth2Scopes': !exists(json, 'oauth2Scopes') ? undefined : json['oauth2Scopes'],
        'personalMessageAllowed': !exists(json, 'personalMessageAllowed') ? undefined : json['personalMessageAllowed'],
        'planGroup': !exists(json, 'planGroup') ? undefined : json['planGroup'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'roles': !exists(json, 'roles') ? undefined : (new Set((json['roles'] as Array<any>).map(BTRoleFromJSON))),
        'source': !exists(json, 'source') ? undefined : json['source'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTUserOAuth2SummaryInfoToJSON(value?: BTUserOAuth2SummaryInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'company': BTCompanySummaryInfoToJSON(value.company),
        'companyPlan': value.companyPlan,
        'documentationName': value.documentationName,
        'documentationNameOverride': value.documentationNameOverride,
        'email': value.email,
        'firstName': value.firstName,
        'globalPermissions': GlobalPermissionInfoToJSON(value.globalPermissions),
        'href': value.href,
        'id': value.id,
        'image': value.image,
        'isGuest': value.isGuest,
        'isLight': value.isLight,
        'lastLoginTime': value.lastLoginTime === undefined ? undefined : (value.lastLoginTime.toISOString()),
        'lastName': value.lastName,
        'name': value.name,
        'oauth2Scopes': value.oauth2Scopes,
        'personalMessageAllowed': value.personalMessageAllowed,
        'planGroup': value.planGroup,
        'role': value.role,
        'roles': value.roles === undefined ? undefined : (Array.from(value.roles as Set<any>).map(BTRoleToJSON)),
        'source': value.source,
        'state': value.state,
        'viewRef': value.viewRef,
    };
}

