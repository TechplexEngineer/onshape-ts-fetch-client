/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTCurveGeometrySpline118 } from './BTCurveGeometrySpline118';
import {
    BTCurveGeometrySpline118FromJSON,
    BTCurveGeometrySpline118FromJSONTyped,
    BTCurveGeometrySpline118ToJSON,
} from './BTCurveGeometrySpline118';

/**
 * 
 * @export
 * @interface BTCurveGeometryControlPointSpline2197
 */
export interface BTCurveGeometryControlPointSpline2197 extends BTCurveGeometrySpline118 {
    /**
     * 
     * @type {string}
     * @memberof BTCurveGeometryControlPointSpline2197
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTCurveGeometryControlPointSpline2197
     */
    isBezier?: boolean;
}

/**
 * Check if a given object implements the BTCurveGeometryControlPointSpline2197 interface.
 */
export function instanceOfBTCurveGeometryControlPointSpline2197(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCurveGeometryControlPointSpline2197FromJSON(json: any): BTCurveGeometryControlPointSpline2197 {
    return BTCurveGeometryControlPointSpline2197FromJSONTyped(json, false);
}

export function BTCurveGeometryControlPointSpline2197FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCurveGeometryControlPointSpline2197 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTCurveGeometrySpline118FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isBezier': !exists(json, 'isBezier') ? undefined : json['isBezier'],
    };
}

export function BTCurveGeometryControlPointSpline2197ToJSON(value?: BTCurveGeometryControlPointSpline2197 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTCurveGeometrySpline118ToJSON(value),
        'btType': value.btType,
        'isBezier': value.isBezier,
    };
}

