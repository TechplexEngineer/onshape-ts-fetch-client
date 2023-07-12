/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTFSValue1888 } from './BTFSValue1888';
import {
    BTFSValue1888FromJSON,
    BTFSValue1888FromJSONTyped,
    BTFSValue1888ToJSON,
} from './BTFSValue1888';
import type { BTNotice227 } from './BTNotice227';
import {
    BTNotice227FromJSON,
    BTNotice227FromJSONTyped,
    BTNotice227ToJSON,
} from './BTNotice227';

/**
 * 
 * @export
 * @interface BTFeatureScriptEvalResponse1859
 */
export interface BTFeatureScriptEvalResponse1859 {
    /**
     * 
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    console?: string;
    /**
     * 
     * @type {number}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    libraryVersion?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    microversionSkew?: boolean;
    /**
     * 
     * @type {Array<BTNotice227>}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    notices?: Array<BTNotice227>;
    /**
     * 
     * @type {boolean}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    rejectMicroversionSkew?: boolean;
    /**
     * 
     * @type {BTFSValue1888}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    result?: BTFSValue1888;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    serializationVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFeatureScriptEvalResponse1859
     */
    sourceMicroversion?: string;
}

/**
 * Check if a given object implements the BTFeatureScriptEvalResponse1859 interface.
 */
export function instanceOfBTFeatureScriptEvalResponse1859(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFeatureScriptEvalResponse1859FromJSON(json: any): BTFeatureScriptEvalResponse1859 {
    return BTFeatureScriptEvalResponse1859FromJSONTyped(json, false);
}

export function BTFeatureScriptEvalResponse1859FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFeatureScriptEvalResponse1859 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'console': !exists(json, 'console') ? undefined : json['console'],
        'libraryVersion': !exists(json, 'libraryVersion') ? undefined : json['libraryVersion'],
        'microversionSkew': !exists(json, 'microversionSkew') ? undefined : json['microversionSkew'],
        'notices': !exists(json, 'notices') ? undefined : ((json['notices'] as Array<any>).map(BTNotice227FromJSON)),
        'rejectMicroversionSkew': !exists(json, 'rejectMicroversionSkew') ? undefined : json['rejectMicroversionSkew'],
        'result': !exists(json, 'result') ? undefined : BTFSValue1888FromJSON(json['result']),
        'serializationVersion': !exists(json, 'serializationVersion') ? undefined : json['serializationVersion'],
        'sourceMicroversion': !exists(json, 'sourceMicroversion') ? undefined : json['sourceMicroversion'],
    };
}

export function BTFeatureScriptEvalResponse1859ToJSON(value?: BTFeatureScriptEvalResponse1859 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'console': value.console,
        'libraryVersion': value.libraryVersion,
        'microversionSkew': value.microversionSkew,
        'notices': value.notices === undefined ? undefined : ((value.notices as Array<any>).map(BTNotice227ToJSON)),
        'rejectMicroversionSkew': value.rejectMicroversionSkew,
        'result': BTFSValue1888ToJSON(value.result),
        'serializationVersion': value.serializationVersion,
        'sourceMicroversion': value.sourceMicroversion,
    };
}

