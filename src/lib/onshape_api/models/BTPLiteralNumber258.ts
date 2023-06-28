/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPLiteral253 } from './BTPLiteral253';
import {
    BTPLiteral253FromJSON,
    BTPLiteral253FromJSONTyped,
    BTPLiteral253ToJSON,
} from './BTPLiteral253';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPLiteralNumber258
 */
export interface BTPLiteralNumber258 extends BTPLiteral253 {
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralNumber258
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPLiteralNumber258
     */
    integer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPLiteralNumber258
     */
    text?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPLiteralNumber258
     */
    value?: number;
}

/**
 * Check if a given object implements the BTPLiteralNumber258 interface.
 */
export function instanceOfBTPLiteralNumber258(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLiteralNumber258FromJSON(json: any): BTPLiteralNumber258 {
    return BTPLiteralNumber258FromJSONTyped(json, false);
}

export function BTPLiteralNumber258FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLiteralNumber258 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPLiteral253FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'integer': !exists(json, 'integer') ? undefined : json['integer'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function BTPLiteralNumber258ToJSON(value?: BTPLiteralNumber258 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPLiteral253ToJSON(value),
        'btType': value.btType,
        'integer': value.integer,
        'text': value.text,
        'value': value.value,
    };
}

