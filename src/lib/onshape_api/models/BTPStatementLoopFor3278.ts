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
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
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
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';
import type { BTPStatementLoop277 } from './BTPStatementLoop277';
import {
    BTPStatementLoop277FromJSON,
    BTPStatementLoop277FromJSONTyped,
    BTPStatementLoop277ToJSON,
} from './BTPStatementLoop277';
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPStatementLoopFor3278
 */
export interface BTPStatementLoopFor3278 extends BTPStatementLoop277 {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementLoopFor3278
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementLoopFor3278
     */
    condition?: BTPExpression9;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPStatementLoopFor3278
     */
    increment?: BTPStatement269;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPStatementLoopFor3278
     */
    initialization?: BTPStatement269;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementLoopFor3278
     */
    spaceAfterInitialization?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementLoopFor3278
     */
    spaceBeforeCondition?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementLoopFor3278
     */
    spaceBeforeIncrement?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPStatementLoopFor3278 interface.
 */
export function instanceOfBTPStatementLoopFor3278(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementLoopFor3278FromJSON(json: any): BTPStatementLoopFor3278 {
    return BTPStatementLoopFor3278FromJSONTyped(json, false);
}

export function BTPStatementLoopFor3278FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementLoopFor3278 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPStatementLoop277FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'condition': !exists(json, 'condition') ? undefined : BTPExpression9FromJSON(json['condition']),
        'increment': !exists(json, 'increment') ? undefined : BTPStatement269FromJSON(json['increment']),
        'initialization': !exists(json, 'initialization') ? undefined : BTPStatement269FromJSON(json['initialization']),
        'spaceAfterInitialization': !exists(json, 'spaceAfterInitialization') ? undefined : BTPSpace10FromJSON(json['spaceAfterInitialization']),
        'spaceBeforeCondition': !exists(json, 'spaceBeforeCondition') ? undefined : BTPSpace10FromJSON(json['spaceBeforeCondition']),
        'spaceBeforeIncrement': !exists(json, 'spaceBeforeIncrement') ? undefined : BTPSpace10FromJSON(json['spaceBeforeIncrement']),
    };
}

export function BTPStatementLoopFor3278ToJSON(value?: BTPStatementLoopFor3278 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPStatementLoop277ToJSON(value),
        'btType': value.btType,
        'condition': BTPExpression9ToJSON(value.condition),
        'increment': BTPStatement269ToJSON(value.increment),
        'initialization': BTPStatement269ToJSON(value.initialization),
        'spaceAfterInitialization': BTPSpace10ToJSON(value.spaceAfterInitialization),
        'spaceBeforeCondition': BTPSpace10ToJSON(value.spaceBeforeCondition),
        'spaceBeforeIncrement': BTPSpace10ToJSON(value.spaceBeforeIncrement),
    };
}

