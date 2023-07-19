/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';
import type { BTTessellatedGeometry2576 } from './BTTessellatedGeometry2576';
import {
    BTTessellatedGeometry2576FromJSON,
    BTTessellatedGeometry2576FromJSONTyped,
    BTTessellatedGeometry2576ToJSON,
} from './BTTessellatedGeometry2576';
import type { GBTDebugEntityColor } from './GBTDebugEntityColor';
import {
    GBTDebugEntityColorFromJSON,
    GBTDebugEntityColorFromJSONTyped,
    GBTDebugEntityColorToJSON,
} from './GBTDebugEntityColor';
import type { GBTDebugEntityStyle } from './GBTDebugEntityStyle';
import {
    GBTDebugEntityStyleFromJSON,
    GBTDebugEntityStyleFromJSONTyped,
    GBTDebugEntityStyleToJSON,
} from './GBTDebugEntityStyle';

/**
 * 
 * @export
 * @interface BTDebugGeometry2059AllOf
 */
export interface BTDebugGeometry2059AllOf {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTDebugGeometry2059AllOf
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {boolean}
     * @memberof BTDebugGeometry2059AllOf
     */
    belongsToFlattenedSheetMetalBody?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059AllOf
     */
    bodyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059AllOf
     */
    btType?: string;
    /**
     * 
     * @type {GBTDebugEntityColor}
     * @memberof BTDebugGeometry2059AllOf
     */
    color?: GBTDebugEntityColor;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059AllOf
     */
    deterministicId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDebugGeometry2059AllOf
     */
    sheetMetalModelId?: string;
    /**
     * 
     * @type {GBTDebugEntityStyle}
     * @memberof BTDebugGeometry2059AllOf
     */
    style?: GBTDebugEntityStyle;
    /**
     * 
     * @type {BTTessellatedGeometry2576}
     * @memberof BTDebugGeometry2059AllOf
     */
    tessellation?: BTTessellatedGeometry2576;
}

/**
 * Check if a given object implements the BTDebugGeometry2059AllOf interface.
 */
export function instanceOfBTDebugGeometry2059AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDebugGeometry2059AllOfFromJSON(json: any): BTDebugGeometry2059AllOf {
    return BTDebugGeometry2059AllOfFromJSONTyped(json, false);
}

export function BTDebugGeometry2059AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDebugGeometry2059AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'belongsToFlattenedSheetMetalBody': !exists(json, 'belongsToFlattenedSheetMetalBody') ? undefined : json['belongsToFlattenedSheetMetalBody'],
        'bodyId': !exists(json, 'bodyId') ? undefined : json['bodyId'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'color': !exists(json, 'color') ? undefined : GBTDebugEntityColorFromJSON(json['color']),
        'deterministicId': !exists(json, 'deterministicId') ? undefined : json['deterministicId'],
        'sheetMetalModelId': !exists(json, 'sheetMetalModelId') ? undefined : json['sheetMetalModelId'],
        'style': !exists(json, 'style') ? undefined : GBTDebugEntityStyleFromJSON(json['style']),
        'tessellation': !exists(json, 'tessellation') ? undefined : BTTessellatedGeometry2576FromJSON(json['tessellation']),
    };
}

export function BTDebugGeometry2059AllOfToJSON(value?: BTDebugGeometry2059AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'belongsToFlattenedSheetMetalBody': value.belongsToFlattenedSheetMetalBody,
        'bodyId': value.bodyId,
        'btType': value.btType,
        'color': GBTDebugEntityColorToJSON(value.color),
        'deterministicId': value.deterministicId,
        'sheetMetalModelId': value.sheetMetalModelId,
        'style': GBTDebugEntityStyleToJSON(value.style),
        'tessellation': BTTessellatedGeometry2576ToJSON(value.tessellation),
    };
}

