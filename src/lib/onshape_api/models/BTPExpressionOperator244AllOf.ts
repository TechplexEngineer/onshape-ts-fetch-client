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
import type { GBTPOperator } from './GBTPOperator';
import {
    GBTPOperatorFromJSON,
    GBTPOperatorFromJSONTyped,
    GBTPOperatorToJSON,
} from './GBTPOperator';

/**
 * 
 * @export
 * @interface BTPExpressionOperator244AllOf
 */
export interface BTPExpressionOperator244AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionOperator244AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionOperator244AllOf
     */
    forExport?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionOperator244AllOf
     */
    globalNamespace?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionOperator244AllOf
     */
    importMicroversion?: string;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPExpressionOperator244AllOf
     */
    namespace?: Array<BTPIdentifier8>;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionOperator244AllOf
     */
    operand1?: BTPExpression9;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionOperator244AllOf
     */
    operand2?: BTPExpression9;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionOperator244AllOf
     */
    operand3?: BTPExpression9;
    /**
     * 
     * @type {GBTPOperator}
     * @memberof BTPExpressionOperator244AllOf
     */
    operator?: GBTPOperator;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionOperator244AllOf
     */
    spaceAfterNamespace?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionOperator244AllOf
     */
    spaceAfterOperator?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionOperator244AllOf
     */
    spaceBeforeOperator?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionOperator244AllOf
     */
    writtenAsFunctionCall?: boolean;
}

/**
 * Check if a given object implements the BTPExpressionOperator244AllOf interface.
 */
export function instanceOfBTPExpressionOperator244AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionOperator244AllOfFromJSON(json: any): BTPExpressionOperator244AllOf {
    return BTPExpressionOperator244AllOfFromJSONTyped(json, false);
}

export function BTPExpressionOperator244AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionOperator244AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'forExport': !exists(json, 'forExport') ? undefined : json['forExport'],
        'globalNamespace': !exists(json, 'globalNamespace') ? undefined : json['globalNamespace'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'namespace': !exists(json, 'namespace') ? undefined : ((json['namespace'] as Array<any>).map(BTPIdentifier8FromJSON)),
        'operand1': !exists(json, 'operand1') ? undefined : BTPExpression9FromJSON(json['operand1']),
        'operand2': !exists(json, 'operand2') ? undefined : BTPExpression9FromJSON(json['operand2']),
        'operand3': !exists(json, 'operand3') ? undefined : BTPExpression9FromJSON(json['operand3']),
        'operator': !exists(json, 'operator') ? undefined : GBTPOperatorFromJSON(json['operator']),
        'spaceAfterNamespace': !exists(json, 'spaceAfterNamespace') ? undefined : BTPSpace10FromJSON(json['spaceAfterNamespace']),
        'spaceAfterOperator': !exists(json, 'spaceAfterOperator') ? undefined : BTPSpace10FromJSON(json['spaceAfterOperator']),
        'spaceBeforeOperator': !exists(json, 'spaceBeforeOperator') ? undefined : BTPSpace10FromJSON(json['spaceBeforeOperator']),
        'writtenAsFunctionCall': !exists(json, 'writtenAsFunctionCall') ? undefined : json['writtenAsFunctionCall'],
    };
}

export function BTPExpressionOperator244AllOfToJSON(value?: BTPExpressionOperator244AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'forExport': value.forExport,
        'globalNamespace': value.globalNamespace,
        'importMicroversion': value.importMicroversion,
        'namespace': value.namespace === undefined ? undefined : ((value.namespace as Array<any>).map(BTPIdentifier8ToJSON)),
        'operand1': BTPExpression9ToJSON(value.operand1),
        'operand2': BTPExpression9ToJSON(value.operand2),
        'operand3': BTPExpression9ToJSON(value.operand3),
        'operator': GBTPOperatorToJSON(value.operator),
        'spaceAfterNamespace': BTPSpace10ToJSON(value.spaceAfterNamespace),
        'spaceAfterOperator': BTPSpace10ToJSON(value.spaceAfterOperator),
        'spaceBeforeOperator': BTPSpace10ToJSON(value.spaceBeforeOperator),
        'writtenAsFunctionCall': value.writtenAsFunctionCall,
    };
}

