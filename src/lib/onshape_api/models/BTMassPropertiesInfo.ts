/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTMassPropertiesInfo
 */
export interface BTMassPropertiesInfo {
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMassPropertiesInfo
     */
    centroid?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMassPropertiesInfo
     */
    hasMass?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMassPropertiesInfo
     */
    inertia?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMassPropertiesInfo
     */
    mass?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BTMassPropertiesInfo
     */
    massMissingCount?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMassPropertiesInfo
     */
    periphery?: Array<number>;
    /**
     * 
     * @type {Array<BTVector3d389>}
     * @memberof BTMassPropertiesInfo
     */
    principalAxes?: Array<BTVector3d389>;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMassPropertiesInfo
     */
    principalInertia?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTMassPropertiesInfo
     */
    volume?: Array<number>;
}

/**
 * Check if a given object implements the BTMassPropertiesInfo interface.
 */
export function instanceOfBTMassPropertiesInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMassPropertiesInfoFromJSON(json: any): BTMassPropertiesInfo {
    return BTMassPropertiesInfoFromJSONTyped(json, false);
}

export function BTMassPropertiesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMassPropertiesInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'centroid': !exists(json, 'centroid') ? undefined : json['centroid'],
        'hasMass': !exists(json, 'hasMass') ? undefined : json['hasMass'],
        'inertia': !exists(json, 'inertia') ? undefined : json['inertia'],
        'mass': !exists(json, 'mass') ? undefined : json['mass'],
        'massMissingCount': !exists(json, 'massMissingCount') ? undefined : json['massMissingCount'],
        'periphery': !exists(json, 'periphery') ? undefined : json['periphery'],
        'principalAxes': !exists(json, 'principalAxes') ? undefined : ((json['principalAxes'] as Array<any>).map(BTVector3d389FromJSON)),
        'principalInertia': !exists(json, 'principalInertia') ? undefined : json['principalInertia'],
        'volume': !exists(json, 'volume') ? undefined : json['volume'],
    };
}

export function BTMassPropertiesInfoToJSON(value?: BTMassPropertiesInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'centroid': value.centroid,
        'hasMass': value.hasMass,
        'inertia': value.inertia,
        'mass': value.mass,
        'massMissingCount': value.massMissingCount,
        'periphery': value.periphery,
        'principalAxes': value.principalAxes === undefined ? undefined : ((value.principalAxes as Array<any>).map(BTVector3d389ToJSON)),
        'principalInertia': value.principalInertia,
        'volume': value.volume,
    };
}

