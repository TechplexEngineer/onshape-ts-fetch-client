/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UpdateParams } from './UpdateParams';
import {
    UpdateParamsFromJSON,
    UpdateParamsFromJSONTyped,
    UpdateParamsToJSON,
} from './UpdateParams';

/**
 * 
 * @export
 * @interface BTUpdateReferenceParams
 */
export interface BTUpdateReferenceParams {
    /**
     * 
     * @type {string}
     * @memberof BTUpdateReferenceParams
     */
    connectionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUpdateReferenceParams
     */
    editDescription?: string;
    /**
     * 
     * @type {Array<UpdateParams>}
     * @memberof BTUpdateReferenceParams
     */
    referenceUpdates?: Array<UpdateParams>;
}

/**
 * Check if a given object implements the BTUpdateReferenceParams interface.
 */
export function instanceOfBTUpdateReferenceParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUpdateReferenceParamsFromJSON(json: any): BTUpdateReferenceParams {
    return BTUpdateReferenceParamsFromJSONTyped(json, false);
}

export function BTUpdateReferenceParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUpdateReferenceParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connectionId': !exists(json, 'connectionId') ? undefined : json['connectionId'],
        'editDescription': !exists(json, 'editDescription') ? undefined : json['editDescription'],
        'referenceUpdates': !exists(json, 'referenceUpdates') ? undefined : ((json['referenceUpdates'] as Array<any>).map(UpdateParamsFromJSON)),
    };
}

export function BTUpdateReferenceParamsToJSON(value?: BTUpdateReferenceParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connectionId': value.connectionId,
        'editDescription': value.editDescription,
        'referenceUpdates': value.referenceUpdates === undefined ? undefined : ((value.referenceUpdates as Array<any>).map(UpdateParamsToJSON)),
    };
}

