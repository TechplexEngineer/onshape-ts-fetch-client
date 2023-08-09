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
import type { GBTPartColorCycleVersion } from './GBTPartColorCycleVersion';
import {
    GBTPartColorCycleVersionFromJSON,
    GBTPartColorCycleVersionFromJSONTyped,
    GBTPartColorCycleVersionToJSON,
} from './GBTPartColorCycleVersion';

/**
 * 
 * @export
 * @interface BTSystemPartColorCycle1580AllOf
 */
export interface BTSystemPartColorCycle1580AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTSystemPartColorCycle1580AllOf
     */
    btType?: string;
    /**
     * 
     * @type {GBTPartColorCycleVersion}
     * @memberof BTSystemPartColorCycle1580AllOf
     */
    version?: GBTPartColorCycleVersion;
}

/**
 * Check if a given object implements the BTSystemPartColorCycle1580AllOf interface.
 */
export function instanceOfBTSystemPartColorCycle1580AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSystemPartColorCycle1580AllOfFromJSON(json: any): BTSystemPartColorCycle1580AllOf {
    return BTSystemPartColorCycle1580AllOfFromJSONTyped(json, false);
}

export function BTSystemPartColorCycle1580AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSystemPartColorCycle1580AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'version': !exists(json, 'version') ? undefined : GBTPartColorCycleVersionFromJSON(json['version']),
    };
}

export function BTSystemPartColorCycle1580AllOfToJSON(value?: BTSystemPartColorCycle1580AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'version': GBTPartColorCycleVersionToJSON(value.version),
    };
}

