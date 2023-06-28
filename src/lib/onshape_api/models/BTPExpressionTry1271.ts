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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
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
 * @interface BTPExpressionTry1271
 */
export interface BTPExpressionTry1271 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionTry1271
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionTry1271
     */
    expression?: BTPExpression9;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionTry1271
     */
    silent?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionTry1271
     */
    spaceAfterSilent?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionTry1271
     */
    spaceAfterTry?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionTry1271 interface.
 */
export function instanceOfBTPExpressionTry1271(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionTry1271FromJSON(json: any): BTPExpressionTry1271 {
    return BTPExpressionTry1271FromJSONTyped(json, false);
}

export function BTPExpressionTry1271FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionTry1271 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'expression': !exists(json, 'expression') ? undefined : BTPExpression9FromJSON(json['expression']),
        'silent': !exists(json, 'silent') ? undefined : json['silent'],
        'spaceAfterSilent': !exists(json, 'spaceAfterSilent') ? undefined : BTPSpace10FromJSON(json['spaceAfterSilent']),
        'spaceAfterTry': !exists(json, 'spaceAfterTry') ? undefined : BTPSpace10FromJSON(json['spaceAfterTry']),
    };
}

export function BTPExpressionTry1271ToJSON(value?: BTPExpressionTry1271 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9ToJSON(value),
        'btType': value.btType,
        'expression': BTPExpression9ToJSON(value.expression),
        'silent': value.silent,
        'spaceAfterSilent': BTPSpace10ToJSON(value.spaceAfterSilent),
        'spaceAfterTry': BTPSpace10ToJSON(value.spaceAfterTry),
    };
}

