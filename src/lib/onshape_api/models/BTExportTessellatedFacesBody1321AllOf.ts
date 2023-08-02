/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19740-5e8d8b0919a8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTExportTessellatedFacesFace1192 } from './BTExportTessellatedFacesFace1192';
import {
    BTExportTessellatedFacesFace1192FromJSON,
    BTExportTessellatedFacesFace1192FromJSONTyped,
    BTExportTessellatedFacesFace1192ToJSON,
} from './BTExportTessellatedFacesFace1192';
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTBodyType } from './GBTBodyType';
import {
    GBTBodyTypeFromJSON,
    GBTBodyTypeFromJSONTyped,
    GBTBodyTypeToJSON,
} from './GBTBodyType';

/**
 * 
 * @export
 * @interface BTExportTessellatedFacesBody1321AllOf
 */
export interface BTExportTessellatedFacesBody1321AllOf {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTExportTessellatedFacesBody1321AllOf
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {GBTBodyType}
     * @memberof BTExportTessellatedFacesBody1321AllOf
     */
    bodyType?: GBTBodyType;
    /**
     * 
     * @type {string}
     * @memberof BTExportTessellatedFacesBody1321AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTExportTessellatedFacesFace1192>}
     * @memberof BTExportTessellatedFacesBody1321AllOf
     */
    faces?: Array<BTExportTessellatedFacesFace1192>;
    /**
     * 
     * @type {Array<BTVector3d389>}
     * @memberof BTExportTessellatedFacesBody1321AllOf
     */
    facetPoints?: Array<BTVector3d389>;
}

/**
 * Check if a given object implements the BTExportTessellatedFacesBody1321AllOf interface.
 */
export function instanceOfBTExportTessellatedFacesBody1321AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportTessellatedFacesBody1321AllOfFromJSON(json: any): BTExportTessellatedFacesBody1321AllOf {
    return BTExportTessellatedFacesBody1321AllOfFromJSONTyped(json, false);
}

export function BTExportTessellatedFacesBody1321AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportTessellatedFacesBody1321AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'bodyType': !exists(json, 'bodyType') ? undefined : GBTBodyTypeFromJSON(json['bodyType']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'faces': !exists(json, 'faces') ? undefined : ((json['faces'] as Array<any>).map(BTExportTessellatedFacesFace1192FromJSON)),
        'facetPoints': !exists(json, 'facetPoints') ? undefined : ((json['facetPoints'] as Array<any>).map(BTVector3d389FromJSON)),
    };
}

export function BTExportTessellatedFacesBody1321AllOfToJSON(value?: BTExportTessellatedFacesBody1321AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'bodyType': GBTBodyTypeToJSON(value.bodyType),
        'btType': value.btType,
        'faces': value.faces === undefined ? undefined : ((value.faces as Array<any>).map(BTExportTessellatedFacesFace1192ToJSON)),
        'facetPoints': value.facetPoints === undefined ? undefined : ((value.facetPoints as Array<any>).map(BTVector3d389ToJSON)),
    };
}

