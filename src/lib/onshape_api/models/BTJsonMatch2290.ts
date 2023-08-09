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
import type { BTDiffJsonResponse2725Patch } from './BTDiffJsonResponse2725Patch';
import {
    BTDiffJsonResponse2725PatchFromJSON,
    BTDiffJsonResponse2725PatchFromJSONTyped,
    BTDiffJsonResponse2725PatchToJSON,
} from './BTDiffJsonResponse2725Patch';

/**
 * 
 * @export
 * @interface BTJsonMatch2290
 */
export interface BTJsonMatch2290 {
    /**
     * 
     * @type {string}
     * @memberof BTJsonMatch2290
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTJsonMatch2290
     */
    definiteJsonPath?: string;
    /**
     * 
     * @type {BTDiffJsonResponse2725Patch}
     * @memberof BTJsonMatch2290
     */
    node?: BTDiffJsonResponse2725Patch;
}

/**
 * Check if a given object implements the BTJsonMatch2290 interface.
 */
export function instanceOfBTJsonMatch2290(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTJsonMatch2290FromJSON(json: any): BTJsonMatch2290 {
    return BTJsonMatch2290FromJSONTyped(json, false);
}

export function BTJsonMatch2290FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJsonMatch2290 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'definiteJsonPath': !exists(json, 'definiteJsonPath') ? undefined : json['definiteJsonPath'],
        'node': !exists(json, 'node') ? undefined : BTDiffJsonResponse2725PatchFromJSON(json['node']),
    };
}

export function BTJsonMatch2290ToJSON(value?: BTJsonMatch2290 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'definiteJsonPath': value.definiteJsonPath,
        'node': BTDiffJsonResponse2725PatchToJSON(value.node),
    };
}

