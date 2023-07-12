/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMateFilter162 } from './BTMateFilter162';
import {
    BTMateFilter162FromJSON,
    BTMateFilter162FromJSONTyped,
    BTMateFilter162ToJSON,
} from './BTMateFilter162';
import type { GBTMateType } from './GBTMateType';
import {
    GBTMateTypeFromJSON,
    GBTMateTypeFromJSONTyped,
    GBTMateTypeToJSON,
} from './GBTMateType';

/**
 * 
 * @export
 * @interface BTAllowedMateTypeFilter1511
 */
export interface BTAllowedMateTypeFilter1511 extends BTMateFilter162 {
    /**
     * 
     * @type {string}
     * @memberof BTAllowedMateTypeFilter1511
     */
    btType?: string;
    /**
     * 
     * @type {Array<GBTMateType>}
     * @memberof BTAllowedMateTypeFilter1511
     */
    allowedMateTypes?: Array<GBTMateType>;
}

/**
 * Check if a given object implements the BTAllowedMateTypeFilter1511 interface.
 */
export function instanceOfBTAllowedMateTypeFilter1511(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAllowedMateTypeFilter1511FromJSON(json: any): BTAllowedMateTypeFilter1511 {
    return BTAllowedMateTypeFilter1511FromJSONTyped(json, false);
}

export function BTAllowedMateTypeFilter1511FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAllowedMateTypeFilter1511 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMateFilter162FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'allowedMateTypes': !exists(json, 'allowedMateTypes') ? undefined : ((json['allowedMateTypes'] as Array<any>).map(GBTMateTypeFromJSON)),
    };
}

export function BTAllowedMateTypeFilter1511ToJSON(value?: BTAllowedMateTypeFilter1511 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMateFilter162ToJSON(value),
        'btType': value.btType,
        'allowedMateTypes': value.allowedMateTypes === undefined ? undefined : ((value.allowedMateTypes as Array<any>).map(GBTMateTypeToJSON)),
    };
}

