/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFeatureState1688 } from './BTFeatureState1688';
import {
    BTFeatureState1688FromJSON,
    BTFeatureState1688FromJSONTyped,
    BTFeatureState1688ToJSON,
} from './BTFeatureState1688';
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';

/**
 * 
 * @export
 * @interface BTAssemblyFeatureListResponse1174AllOf
 */
export interface BTAssemblyFeatureListResponse1174AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTFeatureState1688; }}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    featureStates?: { [key: string]: BTFeatureState1688; };
    /**
     * 
     * @type {Array<BTMAssemblyFeature887>}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    features?: Array<BTMAssemblyFeature887>;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyFeatureListResponse1174AllOf
     */
    isComplete?: boolean;
}

/**
 * Check if a given object implements the BTAssemblyFeatureListResponse1174AllOf interface.
 */
export function instanceOfBTAssemblyFeatureListResponse1174AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyFeatureListResponse1174AllOfFromJSON(json: any): BTAssemblyFeatureListResponse1174AllOf {
    return BTAssemblyFeatureListResponse1174AllOfFromJSONTyped(json, false);
}

export function BTAssemblyFeatureListResponse1174AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyFeatureListResponse1174AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureStates': !exists(json, 'featureStates') ? undefined : (mapValues(json['featureStates'], BTFeatureState1688FromJSON)),
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(BTMAssemblyFeature887FromJSON)),
        'isComplete': !exists(json, 'isComplete') ? undefined : json['isComplete'],
    };
}

export function BTAssemblyFeatureListResponse1174AllOfToJSON(value?: BTAssemblyFeatureListResponse1174AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'featureStates': value.featureStates === undefined ? undefined : (mapValues(value.featureStates, BTFeatureState1688ToJSON)),
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(BTMAssemblyFeature887ToJSON)),
        'isComplete': value.isComplete,
    };
}

