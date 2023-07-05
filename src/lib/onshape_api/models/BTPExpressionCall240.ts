/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
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
import type { BTPName261 } from './BTPName261';
import {
    BTPName261FromJSON,
    BTPName261FromJSONTyped,
    BTPName261ToJSON,
} from './BTPName261';
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
 * @interface BTPExpressionCall240
 */
export interface BTPExpressionCall240 extends BTPExpression9 {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionCall240
     */
    btType?: string;
    /**
     * 
     * @type {BTPExpression9}
     * @memberof BTPExpressionCall240
     */
    functionExpression?: BTPExpression9;
    /**
     * 
     * @type {BTPName261}
     * @memberof BTPExpressionCall240
     */
    functionName?: BTPName261;
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionCall240
     */
    functionNameString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPExpressionCall240
     */
    isArrowCall?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPExpressionCall240
     */
    spaceInEmptyList?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPExpressionCall240 interface.
 */
export function instanceOfBTPExpressionCall240(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionCall240FromJSON(json: any): BTPExpressionCall240 {
    return BTPExpressionCall240FromJSONTyped(json, false);
}

export function BTPExpressionCall240FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionCall240 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPExpression9FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'functionExpression': !exists(json, 'functionExpression') ? undefined : BTPExpression9FromJSON(json['functionExpression']),
        'functionName': !exists(json, 'functionName') ? undefined : BTPName261FromJSON(json['functionName']),
        'functionNameString': !exists(json, 'functionNameString') ? undefined : json['functionNameString'],
        'isArrowCall': !exists(json, 'isArrowCall') ? undefined : json['isArrowCall'],
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
    };
}

export function BTPExpressionCall240ToJSON(value?: BTPExpressionCall240 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPExpression9ToJSON(value),
        'btType': value.btType,
        'functionExpression': BTPExpression9ToJSON(value.functionExpression),
        'functionName': BTPName261ToJSON(value.functionName),
        'functionNameString': value.functionNameString,
        'isArrowCall': value.isArrowCall,
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
    };
}

