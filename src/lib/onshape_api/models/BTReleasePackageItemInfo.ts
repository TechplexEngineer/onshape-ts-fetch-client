/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMetadataPropertyInfo } from './BTMetadataPropertyInfo';
import {
    BTMetadataPropertyInfoFromJSON,
    BTMetadataPropertyInfoFromJSONTyped,
    BTMetadataPropertyInfoToJSON,
} from './BTMetadataPropertyInfo';
import type { BTReleaseItemErrorInfo } from './BTReleaseItemErrorInfo';
import {
    BTReleaseItemErrorInfoFromJSON,
    BTReleaseItemErrorInfoFromJSONTyped,
    BTReleaseItemErrorInfoToJSON,
} from './BTReleaseItemErrorInfo';

/**
 * 
 * @export
 * @interface BTReleasePackageItemInfo
 */
export interface BTReleasePackageItemInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTReleasePackageItemInfo
     */
    canExport?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTReleasePackageItemInfo
     */
    changeDetectionStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    configurationKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    diffThumbnailConfigurationKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    elementId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTReleasePackageItemInfo
     */
    elementType?: number;
    /**
     * 
     * @type {Array<BTReleaseItemErrorInfo>}
     * @memberof BTReleasePackageItemInfo
     */
    errors?: Array<BTReleaseItemErrorInfo>;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTReleasePackageItemInfo
     */
    isRevisionManaged?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTReleasePackageItemInfo
     */
    isRootItem?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTReleasePackageItemInfo
     */
    isTranslatable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTReleasePackageItemInfo
     */
    meshState?: number;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    mimeType?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    obsoletionRevisionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    originalWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    partType?: string;
    /**
     * 
     * @type {Array<BTMetadataPropertyInfo>}
     * @memberof BTReleasePackageItemInfo
     */
    properties?: Array<BTMetadataPropertyInfo>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTReleasePackageItemInfo
     */
    referenceIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTReleasePackageItemInfo
     */
    referenceIdsFromOriginalWorkspace?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    rpid?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    smallThumbnailHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    versionId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTReleasePackageItemInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTReleasePackageItemInfo interface.
 */
export function instanceOfBTReleasePackageItemInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTReleasePackageItemInfoFromJSON(json: any): BTReleasePackageItemInfo {
    return BTReleasePackageItemInfoFromJSONTyped(json, false);
}

export function BTReleasePackageItemInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTReleasePackageItemInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canExport': !exists(json, 'canExport') ? undefined : json['canExport'],
        'changeDetectionStatus': !exists(json, 'changeDetectionStatus') ? undefined : json['changeDetectionStatus'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'configurationKey': !exists(json, 'configurationKey') ? undefined : json['configurationKey'],
        'diffThumbnailConfigurationKey': !exists(json, 'diffThumbnailConfigurationKey') ? undefined : json['diffThumbnailConfigurationKey'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(BTReleaseItemErrorInfoFromJSON)),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isRevisionManaged': !exists(json, 'isRevisionManaged') ? undefined : json['isRevisionManaged'],
        'isRootItem': !exists(json, 'isRootItem') ? undefined : json['isRootItem'],
        'isTranslatable': !exists(json, 'isTranslatable') ? undefined : json['isTranslatable'],
        'meshState': !exists(json, 'meshState') ? undefined : json['meshState'],
        'mimeType': !exists(json, 'mimeType') ? undefined : json['mimeType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'obsoletionRevisionId': !exists(json, 'obsoletionRevisionId') ? undefined : json['obsoletionRevisionId'],
        'originalWorkspaceId': !exists(json, 'originalWorkspaceId') ? undefined : json['originalWorkspaceId'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partType': !exists(json, 'partType') ? undefined : json['partType'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTMetadataPropertyInfoFromJSON)),
        'referenceIds': !exists(json, 'referenceIds') ? undefined : json['referenceIds'],
        'referenceIdsFromOriginalWorkspace': !exists(json, 'referenceIdsFromOriginalWorkspace') ? undefined : json['referenceIdsFromOriginalWorkspace'],
        'rpid': !exists(json, 'rpid') ? undefined : json['rpid'],
        'smallThumbnailHref': !exists(json, 'smallThumbnailHref') ? undefined : json['smallThumbnailHref'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTReleasePackageItemInfoToJSON(value?: BTReleasePackageItemInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canExport': value.canExport,
        'changeDetectionStatus': value.changeDetectionStatus,
        'companyId': value.companyId,
        'configuration': value._configuration,
        'configurationKey': value.configurationKey,
        'diffThumbnailConfigurationKey': value.diffThumbnailConfigurationKey,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementType': value.elementType,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(BTReleaseItemErrorInfoToJSON)),
        'href': value.href,
        'id': value.id,
        'isRevisionManaged': value.isRevisionManaged,
        'isRootItem': value.isRootItem,
        'isTranslatable': value.isTranslatable,
        'meshState': value.meshState,
        'mimeType': value.mimeType,
        'name': value.name,
        'obsoletionRevisionId': value.obsoletionRevisionId,
        'originalWorkspaceId': value.originalWorkspaceId,
        'partId': value.partId,
        'partType': value.partType,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTMetadataPropertyInfoToJSON)),
        'referenceIds': value.referenceIds,
        'referenceIdsFromOriginalWorkspace': value.referenceIdsFromOriginalWorkspace,
        'rpid': value.rpid,
        'smallThumbnailHref': value.smallThumbnailHref,
        'versionId': value.versionId,
        'viewRef': value.viewRef,
        'workspaceId': value.workspaceId,
    };
}

