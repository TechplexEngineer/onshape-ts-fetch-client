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
import type { BTElementLibraryPurpose3353 } from './BTElementLibraryPurpose3353';
import {
    BTElementLibraryPurpose3353FromJSON,
    BTElementLibraryPurpose3353FromJSONTyped,
    BTElementLibraryPurpose3353ToJSON,
} from './BTElementLibraryPurpose3353';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterSpecReferenceBlob1367 } from './BTParameterSpecReferenceBlob1367';
import {
    BTParameterSpecReferenceBlob1367FromJSON,
    BTParameterSpecReferenceBlob1367FromJSONTyped,
    BTParameterSpecReferenceBlob1367ToJSON,
} from './BTParameterSpecReferenceBlob1367';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceCADImport1792
 */
export interface BTParameterSpecReferenceCADImport1792 extends BTParameterSpecReferenceBlob1367 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferenceCADImport1792
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTParameterSpecReferenceCADImport1792 interface.
 */
export function instanceOfBTParameterSpecReferenceCADImport1792(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceCADImport1792FromJSON(json: any): BTParameterSpecReferenceCADImport1792 {
    return BTParameterSpecReferenceCADImport1792FromJSONTyped(json, false);
}

export function BTParameterSpecReferenceCADImport1792FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceCADImport1792 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterSpecReferenceBlob1367FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTParameterSpecReferenceCADImport1792ToJSON(value?: BTParameterSpecReferenceCADImport1792 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterSpecReferenceBlob1367ToJSON(value),
        'btType': value.btType,
    };
}

