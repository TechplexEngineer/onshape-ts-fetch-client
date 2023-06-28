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
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTTeamSummaryInfo } from './BTTeamSummaryInfo';
import {
    BTTeamSummaryInfoFromJSON,
    BTTeamSummaryInfoFromJSONTyped,
    BTTeamSummaryInfoToJSON,
} from './BTTeamSummaryInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';

/**
 * 
 * @export
 * @interface BTTeamInfo
 */
export interface BTTeamInfo extends BTTeamSummaryInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTTeamInfo
     */
    admin?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTeamInfo
     */
    member?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTTeamInfo
     */
    size?: number;
}

/**
 * Check if a given object implements the BTTeamInfo interface.
 */
export function instanceOfBTTeamInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTeamInfoFromJSON(json: any): BTTeamInfo {
    return BTTeamInfoFromJSONTyped(json, false);
}

export function BTTeamInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTeamInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTeamSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'member': !exists(json, 'member') ? undefined : json['member'],
        'size': !exists(json, 'size') ? undefined : json['size'],
    };
}

export function BTTeamInfoToJSON(value?: BTTeamInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTeamSummaryInfoToJSON(value),
        'admin': value.admin,
        'member': value.member,
        'size': value.size,
    };
}

