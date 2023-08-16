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
import type { BTExportTessellatedEdgesEdge1364 } from './BTExportTessellatedEdgesEdge1364';
import {
    BTExportTessellatedEdgesEdge1364FromJSON,
    BTExportTessellatedEdgesEdge1364FromJSONTyped,
    BTExportTessellatedEdgesEdge1364ToJSON,
} from './BTExportTessellatedEdgesEdge1364';

/**
 * 
 * @export
 * @interface BTExportTessellatedEdgesBody890AllOf
 */
export interface BTExportTessellatedEdgesBody890AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedEdgesBody890AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTExportTessellatedEdgesEdge1364>}
     * @memberof BTExportTessellatedEdgesBody890AllOf
     */
    edges?: Array<BTExportTessellatedEdgesEdge1364>;
}

/**
 * Check if a given object implements the BTExportTessellatedEdgesBody890AllOf interface.
 */
export function instanceOfBTExportTessellatedEdgesBody890AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedEdgesBody890AllOfFromJSON(json: any): BTExportTessellatedEdgesBody890AllOf {
    return BTExportTessellatedEdgesBody890AllOfFromJSONTyped(json, false);
}

export function BTExportTessellatedEdgesBody890AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedEdgesBody890AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'edges': !exists(json, 'edges') ? undefined : ((json['edges'] as Array<any>).map(BTExportTessellatedEdgesEdge1364FromJSON)),
    };
}

export function BTExportTessellatedEdgesBody890AllOfToJSON(value?: BTExportTessellatedEdgesBody890AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'edges': value.edges === undefined ? undefined : ((value.edges as Array<any>).map(BTExportTessellatedEdgesEdge1364ToJSON)),
    };
}

