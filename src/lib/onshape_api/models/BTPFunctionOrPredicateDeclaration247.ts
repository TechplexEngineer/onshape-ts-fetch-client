/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
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

import {
     BTPFunctionDeclaration246FromJSONTyped,
     BTPPredicateDeclaration265FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTPFunctionOrPredicateDeclaration247
 */
export interface BTPFunctionOrPredicateDeclaration247 extends BTPProcedureDeclarationBase266 {
    /**
     * 
     * @type {string}
     * @memberof BTPFunctionOrPredicateDeclaration247
     */
    btType?: string;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPFunctionOrPredicateDeclaration247
     */
    name?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPFunctionOrPredicateDeclaration247 interface.
 */
export function instanceOfBTPFunctionOrPredicateDeclaration247(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPFunctionOrPredicateDeclaration247FromJSON(json: any): BTPFunctionOrPredicateDeclaration247 {
    return BTPFunctionOrPredicateDeclaration247FromJSONTyped(json, false);
}

export function BTPFunctionOrPredicateDeclaration247FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPFunctionOrPredicateDeclaration247 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPFunctionDeclaration-246') {
            return BTPFunctionDeclaration246FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPPredicateDeclaration-265') {
            return BTPPredicateDeclaration265FromJSONTyped(json, true);
        }
    }
    return {
        ...BTPProcedureDeclarationBase266FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
    };
}

export function BTPFunctionOrPredicateDeclaration247ToJSON(value?: BTPFunctionOrPredicateDeclaration247 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTPProcedureDeclarationBase266ToJSON(value),
        'btType': value.btType,
        'name': BTPIdentifier8ToJSON(value.name),
    };
}

