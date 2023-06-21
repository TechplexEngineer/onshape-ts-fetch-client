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
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPLiteralNumber258 } from './BTPLiteralNumber258';
import {
    BTPLiteralNumber258FromJSON,
    BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
} from './BTPLiteralNumber258';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPConversionFunction1362AllOf
 */
export interface BTPConversionFunction1362AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPConversionFunction1362AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPConversionFunction1362AllOf
     */
    from?: BTPLiteralNumber258;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPConversionFunction1362AllOf
     */
    spaceAfterType?: BTPSpace10;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPConversionFunction1362AllOf
     */
    to?: BTPLiteralNumber258;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPConversionFunction1362AllOf
     */
    typeName?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPConversionFunction1362AllOf interface.
 */
export function instanceOfBTPConversionFunction1362AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPConversionFunction1362AllOfFromJSON(json: any): BTPConversionFunction1362AllOf {
    return BTPConversionFunction1362AllOfFromJSONTyped(json, false);
}

export function BTPConversionFunction1362AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPConversionFunction1362AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'from': !exists(json, 'from') ? undefined : BTPLiteralNumber258FromJSON(json['from']),
        'spaceAfterType': !exists(json, 'spaceAfterType') ? undefined : BTPSpace10FromJSON(json['spaceAfterType']),
        'to': !exists(json, 'to') ? undefined : BTPLiteralNumber258FromJSON(json['to']),
        'typeName': !exists(json, 'typeName') ? undefined : BTPIdentifier8FromJSON(json['typeName']),
    };
}

export function BTPConversionFunction1362AllOfToJSON(value?: BTPConversionFunction1362AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'from': BTPLiteralNumber258ToJSON(value.from),
        'spaceAfterType': BTPSpace10ToJSON(value.spaceAfterType),
        'to': BTPLiteralNumber258ToJSON(value.to),
        'typeName': BTPIdentifier8ToJSON(value.typeName),
    };
}

