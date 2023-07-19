/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
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
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';

/**
 * 
 * @export
 * @interface BTUpdateFeaturesResponse1333
 */
export interface BTUpdateFeaturesResponse1333 {
    /**
     * 
     * @type {string}
     * @memberof BTUpdateFeaturesResponse1333
     */
    btType?: string;
    /**
     * 
     * @type {{ [key: string]: BTFeatureState1688; }}
     * @memberof BTUpdateFeaturesResponse1333
     */
    featureStates?: { [key: string]: BTFeatureState1688; };
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTUpdateFeaturesResponse1333
     */
    features?: Array<BTMFeature134>;
    /**
     * 
     * @type {number}
     * @memberof BTUpdateFeaturesResponse1333
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUpdateFeaturesResponse1333
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUpdateFeaturesResponse1333
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUpdateFeaturesResponse1333
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUpdateFeaturesResponse1333
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTUpdateFeaturesResponse1333 interface.
 */
export function instanceOfBTUpdateFeaturesResponse1333(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUpdateFeaturesResponse1333FromJSON(json: any): BTUpdateFeaturesResponse1333 {
    return BTUpdateFeaturesResponse1333FromJSONTyped(json, false);
}

export function BTUpdateFeaturesResponse1333FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUpdateFeaturesResponse1333 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureStates': !exists(json, 'featureStates') ? undefined : (mapValues(json['featureStates'], BTFeatureState1688FromJSON)),
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(BTMFeature134FromJSON)),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTUpdateFeaturesResponse1333ToJSON(value?: BTUpdateFeaturesResponse1333 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'featureStates': value.featureStates === undefined ? undefined : (mapValues(value.featureStates, BTFeatureState1688ToJSON)),
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(BTMFeature134ToJSON)),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

