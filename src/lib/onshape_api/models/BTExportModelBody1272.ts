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
import type { BTExportBodyProperties3559 } from './BTExportBodyProperties3559';
import {
    BTExportBodyProperties3559FromJSON,
    BTExportBodyProperties3559FromJSONTyped,
    BTExportBodyProperties3559ToJSON,
} from './BTExportBodyProperties3559';
import type { BTExportModelEdge1782 } from './BTExportModelEdge1782';
import {
    BTExportModelEdge1782FromJSON,
    BTExportModelEdge1782FromJSONTyped,
    BTExportModelEdge1782ToJSON,
} from './BTExportModelEdge1782';
import type { BTExportModelFace1363 } from './BTExportModelFace1363';
import {
    BTExportModelFace1363FromJSON,
    BTExportModelFace1363FromJSONTyped,
    BTExportModelFace1363ToJSON,
} from './BTExportModelFace1363';
import type { BTExportModelVertex858 } from './BTExportModelVertex858';
import {
    BTExportModelVertex858FromJSON,
    BTExportModelVertex858FromJSONTyped,
    BTExportModelVertex858ToJSON,
} from './BTExportModelVertex858';
import type { GBTBodyType } from './GBTBodyType';
import {
    GBTBodyTypeFromJSON,
    GBTBodyTypeFromJSONTyped,
    GBTBodyTypeToJSON,
} from './GBTBodyType';

/**
 * 
 * @export
 * @interface BTExportModelBody1272
 */
export interface BTExportModelBody1272 {
    /**
     * 
     * @type {string}
     * @memberof BTExportModelBody1272
     */
    btType?: string;
    /**
     * If type == COMPOSITE, indicates whether it is open or closed.
     * @type {boolean}
     * @memberof BTExportModelBody1272
     */
    closed?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTExportModelBody1272
     */
    constituentBodyIds?: Array<string>;
    /**
     * Indicates if there is a closed composite that consumes this body.
     * @type {boolean}
     * @memberof BTExportModelBody1272
     */
    consumedByComposite?: boolean;
    /**
     * 
     * @type {Array<BTExportModelEdge1782>}
     * @memberof BTExportModelBody1272
     */
    edges?: Array<BTExportModelEdge1782>;
    /**
     * 
     * @type {Array<BTExportModelFace1363>}
     * @memberof BTExportModelBody1272
     */
    faces?: Array<BTExportModelFace1363>;
    /**
     * 
     * @type {string}
     * @memberof BTExportModelBody1272
     */
    id?: string;
    /**
     * 
     * @type {BTExportBodyProperties3559}
     * @memberof BTExportModelBody1272
     */
    properties?: BTExportBodyProperties3559;
    /**
     * 
     * @type {GBTBodyType}
     * @memberof BTExportModelBody1272
     */
    type?: GBTBodyType;
    /**
     * 
     * @type {Array<BTExportModelVertex858>}
     * @memberof BTExportModelBody1272
     */
    vertices?: Array<BTExportModelVertex858>;
}

/**
 * Check if a given object implements the BTExportModelBody1272 interface.
 */
export function instanceOfBTExportModelBody1272(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelBody1272FromJSON(json: any): BTExportModelBody1272 {
    return BTExportModelBody1272FromJSONTyped(json, false);
}

export function BTExportModelBody1272FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelBody1272 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'closed': !exists(json, 'closed') ? undefined : json['closed'],
        'constituentBodyIds': !exists(json, 'constituentBodyIds') ? undefined : json['constituentBodyIds'],
        'consumedByComposite': !exists(json, 'consumedByComposite') ? undefined : json['consumedByComposite'],
        'edges': !exists(json, 'edges') ? undefined : ((json['edges'] as Array<any>).map(BTExportModelEdge1782FromJSON)),
        'faces': !exists(json, 'faces') ? undefined : ((json['faces'] as Array<any>).map(BTExportModelFace1363FromJSON)),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'properties': !exists(json, 'properties') ? undefined : BTExportBodyProperties3559FromJSON(json['properties']),
        'type': !exists(json, 'type') ? undefined : GBTBodyTypeFromJSON(json['type']),
        'vertices': !exists(json, 'vertices') ? undefined : ((json['vertices'] as Array<any>).map(BTExportModelVertex858FromJSON)),
    };
}

export function BTExportModelBody1272ToJSON(value?: BTExportModelBody1272 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'closed': value.closed,
        'constituentBodyIds': value.constituentBodyIds,
        'consumedByComposite': value.consumedByComposite,
        'edges': value.edges === undefined ? undefined : ((value.edges as Array<any>).map(BTExportModelEdge1782ToJSON)),
        'faces': value.faces === undefined ? undefined : ((value.faces as Array<any>).map(BTExportModelFace1363ToJSON)),
        'id': value.id,
        'properties': BTExportBodyProperties3559ToJSON(value.properties),
        'type': GBTBodyTypeToJSON(value.type),
        'vertices': value.vertices === undefined ? undefined : ((value.vertices as Array<any>).map(BTExportModelVertex858ToJSON)),
    };
}

