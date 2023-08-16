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
     BTPExpression9FromJSONTyped,
     BTPIdentifier8FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTPPropertyAccessor23
 */
export interface BTPPropertyAccessor23 {
    /**
     * 
     * @type {boolean}
     * @memberof BTPPropertyAccessor23
     */
    atomic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTPPropertyAccessor23
     */
    btType?: string;
    /**
     * 
     * @type {GBTPDefinitionType}
     * @memberof BTPPropertyAccessor23
     */
    documentationType?: GBTPDefinitionType;
    /**
     * 
     * @type {number}
     * @memberof BTPPropertyAccessor23
     */
    endSourceLocation?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPPropertyAccessor23
     */
    nodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPPropertyAccessor23
     */
    shortDescriptor?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPPropertyAccessor23
     */
    spaceAfter?: BTPSpace10;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPPropertyAccessor23
     */
    spaceBefore?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPPropertyAccessor23
     */
    spaceDefault?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPPropertyAccessor23
     */
    startSourceLocation?: number;
}

/**
 * Check if a given object implements the BTPPropertyAccessor23 interface.
 */
export function instanceOfBTPPropertyAccessor23(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPPropertyAccessor23FromJSON(json: any): BTPPropertyAccessor23 {
    return BTPPropertyAccessor23FromJSONTyped(json, false);
}

export function BTPPropertyAccessor23FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPPropertyAccessor23 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTPExpression-9') {
            return BTPExpression9FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTPIdentifier-8') {
            return BTPIdentifier8FromJSONTyped(json, true);
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

export function BTPPropertyAccessor23ToJSON(value?: BTPPropertyAccessor23 | null): any {
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

