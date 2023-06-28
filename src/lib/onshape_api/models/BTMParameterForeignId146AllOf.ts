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
import type { BTForeignDataResponse1070 } from './BTForeignDataResponse1070';
import {
    BTForeignDataResponse1070FromJSON,
    BTForeignDataResponse1070FromJSONTyped,
    BTForeignDataResponse1070ToJSON,
} from './BTForeignDataResponse1070';

/**
 * 
 * @export
 * @interface BTMParameterForeignId146AllOf
 */
export interface BTMParameterForeignId146AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterForeignId146AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterForeignId146AllOf
     */
    foreignId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterForeignId146AllOf
     */
    foreignName?: string;
    /**
     * 
     * @type {BTForeignDataResponse1070}
     * @memberof BTMParameterForeignId146AllOf
     */
    locationInfo?: BTForeignDataResponse1070;
}

/**
 * Check if a given object implements the BTMParameterForeignId146AllOf interface.
 */
export function instanceOfBTMParameterForeignId146AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterForeignId146AllOfFromJSON(json: any): BTMParameterForeignId146AllOf {
    return BTMParameterForeignId146AllOfFromJSONTyped(json, false);
}

export function BTMParameterForeignId146AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterForeignId146AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'foreignId': !exists(json, 'foreignId') ? undefined : json['foreignId'],
        'foreignName': !exists(json, 'foreignName') ? undefined : json['foreignName'],
        'locationInfo': !exists(json, 'locationInfo') ? undefined : BTForeignDataResponse1070FromJSON(json['locationInfo']),
    };
}

export function BTMParameterForeignId146AllOfToJSON(value?: BTMParameterForeignId146AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'foreignId': value.foreignId,
        'foreignName': value.foreignName,
        'locationInfo': BTForeignDataResponse1070ToJSON(value.locationInfo),
    };
}

