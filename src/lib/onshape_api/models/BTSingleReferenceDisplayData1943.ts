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
import type { GBTBSFeatureVisibility } from './GBTBSFeatureVisibility';
import {
    GBTBSFeatureVisibilityFromJSON,
    GBTBSFeatureVisibilityFromJSONTyped,
    GBTBSFeatureVisibilityToJSON,
} from './GBTBSFeatureVisibility';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

import {
     BTSingleAssemblyReferenceDisplayData1557FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTSingleReferenceDisplayData1943
 */
export interface BTSingleReferenceDisplayData1943 {
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    contextWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    documentId?: string;
    /**
     * 
     * @type {GBTErrorStringEnum}
     * @memberof BTSingleReferenceDisplayData1943
     */
    error?: GBTErrorStringEnum;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    errorMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSingleReferenceDisplayData1943
     */
    isTransient?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    referenceName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTSingleReferenceDisplayData1943
     */
    referenceNodeId?: string;
    /**
     * 
     * @type {GBTBSFeatureVisibility}
     * @memberof BTSingleReferenceDisplayData1943
     */
    visibility?: GBTBSFeatureVisibility;
}

/**
 * Check if a given object implements the BTSingleReferenceDisplayData1943 interface.
 */
export function instanceOfBTSingleReferenceDisplayData1943(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSingleReferenceDisplayData1943FromJSON(json: any): BTSingleReferenceDisplayData1943 {
    return BTSingleReferenceDisplayData1943FromJSONTyped(json, false);
}

export function BTSingleReferenceDisplayData1943FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSingleReferenceDisplayData1943 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTSingleAssemblyReferenceDisplayData-1557') {
            return BTSingleAssemblyReferenceDisplayData1557FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'contextWorkspaceId': !exists(json, 'contextWorkspaceId') ? undefined : json['contextWorkspaceId'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'error': !exists(json, 'error') ? undefined : GBTErrorStringEnumFromJSON(json['error']),
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'isTransient': !exists(json, 'isTransient') ? undefined : json['isTransient'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'referenceNodeId': !exists(json, 'referenceNodeId') ? undefined : json['referenceNodeId'],
        'visibility': !exists(json, 'visibility') ? undefined : GBTBSFeatureVisibilityFromJSON(json['visibility']),
    };
}

export function BTSingleReferenceDisplayData1943ToJSON(value?: BTSingleReferenceDisplayData1943 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'contextWorkspaceId': value.contextWorkspaceId,
        'documentId': value.documentId,
        'error': GBTErrorStringEnumToJSON(value.error),
        'errorMessage': value.errorMessage,
        'isTransient': value.isTransient,
        'name': value.name,
        'referenceName': value.referenceName,
        'referenceNodeId': value.referenceNodeId,
        'visibility': GBTBSFeatureVisibilityToJSON(value.visibility),
    };
}

