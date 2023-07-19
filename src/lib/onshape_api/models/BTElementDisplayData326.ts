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
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTMicroversionIdAndConfigurationInterval2364 } from './BTMicroversionIdAndConfigurationInterval2364';
import {
    BTMicroversionIdAndConfigurationInterval2364FromJSON,
    BTMicroversionIdAndConfigurationInterval2364FromJSONTyped,
    BTMicroversionIdAndConfigurationInterval2364ToJSON,
} from './BTMicroversionIdAndConfigurationInterval2364';
import type { BTMicroversionIdInterval367 } from './BTMicroversionIdInterval367';
import {
    BTMicroversionIdInterval367FromJSON,
    BTMicroversionIdInterval367FromJSONTyped,
    BTMicroversionIdInterval367ToJSON,
} from './BTMicroversionIdInterval367';

import {
     BTAssemblyReferencesDisplayData1562FromJSONTyped,
     BTPartStudioDisplayDataBase2751FromJSONTyped,
     BTRootAssemblyDisplayData96FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTElementDisplayData326
 */
export interface BTElementDisplayData326 {
    /**
     * 
     * @type {string}
     * @memberof BTElementDisplayData326
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTElementDisplayData326
     */
    elementId?: string;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTElementDisplayData326
     */
    fromFullElementId?: BTFullElementId756;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTElementDisplayData326
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {boolean}
     * @memberof BTElementDisplayData326
     */
    incremental?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTElementDisplayData326
     */
    instanceCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTElementDisplayData326
     */
    keepFromMicroversion?: boolean;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTElementDisplayData326
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {BTMicroversionIdAndConfigurationInterval2364}
     * @memberof BTElementDisplayData326
     */
    microversionIdAndConfigurationInterval?: BTMicroversionIdAndConfigurationInterval2364;
    /**
     * 
     * @type {BTMicroversionIdInterval367}
     * @memberof BTElementDisplayData326
     */
    microversionInterval?: BTMicroversionIdInterval367;
    /**
     * 
     * @type {BTElementDisplayData326}
     * @memberof BTElementDisplayData326
     */
    versionForRasterization?: BTElementDisplayData326;
}

/**
 * Check if a given object implements the BTElementDisplayData326 interface.
 */
export function instanceOfBTElementDisplayData326(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTElementDisplayData326FromJSON(json: any): BTElementDisplayData326 {
    return BTElementDisplayData326FromJSONTyped(json, false);
}

export function BTElementDisplayData326FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTElementDisplayData326 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblyReferencesDisplayData-1562') {
            return BTAssemblyReferencesDisplayData1562FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPartStudioDisplayDataBase-2751') {
            return BTPartStudioDisplayDataBase2751FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTRootAssemblyDisplayData-96') {
            return BTRootAssemblyDisplayData96FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'fromFullElementId': !exists(json, 'fromFullElementId') ? undefined : BTFullElementId756FromJSON(json['fromFullElementId']),
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'incremental': !exists(json, 'incremental') ? undefined : json['incremental'],
        'instanceCount': !exists(json, 'instanceCount') ? undefined : json['instanceCount'],
        'keepFromMicroversion': !exists(json, 'keepFromMicroversion') ? undefined : json['keepFromMicroversion'],
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'microversionIdAndConfigurationInterval': !exists(json, 'microversionIdAndConfigurationInterval') ? undefined : BTMicroversionIdAndConfigurationInterval2364FromJSON(json['microversionIdAndConfigurationInterval']),
        'microversionInterval': !exists(json, 'microversionInterval') ? undefined : BTMicroversionIdInterval367FromJSON(json['microversionInterval']),
        'versionForRasterization': !exists(json, 'versionForRasterization') ? undefined : BTElementDisplayData326FromJSON(json['versionForRasterization']),
    };
}

export function BTElementDisplayData326ToJSON(value?: BTElementDisplayData326 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'elementId': value.elementId,
        'fromFullElementId': BTFullElementId756ToJSON(value.fromFullElementId),
        'fullElementId': BTFullElementId756ToJSON(value.fullElementId),
        'incremental': value.incremental,
        'instanceCount': value.instanceCount,
        'keepFromMicroversion': value.keepFromMicroversion,
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'microversionIdAndConfigurationInterval': BTMicroversionIdAndConfigurationInterval2364ToJSON(value.microversionIdAndConfigurationInterval),
        'microversionInterval': BTMicroversionIdInterval367ToJSON(value.microversionInterval),
        'versionForRasterization': BTElementDisplayData326ToJSON(value.versionForRasterization),
    };
}

