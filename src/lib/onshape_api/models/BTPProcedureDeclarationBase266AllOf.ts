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
import type { BTPArgumentDeclaration232 } from './BTPArgumentDeclaration232';
import {
    BTPArgumentDeclaration232FromJSON,
    BTPArgumentDeclaration232FromJSONTyped,
    BTPArgumentDeclaration232ToJSON,
} from './BTPArgumentDeclaration232';
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
import type { BTPStatementBlock271 } from './BTPStatementBlock271';
import {
    BTPStatementBlock271FromJSON,
    BTPStatementBlock271FromJSONTyped,
    BTPStatementBlock271ToJSON,
} from './BTPStatementBlock271';
import type { BTPTypeName290 } from './BTPTypeName290';
import {
    BTPTypeName290FromJSON,
    BTPTypeName290FromJSONTyped,
    BTPTypeName290ToJSON,
} from './BTPTypeName290';

/**
 * 
 * @export
 * @interface BTPProcedureDeclarationBase266AllOf
 */
export interface BTPProcedureDeclarationBase266AllOf {
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    arguments?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {BTPStatementBlock271}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    body?: BTPStatementBlock271;
    /**
     * 
     * @type {string}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    precondition?: BTPStatement269;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    returnType?: BTPTypeName290;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    spaceAfterArglist?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPProcedureDeclarationBase266AllOf
     */
    spaceInEmptyList?: BTPSpace10;
}

/**
 * Check if a given object implements the BTPProcedureDeclarationBase266AllOf interface.
 */
export function instanceOfBTPProcedureDeclarationBase266AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPProcedureDeclarationBase266AllOfFromJSON(json: any): BTPProcedureDeclarationBase266AllOf {
    return BTPProcedureDeclarationBase266AllOfFromJSONTyped(json, false);
}

export function BTPProcedureDeclarationBase266AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPProcedureDeclarationBase266AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arguments': !exists(json, 'arguments') ? undefined : ((json['arguments'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'body': !exists(json, 'body') ? undefined : BTPStatementBlock271FromJSON(json['body']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'precondition': !exists(json, 'precondition') ? undefined : BTPStatement269FromJSON(json['precondition']),
        'returnType': !exists(json, 'returnType') ? undefined : BTPTypeName290FromJSON(json['returnType']),
        'spaceAfterArglist': !exists(json, 'spaceAfterArglist') ? undefined : BTPSpace10FromJSON(json['spaceAfterArglist']),
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
    };
}

export function BTPProcedureDeclarationBase266AllOfToJSON(value?: BTPProcedureDeclarationBase266AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arguments': value.arguments === undefined ? undefined : ((value.arguments as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'body': BTPStatementBlock271ToJSON(value.body),
        'btType': value.btType,
        'precondition': BTPStatement269ToJSON(value.precondition),
        'returnType': BTPTypeName290ToJSON(value.returnType),
        'spaceAfterArglist': BTPSpace10ToJSON(value.spaceAfterArglist),
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
    };
}

