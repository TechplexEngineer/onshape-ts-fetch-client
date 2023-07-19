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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPPropertyAccessor23 } from './BTPPropertyAccessor23';
import {
    BTPPropertyAccessor23FromJSON,
    BTPPropertyAccessor23FromJSONTyped,
    BTPPropertyAccessor23ToJSON,
} from './BTPPropertyAccessor23';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPExpressionAccess237AllOf
 */
export interface BTPExpressionAccess237AllOf {
    /**
     * 
     * @type {BTPPropertyAccessor23}
     * @memberof BTPExpressionAccess237AllOf
     */
    accessor?: BTPPropertyAccessor23;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionAccess237AllOf
     */
    base?: BTPExpression9;
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionAccess237AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionAccess237AllOf
     */
    spaceInAccessor?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionAccess237AllOf interface.
 */
export function instanceOfBTPExpressionAccess237AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionAccess237AllOfFromJSON(json: any): BTPExpressionAccess237AllOf {
    return BTPExpressionAccess237AllOfFromJSONTyped(json, false);
}

export function BTPExpressionAccess237AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionAccess237AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessor': !exists(json, 'accessor') ? undefined : BTPPropertyAccessor23FromJSON(json['accessor']),
        'base': !exists(json, 'base') ? undefined : BTPExpression9FromJSON(json['base']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceInAccessor': !exists(json, 'spaceInAccessor') ? undefined : BTPSpace10FromJSON(json['spaceInAccessor']),
    };
}

export function BTPExpressionAccess237AllOfToJSON(value?: BTPExpressionAccess237AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessor': BTPPropertyAccessor23ToJSON(value.accessor),
        'base': BTPExpression9ToJSON(value.base),
        'btType': value.btType,
        'spaceInAccessor': BTPSpace10ToJSON(value.spaceInAccessor),
    };
}

