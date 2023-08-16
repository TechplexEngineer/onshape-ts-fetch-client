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
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

import {
     BTMConfiguredValueByBoolean1501FromJSONTyped,
     BTMConfiguredValueByEnum1923FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMConfiguredValue1341
 */
export interface BTMConfiguredValue1341 {
    /**
     * 
     * @type {string}
     * @memberof BTMConfiguredValue1341
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfiguredValue1341
     */
    configurationValueString?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfiguredValue1341
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMConfiguredValue1341
     */
    nodeId?: string;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTMConfiguredValue1341
     */
    value?: BTMParameter1;
}

/**
 * Check if a given object implements the BTMConfiguredValue1341 interface.
 */
export function instanceOfBTMConfiguredValue1341(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfiguredValue1341FromJSON(json: any): BTMConfiguredValue1341 {
    return BTMConfiguredValue1341FromJSONTyped(json, false);
}

export function BTMConfiguredValue1341FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfiguredValue1341 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMConfiguredValueByBoolean-1501') {
            return BTMConfiguredValueByBoolean1501FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMConfiguredValueByEnum-1923') {
            return BTMConfiguredValueByEnum1923FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'configurationValueString': !exists(json, 'configurationValueString') ? undefined : json['configurationValueString'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'value': !exists(json, 'value') ? undefined : BTMParameter1FromJSON(json['value']),
    };
}

export function BTMConfiguredValue1341ToJSON(value?: BTMConfiguredValue1341 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'configurationValueString': value.configurationValueString,
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
        'value': BTMParameter1ToJSON(value.value),
    };
}

