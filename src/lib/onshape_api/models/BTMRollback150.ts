/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
} from './BTMNode19';

/**
 * 
 * @export
 * @interface BTMRollback150
 */
export interface BTMRollback150 extends BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTMRollback150
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTMRollback150 interface.
 */
export function instanceOfBTMRollback150(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMRollback150FromJSON(json: any): BTMRollback150 {
    return BTMRollback150FromJSONTyped(json, false);
}

export function BTMRollback150FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMRollback150 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTMRollback150ToJSON(value?: BTMRollback150 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19ToJSON(value),
        'btType': value.btType,
    };
}

