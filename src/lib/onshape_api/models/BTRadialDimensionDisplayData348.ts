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
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTDimensionDisplayData323 } from './BTDimensionDisplayData323';
import {
    BTDimensionDisplayData323FromJSON,
    BTDimensionDisplayData323FromJSONTyped,
    BTDimensionDisplayData323ToJSON,
} from './BTDimensionDisplayData323';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';
import type { GBTRadiusDisplay } from './GBTRadiusDisplay';
import {
    GBTRadiusDisplayFromJSON,
    GBTRadiusDisplayFromJSONTyped,
    GBTRadiusDisplayToJSON,
} from './GBTRadiusDisplay';

/**
 * 
 * @export
 * @interface BTRadialDimensionDisplayData348
 */
export interface BTRadialDimensionDisplayData348 extends BTDimensionDisplayData323 {
    /**
     * 
     * @type {string}
     * @memberof BTRadialDimensionDisplayData348
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348
     */
    positionR?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348
     */
    positionT?: number;
    /**
     * 
     * @type {GBTRadiusDisplay}
     * @memberof BTRadialDimensionDisplayData348
     */
    radiusDisplay?: GBTRadiusDisplay;
    /**
     * 
     * @type {boolean}
     * @memberof BTRadialDimensionDisplayData348
     */
    realDiameter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348
     */
    witnessEndPoint0r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348
     */
    witnessEndPoint0t?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348
     */
    witnessEndPoint1r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348
     */
    witnessEndPoint1t?: number;
}

/**
 * Check if a given object implements the BTRadialDimensionDisplayData348 interface.
 */
export function instanceOfBTRadialDimensionDisplayData348(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRadialDimensionDisplayData348FromJSON(json: any): BTRadialDimensionDisplayData348 {
    return BTRadialDimensionDisplayData348FromJSONTyped(json, false);
}

export function BTRadialDimensionDisplayData348FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRadialDimensionDisplayData348 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDimensionDisplayData323FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'positionR': !exists(json, 'positionR') ? undefined : json['positionR'],
        'positionT': !exists(json, 'positionT') ? undefined : json['positionT'],
        'radiusDisplay': !exists(json, 'radiusDisplay') ? undefined : GBTRadiusDisplayFromJSON(json['radiusDisplay']),
        'realDiameter': !exists(json, 'realDiameter') ? undefined : json['realDiameter'],
        'witnessEndPoint0r': !exists(json, 'witnessEndPoint0r') ? undefined : json['witnessEndPoint0r'],
        'witnessEndPoint0t': !exists(json, 'witnessEndPoint0t') ? undefined : json['witnessEndPoint0t'],
        'witnessEndPoint1r': !exists(json, 'witnessEndPoint1r') ? undefined : json['witnessEndPoint1r'],
        'witnessEndPoint1t': !exists(json, 'witnessEndPoint1t') ? undefined : json['witnessEndPoint1t'],
    };
}

export function BTRadialDimensionDisplayData348ToJSON(value?: BTRadialDimensionDisplayData348 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDimensionDisplayData323ToJSON(value),
        'btType': value.btType,
        'positionR': value.positionR,
        'positionT': value.positionT,
        'radiusDisplay': GBTRadiusDisplayToJSON(value.radiusDisplay),
        'realDiameter': value.realDiameter,
        'witnessEndPoint0r': value.witnessEndPoint0r,
        'witnessEndPoint0t': value.witnessEndPoint0t,
        'witnessEndPoint1r': value.witnessEndPoint1r,
        'witnessEndPoint1t': value.witnessEndPoint1t,
    };
}

