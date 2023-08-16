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
import type { BTInsertableInfo } from './BTInsertableInfo';
import {
    BTInsertableInfoFromJSON,
    BTInsertableInfoFromJSONTyped,
    BTInsertableInfoToJSON,
} from './BTInsertableInfo';

/**
 * A list of resources that typically supports paging.
 * @export
 * @interface BTListResponseBTInsertableInfo
 */
export interface BTListResponseBTInsertableInfo {
    /**
     * URI for current page of resources.
     * @type {string}
     * @memberof BTListResponseBTInsertableInfo
     */
    href?: string;
    /**
     * Array of items in the current page.
     * @type {Array<BTInsertableInfo>}
     * @memberof BTListResponseBTInsertableInfo
     */
    items?: Array<BTInsertableInfo>;
    /**
     * URI for next page of the resources if more are available.
     * @type {string}
     * @memberof BTListResponseBTInsertableInfo
     */
    next?: string;
    /**
     * URI for previous page of the resources.
     * @type {string}
     * @memberof BTListResponseBTInsertableInfo
     */
    previous?: string;
}

/**
 * Check if a given object implements the BTListResponseBTInsertableInfo interface.
 */
export function instanceOfBTListResponseBTInsertableInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTListResponseBTInsertableInfoFromJSON(json: any): BTListResponseBTInsertableInfo {
    return BTListResponseBTInsertableInfoFromJSONTyped(json, false);
}

export function BTListResponseBTInsertableInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTListResponseBTInsertableInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTInsertableInfoFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
    };
}

export function BTListResponseBTInsertableInfoToJSON(value?: BTListResponseBTInsertableInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTInsertableInfoToJSON)),
        'next': value.next,
        'previous': value.previous,
    };
}

