/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPropertyValueParam } from './BTPropertyValueParam';
import {
    BTPropertyValueParamFromJSON,
    BTPropertyValueParamFromJSONTyped,
    BTPropertyValueParamToJSON,
} from './BTPropertyValueParam';
import type { BTReleasePackageItemParams } from './BTReleasePackageItemParams';
import {
    BTReleasePackageItemParamsFromJSON,
    BTReleasePackageItemParamsFromJSONTyped,
    BTReleasePackageItemParamsToJSON,
} from './BTReleasePackageItemParams';

/**
 * 
 * @export
 * @interface BTUpdateReleasePackageParams
 */
export interface BTUpdateReleasePackageParams {
    /**
     * 
     * @type {boolean}
     * @memberof BTUpdateReleasePackageParams
     */
    empty?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTUpdateReleasePackageParams
     */
    itemIds?: Array<string>;
    /**
     * 
     * @type {Array<BTReleasePackageItemParams>}
     * @memberof BTUpdateReleasePackageParams
     */
    items?: Array<BTReleasePackageItemParams>;
    /**
     * 
     * @type {Array<BTPropertyValueParam>}
     * @memberof BTUpdateReleasePackageParams
     */
    properties?: Array<BTPropertyValueParam>;
}

/**
 * Check if a given object implements the BTUpdateReleasePackageParams interface.
 */
export function instanceOfBTUpdateReleasePackageParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUpdateReleasePackageParamsFromJSON(json: any): BTUpdateReleasePackageParams {
    return BTUpdateReleasePackageParamsFromJSONTyped(json, false);
}

export function BTUpdateReleasePackageParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUpdateReleasePackageParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empty': !exists(json, 'empty') ? undefined : json['empty'],
        'itemIds': !exists(json, 'itemIds') ? undefined : json['itemIds'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(BTReleasePackageItemParamsFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTPropertyValueParamFromJSON)),
    };
}

export function BTUpdateReleasePackageParamsToJSON(value?: BTUpdateReleasePackageParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empty': value.empty,
        'itemIds': value.itemIds,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(BTReleasePackageItemParamsToJSON)),
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTPropertyValueParamToJSON)),
    };
}

