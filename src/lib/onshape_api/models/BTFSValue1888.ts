/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19740-5e8d8b0919a8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
     BTFSValueArray1499FromJSONTyped,
     BTFSValueBoolean1195FromJSONTyped,
     BTFSValueMap2062FromJSONTyped,
     BTFSValueNumber772FromJSONTyped,
     BTFSValueOther1124FromJSONTyped,
     BTFSValueString1422FromJSONTyped,
     BTFSValueTooBig1247FromJSONTyped,
     BTFSValueUndefined2003FromJSONTyped,
     BTFSValueWithUnits1817FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTFSValue1888
 */
export interface BTFSValue1888 {
    /**
     * 
     * @type {string}
     * @memberof BTFSValue1888
     */
    btType: string;
    /**
     * 
     * @type {string}
     * @memberof BTFSValue1888
     */
    typeTag?: string;
}

/**
 * Check if a given object implements the BTFSValue1888 interface.
 */
export function instanceOfBTFSValue1888(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "btType" in value;

    return isInstance;
}

export function BTFSValue1888FromJSON(json: any): BTFSValue1888 {
    return BTFSValue1888FromJSONTyped(json, false);
}

export function BTFSValue1888FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFSValue1888 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTFSValueArray-1499') {
            return BTFSValueArray1499FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueBoolean-1195') {
            return BTFSValueBoolean1195FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueMap-2062') {
            return BTFSValueMap2062FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueNumber-772') {
            return BTFSValueNumber772FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueOther-1124') {
            return BTFSValueOther1124FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueString-1422') {
            return BTFSValueString1422FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueTooBig-1247') {
            return BTFSValueTooBig1247FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueUndefined-2003') {
            return BTFSValueUndefined2003FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSValueWithUnits-1817') {
            return BTFSValueWithUnits1817FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': json['btType'],
        'typeTag': !exists(json, 'typeTag') ? undefined : json['typeTag'],
    };
}

export function BTFSValue1888ToJSON(value?: BTFSValue1888 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'typeTag': value.typeTag,
    };
}

