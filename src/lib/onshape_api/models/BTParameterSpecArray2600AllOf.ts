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
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';

/**
 * 
 * @export
 * @interface BTParameterSpecArray2600AllOf
 */
export interface BTParameterSpecArray2600AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    drivenQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    itemLabelTemplate?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecArray2600AllOf
     */
    itemName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecArray2600AllOf
     */
    maxNumberOfPicks?: number;
    /**
     * 
     * @type {Array<BTParameterSpec6>}
     * @memberof BTParameterSpecArray2600AllOf
     */
    parameters?: Array<BTParameterSpec6>;
}

/**
 * Check if a given object implements the BTParameterSpecArray2600AllOf interface.
 */
export function instanceOfBTParameterSpecArray2600AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecArray2600AllOfFromJSON(json: any): BTParameterSpecArray2600AllOf {
    return BTParameterSpecArray2600AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecArray2600AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecArray2600AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'drivenQuery': !exists(json, 'drivenQuery') ? undefined : json['drivenQuery'],
        'itemLabelTemplate': !exists(json, 'itemLabelTemplate') ? undefined : json['itemLabelTemplate'],
        'itemName': !exists(json, 'itemName') ? undefined : json['itemName'],
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTParameterSpec6FromJSON)),
    };
}

export function BTParameterSpecArray2600AllOfToJSON(value?: BTParameterSpecArray2600AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'drivenQuery': value.drivenQuery,
        'itemLabelTemplate': value.itemLabelTemplate,
        'itemName': value.itemName,
        'maxNumberOfPicks': value.maxNumberOfPicks,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTParameterSpec6ToJSON)),
    };
}

