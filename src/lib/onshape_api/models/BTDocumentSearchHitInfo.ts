/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTLegacySearchHit } from './BTLegacySearchHit';
import {
    BTLegacySearchHitFromJSON,
    BTLegacySearchHitFromJSONTyped,
    BTLegacySearchHitToJSON,
} from './BTLegacySearchHit';
import type { BTSearchEntityType } from './BTSearchEntityType';
import {
    BTSearchEntityTypeFromJSON,
    BTSearchEntityTypeFromJSONTyped,
    BTSearchEntityTypeToJSON,
} from './BTSearchEntityType';

/**
 * 
 * @export
 * @interface BTDocumentSearchHitInfo
 */
export interface BTDocumentSearchHitInfo {
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    elementName?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BTDocumentSearchHitInfo
     */
    highlightedFields?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {BTLegacySearchHit}
     * @memberof BTDocumentSearchHitInfo
     */
    hit?: BTLegacySearchHit;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    hitId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    projectId?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BTDocumentSearchHitInfo
     */
    sourceMap?: { [key: string]: object; };
    /**
     * 
     * @type {BTSearchEntityType}
     * @memberof BTDocumentSearchHitInfo
     */
    type?: BTSearchEntityType;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentSearchHitInfo
     */
    versionOrWorkspaceName?: string;
}

/**
 * Check if a given object implements the BTDocumentSearchHitInfo interface.
 */
export function instanceOfBTDocumentSearchHitInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentSearchHitInfoFromJSON(json: any): BTDocumentSearchHitInfo {
    return BTDocumentSearchHitInfoFromJSONTyped(json, false);
}

export function BTDocumentSearchHitInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSearchHitInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementName': !exists(json, 'elementName') ? undefined : json['elementName'],
        'highlightedFields': !exists(json, 'highlightedFields') ? undefined : json['highlightedFields'],
        'hit': !exists(json, 'hit') ? undefined : BTLegacySearchHitFromJSON(json['hit']),
        'hitId': !exists(json, 'hitId') ? undefined : json['hitId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'sourceMap': !exists(json, 'sourceMap') ? undefined : json['sourceMap'],
        'type': !exists(json, 'type') ? undefined : BTSearchEntityTypeFromJSON(json['type']),
        'versionOrWorkspaceName': !exists(json, 'versionOrWorkspaceName') ? undefined : json['versionOrWorkspaceName'],
    };
}

export function BTDocumentSearchHitInfoToJSON(value?: BTDocumentSearchHitInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'elementName': value.elementName,
        'highlightedFields': value.highlightedFields,
        'hit': BTLegacySearchHitToJSON(value.hit),
        'hitId': value.hitId,
        'name': value.name,
        'projectId': value.projectId,
        'sourceMap': value.sourceMap,
        'type': BTSearchEntityTypeToJSON(value.type),
        'versionOrWorkspaceName': value.versionOrWorkspaceName,
    };
}

