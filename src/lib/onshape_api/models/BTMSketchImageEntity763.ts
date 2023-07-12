/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMSketchGeomEntity5 } from './BTMSketchGeomEntity5';
import {
    BTMSketchGeomEntity5FromJSON,
    BTMSketchGeomEntity5FromJSONTyped,
    BTMSketchGeomEntity5ToJSON,
} from './BTMSketchGeomEntity5';

/**
 * 
 * @export
 * @interface BTMSketchImageEntity763
 */
export interface BTMSketchImageEntity763 extends BTMSketchGeomEntity5 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchImageEntity763
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchImageEntity763
     */
    aspectRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchImageEntity763
     */
    originX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchImageEntity763
     */
    originY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchImageEntity763
     */
    xaxisX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMSketchImageEntity763
     */
    xaxisY?: number;
}

/**
 * Check if a given object implements the BTMSketchImageEntity763 interface.
 */
export function instanceOfBTMSketchImageEntity763(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchImageEntity763FromJSON(json: any): BTMSketchImageEntity763 {
    return BTMSketchImageEntity763FromJSONTyped(json, false);
}

export function BTMSketchImageEntity763FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchImageEntity763 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMSketchGeomEntity5FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'aspectRatio': !exists(json, 'aspectRatio') ? undefined : json['aspectRatio'],
        'originX': !exists(json, 'originX') ? undefined : json['originX'],
        'originY': !exists(json, 'originY') ? undefined : json['originY'],
        'xaxisX': !exists(json, 'xaxisX') ? undefined : json['xaxisX'],
        'xaxisY': !exists(json, 'xaxisY') ? undefined : json['xaxisY'],
    };
}

export function BTMSketchImageEntity763ToJSON(value?: BTMSketchImageEntity763 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMSketchGeomEntity5ToJSON(value),
        'btType': value.btType,
        'aspectRatio': value.aspectRatio,
        'originX': value.originX,
        'originY': value.originY,
        'xaxisX': value.xaxisX,
        'xaxisY': value.xaxisY,
    };
}

