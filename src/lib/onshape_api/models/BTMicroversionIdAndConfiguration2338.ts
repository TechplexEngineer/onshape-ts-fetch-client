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
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';

/**
 * 
 * @export
 * @interface BTMicroversionIdAndConfiguration2338
 */
export interface BTMicroversionIdAndConfiguration2338 {
    /**
     * 
     * @type {string}
     * @memberof BTMicroversionIdAndConfiguration2338
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMicroversionIdAndConfiguration2338
     */
    cacheKey?: string;
    /**
     * 
     * @type {{ [key: string]: BTFSValue1888; }}
     * @memberof BTMicroversionIdAndConfiguration2338
     */
    configurationParameterIdToValue?: { [key: string]: BTFSValue1888; };
    /**
     * 
     * @type {boolean}
     * @memberof BTMicroversionIdAndConfiguration2338
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMicroversionIdAndConfiguration2338
     */
    description?: string;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTMicroversionIdAndConfiguration2338
     */
    microversion?: BTMicroversionId366;
}

/**
 * Check if a given object implements the BTMicroversionIdAndConfiguration2338 interface.
 */
export function instanceOfBTMicroversionIdAndConfiguration2338(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMicroversionIdAndConfiguration2338FromJSON(json: any): BTMicroversionIdAndConfiguration2338 {
    return BTMicroversionIdAndConfiguration2338FromJSONTyped(json, false);
}

export function BTMicroversionIdAndConfiguration2338FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMicroversionIdAndConfiguration2338 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cacheKey': !exists(json, 'cacheKey') ? undefined : json['cacheKey'],
        'configurationParameterIdToValue': !exists(json, 'configurationParameterIdToValue') ? undefined : (mapValues(json['configurationParameterIdToValue'], BTFSValue1888FromJSON)),
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'microversion': !exists(json, 'microversion') ? undefined : BTMicroversionId366FromJSON(json['microversion']),
    };
}

export function BTMicroversionIdAndConfiguration2338ToJSON(value?: BTMicroversionIdAndConfiguration2338 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'cacheKey': value.cacheKey,
        'configurationParameterIdToValue': value.configurationParameterIdToValue === undefined ? undefined : (mapValues(value.configurationParameterIdToValue, BTFSValue1888ToJSON)),
        'deleted': value.deleted,
        'description': value.description,
        'microversion': BTMicroversionId366ToJSON(value.microversion),
    };
}

