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
/**
 * The location at which the new element should be inserted.
 * @export
 * @interface BTElementLocationParams
 */
export interface BTElementLocationParams {
    /**
     * The id of an element which provides context for the position value specified.
     * @type {string}
     * @memberof BTElementLocationParams
     */
    elementId?: string;
    /**
     * An indicator for the relative placement of the new element. If elementId is specified, a negative number indicates insertion prior to the element and a non-negative number indicates insertion following the element. If no elementId is specified, a negative value indicates insertion at the end of the element list and a non-negative number indicates insertion at the start of the element list.
     * @type {number}
     * @memberof BTElementLocationParams
     */
    position?: number;
}

/**
 * Check if a given object implements the BTElementLocationParams interface.
 */
export function instanceOfBTElementLocationParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTElementLocationParamsFromJSON(json: any): BTElementLocationParams {
    return BTElementLocationParamsFromJSONTyped(json, false);
}

export function BTElementLocationParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTElementLocationParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'position': !exists(json, 'position') ? undefined : json['position'],
    };
}

export function BTElementLocationParamsToJSON(value?: BTElementLocationParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elementId': value.elementId,
        'position': value.position,
    };
}

