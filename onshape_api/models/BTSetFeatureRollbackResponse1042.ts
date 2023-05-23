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
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';

/**
 * 
 * @export
 * @interface BTSetFeatureRollbackResponse1042
 */
export interface BTSetFeatureRollbackResponse1042 {
    /**
     * 
     * @type {string}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    libraryVersion?: number;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {boolean}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    rollbackIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSetFeatureRollbackResponse1042
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTSetFeatureRollbackResponse1042 interface.
 */
export function instanceOfBTSetFeatureRollbackResponse1042(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSetFeatureRollbackResponse1042FromJSON(json: any): BTSetFeatureRollbackResponse1042 {
    return BTSetFeatureRollbackResponse1042FromJSONTyped(json, false);
}

export function BTSetFeatureRollbackResponse1042FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSetFeatureRollbackResponse1042 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'rollbackIndex': !exists(json, 'rollbackIndex') ? undefined : json['rollbackIndex'],
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTSetFeatureRollbackResponse1042ToJSON(value?: BTSetFeatureRollbackResponse1042 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'libraryVersion': value.libraryVersion,
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'microversionSkew': value.microversionSkew,
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'rollbackIndex': value.rollbackIndex,
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}
