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
import type { BTObjectId } from './BTObjectId';
import {
    BTObjectIdFromJSON,
    BTObjectIdFromJSONTyped,
    BTObjectIdToJSON,
} from './BTObjectId';

/**
 * 
 * @export
 * @interface BTMAssemblyFeatureFolder2543AllOf
 */
export interface BTMAssemblyFeatureFolder2543AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMAssemblyFeatureFolder2543AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeatureFolder2543AllOf
     */
    folderEnd?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeatureFolder2543AllOf
     */
    folderStart?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMAssemblyFeatureFolder2543AllOf
     */
    startNodeId?: string;
    /**
     * 
     * @type {BTObjectId}
     * @memberof BTMAssemblyFeatureFolder2543AllOf
     */
    startNodeIdRaw?: BTObjectId;
}

/**
 * Check if a given object implements the BTMAssemblyFeatureFolder2543AllOf interface.
 */
export function instanceOfBTMAssemblyFeatureFolder2543AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMAssemblyFeatureFolder2543AllOfFromJSON(json: any): BTMAssemblyFeatureFolder2543AllOf {
    return BTMAssemblyFeatureFolder2543AllOfFromJSONTyped(json, false);
}

export function BTMAssemblyFeatureFolder2543AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMAssemblyFeatureFolder2543AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'folderEnd': !exists(json, 'folderEnd') ? undefined : json['folderEnd'],
        'folderStart': !exists(json, 'folderStart') ? undefined : json['folderStart'],
        'startNodeId': !exists(json, 'startNodeId') ? undefined : json['startNodeId'],
        'startNodeIdRaw': !exists(json, 'startNodeIdRaw') ? undefined : BTObjectIdFromJSON(json['startNodeIdRaw']),
    };
}

export function BTMAssemblyFeatureFolder2543AllOfToJSON(value?: BTMAssemblyFeatureFolder2543AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'folderEnd': value.folderEnd,
        'folderStart': value.folderStart,
        'startNodeId': value.startNodeId,
        'startNodeIdRaw': BTObjectIdToJSON(value.startNodeIdRaw),
    };
}

