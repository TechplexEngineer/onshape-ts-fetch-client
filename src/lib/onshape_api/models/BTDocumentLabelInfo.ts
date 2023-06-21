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
 * @interface BTDocumentLabelInfo
 */
export interface BTDocumentLabelInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentLabelInfo
     */
    canMove?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentLabelInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTDocumentLabelInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    description?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentLabelInfo
     */
    isContainer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentLabelInfo
     */
    isEnterpriseOwned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentLabelInfo
     */
    isMutable?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentLabelInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTDocumentLabelInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    name?: string;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTDocumentLabelInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    parentLabelId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    treeHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    unparentHref?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTDocumentLabelInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTDocumentLabelInfo interface.
 */
export function instanceOfBTDocumentLabelInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentLabelInfoFromJSON(json: any): BTDocumentLabelInfo {
    return BTDocumentLabelInfoFromJSONTyped(json, false);
}

export function BTDocumentLabelInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentLabelInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canMove': !exists(json, 'canMove') ? undefined : json['canMove'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['createdBy']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isContainer': !exists(json, 'isContainer') ? undefined : json['isContainer'],
        'isEnterpriseOwned': !exists(json, 'isEnterpriseOwned') ? undefined : json['isEnterpriseOwned'],
        'isMutable': !exists(json, 'isMutable') ? undefined : json['isMutable'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['modifiedBy']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : BTOwnerInfoFromJSON(json['owner']),
        'parentLabelId': !exists(json, 'parentLabelId') ? undefined : json['parentLabelId'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'treeHref': !exists(json, 'treeHref') ? undefined : json['treeHref'],
        'unparentHref': !exists(json, 'unparentHref') ? undefined : json['unparentHref'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTDocumentLabelInfoToJSON(value?: BTDocumentLabelInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canMove': value.canMove,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': BTUserBasicSummaryInfoToJSON(value.createdBy),
        'description': value.description,
        'href': value.href,
        'id': value.id,
        'isContainer': value.isContainer,
        'isEnterpriseOwned': value.isEnterpriseOwned,
        'isMutable': value.isMutable,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': BTUserBasicSummaryInfoToJSON(value.modifiedBy),
        'name': value.name,
        'owner': BTOwnerInfoToJSON(value.owner),
        'parentLabelId': value.parentLabelId,
        'path': value.path,
        'projectId': value.projectId,
        'resourceType': value.resourceType,
        'treeHref': value.treeHref,
        'unparentHref': value.unparentHref,
        'viewRef': value.viewRef,
    };
}

