/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
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
import type { BTMImport136 } from './BTMImport136';
import {
    BTMImport136FromJSON,
    BTMImport136FromJSONTyped,
    BTMImport136ToJSON,
} from './BTMImport136';

/**
 * 
 * @export
 * @interface BTFeatureListResponse2457
 */
export interface BTFeatureListResponse2457 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureListResponse2457
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTFeatureListResponse2457
     */
    defaultFeatures?: Array<BTMFeature134>;
    /**
     * 
     * @type {{ [key: string]: BTFeatureState1688; }}
     * @memberof BTFeatureListResponse2457
     */
    featureStates?: { [key: string]: BTFeatureState1688; };
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTFeatureListResponse2457
     */
    features?: Array<BTMFeature134>;
    /**
     * 
     * @type {Array<BTMImport136>}
     * @memberof BTFeatureListResponse2457
     */
    imports?: Array<BTMImport136>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureListResponse2457
     */
    isComplete?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureListResponse2457
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureListResponse2457
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureListResponse2457
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureListResponse2457
     */
    rollbackIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureListResponse2457
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureListResponse2457
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureListResponse2457 interface.
 */
export function instanceOfBTFeatureListResponse2457(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureListResponse2457FromJSON(json: any): BTFeatureListResponse2457 {
    return BTFeatureListResponse2457FromJSONTyped(json, false);
}

export function BTFeatureListResponse2457FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureListResponse2457 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultFeatures': !exists(json, 'defaultFeatures') ? undefined : ((json['defaultFeatures'] as Array<any>).map(BTMFeature134FromJSON)),
        'featureStates': !exists(json, 'featureStates') ? undefined : (mapValues(json['featureStates'], BTFeatureState1688FromJSON)),
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(BTMFeature134FromJSON)),
        'imports': !exists(json, 'imports') ? undefined : ((json['imports'] as Array<any>).map(BTMImport136FromJSON)),
        'isComplete': !exists(json, 'isComplete') ? undefined : json['isComplete'],
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'rollbackIndex': !exists(json, 'rollbackIndex') ? undefined : json['rollbackIndex'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureListResponse2457ToJSON(value?: BTFeatureListResponse2457 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultFeatures': value.defaultFeatures === undefined ? undefined : ((value.defaultFeatures as Array<any>).map(BTMFeature134ToJSON)),
        'featureStates': value.featureStates === undefined ? undefined : (mapValues(value.featureStates, BTFeatureState1688ToJSON)),
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(BTMFeature134ToJSON)),
        'imports': value.imports === undefined ? undefined : ((value.imports as Array<any>).map(BTMImport136ToJSON)),
        'isComplete': value.isComplete,
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'rollbackIndex': value.rollbackIndex,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

