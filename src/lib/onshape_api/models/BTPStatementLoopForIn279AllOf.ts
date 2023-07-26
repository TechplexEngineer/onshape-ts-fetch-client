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
import type { BTPExpression9 } from './BTPExpression9';
import {
    BTPExpression9FromJSON,
    BTPExpression9FromJSONTyped,
    BTPExpression9ToJSON,
} from './BTPExpression9';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';
import type { GBTPType } from './GBTPType';
import {
    GBTPTypeFromJSON,
    GBTPTypeFromJSONTyped,
    GBTPTypeToJSON,
} from './GBTPType';

/**
 * 
 * @export
 * @interface BTPStatementLoopForIn279AllOf
 */
export interface BTPStatementLoopForIn279AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    container?: BTPExpression9;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    identifiers?: Array<BTPIdentifier8>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    isVarDeclaredHere?: boolean;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    keyVar?: BTPIdentifier8;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    spaceBeforeVar?: BTPSpace10;
    /**
     * 
     * @type {Array<GBTPType>}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    standardTypes?: Array<GBTPType>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    typeNames?: Array<string>;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPStatementLoopForIn279AllOf
     */
    _var?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPStatementLoopForIn279AllOf interface.
 */
export function instanceOfBTPStatementLoopForIn279AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPStatementLoopForIn279AllOfFromJSON(json: any): BTPStatementLoopForIn279AllOf {
    return BTPStatementLoopForIn279AllOfFromJSONTyped(json, false);
}

export function BTPStatementLoopForIn279AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPStatementLoopForIn279AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'container': !exists(json, 'container') ? undefined : BTPExpression9FromJSON(json['container']),
        'identifiers': !exists(json, 'identifiers') ? undefined : ((json['identifiers'] as Array<any>).map(BTPIdentifier8FromJSON)),
        'isVarDeclaredHere': !exists(json, 'isVarDeclaredHere') ? undefined : json['isVarDeclaredHere'],
        'keyVar': !exists(json, 'keyVar') ? undefined : BTPIdentifier8FromJSON(json['keyVar']),
        'spaceBeforeVar': !exists(json, 'spaceBeforeVar') ? undefined : BTPSpace10FromJSON(json['spaceBeforeVar']),
        'standardTypes': !exists(json, 'standardTypes') ? undefined : ((json['standardTypes'] as Array<any>).map(GBTPTypeFromJSON)),
        'typeNames': !exists(json, 'typeNames') ? undefined : json['typeNames'],
        '_var': !exists(json, 'var') ? undefined : BTPIdentifier8FromJSON(json['var']),
    };
}

export function BTPStatementLoopForIn279AllOfToJSON(value?: BTPStatementLoopForIn279AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'container': BTPExpression9ToJSON(value.container),
        'identifiers': value.identifiers === undefined ? undefined : ((value.identifiers as Array<any>).map(BTPIdentifier8ToJSON)),
        'isVarDeclaredHere': value.isVarDeclaredHere,
        'keyVar': BTPIdentifier8ToJSON(value.keyVar),
        'spaceBeforeVar': BTPSpace10ToJSON(value.spaceBeforeVar),
        'standardTypes': value.standardTypes === undefined ? undefined : ((value.standardTypes as Array<any>).map(GBTPTypeToJSON)),
        'typeNames': value.typeNames,
        'var': BTPIdentifier8ToJSON(value._var),
    };
}

