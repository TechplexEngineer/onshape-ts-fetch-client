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
import type { BTStringNodeWrapper4224 } from './BTStringNodeWrapper4224';
import {
    BTStringNodeWrapper4224FromJSON,
    BTStringNodeWrapper4224FromJSONTyped,
    BTStringNodeWrapper4224ToJSON,
} from './BTStringNodeWrapper4224';

/**
 * 
 * @export
 * @interface BTIndividualTableProperties3760
 */
export interface BTIndividualTableProperties3760 {
    /**
     * 
     * @type {string}
     * @memberof BTIndividualTableProperties3760
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTStringNodeWrapper4224>}
     * @memberof BTIndividualTableProperties3760
     */
    hiddenColumns?: Array<BTStringNodeWrapper4224>;
    /**
     * 
     * @type {string}
     * @memberof BTIndividualTableProperties3760
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTStringNodeWrapper4224>}
     * @memberof BTIndividualTableProperties3760
     */
    order?: Array<BTStringNodeWrapper4224>;
    /**
     * 
     * @type {string}
     * @memberof BTIndividualTableProperties3760
     */
    tableNodeId?: string;
}

/**
 * Check if a given object implements the BTIndividualTableProperties3760 interface.
 */
export function instanceOfBTIndividualTableProperties3760(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTIndividualTableProperties3760FromJSON(json: any): BTIndividualTableProperties3760 {
    return BTIndividualTableProperties3760FromJSONTyped(json, false);
}

export function BTIndividualTableProperties3760FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTIndividualTableProperties3760 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'hiddenColumns': !exists(json, 'hiddenColumns') ? undefined : ((json['hiddenColumns'] as Array<any>).map(BTStringNodeWrapper4224FromJSON)),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'order': !exists(json, 'order') ? undefined : ((json['order'] as Array<any>).map(BTStringNodeWrapper4224FromJSON)),
        'tableNodeId': !exists(json, 'tableNodeId') ? undefined : json['tableNodeId'],
    };
}

export function BTIndividualTableProperties3760ToJSON(value?: BTIndividualTableProperties3760 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'hiddenColumns': value.hiddenColumns === undefined ? undefined : ((value.hiddenColumns as Array<any>).map(BTStringNodeWrapper4224ToJSON)),
        'nodeId': value.nodeId,
        'order': value.order === undefined ? undefined : ((value.order as Array<any>).map(BTStringNodeWrapper4224ToJSON)),
        'tableNodeId': value.tableNodeId,
    };
}

