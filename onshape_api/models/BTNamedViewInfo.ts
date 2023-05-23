/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTGraphicsSectionViewStateData4379 } from './BTGraphicsSectionViewStateData4379';
import {
    BTGraphicsSectionViewStateData4379FromJSON,
    BTGraphicsSectionViewStateData4379FromJSONTyped,
    BTGraphicsSectionViewStateData4379ToJSON,
} from './BTGraphicsSectionViewStateData4379';
import type { BTSectionPlaneInfo } from './BTSectionPlaneInfo';
import {
    BTSectionPlaneInfoFromJSON,
    BTSectionPlaneInfoFromJSONTyped,
    BTSectionPlaneInfoToJSON,
} from './BTSectionPlaneInfo';

/**
 * 
 * @export
 * @interface BTNamedViewInfo
 */
export interface BTNamedViewInfo {
    /**
     * 
     * @type {number}
     * @memberof BTNamedViewInfo
     */
    angle?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTNamedViewInfo
     */
    cameraViewport?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof BTNamedViewInfo
     */
    perspective?: boolean;
    /**
     * 
     * @type {Array<BTSectionPlaneInfo>}
     * @memberof BTNamedViewInfo
     */
    sectionPlanes?: Array<BTSectionPlaneInfo>;
    /**
     * 
     * @type {BTGraphicsSectionViewStateData4379}
     * @memberof BTNamedViewInfo
     */
    sectionViewData?: BTGraphicsSectionViewStateData4379;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTNamedViewInfo
     */
    viewMatrix?: Array<number>;
}

/**
 * Check if a given object implements the BTNamedViewInfo interface.
 */
export function instanceOfBTNamedViewInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTNamedViewInfoFromJSON(json: any): BTNamedViewInfo {
    return BTNamedViewInfoFromJSONTyped(json, false);
}

export function BTNamedViewInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTNamedViewInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'angle': !exists(json, 'angle') ? undefined : json['angle'],
        'cameraViewport': !exists(json, 'cameraViewport') ? undefined : json['cameraViewport'],
        'perspective': !exists(json, 'perspective') ? undefined : json['perspective'],
        'sectionPlanes': !exists(json, 'sectionPlanes') ? undefined : ((json['sectionPlanes'] as Array<any>).map(BTSectionPlaneInfoFromJSON)),
        'sectionViewData': !exists(json, 'sectionViewData') ? undefined : BTGraphicsSectionViewStateData4379FromJSON(json['sectionViewData']),
        'viewMatrix': !exists(json, 'viewMatrix') ? undefined : json['viewMatrix'],
    };
}

export function BTNamedViewInfoToJSON(value?: BTNamedViewInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'angle': value.angle,
        'cameraViewport': value.cameraViewport,
        'perspective': value.perspective,
        'sectionPlanes': value.sectionPlanes === undefined ? undefined : ((value.sectionPlanes as Array<any>).map(BTSectionPlaneInfoToJSON)),
        'sectionViewData': BTGraphicsSectionViewStateData4379ToJSON(value.sectionViewData),
        'viewMatrix': value.viewMatrix,
    };
}
