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
 * @interface BTPFunctionDeclaration246
 */
export interface BTPFunctionDeclaration246 {
    /**
     * 
     * @type {BTPAnnotation231}
     * @memberof BTPFunctionDeclaration246
     */
    annotation?: BTPAnnotation231;
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPFunctionDeclaration246
     */
    arguments?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {Array<BTPArgumentDeclaration232>}
     * @memberof BTPFunctionDeclaration246
     */
    argumentsToDocument?: Array<BTPArgumentDeclaration232>;
    /**
     * 
     * @type {boolean}
     * @memberof BTPFunctionDeclaration246
     */
    atomic?: boolean;
    /**
     * 
     * @type {BTPStatementBlock271}
     * @memberof BTPFunctionDeclaration246
     */
    body?: BTPStatementBlock271;
    /**
     * 
     * @type {string}
     * @memberof BTPFunctionDeclaration246
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPFunctionDeclaration246
     */
    deprecated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPFunctionDeclaration246
     */
    deprecatedExplanation?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPFunctionDeclaration246
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPFunctionDeclaration246
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPFunctionDeclaration246
     */
    forExport?: boolean;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPFunctionDeclaration246
     */
    name?: BTPIdentifier8;
    /**
     * 
     * @type {string}
     * @memberof BTPFunctionDeclaration246
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTPFunctionDeclaration246
     */
    precondition?: BTPStatement269;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPFunctionDeclaration246
     */
    returnType?: BTPTypeName290;
    /**
     * 
     * @type {string}
     * @memberof BTPFunctionDeclaration246
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPFunctionDeclaration246
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPFunctionDeclaration246
     */
    spaceAfterArglist?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPFunctionDeclaration246
     */
    spaceAfterExport?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPFunctionDeclaration246
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPFunctionDeclaration246
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPFunctionDeclaration246
     */
    spaceInEmptyList?: BTPSpace10;
    /**
     * 
     * @type {number}
     * @memberof BTPFunctionDeclaration246
     */
    startSourceLocation?: number;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPFunctionDeclaration246
     */
    symbolName?: BTPIdentifier8;
}

/**
 * Check if a given object implements the BTPFunctionDeclaration246 interface.
 */
export function instanceOfBTPFunctionDeclaration246(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPFunctionDeclaration246FromJSON(json: any): BTPFunctionDeclaration246 {
    return BTPFunctionDeclaration246FromJSONTyped(json, false);
}

export function BTPFunctionDeclaration246FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPFunctionDeclaration246 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotation': !exists(json, 'annotation') ? undefined : BTPAnnotation231FromJSON(json['annotation']),
        'arguments': !exists(json, 'arguments') ? undefined : ((json['arguments'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'argumentsToDocument': !exists(json, 'argumentsToDocument') ? undefined : ((json['argumentsToDocument'] as Array<any>).map(BTPArgumentDeclaration232FromJSON)),
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'body': !exists(json, 'body') ? undefined : BTPStatementBlock271FromJSON(json['body']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'deprecated': !exists(json, 'deprecated') ? undefined : json['deprecated'],
        'deprecatedExplanation': !exists(json, 'deprecatedExplanation') ? undefined : json['deprecatedExplanation'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'forExport': !exists(json, 'forExport') ? undefined : json['forExport'],
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'precondition': !exists(json, 'precondition') ? undefined : BTPStatement269FromJSON(json['precondition']),
        'returnType': !exists(json, 'returnType') ? undefined : BTPTypeName290FromJSON(json['returnType']),
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceAfterArglist': !exists(json, 'spaceAfterArglist') ? undefined : BTPSpace10FromJSON(json['spaceAfterArglist']),
        'spaceAfterExport': !exists(json, 'spaceAfterExport') ? undefined : BTPSpace10FromJSON(json['spaceAfterExport']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
        'symbolName': !exists(json, 'symbolName') ? undefined : BTPIdentifier8FromJSON(json['symbolName']),
    };
}

export function BTPFunctionDeclaration246ToJSON(value?: BTPFunctionDeclaration246 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotation': BTPAnnotation231ToJSON(value.annotation),
        'arguments': value.arguments === undefined ? undefined : ((value.arguments as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'argumentsToDocument': value.argumentsToDocument === undefined ? undefined : ((value.argumentsToDocument as Array<any>).map(BTPArgumentDeclaration232ToJSON)),
        'atomic': value.atomic,
        'body': BTPStatementBlock271ToJSON(value.body),
        'btType': value.btType,
        'deprecated': value.deprecated,
        'deprecatedExplanation': value.deprecatedExplanation,
        'documentationType': GBTPDefinitionTypeToJSON(value.documentationType),
        'endSourceLocation': value.endSourceLocation,
        'forExport': value.forExport,
        'name': BTPIdentifier8ToJSON(value.name),
        'nodeId': value.nodeId,
        'precondition': BTPStatement269ToJSON(value.precondition),
        'returnType': BTPTypeName290ToJSON(value.returnType),
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceAfterArglist': BTPSpace10ToJSON(value.spaceAfterArglist),
        'spaceAfterExport': BTPSpace10ToJSON(value.spaceAfterExport),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
        'startSourceLocation': value.startSourceLocation,
        'symbolName': BTPIdentifier8ToJSON(value.symbolName),
    };
}

