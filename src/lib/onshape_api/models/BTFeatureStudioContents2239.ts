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
import type { BTFeatureApiBase1430 } from './BTFeatureApiBase1430';
import {
    BTFeatureApiBase1430FromJSON,
    BTFeatureApiBase1430FromJSONTyped,
    BTFeatureApiBase1430ToJSON,
} from './BTFeatureApiBase1430';

/**
 * 
 * @export
 * @interface BTFeatureStudioContents2239
 */
export interface BTFeatureStudioContents2239 extends BTFeatureApiBase1430 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureStudioContents2239
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureStudioContents2239
     */
    contents?: string;
}

/**
 * Check if a given object implements the BTFeatureStudioContents2239 interface.
 */
export function instanceOfBTFeatureStudioContents2239(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureStudioContents2239FromJSON(json: any): BTFeatureStudioContents2239 {
    return BTFeatureStudioContents2239FromJSONTyped(json, false);
}

export function BTFeatureStudioContents2239FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureStudioContents2239 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTFeatureApiBase1430FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
    };
}

export function BTFeatureStudioContents2239ToJSON(value?: BTFeatureStudioContents2239 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTFeatureApiBase1430ToJSON(value),
        'btType': value.btType,
        'contents': value.contents,
    };
}

