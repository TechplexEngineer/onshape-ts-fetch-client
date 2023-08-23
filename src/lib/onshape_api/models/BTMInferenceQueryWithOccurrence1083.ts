/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20965-e01b1f4d96d1
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTMIndividualQueryWithOccurrence811 } from './BTMIndividualQueryWithOccurrence811';
import {
    BTMIndividualQueryWithOccurrence811FromJSON,
    BTMIndividualQueryWithOccurrence811FromJSONTyped,
    BTMIndividualQueryWithOccurrence811ToJSON,
} from './BTMIndividualQueryWithOccurrence811';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { GBTEntityInferenceType } from './GBTEntityInferenceType';
import {
    GBTEntityInferenceTypeFromJSON,
    GBTEntityInferenceTypeFromJSONTyped,
    GBTEntityInferenceTypeToJSON,
} from './GBTEntityInferenceType';

/**
 * 
 * @export
 * @interface BTMInferenceQueryWithOccurrence1083
 */
export interface BTMInferenceQueryWithOccurrence1083 extends BTMIndividualQueryWithOccurrence811 {
    /**
     * 
     * @type {string}
     * @memberof BTMInferenceQueryWithOccurrence1083
     */
    btType?: string;
    /**
     * 
     * @type {GBTEntityInferenceType}
     * @memberof BTMInferenceQueryWithOccurrence1083
     */
    inferenceType?: GBTEntityInferenceType;
    /**
     * 
     * @type {string}
     * @memberof BTMInferenceQueryWithOccurrence1083
     */
    secondDeterministicId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMInferenceQueryWithOccurrence1083
     */
    secondEntityQuery?: string;
}

/**
 * Check if a given object implements the BTMInferenceQueryWithOccurrence1083 interface.
 */
export function instanceOfBTMInferenceQueryWithOccurrence1083(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMInferenceQueryWithOccurrence1083FromJSON(json: any): BTMInferenceQueryWithOccurrence1083 {
    return BTMInferenceQueryWithOccurrence1083FromJSONTyped(json, false);
}

export function BTMInferenceQueryWithOccurrence1083FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMInferenceQueryWithOccurrence1083 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMIndividualQueryWithOccurrence811FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'inferenceType': !exists(json, 'inferenceType') ? undefined : GBTEntityInferenceTypeFromJSON(json['inferenceType']),
        'secondDeterministicId': !exists(json, 'secondDeterministicId') ? undefined : json['secondDeterministicId'],
        'secondEntityQuery': !exists(json, 'secondEntityQuery') ? undefined : json['secondEntityQuery'],
    };
}

export function BTMInferenceQueryWithOccurrence1083ToJSON(value?: BTMInferenceQueryWithOccurrence1083 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMIndividualQueryWithOccurrence811ToJSON(value),
        'btType': value.btType,
        'inferenceType': GBTEntityInferenceTypeToJSON(value.inferenceType),
        'secondDeterministicId': value.secondDeterministicId,
        'secondEntityQuery': value.secondEntityQuery,
    };
}

