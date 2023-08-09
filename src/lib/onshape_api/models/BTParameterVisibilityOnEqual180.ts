/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.20169-88260985a0b6
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';

import {
     BTParameterVisibilityOnMateDOFType2114FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTParameterVisibilityOnEqual180
 */
export interface BTParameterVisibilityOnEqual180 extends BTParameterVisibilityCondition177 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnEqual180
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterVisibilityOnEqual180
     */
    inArray?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnEqual180
     */
    parameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityOnEqual180
     */
    value?: string;
}

/**
 * Check if a given object implements the BTParameterVisibilityOnEqual180 interface.
 */
export function instanceOfBTParameterVisibilityOnEqual180(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterVisibilityOnEqual180FromJSON(json: any): BTParameterVisibilityOnEqual180 {
    return BTParameterVisibilityOnEqual180FromJSONTyped(json, false);
}

export function BTParameterVisibilityOnEqual180FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterVisibilityOnEqual180 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterVisibilityOnMateDOFType-2114') {
            return BTParameterVisibilityOnMateDOFType2114FromJSONTyped(json, true);
        }
    }
    return {
        ...BTParameterVisibilityCondition177FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'inArray': !exists(json, 'inArray') ? undefined : json['inArray'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTParameterVisibilityOnEqual180ToJSON(value?: BTParameterVisibilityOnEqual180 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterVisibilityCondition177ToJSON(value),
        'btType': value.btType,
        'inArray': value.inArray,
        'parameterId': value.parameterId,
        'value': value.value,
    };
}

