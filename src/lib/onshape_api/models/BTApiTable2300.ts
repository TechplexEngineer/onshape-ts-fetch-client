/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTApiTableColumn3141 } from './BTApiTableColumn3141';
import {
    BTApiTableColumn3141FromJSON,
    BTApiTableColumn3141FromJSONTyped,
    BTApiTableColumn3141ToJSON,
} from './BTApiTableColumn3141';
import type { BTApiTableRow2915 } from './BTApiTableRow2915';
import {
    BTApiTableRow2915FromJSON,
    BTApiTableRow2915FromJSONTyped,
    BTApiTableRow2915ToJSON,
} from './BTApiTableRow2915';

/**
 * 
 * @export
 * @interface BTApiTable2300
 */
export interface BTApiTable2300 {
    /**
     * 
     * @type {string}
     * @memberof BTApiTable2300
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTApiTableColumn3141>}
     * @memberof BTApiTable2300
     */
    columns?: Array<BTApiTableColumn3141>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTApiTable2300
     */
    entityIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTApiTable2300
     */
    id?: string;
    /**
     * 
     * @type {Array<BTApiTableRow2915>}
     * @memberof BTApiTable2300
     */
    rows?: Array<BTApiTableRow2915>;
    /**
     * 
     * @type {string}
     * @memberof BTApiTable2300
     */
    title?: string;
}

/**
 * Check if a given object implements the BTApiTable2300 interface.
 */
export function instanceOfBTApiTable2300(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTApiTable2300FromJSON(json: any): BTApiTable2300 {
    return BTApiTable2300FromJSONTyped(json, false);
}

export function BTApiTable2300FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTApiTable2300 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'columns': !exists(json, 'columns') ? undefined : ((json['columns'] as Array<any>).map(BTApiTableColumn3141FromJSON)),
        'entityIds': !exists(json, 'entityIds') ? undefined : json['entityIds'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'rows': !exists(json, 'rows') ? undefined : ((json['rows'] as Array<any>).map(BTApiTableRow2915FromJSON)),
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function BTApiTable2300ToJSON(value?: BTApiTable2300 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'columns': value.columns === undefined ? undefined : ((value.columns as Array<any>).map(BTApiTableColumn3141ToJSON)),
        'entityIds': value.entityIds,
        'id': value.id,
        'rows': value.rows === undefined ? undefined : ((value.rows as Array<any>).map(BTApiTableRow2915ToJSON)),
        'title': value.title,
    };
}

