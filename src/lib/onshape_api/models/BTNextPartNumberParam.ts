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
import type { BTCategoryParam } from './BTCategoryParam';
import {
    BTCategoryParamFromJSON,
    BTCategoryParamFromJSONTyped,
    BTCategoryParamToJSON,
} from './BTCategoryParam';

/**
 * 
 * @export
 * @interface BTNextPartNumberParam
 */
export interface BTNextPartNumberParam {
    /**
     * 
     * @type {Array<BTCategoryParam>}
     * @memberof BTNextPartNumberParam
     */
    categories?: Array<BTCategoryParam>;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    elementId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTNextPartNumberParam
     */
    elementType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    mimeType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    numberSchemeResourceTypeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTNextPartNumberParam
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTNextPartNumberParam interface.
 */
export function instanceOfBTNextPartNumberParam(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTNextPartNumberParamFromJSON(json: any): BTNextPartNumberParam {
    return BTNextPartNumberParamFromJSONTyped(json, false);
}

export function BTNextPartNumberParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTNextPartNumberParam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categories': !exists(json, 'categories') ? undefined : ((json['categories'] as Array<any>).map(BTCategoryParamFromJSON)),
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'mimeType': !exists(json, 'mimeType') ? undefined : json['mimeType'],
        'numberSchemeResourceTypeId': !exists(json, 'numberSchemeResourceTypeId') ? undefined : json['numberSchemeResourceTypeId'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTNextPartNumberParamToJSON(value?: BTNextPartNumberParam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categories': value.categories === undefined ? undefined : ((value.categories as Array<any>).map(BTCategoryParamToJSON)),
        'configuration': value._configuration,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'elementType': value.elementType,
        'id': value.id,
        'mimeType': value.mimeType,
        'numberSchemeResourceTypeId': value.numberSchemeResourceTypeId,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'versionId': value.versionId,
        'workspaceId': value.workspaceId,
    };
}

