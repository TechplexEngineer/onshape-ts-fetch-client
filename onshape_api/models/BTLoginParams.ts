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
import type { BTWebClientCapabilitiesParams } from './BTWebClientCapabilitiesParams';
import {
    BTWebClientCapabilitiesParamsFromJSON,
    BTWebClientCapabilitiesParamsFromJSONTyped,
    BTWebClientCapabilitiesParamsToJSON,
} from './BTWebClientCapabilitiesParams';
import type { BTWebRendererPerformanceMeasurementParams } from './BTWebRendererPerformanceMeasurementParams';
import {
    BTWebRendererPerformanceMeasurementParamsFromJSON,
    BTWebRendererPerformanceMeasurementParamsFromJSONTyped,
    BTWebRendererPerformanceMeasurementParamsToJSON,
} from './BTWebRendererPerformanceMeasurementParams';

/**
 * 
 * @export
 * @interface BTLoginParams
 */
export interface BTLoginParams {
    /**
     * 
     * @type {string}
     * @memberof BTLoginParams
     */
    deviceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLoginParams
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoginParams
     */
    enableTotp?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoginParams
     */
    isRecaptchaV3?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTLoginParams
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLoginParams
     */
    randomToken?: string;
    /**
     * 
     * @type {string}
     * @memberof BTLoginParams
     */
    recaptchaToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTLoginParams
     */
    rememberTotp?: boolean;
    /**
     * 
     * @type {BTWebRendererPerformanceMeasurementParams}
     * @memberof BTLoginParams
     */
    rendererPerformanceMeasurement?: BTWebRendererPerformanceMeasurementParams;
    /**
     * 
     * @type {string}
     * @memberof BTLoginParams
     */
    totp?: string;
    /**
     * 
     * @type {BTWebClientCapabilitiesParams}
     * @memberof BTLoginParams
     */
    webClientCapabilities?: BTWebClientCapabilitiesParams;
}

/**
 * Check if a given object implements the BTLoginParams interface.
 */
export function instanceOfBTLoginParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLoginParamsFromJSON(json: any): BTLoginParams {
    return BTLoginParamsFromJSONTyped(json, false);
}

export function BTLoginParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLoginParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deviceId': !exists(json, 'deviceId') ? undefined : json['deviceId'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'enableTotp': !exists(json, 'enableTotp') ? undefined : json['enableTotp'],
        'isRecaptchaV3': !exists(json, 'isRecaptchaV3') ? undefined : json['isRecaptchaV3'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'randomToken': !exists(json, 'randomToken') ? undefined : json['randomToken'],
        'recaptchaToken': !exists(json, 'recaptchaToken') ? undefined : json['recaptchaToken'],
        'rememberTotp': !exists(json, 'rememberTotp') ? undefined : json['rememberTotp'],
        'rendererPerformanceMeasurement': !exists(json, 'rendererPerformanceMeasurement') ? undefined : BTWebRendererPerformanceMeasurementParamsFromJSON(json['rendererPerformanceMeasurement']),
        'totp': !exists(json, 'totp') ? undefined : json['totp'],
        'webClientCapabilities': !exists(json, 'webClientCapabilities') ? undefined : BTWebClientCapabilitiesParamsFromJSON(json['webClientCapabilities']),
    };
}

export function BTLoginParamsToJSON(value?: BTLoginParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deviceId': value.deviceId,
        'email': value.email,
        'enableTotp': value.enableTotp,
        'isRecaptchaV3': value.isRecaptchaV3,
        'password': value.password,
        'randomToken': value.randomToken,
        'recaptchaToken': value.recaptchaToken,
        'rememberTotp': value.rememberTotp,
        'rendererPerformanceMeasurement': BTWebRendererPerformanceMeasurementParamsToJSON(value.rendererPerformanceMeasurement),
        'totp': value.totp,
        'webClientCapabilities': BTWebClientCapabilitiesParamsToJSON(value.webClientCapabilities),
    };
}

