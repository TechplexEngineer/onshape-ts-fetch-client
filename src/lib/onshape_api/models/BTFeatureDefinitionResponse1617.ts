/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
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
 * @interface BTFeatureDefinitionResponse1617
 */
export interface BTFeatureDefinitionResponse1617 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionResponse1617
     */
    btType?: string;
    /**
     * 
     * @type {BTMFeature134}
     * @memberof BTFeatureDefinitionResponse1617
     */
    feature?: BTMFeature134;
    /**
     * 
     * @type {BTFeatureState1688}
     * @memberof BTFeatureDefinitionResponse1617
     */
    featureState?: BTFeatureState1688;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureDefinitionResponse1617
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureDefinitionResponse1617
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureDefinitionResponse1617
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionResponse1617
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureDefinitionResponse1617
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureDefinitionResponse1617 interface.
 */
export function instanceOfBTFeatureDefinitionResponse1617(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureDefinitionResponse1617FromJSON(json: any): BTFeatureDefinitionResponse1617 {
    return BTFeatureDefinitionResponse1617FromJSONTyped(json, false);
}

export function BTFeatureDefinitionResponse1617FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureDefinitionResponse1617 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'feature': !exists(json, 'feature') ? undefined : BTMFeature134FromJSON(json['feature']),
        'featureState': !exists(json, 'featureState') ? undefined : BTFeatureState1688FromJSON(json['featureState']),
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureDefinitionResponse1617ToJSON(value?: BTFeatureDefinitionResponse1617 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'feature': BTMFeature134ToJSON(value.feature),
        'featureState': BTFeatureState1688ToJSON(value.featureState),
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

