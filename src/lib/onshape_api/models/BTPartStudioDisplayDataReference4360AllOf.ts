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
import type { BTCacheDataPath191 } from './BTCacheDataPath191';
import {
    BTCacheDataPath191FromJSON,
    BTCacheDataPath191FromJSONTyped,
    BTCacheDataPath191ToJSON,
} from './BTCacheDataPath191';

/**
 * 
 * @export
 * @interface BTPartStudioDisplayDataReference4360AllOf
 */
export interface BTPartStudioDisplayDataReference4360AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayDataReference4360AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTCacheDataPath191}
     * @memberof BTPartStudioDisplayDataReference4360AllOf
     */
    cacheDataPath?: BTCacheDataPath191;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof BTPartStudioDisplayDataReference4360AllOf
     */
    tessellationSettings?: { [key: string]: Array<number>; };
}

/**
 * Check if a given object implements the BTPartStudioDisplayDataReference4360AllOf interface.
 */
export function instanceOfBTPartStudioDisplayDataReference4360AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartStudioDisplayDataReference4360AllOfFromJSON(json: any): BTPartStudioDisplayDataReference4360AllOf {
    return BTPartStudioDisplayDataReference4360AllOfFromJSONTyped(json, false);
}

export function BTPartStudioDisplayDataReference4360AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartStudioDisplayDataReference4360AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cacheDataPath': !exists(json, 'cacheDataPath') ? undefined : BTCacheDataPath191FromJSON(json['cacheDataPath']),
        'tessellationSettings': !exists(json, 'tessellationSettings') ? undefined : json['tessellationSettings'],
    };
}

export function BTPartStudioDisplayDataReference4360AllOfToJSON(value?: BTPartStudioDisplayDataReference4360AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'cacheDataPath': BTCacheDataPath191ToJSON(value.cacheDataPath),
        'tessellationSettings': value.tessellationSettings,
    };
}

