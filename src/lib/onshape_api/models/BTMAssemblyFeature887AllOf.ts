/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';

/**
 * 
 * @export
 * @interface BTMAssemblyFeature887AllOf
 */
export interface BTMAssemblyFeature887AllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeature887AllOf
     */
    auxiliaryTreeFeature?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMAssemblyFeature887AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeature887AllOf
     */
    featureFolder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTMAssemblyFeature887AllOf
     */
    featureListFieldIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMAssemblyFeature887AllOf
     */
    fieldIndexForOwnedMateConnectors?: number;
    /**
     * 
     * @type {Array<BTMIndividualQueryWithOccurrenceBase904>}
     * @memberof BTMAssemblyFeature887AllOf
     */
    occurrenceQueriesFromAllConfigurations?: Array<BTMIndividualQueryWithOccurrenceBase904>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeature887AllOf
     */
    parametricInstanceFeature?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTMAssemblyFeature887AllOf
     */
    version?: number;
}

/**
 * Check if a given object implements the BTMAssemblyFeature887AllOf interface.
 */
export function instanceOfBTMAssemblyFeature887AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMAssemblyFeature887AllOfFromJSON(json: any): BTMAssemblyFeature887AllOf {
    return BTMAssemblyFeature887AllOfFromJSONTyped(json, false);
}

export function BTMAssemblyFeature887AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMAssemblyFeature887AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auxiliaryTreeFeature': !exists(json, 'auxiliaryTreeFeature') ? undefined : json['auxiliaryTreeFeature'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'featureFolder': !exists(json, 'featureFolder') ? undefined : json['featureFolder'],
        'featureListFieldIndex': !exists(json, 'featureListFieldIndex') ? undefined : json['featureListFieldIndex'],
        'fieldIndexForOwnedMateConnectors': !exists(json, 'fieldIndexForOwnedMateConnectors') ? undefined : json['fieldIndexForOwnedMateConnectors'],
        'occurrenceQueriesFromAllConfigurations': !exists(json, 'occurrenceQueriesFromAllConfigurations') ? undefined : ((json['occurrenceQueriesFromAllConfigurations'] as Array<any>).map(BTMIndividualQueryWithOccurrenceBase904FromJSON)),
        'parametricInstanceFeature': !exists(json, 'parametricInstanceFeature') ? undefined : json['parametricInstanceFeature'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BTMAssemblyFeature887AllOfToJSON(value?: BTMAssemblyFeature887AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auxiliaryTreeFeature': value.auxiliaryTreeFeature,
        'btType': value.btType,
        'featureFolder': value.featureFolder,
        'featureListFieldIndex': value.featureListFieldIndex,
        'fieldIndexForOwnedMateConnectors': value.fieldIndexForOwnedMateConnectors,
        'occurrenceQueriesFromAllConfigurations': value.occurrenceQueriesFromAllConfigurations === undefined ? undefined : ((value.occurrenceQueriesFromAllConfigurations as Array<any>).map(BTMIndividualQueryWithOccurrenceBase904ToJSON)),
        'parametricInstanceFeature': value.parametricInstanceFeature,
        'version': value.version,
    };
}

