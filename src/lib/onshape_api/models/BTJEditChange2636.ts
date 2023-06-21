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
import type { BTArcLengthDimensionDisplayData1018AllOf } from './BTArcLengthDimensionDisplayData1018AllOf';
import {
    BTArcLengthDimensionDisplayData1018AllOfFromJSON,
    BTArcLengthDimensionDisplayData1018AllOfFromJSONTyped,
    BTArcLengthDimensionDisplayData1018AllOfToJSON,
} from './BTArcLengthDimensionDisplayData1018AllOf';
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
 * Change the value of a node.
 * @export
 * @interface BTJEditChange2636
 */
export interface BTJEditChange2636 extends BTJEdit3734 {
    /**
     * 
     * @type {string}
     * @memberof BTJEditChange2636
     */
    btType?: string;
    /**
     * 
     * @type {BTJPath3073}
     * @memberof BTJEditChange2636
     */
    path?: BTJPath3073;
    /**
     * 
     * @type {BTArcLengthDimensionDisplayData1018AllOf}
     * @memberof BTJEditChange2636
     */
    value: BTArcLengthDimensionDisplayData1018AllOf;
}

/**
 * Check if a given object implements the BTJEditChange2636 interface.
 */
export function instanceOfBTJEditChange2636(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function BTJEditChange2636FromJSON(json: any): BTJEditChange2636 {
    return BTJEditChange2636FromJSONTyped(json, false);
}

export function BTJEditChange2636FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTJEditChange2636 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTJEdit3734FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'path': !exists(json, 'path') ? undefined : BTJPath3073FromJSON(json['path']),
        'value': BTArcLengthDimensionDisplayData1018AllOfFromJSON(json['value']),
    };
}

export function BTJEditChange2636ToJSON(value?: BTJEditChange2636 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTJEdit3734ToJSON(value),
        'btType': value.btType,
        'path': BTJPath3073ToJSON(value.path),
        'value': BTArcLengthDimensionDisplayData1018AllOfToJSON(value.value),
    };
}

