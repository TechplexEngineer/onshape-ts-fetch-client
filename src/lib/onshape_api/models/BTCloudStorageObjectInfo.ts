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

/**
 * 
 * @export
 * @interface BTCloudStorageObjectInfo
 */
export interface BTCloudStorageObjectInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTCloudStorageObjectInfo
     */
    canMove?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    cloudStorageAccountId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    cloudStorageObjectId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCloudStorageObjectInfo
     */
    cloudStorageProvider?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTCloudStorageObjectInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTCloudStorageObjectInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    createdById?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    description?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    iconLink?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCloudStorageObjectInfo
     */
    isContainer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCloudStorageObjectInfo
     */
    isEnterpriseOwned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCloudStorageObjectInfo
     */
    isMutable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    mimeType?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTCloudStorageObjectInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTCloudStorageObjectInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    modifiedById?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    name?: string;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTCloudStorageObjectInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    resourceType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCloudStorageObjectInfo
     */
    sizeBytes?: number;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTCloudStorageObjectInfo
     */
    thumbnailInfo?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    treeHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    unparentHref?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageObjectInfo
     */
    webViewLink?: string;
}

/**
 * Check if a given object implements the BTCloudStorageObjectInfo interface.
 */
export function instanceOfBTCloudStorageObjectInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCloudStorageObjectInfoFromJSON(json: any): BTCloudStorageObjectInfo {
    return BTCloudStorageObjectInfoFromJSONTyped(json, false);
}

export function BTCloudStorageObjectInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCloudStorageObjectInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canMove': !exists(json, 'canMove') ? undefined : json['canMove'],
        'cloudStorageAccountId': !exists(json, 'cloudStorageAccountId') ? undefined : json['cloudStorageAccountId'],
        'cloudStorageObjectId': !exists(json, 'cloudStorageObjectId') ? undefined : json['cloudStorageObjectId'],
        'cloudStorageProvider': !exists(json, 'cloudStorageProvider') ? undefined : json['cloudStorageProvider'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['createdBy']),
        'createdById': !exists(json, 'createdById') ? undefined : json['createdById'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'iconLink': !exists(json, 'iconLink') ? undefined : json['iconLink'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isContainer': !exists(json, 'isContainer') ? undefined : json['isContainer'],
        'isEnterpriseOwned': !exists(json, 'isEnterpriseOwned') ? undefined : json['isEnterpriseOwned'],
        'isMutable': !exists(json, 'isMutable') ? undefined : json['isMutable'],
        'mimeType': !exists(json, 'mimeType') ? undefined : json['mimeType'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['modifiedBy']),
        'modifiedById': !exists(json, 'modifiedById') ? undefined : json['modifiedById'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : BTOwnerInfoFromJSON(json['owner']),
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'sizeBytes': !exists(json, 'sizeBytes') ? undefined : json['sizeBytes'],
        'thumbnailInfo': !exists(json, 'thumbnailInfo') ? undefined : BTThumbnailInfoFromJSON(json['thumbnailInfo']),
        'treeHref': !exists(json, 'treeHref') ? undefined : json['treeHref'],
        'unparentHref': !exists(json, 'unparentHref') ? undefined : json['unparentHref'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'webViewLink': !exists(json, 'webViewLink') ? undefined : json['webViewLink'],
    };
}

export function BTCloudStorageObjectInfoToJSON(value?: BTCloudStorageObjectInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canMove': value.canMove,
        'cloudStorageAccountId': value.cloudStorageAccountId,
        'cloudStorageObjectId': value.cloudStorageObjectId,
        'cloudStorageProvider': value.cloudStorageProvider,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': BTUserBasicSummaryInfoToJSON(value.createdBy),
        'createdById': value.createdById,
        'description': value.description,
        'href': value.href,
        'iconLink': value.iconLink,
        'id': value.id,
        'isContainer': value.isContainer,
        'isEnterpriseOwned': value.isEnterpriseOwned,
        'isMutable': value.isMutable,
        'mimeType': value.mimeType,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': BTUserBasicSummaryInfoToJSON(value.modifiedBy),
        'modifiedById': value.modifiedById,
        'name': value.name,
        'owner': BTOwnerInfoToJSON(value.owner),
        'parentId': value.parentId,
        'projectId': value.projectId,
        'resourceType': value.resourceType,
        'sizeBytes': value.sizeBytes,
        'thumbnailInfo': BTThumbnailInfoToJSON(value.thumbnailInfo),
        'treeHref': value.treeHref,
        'unparentHref': value.unparentHref,
        'viewRef': value.viewRef,
        'webViewLink': value.webViewLink,
    };
}

