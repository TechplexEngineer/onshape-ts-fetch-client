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
/**
 * 
 * @export
 * @interface BTPlanSubscriberInfo
 */
export interface BTPlanSubscriberInfo {
    /**
     * 
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    firstName?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    lastName?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPlanSubscriberInfo
     */
    state?: number;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTPlanSubscriberInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTPlanSubscriberInfo interface.
 */
export function instanceOfBTPlanSubscriberInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPlanSubscriberInfoFromJSON(json: any): BTPlanSubscriberInfo {
    return BTPlanSubscriberInfoFromJSONTyped(json, false);
}

export function BTPlanSubscriberInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPlanSubscriberInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTPlanSubscriberInfoToJSON(value?: BTPlanSubscriberInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'firstName': value.firstName,
        'href': value.href,
        'id': value.id,
        'image': value.image,
        'lastName': value.lastName,
        'name': value.name,
        'state': value.state,
        'viewRef': value.viewRef,
    };
}

