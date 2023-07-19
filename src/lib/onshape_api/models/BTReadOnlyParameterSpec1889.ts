/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
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
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

import {
     BTParameterSpecProgress3078FromJSONTyped,
     BTParameterSpecStringWithTolerances2535FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTReadOnlyParameterSpec1889
 */
export interface BTReadOnlyParameterSpec1889 extends BTParameterSpec6 {
    /**
     * 
     * @type {string}
     * @memberof BTReadOnlyParameterSpec1889
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTReadOnlyParameterSpec1889 interface.
 */
export function instanceOfBTReadOnlyParameterSpec1889(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTReadOnlyParameterSpec1889FromJSON(json: any): BTReadOnlyParameterSpec1889 {
    return BTReadOnlyParameterSpec1889FromJSONTyped(json, false);
}

export function BTReadOnlyParameterSpec1889FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTReadOnlyParameterSpec1889 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterSpecProgress-3078') {
            return BTParameterSpecProgress3078FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecStringWithTolerances-2535') {
            return BTParameterSpecStringWithTolerances2535FromJSONTyped(json, true);
        }
    }
    return {
        ...BTParameterSpec6FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTReadOnlyParameterSpec1889ToJSON(value?: BTReadOnlyParameterSpec1889 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpec6ToJSON(value),
        'btType': value.btType,
    };
}

