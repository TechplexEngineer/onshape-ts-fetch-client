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
import type { BTLocationInfo226 } from './BTLocationInfo226';
import {
    BTLocationInfo226FromJSON,
    BTLocationInfo226FromJSONTyped,
    BTLocationInfo226ToJSON,
} from './BTLocationInfo226';

import {
     BTNullableQuantityRange1340FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTQuantityRange181
 */
export interface BTQuantityRange181 {
    /**
     * 
     * @type {string}
     * @memberof BTQuantityRange181
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTQuantityRange181
     */
    defaultValue?: number;
    /**
     * 
     * @type {BTLocationInfo226}
     * @memberof BTQuantityRange181
     */
    location?: BTLocationInfo226;
    /**
     * 
     * @type {number}
     * @memberof BTQuantityRange181
     */
    maxValue?: number;
    /**
     * 
     * @type {number}
     * @memberof BTQuantityRange181
     */
    minValue?: number;
    /**
     * 
     * @type {string}
     * @memberof BTQuantityRange181
     */
    units?: string;
}

/**
 * Check if a given object implements the BTQuantityRange181 interface.
 */
export function instanceOfBTQuantityRange181(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTQuantityRange181FromJSON(json: any): BTQuantityRange181 {
    return BTQuantityRange181FromJSONTyped(json, false);
}

export function BTQuantityRange181FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTQuantityRange181 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTNullableQuantityRange-1340') {
            return BTNullableQuantityRange1340FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'location': !exists(json, 'location') ? undefined : BTLocationInfo226FromJSON(json['location']),
        'maxValue': !exists(json, 'maxValue') ? undefined : json['maxValue'],
        'minValue': !exists(json, 'minValue') ? undefined : json['minValue'],
        'units': !exists(json, 'units') ? undefined : json['units'],
    };
}

export function BTQuantityRange181ToJSON(value?: BTQuantityRange181 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultValue': value.defaultValue,
        'location': BTLocationInfo226ToJSON(value.location),
        'maxValue': value.maxValue,
        'minValue': value.minValue,
        'units': value.units,
    };
}

