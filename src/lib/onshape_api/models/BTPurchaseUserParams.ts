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
/**
 * 
 * @export
 * @interface BTPurchaseUserParams
 */
export interface BTPurchaseUserParams {
    /**
     * 
     * @type {number}
     * @memberof BTPurchaseUserParams
     */
    consumedQuantity?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseUserParams
     */
    purchaseId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPurchaseUserParams
     */
    userId?: string;
}

/**
 * Check if a given object implements the BTPurchaseUserParams interface.
 */
export function instanceOfBTPurchaseUserParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPurchaseUserParamsFromJSON(json: any): BTPurchaseUserParams {
    return BTPurchaseUserParamsFromJSONTyped(json, false);
}

export function BTPurchaseUserParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPurchaseUserParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consumedQuantity': !exists(json, 'consumedQuantity') ? undefined : json['consumedQuantity'],
        'purchaseId': !exists(json, 'purchaseId') ? undefined : json['purchaseId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
    };
}

export function BTPurchaseUserParamsToJSON(value?: BTPurchaseUserParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consumedQuantity': value.consumedQuantity,
        'purchaseId': value.purchaseId,
        'userId': value.userId,
    };
}

