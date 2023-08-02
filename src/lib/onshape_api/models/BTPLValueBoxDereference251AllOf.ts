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
 * @interface BTPLValueBoxDereference251AllOf
 */
export interface BTPLValueBoxDereference251AllOf {
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPLValueBoxDereference251AllOf
     */
    box?: BTPExpression9;
    /**
     * 
     * @type {string}
     * @memberof BTPLValueBoxDereference251AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPLValueBoxDereference251AllOf
     */
    spaceInside?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPLValueBoxDereference251AllOf interface.
 */
export function instanceOfBTPLValueBoxDereference251AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLValueBoxDereference251AllOfFromJSON(json: any): BTPLValueBoxDereference251AllOf {
    return BTPLValueBoxDereference251AllOfFromJSONTyped(json, false);
}

export function BTPLValueBoxDereference251AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLValueBoxDereference251AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'box': !exists(json, 'box') ? undefined : BTPExpression9FromJSON(json['box']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceInside': !exists(json, 'spaceInside') ? undefined : BTPSpace10FromJSON(json['spaceInside']),
    };
}

export function BTPLValueBoxDereference251AllOfToJSON(value?: BTPLValueBoxDereference251AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'box': BTPExpression9ToJSON(value.box),
        'btType': value.btType,
        'spaceInside': BTPSpace10ToJSON(value.spaceInside),
    };
}

