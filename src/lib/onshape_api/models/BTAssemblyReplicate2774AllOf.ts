/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMAssemblyReplicateFeature1351 } from './BTMAssemblyReplicateFeature1351';
import {
    BTMAssemblyReplicateFeature1351FromJSON,
    BTMAssemblyReplicateFeature1351FromJSONTyped,
    BTMAssemblyReplicateFeature1351ToJSON,
} from './BTMAssemblyReplicateFeature1351';

/**
 * 
 * @export
 * @interface BTAssemblyReplicate2774AllOf
 */
export interface BTAssemblyReplicate2774AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyReplicate2774AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTMAssemblyReplicateFeature1351}
     * @memberof BTAssemblyReplicate2774AllOf
     */
    replicateFeature?: BTMAssemblyReplicateFeature1351;
}

/**
 * Check if a given object implements the BTAssemblyReplicate2774AllOf interface.
 */
export function instanceOfBTAssemblyReplicate2774AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyReplicate2774AllOfFromJSON(json: any): BTAssemblyReplicate2774AllOf {
    return BTAssemblyReplicate2774AllOfFromJSONTyped(json, false);
}

export function BTAssemblyReplicate2774AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyReplicate2774AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'replicateFeature': !exists(json, 'replicateFeature') ? undefined : BTMAssemblyReplicateFeature1351FromJSON(json['replicateFeature']),
    };
}

export function BTAssemblyReplicate2774AllOfToJSON(value?: BTAssemblyReplicate2774AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'replicateFeature': BTMAssemblyReplicateFeature1351ToJSON(value.replicateFeature),
    };
}

