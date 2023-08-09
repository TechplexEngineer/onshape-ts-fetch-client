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
import type { BTMicroversionIdAndConfiguration2338 } from './BTMicroversionIdAndConfiguration2338';
import {
    BTMicroversionIdAndConfiguration2338FromJSON,
    BTMicroversionIdAndConfiguration2338FromJSONTyped,
    BTMicroversionIdAndConfiguration2338ToJSON,
} from './BTMicroversionIdAndConfiguration2338';
import type { BTMicroversionIdInterval367 } from './BTMicroversionIdInterval367';
import {
    BTMicroversionIdInterval367FromJSON,
    BTMicroversionIdInterval367FromJSONTyped,
    BTMicroversionIdInterval367ToJSON,
} from './BTMicroversionIdInterval367';

/**
 * 
 * @export
 * @interface BTMicroversionIdAndConfigurationInterval2364
 */
export interface BTMicroversionIdAndConfigurationInterval2364 {
    /**
     * 
     * @type {string}
     * @memberof BTMicroversionIdAndConfigurationInterval2364
     */
    btType?: string;
    /**
     * 
     * @type {BTMicroversionIdAndConfiguration2338}
     * @memberof BTMicroversionIdAndConfigurationInterval2364
     */
    from?: BTMicroversionIdAndConfiguration2338;
    /**
     * 
     * @type {BTMicroversionIdInterval367}
     * @memberof BTMicroversionIdAndConfigurationInterval2364
     */
    microversionIdInterval?: BTMicroversionIdInterval367;
    /**
     * 
     * @type {BTMicroversionIdAndConfiguration2338}
     * @memberof BTMicroversionIdAndConfigurationInterval2364
     */
    to?: BTMicroversionIdAndConfiguration2338;
}

/**
 * Check if a given object implements the BTMicroversionIdAndConfigurationInterval2364 interface.
 */
export function instanceOfBTMicroversionIdAndConfigurationInterval2364(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMicroversionIdAndConfigurationInterval2364FromJSON(json: any): BTMicroversionIdAndConfigurationInterval2364 {
    return BTMicroversionIdAndConfigurationInterval2364FromJSONTyped(json, false);
}

export function BTMicroversionIdAndConfigurationInterval2364FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMicroversionIdAndConfigurationInterval2364 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'from': !exists(json, 'from') ? undefined : BTMicroversionIdAndConfiguration2338FromJSON(json['from']),
        'microversionIdInterval': !exists(json, 'microversionIdInterval') ? undefined : BTMicroversionIdInterval367FromJSON(json['microversionIdInterval']),
        'to': !exists(json, 'to') ? undefined : BTMicroversionIdAndConfiguration2338FromJSON(json['to']),
    };
}

export function BTMicroversionIdAndConfigurationInterval2364ToJSON(value?: BTMicroversionIdAndConfigurationInterval2364 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'from': BTMicroversionIdAndConfiguration2338ToJSON(value.from),
        'microversionIdInterval': BTMicroversionIdInterval367ToJSON(value.microversionIdInterval),
        'to': BTMicroversionIdAndConfiguration2338ToJSON(value.to),
    };
}

