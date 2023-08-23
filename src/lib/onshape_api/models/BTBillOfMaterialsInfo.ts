/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20965-e01b1f4d96d1
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBillOfMaterialsHeaderInfo } from './BTBillOfMaterialsHeaderInfo';
import {
    BTBillOfMaterialsHeaderInfoFromJSON,
    BTBillOfMaterialsHeaderInfoFromJSONTyped,
    BTBillOfMaterialsHeaderInfoToJSON,
} from './BTBillOfMaterialsHeaderInfo';
import type { BTBillOfMaterialsRowInfo } from './BTBillOfMaterialsRowInfo';
import {
    BTBillOfMaterialsRowInfoFromJSON,
    BTBillOfMaterialsRowInfoFromJSONTyped,
    BTBillOfMaterialsRowInfoToJSON,
} from './BTBillOfMaterialsRowInfo';
import type { BTBillOfMaterialsSourceInfo } from './BTBillOfMaterialsSourceInfo';
import {
    BTBillOfMaterialsSourceInfoFromJSON,
    BTBillOfMaterialsSourceInfoFromJSONTyped,
    BTBillOfMaterialsSourceInfoToJSON,
} from './BTBillOfMaterialsSourceInfo';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsInfo
 */
export interface BTBillOfMaterialsInfo {
    /**
     * 
     * @type {BTBillOfMaterialsSourceInfo}
     * @memberof BTBillOfMaterialsInfo
     */
    bomSource?: BTBillOfMaterialsSourceInfo;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    formatVersion?: string;
    /**
     * 
     * @type {Array<BTBillOfMaterialsHeaderInfo>}
     * @memberof BTBillOfMaterialsInfo
     */
    headers?: Array<BTBillOfMaterialsHeaderInfo>;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    name?: string;
    /**
     * 
     * @type {Array<BTBillOfMaterialsRowInfo>}
     * @memberof BTBillOfMaterialsInfo
     */
    rows?: Array<BTBillOfMaterialsRowInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    templateId?: string;
    /**
     * 
     * @type {BTBillOfMaterialsRowInfo}
     * @memberof BTBillOfMaterialsInfo
     */
    topLevelAssemblyRow?: BTBillOfMaterialsRowInfo;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    type?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTBillOfMaterialsInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTBillOfMaterialsInfo interface.
 */
export function instanceOfBTBillOfMaterialsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsInfoFromJSON(json: any): BTBillOfMaterialsInfo {
    return BTBillOfMaterialsInfoFromJSONTyped(json, false);
}

export function BTBillOfMaterialsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bomSource': !exists(json, 'bomSource') ? undefined : BTBillOfMaterialsSourceInfoFromJSON(json['bomSource']),
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'formatVersion': !exists(json, 'formatVersion') ? undefined : json['formatVersion'],
        'headers': !exists(json, 'headers') ? undefined : ((json['headers'] as Array<any>).map(BTBillOfMaterialsHeaderInfoFromJSON)),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'rows': !exists(json, 'rows') ? undefined : ((json['rows'] as Array<any>).map(BTBillOfMaterialsRowInfoFromJSON)),
        'templateId': !exists(json, 'templateId') ? undefined : json['templateId'],
        'topLevelAssemblyRow': !exists(json, 'topLevelAssemblyRow') ? undefined : BTBillOfMaterialsRowInfoFromJSON(json['topLevelAssemblyRow']),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTBillOfMaterialsInfoToJSON(value?: BTBillOfMaterialsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bomSource': BTBillOfMaterialsSourceInfoToJSON(value.bomSource),
        'createdAt': value.createdAt,
        'formatVersion': value.formatVersion,
        'headers': value.headers === undefined ? undefined : ((value.headers as Array<any>).map(BTBillOfMaterialsHeaderInfoToJSON)),
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'rows': value.rows === undefined ? undefined : ((value.rows as Array<any>).map(BTBillOfMaterialsRowInfoToJSON)),
        'templateId': value.templateId,
        'topLevelAssemblyRow': BTBillOfMaterialsRowInfoToJSON(value.topLevelAssemblyRow),
        'type': value.type,
        'viewRef': value.viewRef,
    };
}

