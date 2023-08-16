/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMEnumOption592 } from './BTMEnumOption592';
import {
    BTMEnumOption592FromJSON,
    BTMEnumOption592FromJSONTyped,
    BTMEnumOption592ToJSON,
} from './BTMEnumOption592';

/**
 * 
 * @export
 * @interface BTMConfigurationParameterEnum105AllOf
 */
export interface BTMConfigurationParameterEnum105AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105AllOf
     */
    defaultValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105AllOf
     */
    enumName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterEnum105AllOf
     */
    namespace?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTMConfigurationParameterEnum105AllOf
     */
    optionIds?: Set<string>;
    /**
     * 
     * @type {Array<BTMEnumOption592>}
     * @memberof BTMConfigurationParameterEnum105AllOf
     */
    options?: Array<BTMEnumOption592>;
}

/**
 * Check if a given object implements the BTMConfigurationParameterEnum105AllOf interface.
 */
export function instanceOfBTMConfigurationParameterEnum105AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterEnum105AllOfFromJSON(json: any): BTMConfigurationParameterEnum105AllOf {
    return BTMConfigurationParameterEnum105AllOfFromJSONTyped(json, false);
}

export function BTMConfigurationParameterEnum105AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterEnum105AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'optionIds': !exists(json, 'optionIds') ? undefined : json['optionIds'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(BTMEnumOption592FromJSON)),
    };
}

export function BTMConfigurationParameterEnum105AllOfToJSON(value?: BTMConfigurationParameterEnum105AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultValue': value.defaultValue,
        'enumName': value.enumName,
        'namespace': value.namespace,
        'optionIds': value.optionIds === undefined ? undefined : Array.from(value.optionIds as Set<any>),
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(BTMEnumOption592ToJSON)),
    };
}

