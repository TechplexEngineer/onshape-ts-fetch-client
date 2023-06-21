/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTJPathElement2297 } from './BTJPathElement2297';
import {
    BTJPathElement2297FromJSON,
    BTJPathElement2297FromJSONTyped,
    BTJPathElement2297ToJSON,
} from './BTJPathElement2297';

/**
 * Identifies a subtree of the json structure by field name.
 * @export
 * @interface BTJPathKey3221
 */
export interface BTJPathKey3221 extends BTJPathElement2297 {
    /**
     * 
     * @type {string}
     * @memberof BTJPathKey3221
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTJPathKey3221
     */
    key?: string;
}

/**
 * Check if a given object implements the BTJPathKey3221 interface.
 */
export function instanceOfBTJPathKey3221(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTJPathKey3221FromJSON(json: any): BTJPathKey3221 {
    return BTJPathKey3221FromJSONTyped(json, false);
}

export function BTJPathKey3221FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJPathKey3221 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTJPathElement2297FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function BTJPathKey3221ToJSON(value?: BTJPathKey3221 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTJPathElement2297ToJSON(value),
        'btType': value.btType,
        'key': value.key,
    };
}

