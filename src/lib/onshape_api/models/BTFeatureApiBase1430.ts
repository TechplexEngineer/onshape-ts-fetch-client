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
import {
     BTAssemblyFeatureListResponse1174FromJSONTyped,
     BTConfigurationResponse2019FromJSONTyped,
     BTConfigurationUpdateCall2933FromJSONTyped,
     BTFeatureDefinitionCall1406FromJSONTyped,
     BTFeatureDefinitionResponse1617FromJSONTyped,
     BTFeatureListResponse2457FromJSONTyped,
     BTFeatureScriptEvalCall2377FromJSONTyped,
     BTFeatureScriptEvalResponse1859FromJSONTyped,
     BTFeatureSpecsResponse664FromJSONTyped,
     BTFeatureStudioContents2239FromJSONTyped,
     BTSetFeatureRollbackCall1899FromJSONTyped,
     BTSetFeatureRollbackResponse1042FromJSONTyped,
     BTUpdateFeaturesCall1748FromJSONTyped,
     BTUpdateFeaturesResponse1333FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTFeatureApiBase1430
 */
export interface BTFeatureApiBase1430 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureApiBase1430
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureApiBase1430
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureApiBase1430
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureApiBase1430
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureApiBase1430
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureApiBase1430
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureApiBase1430 interface.
 */
export function instanceOfBTFeatureApiBase1430(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureApiBase1430FromJSON(json: any): BTFeatureApiBase1430 {
    return BTFeatureApiBase1430FromJSONTyped(json, false);
}

export function BTFeatureApiBase1430FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureApiBase1430 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblyFeatureListResponse-1174') {
            return BTAssemblyFeatureListResponse1174FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfigurationResponse-2019') {
            return BTConfigurationResponse2019FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfigurationUpdateCall-2933') {
            return BTConfigurationUpdateCall2933FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureDefinitionCall-1406') {
            return BTFeatureDefinitionCall1406FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureDefinitionResponse-1617') {
            return BTFeatureDefinitionResponse1617FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureListResponse-2457') {
            return BTFeatureListResponse2457FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureScriptEvalCall-2377') {
            return BTFeatureScriptEvalCall2377FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureScriptEvalResponse-1859') {
            return BTFeatureScriptEvalResponse1859FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureSpecsResponse-664') {
            return BTFeatureSpecsResponse664FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureStudioContents-2239') {
            return BTFeatureStudioContents2239FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSetFeatureRollbackCall-1899') {
            return BTSetFeatureRollbackCall1899FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTSetFeatureRollbackResponse-1042') {
            return BTSetFeatureRollbackResponse1042FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTUpdateFeaturesCall-1748') {
            return BTUpdateFeaturesCall1748FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTUpdateFeaturesResponse-1333') {
            return BTUpdateFeaturesResponse1333FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureApiBase1430ToJSON(value?: BTFeatureApiBase1430 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

