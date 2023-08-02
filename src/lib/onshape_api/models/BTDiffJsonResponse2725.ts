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
import type { BTDiffJsonResponse2725Patch } from './BTDiffJsonResponse2725Patch';
import {
    BTDiffJsonResponse2725PatchFromJSON,
    BTDiffJsonResponse2725PatchFromJSONTyped,
    BTDiffJsonResponse2725PatchToJSON,
} from './BTDiffJsonResponse2725Patch';
import type { BTJEdit3734 } from './BTJEdit3734';
import {
    BTJEdit3734FromJSON,
    BTJEdit3734FromJSONTyped,
    BTJEdit3734ToJSON,
} from './BTJEdit3734';

/**
 * 
 * @export
 * @interface BTDiffJsonResponse2725
 */
export interface BTDiffJsonResponse2725 {
    /**
     * 
     * @type {string}
     * @memberof BTDiffJsonResponse2725
     */
    btType?: string;
    /**
     * 
     * @type {BTJEdit3734}
     * @memberof BTDiffJsonResponse2725
     */
    change?: BTJEdit3734;
    /**
     * 
     * @type {BTDiffJsonResponse2725Patch}
     * @memberof BTDiffJsonResponse2725
     */
    patch?: BTDiffJsonResponse2725Patch;
    /**
     * 
     * @type {string}
     * @memberof BTDiffJsonResponse2725
     */
    sourceChangeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiffJsonResponse2725
     */
    targetChangeId?: string;
}

/**
 * Check if a given object implements the BTDiffJsonResponse2725 interface.
 */
export function instanceOfBTDiffJsonResponse2725(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDiffJsonResponse2725FromJSON(json: any): BTDiffJsonResponse2725 {
    return BTDiffJsonResponse2725FromJSONTyped(json, false);
}

export function BTDiffJsonResponse2725FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDiffJsonResponse2725 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'change': !exists(json, 'change') ? undefined : BTJEdit3734FromJSON(json['change']),
        'patch': !exists(json, 'patch') ? undefined : BTDiffJsonResponse2725PatchFromJSON(json['patch']),
        'sourceChangeId': !exists(json, 'sourceChangeId') ? undefined : json['sourceChangeId'],
        'targetChangeId': !exists(json, 'targetChangeId') ? undefined : json['targetChangeId'],
    };
}

export function BTDiffJsonResponse2725ToJSON(value?: BTDiffJsonResponse2725 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'change': BTJEdit3734ToJSON(value.change),
        'patch': BTDiffJsonResponse2725PatchToJSON(value.patch),
        'sourceChangeId': value.sourceChangeId,
        'targetChangeId': value.targetChangeId,
    };
}

