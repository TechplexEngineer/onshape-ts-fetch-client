/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTCategoryPropertyConfigInfo } from './BTCategoryPropertyConfigInfo';
import {
    BTCategoryPropertyConfigInfoFromJSON,
    BTCategoryPropertyConfigInfoFromJSONTyped,
    BTCategoryPropertyConfigInfoToJSON,
} from './BTCategoryPropertyConfigInfo';
import type { BTMetadataCategorySummaryInfo } from './BTMetadataCategorySummaryInfo';
import {
    BTMetadataCategorySummaryInfoFromJSON,
    BTMetadataCategorySummaryInfoFromJSONTyped,
    BTMetadataCategorySummaryInfoToJSON,
} from './BTMetadataCategorySummaryInfo';

/**
 * 
 * @export
 * @interface BTCategoryPropertyInfo
 */
export interface BTCategoryPropertyInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyInfo
     */
    array?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyInfo
     */
    assignable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    blobMimeType?: string;
    /**
     * 
     * @type {BTCategoryPropertyConfigInfo}
     * @memberof BTCategoryPropertyInfo
     */
    categoryPropertyConfigInfo?: BTCategoryPropertyConfigInfo;
    /**
     * 
     * @type {Array<BTMetadataCategorySummaryInfo>}
     * @memberof BTCategoryPropertyInfo
     */
    categorySummaryInfoList?: Array<BTMetadataCategorySummaryInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyInfo
     */
    editableInMicroversion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyInfo
     */
    editableInVersion?: boolean;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    objectDefName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    ownerId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyInfo
     */
    ownerType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyInfo
     */
    uiReadonlyInMicroversion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTCategoryPropertyInfo
     */
    uiReadonlyInVersion?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTCategoryPropertyInfo
     */
    valueType?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTCategoryPropertyInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTCategoryPropertyInfo interface.
 */
export function instanceOfBTCategoryPropertyInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCategoryPropertyInfoFromJSON(json: any): BTCategoryPropertyInfo {
    return BTCategoryPropertyInfoFromJSONTyped(json, false);
}

export function BTCategoryPropertyInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCategoryPropertyInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'array': !exists(json, 'array') ? undefined : json['array'],
        'assignable': !exists(json, 'assignable') ? undefined : json['assignable'],
        'blobMimeType': !exists(json, 'blobMimeType') ? undefined : json['blobMimeType'],
        'categoryPropertyConfigInfo': !exists(json, 'categoryPropertyConfigInfo') ? undefined : BTCategoryPropertyConfigInfoFromJSON(json['categoryPropertyConfigInfo']),
        'categorySummaryInfoList': !exists(json, 'categorySummaryInfoList') ? undefined : ((json['categorySummaryInfoList'] as Array<any>).map(BTMetadataCategorySummaryInfoFromJSON)),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'editableInMicroversion': !exists(json, 'editableInMicroversion') ? undefined : json['editableInMicroversion'],
        'editableInVersion': !exists(json, 'editableInVersion') ? undefined : json['editableInVersion'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'objectDefName': !exists(json, 'objectDefName') ? undefined : json['objectDefName'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'ownerType': !exists(json, 'ownerType') ? undefined : json['ownerType'],
        'uiReadonlyInMicroversion': !exists(json, 'uiReadonlyInMicroversion') ? undefined : json['uiReadonlyInMicroversion'],
        'uiReadonlyInVersion': !exists(json, 'uiReadonlyInVersion') ? undefined : json['uiReadonlyInVersion'],
        'valueType': !exists(json, 'valueType') ? undefined : json['valueType'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTCategoryPropertyInfoToJSON(value?: BTCategoryPropertyInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'array': value.array,
        'assignable': value.assignable,
        'blobMimeType': value.blobMimeType,
        'categoryPropertyConfigInfo': BTCategoryPropertyConfigInfoToJSON(value.categoryPropertyConfigInfo),
        'categorySummaryInfoList': value.categorySummaryInfoList === undefined ? undefined : ((value.categorySummaryInfoList as Array<any>).map(BTMetadataCategorySummaryInfoToJSON)),
        'description': value.description,
        'editableInMicroversion': value.editableInMicroversion,
        'editableInVersion': value.editableInVersion,
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'objectDefName': value.objectDefName,
        'ownerId': value.ownerId,
        'ownerType': value.ownerType,
        'uiReadonlyInMicroversion': value.uiReadonlyInMicroversion,
        'uiReadonlyInVersion': value.uiReadonlyInVersion,
        'valueType': value.valueType,
        'viewRef': value.viewRef,
    };
}

