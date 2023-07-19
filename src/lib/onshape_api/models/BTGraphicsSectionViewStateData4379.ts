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
import type { BTGraphicsSectionPlaneData1429 } from './BTGraphicsSectionPlaneData1429';
import {
    BTGraphicsSectionPlaneData1429FromJSON,
    BTGraphicsSectionPlaneData1429FromJSONTyped,
    BTGraphicsSectionPlaneData1429ToJSON,
} from './BTGraphicsSectionPlaneData1429';
import type { BTUiSelection1185 } from './BTUiSelection1185';
import {
    BTUiSelection1185FromJSON,
    BTUiSelection1185FromJSONTyped,
    BTUiSelection1185ToJSON,
} from './BTUiSelection1185';

/**
 * 
 * @export
 * @interface BTGraphicsSectionViewStateData4379
 */
export interface BTGraphicsSectionViewStateData4379 {
    /**
     * 
     * @type {string}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    elementId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    isExcluding?: boolean;
    /**
     * 
     * @type {Array<BTGraphicsSectionPlaneData1429>}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    sectionPlanes?: Array<BTGraphicsSectionPlaneData1429>;
    /**
     * 
     * @type {Array<BTUiSelection1185>}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    selectionsToExclude?: Array<BTUiSelection1185>;
    /**
     * 
     * @type {Array<BTUiSelection1185>}
     * @memberof BTGraphicsSectionViewStateData4379
     */
    selectionsToInclude?: Array<BTUiSelection1185>;
}

/**
 * Check if a given object implements the BTGraphicsSectionViewStateData4379 interface.
 */
export function instanceOfBTGraphicsSectionViewStateData4379(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTGraphicsSectionViewStateData4379FromJSON(json: any): BTGraphicsSectionViewStateData4379 {
    return BTGraphicsSectionViewStateData4379FromJSONTyped(json, false);
}

export function BTGraphicsSectionViewStateData4379FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTGraphicsSectionViewStateData4379 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'isExcluding': !exists(json, 'isExcluding') ? undefined : json['isExcluding'],
        'sectionPlanes': !exists(json, 'sectionPlanes') ? undefined : ((json['sectionPlanes'] as Array<any>).map(BTGraphicsSectionPlaneData1429FromJSON)),
        'selectionsToExclude': !exists(json, 'selectionsToExclude') ? undefined : ((json['selectionsToExclude'] as Array<any>).map(BTUiSelection1185FromJSON)),
        'selectionsToInclude': !exists(json, 'selectionsToInclude') ? undefined : ((json['selectionsToInclude'] as Array<any>).map(BTUiSelection1185FromJSON)),
    };
}

export function BTGraphicsSectionViewStateData4379ToJSON(value?: BTGraphicsSectionViewStateData4379 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'elementId': value.elementId,
        'isExcluding': value.isExcluding,
        'sectionPlanes': value.sectionPlanes === undefined ? undefined : ((value.sectionPlanes as Array<any>).map(BTGraphicsSectionPlaneData1429ToJSON)),
        'selectionsToExclude': value.selectionsToExclude === undefined ? undefined : ((value.selectionsToExclude as Array<any>).map(BTUiSelection1185ToJSON)),
        'selectionsToInclude': value.selectionsToInclude === undefined ? undefined : ((value.selectionsToInclude as Array<any>).map(BTUiSelection1185ToJSON)),
    };
}

