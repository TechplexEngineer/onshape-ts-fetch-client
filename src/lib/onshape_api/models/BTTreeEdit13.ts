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
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';
import type { EditType } from './EditType';
import {
    EditTypeFromJSON,
    EditTypeFromJSONTyped,
    EditTypeToJSON,
} from './EditType';

/**
 * 
 * @export
 * @interface BTTreeEdit13
 */
export interface BTTreeEdit13 {
    /**
     * 
     * @type {string}
     * @memberof BTTreeEdit13
     */
    btType?: string;
    /**
     * 
     * @type {EditType}
     * @memberof BTTreeEdit13
     */
    editType?: EditType;
    /**
     * 
     * @type {Array<BTTreeNode20>}
     * @memberof BTTreeEdit13
     */
    newNodes?: Array<BTTreeNode20>;
    /**
     * 
     * @type {boolean}
     * @memberof BTTreeEdit13
     */
    nothing?: boolean;
}

/**
 * Check if a given object implements the BTTreeEdit13 interface.
 */
export function instanceOfBTTreeEdit13(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTreeEdit13FromJSON(json: any): BTTreeEdit13 {
    return BTTreeEdit13FromJSONTyped(json, false);
}

export function BTTreeEdit13FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTreeEdit13 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'editType': !exists(json, 'editType') ? undefined : EditTypeFromJSON(json['editType']),
        'newNodes': !exists(json, 'newNodes') ? undefined : ((json['newNodes'] as Array<any>).map(BTTreeNode20FromJSON)),
        'nothing': !exists(json, 'nothing') ? undefined : json['nothing'],
    };
}

export function BTTreeEdit13ToJSON(value?: BTTreeEdit13 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'editType': EditTypeToJSON(value.editType),
        'newNodes': value.newNodes === undefined ? undefined : ((value.newNodes as Array<any>).map(BTTreeNode20ToJSON)),
        'nothing': value.nothing,
    };
}

