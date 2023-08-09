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
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTRbacPermissionSchemeInfo } from './BTRbacPermissionSchemeInfo';
import {
    BTRbacPermissionSchemeInfoFromJSON,
    BTRbacPermissionSchemeInfoFromJSONTyped,
    BTRbacPermissionSchemeInfoToJSON,
} from './BTRbacPermissionSchemeInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { RoleMapEntry } from './RoleMapEntry';
import {
    RoleMapEntryFromJSON,
    RoleMapEntryFromJSONTyped,
    RoleMapEntryToJSON,
} from './RoleMapEntry';

/**
 * 
 * @export
 * @interface BTProjectInfo
 */
export interface BTProjectInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTProjectInfo
     */
    canMove?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTProjectInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTProjectInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTProjectInfo
     */
    description?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTProjectInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTProjectInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTProjectInfo
     */
    isContainer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTProjectInfo
     */
    isEnterpriseOwned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTProjectInfo
     */
    isMutable?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTProjectInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTProjectInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTProjectInfo
     */
    name?: string;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTProjectInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {BTRbacPermissionSchemeInfo}
     * @memberof BTProjectInfo
     */
    permissionScheme?: BTRbacPermissionSchemeInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTProjectInfo
     */
    permissionSet?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTProjectInfo
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTProjectInfo
     */
    resourceType?: string;
    /**
     * 
     * @type {Array<RoleMapEntry>}
     * @memberof BTProjectInfo
     */
    roleMapEntries?: Array<RoleMapEntry>;
    /**
     * 
     * @type {boolean}
     * @memberof BTProjectInfo
     */
    trash?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTProjectInfo
     */
    treeHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTProjectInfo
     */
    unparentHref?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTProjectInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTProjectInfo interface.
 */
export function instanceOfBTProjectInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTProjectInfoFromJSON(json: any): BTProjectInfo {
    return BTProjectInfoFromJSONTyped(json, false);
}

export function BTProjectInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTProjectInfo {
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
        'permissionScheme': !exists(json, 'permissionScheme') ? undefined : BTRbacPermissionSchemeInfoFromJSON(json['permissionScheme']),
        'permissionSet': !exists(json, 'permissionSet') ? undefined : json['permissionSet'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'roleMapEntries': !exists(json, 'roleMapEntries') ? undefined : ((json['roleMapEntries'] as Array<any>).map(RoleMapEntryFromJSON)),
        'trash': !exists(json, 'trash') ? undefined : json['trash'],
        'treeHref': !exists(json, 'treeHref') ? undefined : json['treeHref'],
        'unparentHref': !exists(json, 'unparentHref') ? undefined : json['unparentHref'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTProjectInfoToJSON(value?: BTProjectInfo | null): any {
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
        'permissionScheme': BTRbacPermissionSchemeInfoToJSON(value.permissionScheme),
        'permissionSet': value.permissionSet,
        'projectId': value.projectId,
        'resourceType': value.resourceType,
        'roleMapEntries': value.roleMapEntries === undefined ? undefined : ((value.roleMapEntries as Array<any>).map(RoleMapEntryToJSON)),
        'trash': value.trash,
        'treeHref': value.treeHref,
        'unparentHref': value.unparentHref,
        'viewRef': value.viewRef,
    };
}

