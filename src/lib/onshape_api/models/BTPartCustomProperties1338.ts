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
/**
 * 
 * @export
 * @interface BTPartCustomProperties1338
 */
export interface BTPartCustomProperties1338 {
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    productLine?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    project?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTPartCustomProperties1338
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    tessellationSetting?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    title1?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    title2?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    title3?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartCustomProperties1338
     */
    vendor?: string;
}

/**
 * Check if a given object implements the BTPartCustomProperties1338 interface.
 */
export function instanceOfBTPartCustomProperties1338(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartCustomProperties1338FromJSON(json: any): BTPartCustomProperties1338 {
    return BTPartCustomProperties1338FromJSONTyped(json, false);
}

export function BTPartCustomProperties1338FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartCustomProperties1338 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'productLine': !exists(json, 'productLine') ? undefined : json['productLine'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'tessellationSetting': !exists(json, 'tessellationSetting') ? undefined : json['tessellationSetting'],
        'title1': !exists(json, 'title1') ? undefined : json['title1'],
        'title2': !exists(json, 'title2') ? undefined : json['title2'],
        'title3': !exists(json, 'title3') ? undefined : json['title3'],
        'vendor': !exists(json, 'vendor') ? undefined : json['vendor'],
    };
}

export function BTPartCustomProperties1338ToJSON(value?: BTPartCustomProperties1338 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'description': value.description,
        'partNumber': value.partNumber,
        'productLine': value.productLine,
        'project': value.project,
        'properties': value.properties,
        'revision': value.revision,
        'tessellationSetting': value.tessellationSetting,
        'title1': value.title1,
        'title2': value.title2,
        'title3': value.title3,
        'vendor': value.vendor,
    };
}

