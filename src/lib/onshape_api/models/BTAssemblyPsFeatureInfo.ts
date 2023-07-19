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
/**
 * 
 * @export
 * @interface BTAssemblyPsFeatureInfo
 */
export interface BTAssemblyPsFeatureInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    documentMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    documentVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    featureId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    featureType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    fullConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPsFeatureInfo
     */
    revision?: string;
}

/**
 * Check if a given object implements the BTAssemblyPsFeatureInfo interface.
 */
export function instanceOfBTAssemblyPsFeatureInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyPsFeatureInfoFromJSON(json: any): BTAssemblyPsFeatureInfo {
    return BTAssemblyPsFeatureInfoFromJSONTyped(json, false);
}

export function BTAssemblyPsFeatureInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyPsFeatureInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentMicroversion': !exists(json, 'documentMicroversion') ? undefined : json['documentMicroversion'],
        'documentVersion': !exists(json, 'documentVersion') ? undefined : json['documentVersion'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'featureType': !exists(json, 'featureType') ? undefined : json['featureType'],
        'fullConfiguration': !exists(json, 'fullConfiguration') ? undefined : json['fullConfiguration'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
    };
}

export function BTAssemblyPsFeatureInfoToJSON(value?: BTAssemblyPsFeatureInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': value._configuration,
        'documentId': value.documentId,
        'documentMicroversion': value.documentMicroversion,
        'documentVersion': value.documentVersion,
        'elementId': value.elementId,
        'featureId': value.featureId,
        'featureType': value.featureType,
        'fullConfiguration': value.fullConfiguration,
        'partNumber': value.partNumber,
        'revision': value.revision,
    };
}

