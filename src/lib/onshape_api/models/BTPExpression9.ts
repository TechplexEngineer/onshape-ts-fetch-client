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

import {
     BTPExpressionAccess237FromJSONTyped,
     BTPExpressionAs238FromJSONTyped,
     BTPExpressionBuiltinCall239FromJSONTyped,
     BTPExpressionCall240FromJSONTyped,
     BTPExpressionFunction1325FromJSONTyped,
     BTPExpressionGroup241FromJSONTyped,
     BTPExpressionIs242FromJSONTyped,
     BTPExpressionNew243FromJSONTyped,
     BTPExpressionOperator244FromJSONTyped,
     BTPExpressionSwitch2632FromJSONTyped,
     BTPExpressionTry1271FromJSONTyped,
     BTPExpressionVarReference245FromJSONTyped,
     BTPLiteral253FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTPExpression9
 */
export interface BTPExpression9 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpression9
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPExpression9
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPExpression9
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPExpression9
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPExpression9
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPExpression9
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpression9
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpression9
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpression9
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPExpression9
     */
    startSourceLocation?: number;
}

/**
 * Check if a given object implements the BTPExpression9 interface.
 */
export function instanceOfBTPExpression9(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpression9FromJSON(json: any): BTPExpression9 {
    return BTPExpression9FromJSONTyped(json, false);
}

export function BTPExpression9FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpression9 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPExpressionAccess-237') {
            return BTPExpressionAccess237FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionAs-238') {
            return BTPExpressionAs238FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionBuiltinCall-239') {
            return BTPExpressionBuiltinCall239FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionCall-240') {
            return BTPExpressionCall240FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionFunction-1325') {
            return BTPExpressionFunction1325FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionGroup-241') {
            return BTPExpressionGroup241FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionIs-242') {
            return BTPExpressionIs242FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionNew-243') {
            return BTPExpressionNew243FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionOperator-244') {
            return BTPExpressionOperator244FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionSwitch-2632') {
            return BTPExpressionSwitch2632FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionTry-1271') {
            return BTPExpressionTry1271FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPExpressionVarReference-245') {
            return BTPExpressionVarReference245FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPLiteral-253') {
            return BTPLiteral253FromJSONTyped(json, true);
        }
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
    };
}

export function BTPExpression9ToJSON(value?: BTPExpression9 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'atomic': value.atomic,
        'btType': value.btType,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'startSourceLocation': value.startSourceLocation,
    };
}

