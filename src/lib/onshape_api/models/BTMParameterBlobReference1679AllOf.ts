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
import type { BTMImport136 } from './BTMImport136';
import {
    BTMImport136FromJSON,
    BTMImport136FromJSONTyped,
    BTMImport136ToJSON,
} from './BTMImport136';

/**
 * 
 * @export
 * @interface BTMParameterBlobReference1679AllOf
 */
export interface BTMParameterBlobReference1679AllOf {
    /**
     * 
     * @type {BTMImport136}
     * @memberof BTMParameterBlobReference1679AllOf
     */
    blobImport?: BTMImport136;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterBlobReference1679AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMParameterBlobReference1679AllOf
     */
    namespace?: string;
}

/**
 * Check if a given object implements the BTMParameterBlobReference1679AllOf interface.
 */
export function instanceOfBTMParameterBlobReference1679AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMParameterBlobReference1679AllOfFromJSON(json: any): BTMParameterBlobReference1679AllOf {
    return BTMParameterBlobReference1679AllOfFromJSONTyped(json, false);
}

export function BTMParameterBlobReference1679AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMParameterBlobReference1679AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blobImport': !exists(json, 'blobImport') ? undefined : BTMImport136FromJSON(json['blobImport']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function BTMParameterBlobReference1679AllOfToJSON(value?: BTMParameterBlobReference1679AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blobImport': BTMImport136ToJSON(value.blobImport),
        'btType': value.btType,
        'namespace': value.namespace,
    };
}

