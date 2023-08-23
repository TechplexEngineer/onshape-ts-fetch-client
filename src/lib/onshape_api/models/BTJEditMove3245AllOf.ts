/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20965-e01b1f4d96d1
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTJPath3073 } from './BTJPath3073';
import {
    BTJPath3073FromJSON,
    BTJPath3073FromJSONTyped,
    BTJPath3073ToJSON,
} from './BTJPath3073';

/**
 * 
 * @export
 * @interface BTJEditMove3245AllOf
 */
export interface BTJEditMove3245AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTJEditMove3245AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTJPath3073}
     * @memberof BTJEditMove3245AllOf
     */
    destinationPath?: BTJPath3073;
    /**
     * 
     * @type {BTJPath3073}
     * @memberof BTJEditMove3245AllOf
     */
    sourcePath?: BTJPath3073;
}

/**
 * Check if a given object implements the BTJEditMove3245AllOf interface.
 */
export function instanceOfBTJEditMove3245AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTJEditMove3245AllOfFromJSON(json: any): BTJEditMove3245AllOf {
    return BTJEditMove3245AllOfFromJSONTyped(json, false);
}

export function BTJEditMove3245AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEditMove3245AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'destinationPath': !exists(json, 'destinationPath') ? undefined : BTJPath3073FromJSON(json['destinationPath']),
        'sourcePath': !exists(json, 'sourcePath') ? undefined : BTJPath3073FromJSON(json['sourcePath']),
    };
}

export function BTJEditMove3245AllOfToJSON(value?: BTJEditMove3245AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'destinationPath': BTJPath3073ToJSON(value.destinationPath),
        'sourcePath': BTJPath3073ToJSON(value.sourcePath),
    };
}

