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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

import {
     BTPStatementLoopFor3278FromJSONTyped,
     BTPStatementLoopForIn279FromJSONTyped,
     BTPStatementLoopWhile280FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTPStatementLoop277
 */
export interface BTPStatementLoop277 extends BTPStatement269 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementLoop277
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPStatementLoop277
     */
    body?: BTPStatement269;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementLoop277
     */
    spaceAfterLoopType?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPStatementLoop277 interface.
 */
export function instanceOfBTPStatementLoop277(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementLoop277FromJSON(json: any): BTPStatementLoop277 {
    return BTPStatementLoop277FromJSONTyped(json, false);
}

export function BTPStatementLoop277FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementLoop277 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPStatementLoopFor3-278') {
            return BTPStatementLoopFor3278FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementLoopForIn-279') {
            return BTPStatementLoopForIn279FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPStatementLoopWhile-280') {
            return BTPStatementLoopWhile280FromJSONTyped(json, true);
        }
    }
    return {
        ...BTPStatement269FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'body': !exists(json, 'body') ? undefined : BTPStatement269FromJSON(json['body']),
        'spaceAfterLoopType': !exists(json, 'spaceAfterLoopType') ? undefined : BTPSpace10FromJSON(json['spaceAfterLoopType']),
    };
}

export function BTPStatementLoop277ToJSON(value?: BTPStatementLoop277 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatement269ToJSON(value),
        'btType': value.btType,
        'body': BTPStatement269ToJSON(value.body),
        'spaceAfterLoopType': BTPSpace10ToJSON(value.spaceAfterLoopType),
    };
}

