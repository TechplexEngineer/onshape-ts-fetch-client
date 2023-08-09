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
import type { GBTDataItemFormat } from './GBTDataItemFormat';
import {
    GBTDataItemFormatFromJSON,
    GBTDataItemFormatFromJSONTyped,
    GBTDataItemFormatToJSON,
} from './GBTDataItemFormat';

/**
 * 
 * @export
 * @interface BTForeignDataResponse1070
 */
export interface BTForeignDataResponse1070 {
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    bucketName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    bucketPath?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTForeignDataResponse1070
     */
    cacheChunkList?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    dataId?: string;
    /**
     * 
     * @type {GBTDataItemFormat}
     * @memberof BTForeignDataResponse1070
     */
    format?: GBTDataItemFormat;
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    region?: string;
    /**
     * 
     * @type {number}
     * @memberof BTForeignDataResponse1070
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof BTForeignDataResponse1070
     */
    storageType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTForeignDataResponse1070
     */
    useLocalStorage?: boolean;
}

/**
 * Check if a given object implements the BTForeignDataResponse1070 interface.
 */
export function instanceOfBTForeignDataResponse1070(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTForeignDataResponse1070FromJSON(json: any): BTForeignDataResponse1070 {
    return BTForeignDataResponse1070FromJSONTyped(json, false);
}

export function BTForeignDataResponse1070FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTForeignDataResponse1070 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'bucketName': !exists(json, 'bucketName') ? undefined : json['bucketName'],
        'bucketPath': !exists(json, 'bucketPath') ? undefined : json['bucketPath'],
        'cacheChunkList': !exists(json, 'cacheChunkList') ? undefined : json['cacheChunkList'],
        'dataId': !exists(json, 'dataId') ? undefined : json['dataId'],
        'format': !exists(json, 'format') ? undefined : GBTDataItemFormatFromJSON(json['format']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'storageType': !exists(json, 'storageType') ? undefined : json['storageType'],
        'useLocalStorage': !exists(json, 'useLocalStorage') ? undefined : json['useLocalStorage'],
    };
}

export function BTForeignDataResponse1070ToJSON(value?: BTForeignDataResponse1070 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'bucketName': value.bucketName,
        'bucketPath': value.bucketPath,
        'cacheChunkList': value.cacheChunkList,
        'dataId': value.dataId,
        'format': GBTDataItemFormatToJSON(value.format),
        'name': value.name,
        'region': value.region,
        'size': value.size,
        'storageType': value.storageType,
        'useLocalStorage': value.useLocalStorage,
    };
}

