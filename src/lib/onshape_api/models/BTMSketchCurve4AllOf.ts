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
import type { BTCurveGeometry114 } from './BTCurveGeometry114';
import {
    BTCurveGeometry114FromJSON,
    BTCurveGeometry114FromJSONTyped,
    BTCurveGeometry114ToJSON,
} from './BTCurveGeometry114';

/**
 * 
 * @export
 * @interface BTMSketchCurve4AllOf
 */
export interface BTMSketchCurve4AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurve4AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchCurve4AllOf
     */
    centerId?: string;
    /**
     * 
     * @type {BTCurveGeometry114}
     * @memberof BTMSketchCurve4AllOf
     */
    geometry?: BTCurveGeometry114;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMSketchCurve4AllOf
     */
    internalIds?: Array<string>;
}

/**
 * Check if a given object implements the BTMSketchCurve4AllOf interface.
 */
export function instanceOfBTMSketchCurve4AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchCurve4AllOfFromJSON(json: any): BTMSketchCurve4AllOf {
    return BTMSketchCurve4AllOfFromJSONTyped(json, false);
}

export function BTMSketchCurve4AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchCurve4AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'centerId': !exists(json, 'centerId') ? undefined : json['centerId'],
        'geometry': !exists(json, 'geometry') ? undefined : BTCurveGeometry114FromJSON(json['geometry']),
        'internalIds': !exists(json, 'internalIds') ? undefined : json['internalIds'],
    };
}

export function BTMSketchCurve4AllOfToJSON(value?: BTMSketchCurve4AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'centerId': value.centerId,
        'geometry': BTCurveGeometry114ToJSON(value.geometry),
        'internalIds': value.internalIds,
    };
}
