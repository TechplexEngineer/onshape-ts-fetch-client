/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.20169-88260985a0b6
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
import type { GBTPType } from './GBTPType';
import {
    GBTPTypeFromJSON,
    GBTPTypeFromJSONTyped,
    GBTPTypeToJSON,
} from './GBTPType';

/**
 * 
 * @export
 * @interface BTPArgumentDeclaration232
 */
export interface BTPArgumentDeclaration232 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPArgumentDeclaration232
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPArgumentDeclaration232
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPArgumentDeclaration232
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPArgumentDeclaration232
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPArgumentDeclaration232
     */
    identifier?: BTPIdentifier8;
    /**
     * 
     * @type {BTPIdentifier8}
     * @memberof BTPArgumentDeclaration232
     */
    name?: BTPIdentifier8;
    /**
     * 
     * @type {string}
     * @memberof BTPArgumentDeclaration232
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPArgumentDeclaration232
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPArgumentDeclaration232
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPArgumentDeclaration232
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPArgumentDeclaration232
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {GBTPType}
     * @memberof BTPArgumentDeclaration232
     */
    standardType?: GBTPType;
    /**
     * 
     * @type {number}
     * @memberof BTPArgumentDeclaration232
     */
    startSourceLocation?: number;
    /**
     * 
     * @type {BTPTypeName290}
     * @memberof BTPArgumentDeclaration232
     */
    type?: BTPTypeName290;
    /**
     * 
     * @type {string}
     * @memberof BTPArgumentDeclaration232
     */
    typeName?: string;
}

/**
 * Check if a given object implements the BTPArgumentDeclaration232 interface.
 */
export function instanceOfBTPArgumentDeclaration232(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPArgumentDeclaration232FromJSON(json: any): BTPArgumentDeclaration232 {
    return BTPArgumentDeclaration232FromJSONTyped(json, false);
}

export function BTPArgumentDeclaration232FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPArgumentDeclaration232 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atomic': !exists(json, 'atomic') ? undefined : json['atomic'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'documentationType': !exists(json, 'documentationType') ? undefined : GBTPDefinitionTypeFromJSON(json['documentationType']),
        'endSourceLocation': !exists(json, 'endSourceLocation') ? undefined : json['endSourceLocation'],
        'identifier': !exists(json, 'identifier') ? undefined : BTPIdentifier8FromJSON(json['identifier']),
        'name': !exists(json, 'name') ? undefined : BTPIdentifier8FromJSON(json['name']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'shortDescriptor': !exists(json, 'shortDescriptor') ? undefined : json['shortDescriptor'],
        'spaceAfter': !exists(json, 'spaceAfter') ? undefined : BTPSpace10FromJSON(json['spaceAfter']),
        'spaceBefore': !exists(json, 'spaceBefore') ? undefined : BTPSpace10FromJSON(json['spaceBefore']),
        'spaceDefault': !exists(json, 'spaceDefault') ? undefined : json['spaceDefault'],
        'standardType': !exists(json, 'standardType') ? undefined : GBTPTypeFromJSON(json['standardType']),
        'startSourceLocation': !exists(json, 'startSourceLocation') ? undefined : json['startSourceLocation'],
        'type': !exists(json, 'type') ? undefined : BTPTypeName290FromJSON(json['type']),
        'typeName': !exists(json, 'typeName') ? undefined : json['typeName'],
    };
}

export function BTPArgumentDeclaration232ToJSON(value?: BTPArgumentDeclaration232 | null): any {
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
        'identifier': BTPIdentifier8ToJSON(value.identifier),
        'name': BTPIdentifier8ToJSON(value.name),
        'nodeId': value.nodeId,
        'shortDescriptor': value.shortDescriptor,
        'spaceAfter': BTPSpace10ToJSON(value.spaceAfter),
        'spaceBefore': BTPSpace10ToJSON(value.spaceBefore),
        'spaceDefault': value.spaceDefault,
        'standardType': GBTPTypeToJSON(value.standardType),
        'startSourceLocation': value.startSourceLocation,
        'type': BTPTypeName290ToJSON(value.type),
        'typeName': value.typeName,
    };
}

