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
import type { GBTBodyType } from './GBTBodyType';
import {
    GBTBodyTypeFromJSON,
    GBTBodyTypeFromJSONTyped,
    GBTBodyTypeToJSON,
} from './GBTBodyType';
import type { GBTElementType } from './GBTElementType';
import {
    GBTElementTypeFromJSON,
    GBTElementTypeFromJSONTyped,
    GBTElementTypeToJSON,
} from './GBTElementType';
import type { GBTMeshState } from './GBTMeshState';
import {
    GBTMeshStateFromJSON,
    GBTMeshStateFromJSONTyped,
    GBTMeshStateToJSON,
} from './GBTMeshState';

/**
 * Array of items in the current page.
 * @export
 * @interface BTInsertableInfo
 */
export interface BTInsertableInfo {
    /**
     * 
     * @type {GBTBodyType}
     * @memberof BTInsertableInfo
     */
    bodyType?: GBTBodyType;
    /**
     * 
     * @type {number}
     * @memberof BTInsertableInfo
     */
    classType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTInsertableInfo
     */
    configurationParameterValues?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTInsertableInfo
     */
    configurationParameters?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    dataType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    deterministicId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    elementName?: string;
    /**
     * 
     * @type {GBTElementType}
     * @memberof BTInsertableInfo
     */
    elementType?: GBTElementType;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    featureName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTInsertableInfo
     */
    featureSpec?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    featureType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTInsertableInfo
     */
    fsComputedPartPropertySpec?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTInsertableInfo
     */
    fsTableSpec?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTInsertableInfo
     */
    hasFaults?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTInsertableInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTInsertableInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    insertableQuery?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInsertableInfo
     */
    isFlattenedBody?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInsertableInfo
     */
    isMesh?: boolean;
    /**
     * 
     * @type {GBTMeshState}
     * @memberof BTInsertableInfo
     */
    meshState?: GBTMeshState;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    microversionId?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTInsertableInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    partIdentity?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    partName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    predictableThumbnailId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    sourceFileExtension?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    thumbnailUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    unflattenedPartDeterministicId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    variableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    versionName?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTInsertableInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    workspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTInsertableInfo
     */
    workspaceName?: string;
}

/**
 * Check if a given object implements the BTInsertableInfo interface.
 */
export function instanceOfBTInsertableInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInsertableInfoFromJSON(json: any): BTInsertableInfo {
    return BTInsertableInfoFromJSONTyped(json, false);
}

export function BTInsertableInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInsertableInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodyType': !exists(json, 'bodyType') ? undefined : GBTBodyTypeFromJSON(json['bodyType']),
        'classType': !exists(json, 'classType') ? undefined : json['classType'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'configurationParameterValues': !exists(json, 'configurationParameterValues') ? undefined : json['configurationParameterValues'],
        'configurationParameters': !exists(json, 'configurationParameters') ? undefined : json['configurationParameters'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'deterministicId': !exists(json, 'deterministicId') ? undefined : json['deterministicId'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementName': !exists(json, 'elementName') ? undefined : json['elementName'],
        'elementType': !exists(json, 'elementType') ? undefined : GBTElementTypeFromJSON(json['elementType']),
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'featureName': !exists(json, 'featureName') ? undefined : json['featureName'],
        'featureSpec': !exists(json, 'featureSpec') ? undefined : json['featureSpec'],
        'featureType': !exists(json, 'featureType') ? undefined : json['featureType'],
        'fsComputedPartPropertySpec': !exists(json, 'fsComputedPartPropertySpec') ? undefined : json['fsComputedPartPropertySpec'],
        'fsTableSpec': !exists(json, 'fsTableSpec') ? undefined : json['fsTableSpec'],
        'hasFaults': !exists(json, 'hasFaults') ? undefined : json['hasFaults'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'insertableQuery': !exists(json, 'insertableQuery') ? undefined : json['insertableQuery'],
        'isFlattenedBody': !exists(json, 'isFlattenedBody') ? undefined : json['isFlattenedBody'],
        'isMesh': !exists(json, 'isMesh') ? undefined : json['isMesh'],
        'meshState': !exists(json, 'meshState') ? undefined : GBTMeshStateFromJSON(json['meshState']),
        'microversionId': !exists(json, 'microversionId') ? undefined : json['microversionId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : json['partIdentity'],
        'partName': !exists(json, 'partName') ? undefined : json['partName'],
        'predictableThumbnailId': !exists(json, 'predictableThumbnailId') ? undefined : json['predictableThumbnailId'],
        'sourceFileExtension': !exists(json, 'sourceFileExtension') ? undefined : json['sourceFileExtension'],
        'thumbnailUri': !exists(json, 'thumbnailUri') ? undefined : json['thumbnailUri'],
        'unflattenedPartDeterministicId': !exists(json, 'unflattenedPartDeterministicId') ? undefined : json['unflattenedPartDeterministicId'],
        'variableName': !exists(json, 'variableName') ? undefined : json['variableName'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionName': !exists(json, 'versionName') ? undefined : json['versionName'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
        'workspaceName': !exists(json, 'workspaceName') ? undefined : json['workspaceName'],
    };
}

export function BTInsertableInfoToJSON(value?: BTInsertableInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodyType': GBTBodyTypeToJSON(value.bodyType),
        'classType': value.classType,
        'configuration': value._configuration,
        'configurationParameterValues': value.configurationParameterValues,
        'configurationParameters': value.configurationParameters,
        'dataType': value.dataType,
        'deterministicId': value.deterministicId,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementName': value.elementName,
        'elementType': GBTElementTypeToJSON(value.elementType),
        'featureId': value.featureId,
        'featureName': value.featureName,
        'featureSpec': value.featureSpec,
        'featureType': value.featureType,
        'fsComputedPartPropertySpec': value.fsComputedPartPropertySpec,
        'fsTableSpec': value.fsTableSpec,
        'hasFaults': value.hasFaults,
        'href': value.href,
        'id': value.id,
        'insertableQuery': value.insertableQuery,
        'isFlattenedBody': value.isFlattenedBody,
        'isMesh': value.isMesh,
        'meshState': GBTMeshStateToJSON(value.meshState),
        'microversionId': value.microversionId,
        'name': value.name,
        'parentId': value.parentId,
        'partIdentity': value.partIdentity,
        'partName': value.partName,
        'predictableThumbnailId': value.predictableThumbnailId,
        'sourceFileExtension': value.sourceFileExtension,
        'thumbnailUri': value.thumbnailUri,
        'unflattenedPartDeterministicId': value.unflattenedPartDeterministicId,
        'variableName': value.variableName,
        'versionId': value.versionId,
        'versionName': value.versionName,
        'viewRef': value.viewRef,
        'workspaceId': value.workspaceId,
        'workspaceName': value.workspaceName,
    };
}

