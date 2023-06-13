/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
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
import type { BTPArgumentDeclaration232 } from './BTPArgumentDeclaration232';
import {
    BTPArgumentDeclaration232FromJSON,
    BTPArgumentDeclaration232FromJSONTyped,
    BTPArgumentDeclaration232ToJSON,
} from './BTPArgumentDeclaration232';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPLiteralNumber258 } from './BTPLiteralNumber258';
import {
    BTPLiteralNumber258FromJSON,
    BTPLiteralNumber258FromJSONTyped,
    BTPLiteralNumber258ToJSON,
} from './BTPLiteralNumber258';
import type { BTPProcedureDeclarationBase266 } from './BTPProcedureDeclarationBase266';
import {
    BTPProcedureDeclarationBase266FromJSON,
    BTPProcedureDeclarationBase266FromJSONTyped,
    BTPProcedureDeclarationBase266ToJSON,
} from './BTPProcedureDeclarationBase266';
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
import type { GBTPDefinitionType } from './GBTPDefinitionType';
import {
    GBTPDefinitionTypeFromJSON,
    GBTPDefinitionTypeFromJSONTyped,
    GBTPDefinitionTypeToJSON,
} from './GBTPDefinitionType';

/**
 * 
 * @export
 * @interface BTPConversionFunction1362
 */
export interface BTPConversionFunction1362 extends BTPProcedureDeclarationBase266 {
    /**
     * 
     * @type {string}
     * @memberof BTPConversionFunction1362
     */
    btType?: string;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPConversionFunction1362
     */
    from?: BTPLiteralNumber258;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPConversionFunction1362
     */
    spaceAfterType?: BTPSpace10;
    /**
     * 
     * @type {BTPLiteralNumber258}
     * @memberof BTPConversionFunction1362
     */
    to?: BTPLiteralNumber258;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPConversionFunction1362
     */
    typeName?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPConversionFunction1362 interface.
 */
export function instanceOfBTPConversionFunction1362(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPConversionFunction1362FromJSON(json: any): BTPConversionFunction1362 {
    return BTPConversionFunction1362FromJSONTyped(json, false);
}

export function BTPConversionFunction1362FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPConversionFunction1362 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTPProcedureDeclarationBase266FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'from': !exists(json, 'from') ? undefined : BTPLiteralNumber258FromJSON(json['from']),
        'spaceAfterType': !exists(json, 'spaceAfterType') ? undefined : BTPSpace10FromJSON(json['spaceAfterType']),
        'to': !exists(json, 'to') ? undefined : BTPLiteralNumber258FromJSON(json['to']),
        'typeName': !exists(json, 'typeName') ? undefined : BTPIdentifier8FromJSON(json['typeName']),
    };
}

export function BTPConversionFunction1362ToJSON(value?: BTPConversionFunction1362 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPProcedureDeclarationBase266ToJSON(value),
        'btType': value.btType,
        'from': BTPLiteralNumber258ToJSON(value.from),
        'spaceAfterType': BTPSpace10ToJSON(value.spaceAfterType),
        'to': BTPLiteralNumber258ToJSON(value.to),
        'typeName': BTPIdentifier8ToJSON(value.typeName),
    };
}

