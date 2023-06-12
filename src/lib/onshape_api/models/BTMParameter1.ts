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
import {
     BTMDatabaseParameter2229FromJSONTyped,
     BTMParameterAppearance627FromJSONTyped,
     BTMParameterArray2025FromJSONTyped,
     BTMParameterBlobReference1679FromJSONTyped,
     BTMParameterBoolean144FromJSONTyped,
     BTMParameterConfigured2222FromJSONTyped,
     BTMParameterDerived864FromJSONTyped,
     BTMParameterEnum145FromJSONTyped,
     BTMParameterFeatureList1749FromJSONTyped,
     BTMParameterForeignId146FromJSONTyped,
     BTMParameterInvalid1664FromJSONTyped,
     BTMParameterLookupTablePath1419FromJSONTyped,
     BTMParameterMaterial1388FromJSONTyped,
     BTMParameterQuantity147FromJSONTyped,
     BTMParameterQueryList148FromJSONTyped,
     BTMParameterQueryWithOccurrenceList67FromJSONTyped,
     BTMParameterReference2434FromJSONTyped,
     BTMParameterString149FromJSONTyped,
     BTMReadOnlyParameter3800FromJSONTyped
} from './index';

/**
 * 
 * @export
 * @interface BTMParameter1
 */
export interface BTMParameter1 {
    /**
     * 
     * @type {string}
     * @memberof BTMParameter1
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameter1
     */
    importMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameter1
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameter1
     */
    parameterId?: string;
}

/**
 * Check if a given object implements the BTMParameter1 interface.
 */
export function instanceOfBTMParameter1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameter1FromJSON(json: any): BTMParameter1 {
    return BTMParameter1FromJSONTyped(json, false);
}

export function BTMParameter1FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameter1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMDatabaseParameter-2229') {
            return BTMDatabaseParameter2229FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterAppearance-627') {
            return BTMParameterAppearance627FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterArray-2025') {
            return BTMParameterArray2025FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterBlobReference-1679') {
            return BTMParameterBlobReference1679FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterBoolean-144') {
            return BTMParameterBoolean144FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterConfigured-2222') {
            return BTMParameterConfigured2222FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterDerived-864') {
            return BTMParameterDerived864FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterEnum-145') {
            return BTMParameterEnum145FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterFeatureList-1749') {
            return BTMParameterFeatureList1749FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterForeignId-146') {
            return BTMParameterForeignId146FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterInvalid-1664') {
            return BTMParameterInvalid1664FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterLookupTablePath-1419') {
            return BTMParameterLookupTablePath1419FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterMaterial-1388') {
            return BTMParameterMaterial1388FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterQuantity-147') {
            return BTMParameterQuantity147FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterQueryList-148') {
            return BTMParameterQueryList148FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterQueryWithOccurrenceList-67') {
            return BTMParameterQueryWithOccurrenceList67FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterReference-2434') {
            return BTMParameterReference2434FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMParameterString-149') {
            return BTMParameterString149FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMReadOnlyParameter-3800') {
            return BTMReadOnlyParameter3800FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
    };
}

export function BTMParameter1ToJSON(value?: BTMParameter1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'importMicroversion': value.importMicroversion,
        'nodeId': value.nodeId,
        'parameterId': value.parameterId,
    };
}
