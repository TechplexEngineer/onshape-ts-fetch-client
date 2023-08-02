/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19740-5e8d8b0919a8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
     BTSketchArcDisplayData349FromJSONTyped,
     BTSketchCircleDisplayData350FromJSONTyped,
     BTSketchCompositeEntityDisplayData1093FromJSONTyped,
     BTSketchConicDisplayData1085FromJSONTyped,
     BTSketchEllipseDisplayData712FromJSONTyped,
     BTSketchEllipticalArcDisplayData892FromJSONTyped,
     BTSketchLineDisplayData357FromJSONTyped,
     BTSketchPointDisplayData358FromJSONTyped,
     BTSketchSplineDisplayData359FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTSketchEntityDisplayData354
 */
export interface BTSketchEntityDisplayData354 {
    /**
     * 
     * @type {string}
     * @memberof BTSketchEntityDisplayData354
     */
    btType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTSketchEntityDisplayData354
     */
    points?: Array<number>;
}

/**
 * Check if a given object implements the BTSketchEntityDisplayData354 interface.
 */
export function instanceOfBTSketchEntityDisplayData354(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchEntityDisplayData354FromJSON(json: any): BTSketchEntityDisplayData354 {
    return BTSketchEntityDisplayData354FromJSONTyped(json, false);
}

export function BTSketchEntityDisplayData354FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchEntityDisplayData354 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTSketchArcDisplayData-349') {
            return BTSketchArcDisplayData349FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchCircleDisplayData-350') {
            return BTSketchCircleDisplayData350FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchCompositeEntityDisplayData-1093') {
            return BTSketchCompositeEntityDisplayData1093FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchConicDisplayData-1085') {
            return BTSketchConicDisplayData1085FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchEllipseDisplayData-712') {
            return BTSketchEllipseDisplayData712FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchEllipticalArcDisplayData-892') {
            return BTSketchEllipticalArcDisplayData892FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchLineDisplayData-357') {
            return BTSketchLineDisplayData357FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchPointDisplayData-358') {
            return BTSketchPointDisplayData358FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSketchSplineDisplayData-359') {
            return BTSketchSplineDisplayData359FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'points': !exists(json, 'points') ? undefined : json['points'],
    };
}

export function BTSketchEntityDisplayData354ToJSON(value?: BTSketchEntityDisplayData354 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'points': value.points,
    };
}

