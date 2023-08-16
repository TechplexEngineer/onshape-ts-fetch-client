/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';
import type { GBTConfiguredParentType } from './GBTConfiguredParentType';
import {
    GBTConfiguredParentTypeFromJSON,
    GBTConfiguredParentTypeFromJSONTyped,
    GBTConfiguredParentTypeToJSON,
} from './GBTConfiguredParentType';

import {
     BTConfiguredDimensionColumnInfo2168FromJSONTyped,
     BTConfiguredFeatureColumnInfo1014FromJSONTyped,
     BTConfiguredParameterColumnInfo2900FromJSONTyped,
     BTConfiguredSuppressionColumnInfo2498FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTConfiguredValuesColumnInfo1025
 */
export interface BTConfiguredValuesColumnInfo1025 extends BTTableColumnInfo1222 {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    parentName?: string;
    /**
     * 
     * @type {GBTConfiguredParentType}
     * @memberof BTConfiguredValuesColumnInfo1025
     */
    parentType?: GBTConfiguredParentType;
}

/**
 * Check if a given object implements the BTConfiguredValuesColumnInfo1025 interface.
 */
export function instanceOfBTConfiguredValuesColumnInfo1025(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredValuesColumnInfo1025FromJSON(json: any): BTConfiguredValuesColumnInfo1025 {
    return BTConfiguredValuesColumnInfo1025FromJSONTyped(json, false);
}

export function BTConfiguredValuesColumnInfo1025FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredValuesColumnInfo1025 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTConfiguredDimensionColumnInfo-2168') {
            return BTConfiguredDimensionColumnInfo2168FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredFeatureColumnInfo-1014') {
            return BTConfiguredFeatureColumnInfo1014FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredParameterColumnInfo-2900') {
            return BTConfiguredParameterColumnInfo2900FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredSuppressionColumnInfo-2498') {
            return BTConfiguredSuppressionColumnInfo2498FromJSONTyped(json, true);
        }
    }
    return {
        ...BTTableColumnInfo1222FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'parentName': !exists(json, 'parentName') ? undefined : json['parentName'],
        'parentType': !exists(json, 'parentType') ? undefined : GBTConfiguredParentTypeFromJSON(json['parentType']),
    };
}

export function BTConfiguredValuesColumnInfo1025ToJSON(value?: BTConfiguredValuesColumnInfo1025 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableColumnInfo1222ToJSON(value),
        'btType': value.btType,
        'parentId': value.parentId,
        'parentName': value.parentName,
        'parentType': GBTConfiguredParentTypeToJSON(value.parentType),
    };
}

