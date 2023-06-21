/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GBTRadiusDisplay } from './GBTRadiusDisplay';
import {
    GBTRadiusDisplayFromJSON,
    GBTRadiusDisplayFromJSONTyped,
    GBTRadiusDisplayToJSON,
} from './GBTRadiusDisplay';

/**
 * 
 * @export
 * @interface BTRadialDimensionDisplayData348AllOf
 */
export interface BTRadialDimensionDisplayData348AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    positionR?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    positionT?: number;
    /**
     * 
     * @type {GBTRadiusDisplay}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    radiusDisplay?: GBTRadiusDisplay;
    /**
     * 
     * @type {boolean}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    realDiameter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint0r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint0t?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint1r?: number;
    /**
     * 
     * @type {number}
     * @memberof BTRadialDimensionDisplayData348AllOf
     */
    witnessEndPoint1t?: number;
}

/**
 * Check if a given object implements the BTRadialDimensionDisplayData348AllOf interface.
 */
export function instanceOfBTRadialDimensionDisplayData348AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRadialDimensionDisplayData348AllOfFromJSON(json: any): BTRadialDimensionDisplayData348AllOf {
    return BTRadialDimensionDisplayData348AllOfFromJSONTyped(json, false);
}

export function BTRadialDimensionDisplayData348AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRadialDimensionDisplayData348AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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

export function BTRadialDimensionDisplayData348AllOfToJSON(value?: BTRadialDimensionDisplayData348AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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

