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
import type { BTSurfaceDescription1564 } from './BTSurfaceDescription1564';
import {
    BTSurfaceDescription1564FromJSON,
    BTSurfaceDescription1564FromJSONTyped,
    BTSurfaceDescription1564ToJSON,
} from './BTSurfaceDescription1564';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTSurfaceTypeEnum } from './GBTSurfaceTypeEnum';
import {
    GBTSurfaceTypeEnumFromJSON,
    GBTSurfaceTypeEnumFromJSONTyped,
    GBTSurfaceTypeEnumToJSON,
} from './GBTSurfaceTypeEnum';

/**
 * 
 * @export
 * @interface BTSphereDescription1263
 */
export interface BTSphereDescription1263 extends BTSurfaceDescription1564 {
    /**
     * 
     * @type {string}
     * @memberof BTSphereDescription1263
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSphereDescription1263
     */
    radius?: number;
}

/**
 * Check if a given object implements the BTSphereDescription1263 interface.
 */
export function instanceOfBTSphereDescription1263(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSphereDescription1263FromJSON(json: any): BTSphereDescription1263 {
    return BTSphereDescription1263FromJSONTyped(json, false);
}

export function BTSphereDescription1263FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSphereDescription1263 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTSurfaceDescription1564FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
    };
}

export function BTSphereDescription1263ToJSON(value?: BTSphereDescription1263 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTSurfaceDescription1564ToJSON(value),
        'btType': value.btType,
        'radius': value.radius,
    };
}

