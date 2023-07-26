/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPBuiltinIdentifier233 } from './BTPBuiltinIdentifier233';
import {
    BTPBuiltinIdentifier233FromJSON,
    BTPBuiltinIdentifier233FromJSONTyped,
    BTPBuiltinIdentifier233ToJSON,
} from './BTPBuiltinIdentifier233';
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

/**
 * 
 * @export
 * @interface BTPExpressionBuiltinCall239AllOf
 */
export interface BTPExpressionBuiltinCall239AllOf {
    /**
     * 
     * @type {Array<BTPExpression9>}
     * @memberof BTPExpressionBuiltinCall239AllOf
     */
    arguments?: Array<BTPExpression9>;
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionBuiltinCall239AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPBuiltinIdentifier233}
     * @memberof BTPExpressionBuiltinCall239AllOf
     */
    name?: BTPBuiltinIdentifier233;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionBuiltinCall239AllOf
     */
    spaceInEmptyList?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionBuiltinCall239AllOf interface.
 */
export function instanceOfBTPExpressionBuiltinCall239AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionBuiltinCall239AllOfFromJSON(json: any): BTPExpressionBuiltinCall239AllOf {
    return BTPExpressionBuiltinCall239AllOfFromJSONTyped(json, false);
}

export function BTPExpressionBuiltinCall239AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionBuiltinCall239AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arguments': !exists(json, 'arguments') ? undefined : ((json['arguments'] as Array<any>).map(BTPExpression9FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'name': !exists(json, 'name') ? undefined : BTPBuiltinIdentifier233FromJSON(json['name']),
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
    };
}

export function BTPExpressionBuiltinCall239AllOfToJSON(value?: BTPExpressionBuiltinCall239AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arguments': value.arguments === undefined ? undefined : ((value.arguments as Array<any>).map(BTPExpression9ToJSON)),
        'btType': value.btType,
        'name': BTPBuiltinIdentifier233ToJSON(value.name),
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
    };
}

