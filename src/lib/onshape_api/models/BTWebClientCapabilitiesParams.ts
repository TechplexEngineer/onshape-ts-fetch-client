/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20965-e01b1f4d96d1
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTWebClientCapabilitiesParams
 */
export interface BTWebClientCapabilitiesParams {
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    angleInstancedArrays?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    compressedTextureS3tc?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    depthTexture?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTWebClientCapabilitiesParams
     */
    devicePixelRatio?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    drawBuffers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    extTextureFilterAnisotropic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    has3dMouse?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesElementIndexUint?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesStandardDerivatives?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesTextureFloat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesTextureFloatLinear?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesTextureHalfFloat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesTextureHalfFloatLinear?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWebClientCapabilitiesParams
     */
    oesVertexArrayObject?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWebClientCapabilitiesParams
     */
    renderer?: string;
    /**
     * 
     * @type {number}
     * @memberof BTWebClientCapabilitiesParams
     */
    screenHeight?: number;
    /**
     * 
     * @type {number}
     * @memberof BTWebClientCapabilitiesParams
     */
    screenWidth?: number;
    /**
     * 
     * @type {string}
     * @memberof BTWebClientCapabilitiesParams
     */
    vendor?: string;
}

/**
 * Check if a given object implements the BTWebClientCapabilitiesParams interface.
 */
export function instanceOfBTWebClientCapabilitiesParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWebClientCapabilitiesParamsFromJSON(json: any): BTWebClientCapabilitiesParams {
    return BTWebClientCapabilitiesParamsFromJSONTyped(json, false);
}

export function BTWebClientCapabilitiesParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWebClientCapabilitiesParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'angleInstancedArrays': !exists(json, 'angleInstancedArrays') ? undefined : json['angleInstancedArrays'],
        'compressedTextureS3tc': !exists(json, 'compressedTextureS3tc') ? undefined : json['compressedTextureS3tc'],
        'depthTexture': !exists(json, 'depthTexture') ? undefined : json['depthTexture'],
        'devicePixelRatio': !exists(json, 'devicePixelRatio') ? undefined : json['devicePixelRatio'],
        'drawBuffers': !exists(json, 'drawBuffers') ? undefined : json['drawBuffers'],
        'extTextureFilterAnisotropic': !exists(json, 'extTextureFilterAnisotropic') ? undefined : json['extTextureFilterAnisotropic'],
        'has3dMouse': !exists(json, 'has3dMouse') ? undefined : json['has3dMouse'],
        'oesElementIndexUint': !exists(json, 'oesElementIndexUint') ? undefined : json['oesElementIndexUint'],
        'oesStandardDerivatives': !exists(json, 'oesStandardDerivatives') ? undefined : json['oesStandardDerivatives'],
        'oesTextureFloat': !exists(json, 'oesTextureFloat') ? undefined : json['oesTextureFloat'],
        'oesTextureFloatLinear': !exists(json, 'oesTextureFloatLinear') ? undefined : json['oesTextureFloatLinear'],
        'oesTextureHalfFloat': !exists(json, 'oesTextureHalfFloat') ? undefined : json['oesTextureHalfFloat'],
        'oesTextureHalfFloatLinear': !exists(json, 'oesTextureHalfFloatLinear') ? undefined : json['oesTextureHalfFloatLinear'],
        'oesVertexArrayObject': !exists(json, 'oesVertexArrayObject') ? undefined : json['oesVertexArrayObject'],
        'renderer': !exists(json, 'renderer') ? undefined : json['renderer'],
        'screenHeight': !exists(json, 'screenHeight') ? undefined : json['screenHeight'],
        'screenWidth': !exists(json, 'screenWidth') ? undefined : json['screenWidth'],
        'vendor': !exists(json, 'vendor') ? undefined : json['vendor'],
    };
}

export function BTWebClientCapabilitiesParamsToJSON(value?: BTWebClientCapabilitiesParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'angleInstancedArrays': value.angleInstancedArrays,
        'compressedTextureS3tc': value.compressedTextureS3tc,
        'depthTexture': value.depthTexture,
        'devicePixelRatio': value.devicePixelRatio,
        'drawBuffers': value.drawBuffers,
        'extTextureFilterAnisotropic': value.extTextureFilterAnisotropic,
        'has3dMouse': value.has3dMouse,
        'oesElementIndexUint': value.oesElementIndexUint,
        'oesStandardDerivatives': value.oesStandardDerivatives,
        'oesTextureFloat': value.oesTextureFloat,
        'oesTextureFloatLinear': value.oesTextureFloatLinear,
        'oesTextureHalfFloat': value.oesTextureHalfFloat,
        'oesTextureHalfFloatLinear': value.oesTextureHalfFloatLinear,
        'oesVertexArrayObject': value.oesVertexArrayObject,
        'renderer': value.renderer,
        'screenHeight': value.screenHeight,
        'screenWidth': value.screenWidth,
        'vendor': value.vendor,
    };
}

