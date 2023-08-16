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
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

/**
 * 
 * @export
 * @interface BTMFeatureInvalid1031
 */
export interface BTMFeatureInvalid1031 extends BTMFeature134 {
    /**
     * 
     * @type {string}
     * @memberof BTMFeatureInvalid1031
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMFeatureInvalid1031 interface.
 */
export function instanceOfBTMFeatureInvalid1031(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMFeatureInvalid1031FromJSON(json: any): BTMFeatureInvalid1031 {
    return BTMFeatureInvalid1031FromJSONTyped(json, false);
}

export function BTMFeatureInvalid1031FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMFeatureInvalid1031 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMFeature134FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMFeatureInvalid1031ToJSON(value?: BTMFeatureInvalid1031 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMFeature134ToJSON(value),
        'btType': value.btType,
    };
}

