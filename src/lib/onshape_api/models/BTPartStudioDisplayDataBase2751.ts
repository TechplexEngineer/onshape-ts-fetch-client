/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTElementDisplayData326 } from './BTElementDisplayData326';
import {
    BTElementDisplayData326FromJSON,
    BTElementDisplayData326FromJSONTyped,
    BTElementDisplayData326ToJSON,
} from './BTElementDisplayData326';
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
     BTPartStudioDisplayData346FromJSONTyped,
     BTPartStudioDisplayDataReference4360FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTPartStudioDisplayDataBase2751
 */
export interface BTPartStudioDisplayDataBase2751 {
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    elementId?: string;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    fromFullElementId?: BTFullElementId756;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    incremental?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    instanceCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    isNoop?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    keepFromMicroversion?: boolean;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {BTMicroversionIdAndConfigurationInterval2364}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    microversionIdAndConfigurationInterval?: BTMicroversionIdAndConfigurationInterval2364;
    /**
     * 
     * @type {BTMicroversionIdInterval367}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    microversionInterval?: BTMicroversionIdInterval367;
    /**
     * 
     * @type {number}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    numberOfSketchEntities?: number;
    /**
     * 
     * @type {BTElementDisplayData326}
     * @memberof BTPartStudioDisplayDataBase2751
     */
    versionForRasterization?: BTElementDisplayData326;
}

/**
 * Check if a given object implements the BTPartStudioDisplayDataBase2751 interface.
 */
export function instanceOfBTPartStudioDisplayDataBase2751(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartStudioDisplayDataBase2751FromJSON(json: any): BTPartStudioDisplayDataBase2751 {
    return BTPartStudioDisplayDataBase2751FromJSONTyped(json, false);
}

export function BTPartStudioDisplayDataBase2751FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartStudioDisplayDataBase2751 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPartStudioDisplayData-346') {
            return BTPartStudioDisplayData346FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPartStudioDisplayDataReference-4360') {
            return BTPartStudioDisplayDataReference4360FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'fromFullElementId': !exists(json, 'fromFullElementId') ? undefined : BTFullElementId756FromJSON(json['fromFullElementId']),
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'incremental': !exists(json, 'incremental') ? undefined : json['incremental'],
        'instanceCount': !exists(json, 'instanceCount') ? undefined : json['instanceCount'],
        'isNoop': !exists(json, 'isNoop') ? undefined : json['isNoop'],
        'keepFromMicroversion': !exists(json, 'keepFromMicroversion') ? undefined : json['keepFromMicroversion'],
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'microversionIdAndConfigurationInterval': !exists(json, 'microversionIdAndConfigurationInterval') ? undefined : BTMicroversionIdAndConfigurationInterval2364FromJSON(json['microversionIdAndConfigurationInterval']),
        'microversionInterval': !exists(json, 'microversionInterval') ? undefined : BTMicroversionIdInterval367FromJSON(json['microversionInterval']),
        'numberOfSketchEntities': !exists(json, 'numberOfSketchEntities') ? undefined : json['numberOfSketchEntities'],
        'versionForRasterization': !exists(json, 'versionForRasterization') ? undefined : BTElementDisplayData326FromJSON(json['versionForRasterization']),
    };
}

export function BTPartStudioDisplayDataBase2751ToJSON(value?: BTPartStudioDisplayDataBase2751 | null): any {
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
        'isNoop': value.isNoop,
        'keepFromMicroversion': value.keepFromMicroversion,
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'microversionIdAndConfigurationInterval': BTMicroversionIdAndConfigurationInterval2364ToJSON(value.microversionIdAndConfigurationInterval),
        'microversionInterval': BTMicroversionIdInterval367ToJSON(value.microversionInterval),
        'numberOfSketchEntities': value.numberOfSketchEntities,
        'versionForRasterization': BTElementDisplayData326ToJSON(value.versionForRasterization),
    };
}

