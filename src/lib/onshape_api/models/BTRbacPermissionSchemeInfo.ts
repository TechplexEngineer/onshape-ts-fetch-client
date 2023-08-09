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
import type { Entry } from './Entry';
import {
    EntryFromJSON,
    EntryFromJSONTyped,
    EntryToJSON,
} from './Entry';

/**
 * 
 * @export
 * @interface BTRbacPermissionSchemeInfo
 */
export interface BTRbacPermissionSchemeInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTRbacPermissionSchemeInfo
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    description?: string;
    /**
     * 
     * @type {Array<Entry>}
     * @memberof BTRbacPermissionSchemeInfo
     */
    entries?: Array<Entry>;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRbacPermissionSchemeInfo
     */
    predefinedPermissionScheme?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTRbacPermissionSchemeInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTRbacPermissionSchemeInfo interface.
 */
export function instanceOfBTRbacPermissionSchemeInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRbacPermissionSchemeInfoFromJSON(json: any): BTRbacPermissionSchemeInfo {
    return BTRbacPermissionSchemeInfoFromJSONTyped(json, false);
}

export function BTRbacPermissionSchemeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRbacPermissionSchemeInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(EntryFromJSON)),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'predefinedPermissionScheme': !exists(json, 'predefinedPermissionScheme') ? undefined : json['predefinedPermissionScheme'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTRbacPermissionSchemeInfoToJSON(value?: BTRbacPermissionSchemeInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'description': value.description,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(EntryToJSON)),
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'predefinedPermissionScheme': value.predefinedPermissionScheme,
        'viewRef': value.viewRef,
    };
}

