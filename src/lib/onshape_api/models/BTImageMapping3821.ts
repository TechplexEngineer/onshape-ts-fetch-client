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
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

import {
     BTCylindricalImageMapping1640FromJSONTyped,
     BTPlanarImageMapping4398FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTImageMapping3821
 */
export interface BTImageMapping3821 {
    /**
     * 
     * @type {string}
     * @memberof BTImageMapping3821
     */
    btType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTImageMapping3821
     */
    deterministicIds?: Array<string>;
    /**
     * 
     * @type {BTMatrix3x3340}
     * @memberof BTImageMapping3821
     */
    uvTransform?: BTMatrix3x3340;
}

/**
 * Check if a given object implements the BTImageMapping3821 interface.
 */
export function instanceOfBTImageMapping3821(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTImageMapping3821FromJSON(json: any): BTImageMapping3821 {
    return BTImageMapping3821FromJSONTyped(json, false);
}

export function BTImageMapping3821FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTImageMapping3821 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTCylindricalImageMapping-1640') {
            return BTCylindricalImageMapping1640FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPlanarImageMapping-4398') {
            return BTPlanarImageMapping4398FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deterministicIds': !exists(json, 'deterministicIds') ? undefined : json['deterministicIds'],
        'uvTransform': !exists(json, 'uvTransform') ? undefined : BTMatrix3x3340FromJSON(json['uvTransform']),
    };
}

export function BTImageMapping3821ToJSON(value?: BTImageMapping3821 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'deterministicIds': value.deterministicIds,
        'uvTransform': BTMatrix3x3340ToJSON(value.uvTransform),
    };
}

