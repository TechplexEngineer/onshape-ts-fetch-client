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
import type { BTElementLibraryReferenceData3133 } from './BTElementLibraryReferenceData3133';
import {
    BTElementLibraryReferenceData3133FromJSON,
    BTElementLibraryReferenceData3133FromJSONTyped,
    BTElementLibraryReferenceData3133ToJSON,
} from './BTElementLibraryReferenceData3133';

/**
 * 
 * @export
 * @interface BTMParameterReference2434AllOf
 */
export interface BTMParameterReference2434AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    elementId?: string;
    /**
     * 
     * @type {BTElementLibraryReferenceData3133}
     * @memberof BTMParameterReference2434AllOf
     */
    elementLibraryData?: BTElementLibraryReferenceData3133;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    featureScriptType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMParameterReference2434AllOf
     */
    ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    microversioId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterReference2434AllOf
     */
    namespace?: string;
}

/**
 * Check if a given object implements the BTMParameterReference2434AllOf interface.
 */
export function instanceOfBTMParameterReference2434AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterReference2434AllOfFromJSON(json: any): BTMParameterReference2434AllOf {
    return BTMParameterReference2434AllOfFromJSONTyped(json, false);
}

export function BTMParameterReference2434AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterReference2434AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentVersionId': !exists(json, 'documentVersionId') ? undefined : json['documentVersionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementLibraryData': !exists(json, 'elementLibraryData') ? undefined : BTElementLibraryReferenceData3133FromJSON(json['elementLibraryData']),
        'featureScriptType': !exists(json, 'featureScriptType') ? undefined : json['featureScriptType'],
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'microversioId': !exists(json, 'microversioId') ? undefined : json['microversioId'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function BTMParameterReference2434AllOfToJSON(value?: BTMParameterReference2434AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'documentId': value.documentId,
        'documentVersionId': value.documentVersionId,
        'elementId': value.elementId,
        'elementLibraryData': BTElementLibraryReferenceData3133ToJSON(value.elementLibraryData),
        'featureScriptType': value.featureScriptType,
        'ids': value.ids,
        'microversioId': value.microversioId,
        'namespace': value.namespace,
    };
}

