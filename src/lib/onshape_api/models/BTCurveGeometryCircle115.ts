/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
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

import {
     BTCurveGeometryEllipse1189FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTCurveGeometryCircle115
 */
export interface BTCurveGeometryCircle115 extends BTCurveGeometry114 {
    /**
     * 
     * @type {string}
     * @memberof BTCurveGeometryCircle115
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCurveGeometryCircle115
     */
    clockwise?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryCircle115
     */
    radius?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryCircle115
     */
    xcenter?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryCircle115
     */
    xdir?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryCircle115
     */
    ycenter?: number;
    /**
     * 
     * @type {number}
     * @memberof BTCurveGeometryCircle115
     */
    ydir?: number;
}

/**
 * Check if a given object implements the BTCurveGeometryCircle115 interface.
 */
export function instanceOfBTCurveGeometryCircle115(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCurveGeometryCircle115FromJSON(json: any): BTCurveGeometryCircle115 {
    return BTCurveGeometryCircle115FromJSONTyped(json, false);
}

export function BTCurveGeometryCircle115FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCurveGeometryCircle115 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTCurveGeometryEllipse-1189') {
            return BTCurveGeometryEllipse1189FromJSONTyped(json, true);
        }
    }
    return {
        ...BTCurveGeometry114FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'clockwise': !exists(json, 'clockwise') ? undefined : json['clockwise'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'xcenter': !exists(json, 'xcenter') ? undefined : json['xcenter'],
        'xdir': !exists(json, 'xdir') ? undefined : json['xdir'],
        'ycenter': !exists(json, 'ycenter') ? undefined : json['ycenter'],
        'ydir': !exists(json, 'ydir') ? undefined : json['ydir'],
    };
}

export function BTCurveGeometryCircle115ToJSON(value?: BTCurveGeometryCircle115 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTCurveGeometry114ToJSON(value),
        'btType': value.btType,
        'clockwise': value.clockwise,
        'radius': value.radius,
        'xcenter': value.xcenter,
        'xdir': value.xdir,
        'ycenter': value.ycenter,
        'ydir': value.ydir,
    };
}

