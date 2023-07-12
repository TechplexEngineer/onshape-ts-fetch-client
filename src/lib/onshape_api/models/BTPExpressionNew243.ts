/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
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
 * @interface BTPExpressionNew243
 */
export interface BTPExpressionNew243 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionNew243
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionNew243
     */
    spaceAfterBox?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionNew243
     */
    spaceBetweenNewBox?: BTPSpace10;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionNew243
     */
    value?: BTPExpression9;
}

/**
 * Check if a given object implements the BTPExpressionNew243 interface.
 */
export function instanceOfBTPExpressionNew243(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionNew243FromJSON(json: any): BTPExpressionNew243 {
    return BTPExpressionNew243FromJSONTyped(json, false);
}

export function BTPExpressionNew243FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionNew243 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceAfterBox': !exists(json, 'spaceAfterBox') ? undefined : BTPSpace10FromJSON(json['spaceAfterBox']),
        'spaceBetweenNewBox': !exists(json, 'spaceBetweenNewBox') ? undefined : BTPSpace10FromJSON(json['spaceBetweenNewBox']),
        'value': !exists(json, 'value') ? undefined : BTPExpression9FromJSON(json['value']),
    };
}

export function BTPExpressionNew243ToJSON(value?: BTPExpressionNew243 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9ToJSON(value),
        'btType': value.btType,
        'spaceAfterBox': BTPSpace10ToJSON(value.spaceAfterBox),
        'spaceBetweenNewBox': BTPSpace10ToJSON(value.spaceBetweenNewBox),
        'value': BTPExpression9ToJSON(value.value),
    };
}

