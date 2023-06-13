/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAliasEntryInfo } from './BTAliasEntryInfo';
import {
    BTAliasEntryInfoFromJSON,
    BTAliasEntryInfoFromJSONTyped,
    BTAliasEntryInfoToJSON,
} from './BTAliasEntryInfo';
import type { BTIdentityInfo } from './BTIdentityInfo';
import {
    BTIdentityInfoFromJSON,
    BTIdentityInfoFromJSONTyped,
    BTIdentityInfoToJSON,
} from './BTIdentityInfo';

/**
 * 
 * @export
 * @interface BTAliasInfo
 */
export interface BTAliasInfo {
    /**
     * 
     * @type {string}
     * @memberof BTAliasInfo
     */
    companyId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTAliasInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTAliasInfo
     */
    description?: string;
    /**
     * 
     * @type {Array<BTAliasEntryInfo>}
     * @memberof BTAliasInfo
     */
    entries?: Array<BTAliasEntryInfo>;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTAliasInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTAliasInfo
     */
    id?: string;
    /**
     * 
     * @type {Array<BTIdentityInfo>}
     * @memberof BTAliasInfo
     */
    identities?: Array<BTIdentityInfo>;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTAliasInfo
     */
    name?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTAliasInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTAliasInfo interface.
 */
export function instanceOfBTAliasInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAliasInfoFromJSON(json: any): BTAliasInfo {
    return BTAliasInfoFromJSONTyped(json, false);
}

export function BTAliasInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAliasInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(BTAliasEntryInfoFromJSON)),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identities': !exists(json, 'identities') ? undefined : ((json['identities'] as Array<any>).map(BTIdentityInfoFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTAliasInfoToJSON(value?: BTAliasInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'companyId': value.companyId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(BTAliasEntryInfoToJSON)),
        'href': value.href,
        'id': value.id,
        'identities': value.identities === undefined ? undefined : ((value.identities as Array<any>).map(BTIdentityInfoToJSON)),
        'name': value.name,
        'viewRef': value.viewRef,
    };
}

