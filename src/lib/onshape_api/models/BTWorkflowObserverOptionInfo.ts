/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAliasInfo } from './BTAliasInfo';
import {
    BTAliasInfoFromJSON,
    BTAliasInfoFromJSONTyped,
    BTAliasInfoToJSON,
} from './BTAliasInfo';
import type { BTRbacRoleInfo } from './BTRbacRoleInfo';
import {
    BTRbacRoleInfoFromJSON,
    BTRbacRoleInfoFromJSONTyped,
    BTRbacRoleInfoToJSON,
} from './BTRbacRoleInfo';
import type { BTTeamSummaryInfo } from './BTTeamSummaryInfo';
import {
    BTTeamSummaryInfoFromJSON,
    BTTeamSummaryInfoFromJSONTyped,
    BTTeamSummaryInfoToJSON,
} from './BTTeamSummaryInfo';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
} from './BTUserSummaryInfo';

/**
 * Array of items in the current page.
 * @export
 * @interface BTWorkflowObserverOptionInfo
 */
export interface BTWorkflowObserverOptionInfo {
    /**
     * 
     * @type {BTAliasInfo}
     * @memberof BTWorkflowObserverOptionInfo
     */
    alias?: BTAliasInfo;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTWorkflowObserverOptionInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTWorkflowObserverOptionInfo
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof BTWorkflowObserverOptionInfo
     */
    identityType?: number;
    /**
     * 
     * @type {BTRbacRoleInfo}
     * @memberof BTWorkflowObserverOptionInfo
     */
    role?: BTRbacRoleInfo;
    /**
     * 
     * @type {BTTeamSummaryInfo}
     * @memberof BTWorkflowObserverOptionInfo
     */
    team?: BTTeamSummaryInfo;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTWorkflowObserverOptionInfo
     */
    user?: BTUserSummaryInfo;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTWorkflowObserverOptionInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTWorkflowObserverOptionInfo interface.
 */
export function instanceOfBTWorkflowObserverOptionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowObserverOptionInfoFromJSON(json: any): BTWorkflowObserverOptionInfo {
    return BTWorkflowObserverOptionInfoFromJSONTyped(json, false);
}

export function BTWorkflowObserverOptionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowObserverOptionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alias': !exists(json, 'alias') ? undefined : BTAliasInfoFromJSON(json['alias']),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identityType': !exists(json, 'identityType') ? undefined : json['identityType'],
        'role': !exists(json, 'role') ? undefined : BTRbacRoleInfoFromJSON(json['role']),
        'team': !exists(json, 'team') ? undefined : BTTeamSummaryInfoFromJSON(json['team']),
        'user': !exists(json, 'user') ? undefined : BTUserSummaryInfoFromJSON(json['user']),
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTWorkflowObserverOptionInfoToJSON(value?: BTWorkflowObserverOptionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alias': BTAliasInfoToJSON(value.alias),
        'href': value.href,
        'id': value.id,
        'identityType': value.identityType,
        'role': BTRbacRoleInfoToJSON(value.role),
        'team': BTTeamSummaryInfoToJSON(value.team),
        'user': BTUserSummaryInfoToJSON(value.user),
        'viewRef': value.viewRef,
    };
}
