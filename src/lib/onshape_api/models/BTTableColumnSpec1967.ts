/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTParameterSpec6 } from './BTParameterSpec6';
import {
    BTParameterSpec6FromJSON,
    BTParameterSpec6FromJSONTyped,
    BTParameterSpec6ToJSON,
} from './BTParameterSpec6';
import type { GBTTableColumnWidthUnits } from './GBTTableColumnWidthUnits';
import {
    GBTTableColumnWidthUnitsFromJSON,
    GBTTableColumnWidthUnitsFromJSONTyped,
    GBTTableColumnWidthUnitsToJSON,
} from './GBTTableColumnWidthUnits';
import type { GBTTableTextAlignment } from './GBTTableTextAlignment';
import {
    GBTTableTextAlignmentFromJSON,
    GBTTableTextAlignmentFromJSONTyped,
    GBTTableTextAlignmentToJSON,
} from './GBTTableTextAlignment';

/**
 * 
 * @export
 * @interface BTTableColumnSpec1967
 */
export interface BTTableColumnSpec1967 {
    /**
     * 
     * @type {string}
     * @memberof BTTableColumnSpec1967
     */
    btType?: string;
    /**
     * 
     * @type {BTParameterSpec6}
     * @memberof BTTableColumnSpec1967
     */
    defaultCellSpec?: BTParameterSpec6;
    /**
     * 
     * @type {GBTTableColumnWidthUnits}
     * @memberof BTTableColumnSpec1967
     */
    defaultColumnWidthUnits?: GBTTableColumnWidthUnits;
    /**
     * 
     * @type {number}
     * @memberof BTTableColumnSpec1967
     */
    defaultColumnWidthValue?: number;
    /**
     * 
     * @type {string}
     * @memberof BTTableColumnSpec1967
     */
    defaultHeaderName?: string;
    /**
     * 
     * @type {GBTTableTextAlignment}
     * @memberof BTTableColumnSpec1967
     */
    defaultTextAlignment?: GBTTableTextAlignment;
    /**
     * 
     * @type {boolean}
     * @memberof BTTableColumnSpec1967
     */
    readOnly?: boolean;
}

/**
 * Check if a given object implements the BTTableColumnSpec1967 interface.
 */
export function instanceOfBTTableColumnSpec1967(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTableColumnSpec1967FromJSON(json: any): BTTableColumnSpec1967 {
    return BTTableColumnSpec1967FromJSONTyped(json, false);
}

export function BTTableColumnSpec1967FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTableColumnSpec1967 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'defaultCellSpec': !exists(json, 'defaultCellSpec') ? undefined : BTParameterSpec6FromJSON(json['defaultCellSpec']),
        'defaultColumnWidthUnits': !exists(json, 'defaultColumnWidthUnits') ? undefined : GBTTableColumnWidthUnitsFromJSON(json['defaultColumnWidthUnits']),
        'defaultColumnWidthValue': !exists(json, 'defaultColumnWidthValue') ? undefined : json['defaultColumnWidthValue'],
        'defaultHeaderName': !exists(json, 'defaultHeaderName') ? undefined : json['defaultHeaderName'],
        'defaultTextAlignment': !exists(json, 'defaultTextAlignment') ? undefined : GBTTableTextAlignmentFromJSON(json['defaultTextAlignment']),
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function BTTableColumnSpec1967ToJSON(value?: BTTableColumnSpec1967 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'defaultCellSpec': BTParameterSpec6ToJSON(value.defaultCellSpec),
        'defaultColumnWidthUnits': GBTTableColumnWidthUnitsToJSON(value.defaultColumnWidthUnits),
        'defaultColumnWidthValue': value.defaultColumnWidthValue,
        'defaultHeaderName': value.defaultHeaderName,
        'defaultTextAlignment': GBTTableTextAlignmentToJSON(value.defaultTextAlignment),
        'readOnly': value.readOnly,
    };
}

