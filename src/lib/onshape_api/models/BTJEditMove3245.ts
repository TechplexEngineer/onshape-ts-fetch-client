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
import type { BTJEdit3734 } from './BTJEdit3734';
import {
    BTJEdit3734FromJSON,
    BTJEdit3734FromJSONTyped,
    BTJEdit3734ToJSON,
} from './BTJEdit3734';
import type { BTJPath3073 } from './BTJPath3073';
import {
    BTJPath3073FromJSON,
    BTJPath3073FromJSONTyped,
    BTJPath3073ToJSON,
} from './BTJPath3073';

/**
 * Move an existing node from one path to another.
 * @export
 * @interface BTJEditMove3245
 */
export interface BTJEditMove3245 extends BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEditMove3245
     */
    btType?: string;
    /**
     * 
     * @type {BTJPath3073}
     * @memberof BTJEditMove3245
     */
    destinationPath?: BTJPath3073;
    /**
     * 
     * @type {BTJPath3073}
     * @memberof BTJEditMove3245
     */
    sourcePath?: BTJPath3073;
}

/**
 * Check if a given object implements the BTJEditMove3245 interface.
 */
export function instanceOfBTJEditMove3245(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTJEditMove3245FromJSON(json: any): BTJEditMove3245 {
    return BTJEditMove3245FromJSONTyped(json, false);
}

export function BTJEditMove3245FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEditMove3245 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTJEdit3734FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'destinationPath': !exists(json, 'destinationPath') ? undefined : BTJPath3073FromJSON(json['destinationPath']),
        'sourcePath': !exists(json, 'sourcePath') ? undefined : BTJPath3073FromJSON(json['sourcePath']),
    };
}

export function BTJEditMove3245ToJSON(value?: BTJEditMove3245 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTJEdit3734ToJSON(value),
        'btType': value.btType,
        'destinationPath': BTJPath3073ToJSON(value.destinationPath),
        'sourcePath': BTJPath3073ToJSON(value.sourcePath),
    };
}

