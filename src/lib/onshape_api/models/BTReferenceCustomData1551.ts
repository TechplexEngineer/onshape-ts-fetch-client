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
import {
     BTInstanceStandardContentData2081FromJSONTyped,
     BTRevisionCustomData2090FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTReferenceCustomData1551
 */
export interface BTReferenceCustomData1551 {
    /**
     * 
     * @type {string}
     * @memberof BTReferenceCustomData1551
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTReferenceCustomData1551 interface.
 */
export function instanceOfBTReferenceCustomData1551(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTReferenceCustomData1551FromJSON(json: any): BTReferenceCustomData1551 {
    return BTReferenceCustomData1551FromJSONTyped(json, false);
}

export function BTReferenceCustomData1551FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTReferenceCustomData1551 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTInstanceStandardContentData-2081') {
            return BTInstanceStandardContentData2081FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTRevisionCustomData-2090') {
            return BTRevisionCustomData2090FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTReferenceCustomData1551ToJSON(value?: BTReferenceCustomData1551 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
    };
}

