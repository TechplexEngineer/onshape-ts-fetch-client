/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

import {
     BTAngularDimensionDisplayData320FromJSONTyped,
     BTCountDimensionDisplayData1778FromJSONTyped,
     BTCurveLengthDimensionDisplayData322FromJSONTyped,
     BTLinearDimensionDisplayData330FromJSONTyped,
     BTRadialDimensionDisplayData348FromJSONTyped,
     BTRhoDimensionDisplayData2892FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTDimensionDisplayData323
 */
export interface BTDimensionDisplayData323 {
    /**
     * 
     * @type {string}
     * @memberof BTDimensionDisplayData323
     */
    btType?: string;
    /**
     * 
     * @type {BTMatrix3x3340}
     * @memberof BTDimensionDisplayData323
     */
    coordinateSystem?: BTMatrix3x3340;
    /**
     * 
     * @type {string}
     * @memberof BTDimensionDisplayData323
     */
    featureId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDimensionDisplayData323
     */
    hasMaximumLimit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDimensionDisplayData323
     */
    hasMinimumLimit?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDimensionDisplayData323
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDimensionDisplayData323
     */
    isAssociatedWithFlat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDimensionDisplayData323
     */
    isDriven?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDimensionDisplayData323
     */
    isOverDefined?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTDimensionDisplayData323
     */
    maximumLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDimensionDisplayData323
     */
    minimumLimit?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDimensionDisplayData323
     */
    parameterId?: string;
    /**
     * 
     * @type {BTBSMatrix386}
     * @memberof BTDimensionDisplayData323
     */
    planeMatrix?: BTBSMatrix386;
    /**
     * 
     * @type {number}
     * @memberof BTDimensionDisplayData323
     */
    value?: number;
}

/**
 * Check if a given object implements the BTDimensionDisplayData323 interface.
 */
export function instanceOfBTDimensionDisplayData323(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDimensionDisplayData323FromJSON(json: any): BTDimensionDisplayData323 {
    return BTDimensionDisplayData323FromJSONTyped(json, false);
}

export function BTDimensionDisplayData323FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDimensionDisplayData323 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAngularDimensionDisplayData-320') {
            return BTAngularDimensionDisplayData320FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTCountDimensionDisplayData-1778') {
            return BTCountDimensionDisplayData1778FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTCurveLengthDimensionDisplayData-322') {
            return BTCurveLengthDimensionDisplayData322FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTLinearDimensionDisplayData-330') {
            return BTLinearDimensionDisplayData330FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTRadialDimensionDisplayData-348') {
            return BTRadialDimensionDisplayData348FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTRhoDimensionDisplayData-2892') {
            return BTRhoDimensionDisplayData2892FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'coordinateSystem': !exists(json, 'coordinateSystem') ? undefined : BTMatrix3x3340FromJSON(json['coordinateSystem']),
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'hasMaximumLimit': !exists(json, 'hasMaximumLimit') ? undefined : json['hasMaximumLimit'],
        'hasMinimumLimit': !exists(json, 'hasMinimumLimit') ? undefined : json['hasMinimumLimit'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isAssociatedWithFlat': !exists(json, 'isAssociatedWithFlat') ? undefined : json['isAssociatedWithFlat'],
        'isDriven': !exists(json, 'isDriven') ? undefined : json['isDriven'],
        'isOverDefined': !exists(json, 'isOverDefined') ? undefined : json['isOverDefined'],
        'maximumLimit': !exists(json, 'maximumLimit') ? undefined : json['maximumLimit'],
        'minimumLimit': !exists(json, 'minimumLimit') ? undefined : json['minimumLimit'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'planeMatrix': !exists(json, 'planeMatrix') ? undefined : BTBSMatrix386FromJSON(json['planeMatrix']),
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTDimensionDisplayData323ToJSON(value?: BTDimensionDisplayData323 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'coordinateSystem': BTMatrix3x3340ToJSON(value.coordinateSystem),
        'featureId': value.featureId,
        'hasMaximumLimit': value.hasMaximumLimit,
        'hasMinimumLimit': value.hasMinimumLimit,
        'id': value.id,
        'isAssociatedWithFlat': value.isAssociatedWithFlat,
        'isDriven': value.isDriven,
        'isOverDefined': value.isOverDefined,
        'maximumLimit': value.maximumLimit,
        'minimumLimit': value.minimumLimit,
        'parameterId': value.parameterId,
        'planeMatrix': BTBSMatrix386ToJSON(value.planeMatrix),
        'value': value.value,
    };
}

