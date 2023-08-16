/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBaseInfo } from './BTBaseInfo';
import {
    BTBaseInfoFromJSON,
    BTBaseInfoFromJSONTyped,
    BTBaseInfoToJSON,
} from './BTBaseInfo';
import type { BTDocumentLabelInfo } from './BTDocumentLabelInfo';
import {
    BTDocumentLabelInfoFromJSON,
    BTDocumentLabelInfoFromJSONTyped,
    BTDocumentLabelInfoToJSON,
} from './BTDocumentLabelInfo';
import type { BTDocumentSearchHitInfo } from './BTDocumentSearchHitInfo';
import {
    BTDocumentSearchHitInfoFromJSON,
    BTDocumentSearchHitInfoFromJSONTyped,
    BTDocumentSearchHitInfoToJSON,
} from './BTDocumentSearchHitInfo';
import type { BTDocumentSummaryInfo } from './BTDocumentSummaryInfo';
import {
    BTDocumentSummaryInfoFromJSON,
    BTDocumentSummaryInfoFromJSONTyped,
    BTDocumentSummaryInfoToJSON,
} from './BTDocumentSummaryInfo';
import type { BTOldPermission } from './BTOldPermission';
import {
    BTOldPermissionFromJSON,
    BTOldPermissionFromJSONTyped,
    BTOldPermissionToJSON,
} from './BTOldPermission';
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { BTWorkspaceInfo } from './BTWorkspaceInfo';
import {
    BTWorkspaceInfoFromJSON,
    BTWorkspaceInfoFromJSONTyped,
    BTWorkspaceInfoToJSON,
} from './BTWorkspaceInfo';

/**
 * 
 * @export
 * @interface BTDocumentSummarySearchInfo
 */
export interface BTDocumentSummarySearchInfo extends BTDocumentSummaryInfo {
    /**
     * 
     * @type {Array<BTDocumentSearchHitInfo>}
     * @memberof BTDocumentSummarySearchInfo
     */
    searchHits?: Array<BTDocumentSearchHitInfo>;
}

/**
 * Check if a given object implements the BTDocumentSummarySearchInfo interface.
 */
export function instanceOfBTDocumentSummarySearchInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentSummarySearchInfoFromJSON(json: any): BTDocumentSummarySearchInfo {
    return BTDocumentSummarySearchInfoFromJSONTyped(json, false);
}

export function BTDocumentSummarySearchInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSummarySearchInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDocumentSummaryInfoFromJSONTyped(json, ignoreDiscriminator),
        'searchHits': !exists(json, 'searchHits') ? undefined : ((json['searchHits'] as Array<any>).map(BTDocumentSearchHitInfoFromJSON)),
    };
}

export function BTDocumentSummarySearchInfoToJSON(value?: BTDocumentSummarySearchInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDocumentSummaryInfoToJSON(value),
        'searchHits': value.searchHits === undefined ? undefined : ((value.searchHits as Array<any>).map(BTDocumentSearchHitInfoToJSON)),
    };
}

