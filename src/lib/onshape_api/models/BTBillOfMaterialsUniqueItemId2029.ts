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
import type { BTElementReference725 } from './BTElementReference725';
import {
    BTElementReference725FromJSON,
    BTElementReference725FromJSONTyped,
    BTElementReference725ToJSON,
} from './BTElementReference725';
import type { BTMetadataObjectType } from './BTMetadataObjectType';
import {
    BTMetadataObjectTypeFromJSON,
    BTMetadataObjectTypeFromJSONTyped,
    BTMetadataObjectTypeToJSON,
} from './BTMetadataObjectType';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsUniqueItemId2029
 */
export interface BTBillOfMaterialsUniqueItemId2029 {
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    apiConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    isStandardContent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    itemDefinitionId?: string;
    /**
     * 
     * @type {BTMetadataObjectType}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    metadataObjectType?: BTMetadataObjectType;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    partId?: string;
    /**
     * 
     * @type {BTElementReference725}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    sourceElement?: BTElementReference725;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    versionMetadataWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsUniqueItemId2029
     */
    versionMetadataWorkspaceMicroversionId?: string;
}

/**
 * Check if a given object implements the BTBillOfMaterialsUniqueItemId2029 interface.
 */
export function instanceOfBTBillOfMaterialsUniqueItemId2029(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsUniqueItemId2029FromJSON(json: any): BTBillOfMaterialsUniqueItemId2029 {
    return BTBillOfMaterialsUniqueItemId2029FromJSONTyped(json, false);
}

export function BTBillOfMaterialsUniqueItemId2029FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsUniqueItemId2029 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiConfiguration': !exists(json, 'apiConfiguration') ? undefined : json['apiConfiguration'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isStandardContent': !exists(json, 'isStandardContent') ? undefined : json['isStandardContent'],
        'itemDefinitionId': !exists(json, 'itemDefinitionId') ? undefined : json['itemDefinitionId'],
        'metadataObjectType': !exists(json, 'metadataObjectType') ? undefined : BTMetadataObjectTypeFromJSON(json['metadataObjectType']),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'sourceElement': !exists(json, 'sourceElement') ? undefined : BTElementReference725FromJSON(json['sourceElement']),
        'versionMetadataWorkspaceId': !exists(json, 'versionMetadataWorkspaceId') ? undefined : json['versionMetadataWorkspaceId'],
        'versionMetadataWorkspaceMicroversionId': !exists(json, 'versionMetadataWorkspaceMicroversionId') ? undefined : json['versionMetadataWorkspaceMicroversionId'],
    };
}

export function BTBillOfMaterialsUniqueItemId2029ToJSON(value?: BTBillOfMaterialsUniqueItemId2029 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiConfiguration': value.apiConfiguration,
        'btType': value.btType,
        'isStandardContent': value.isStandardContent,
        'itemDefinitionId': value.itemDefinitionId,
        'metadataObjectType': BTMetadataObjectTypeToJSON(value.metadataObjectType),
        'partId': value.partId,
        'sourceElement': BTElementReference725ToJSON(value.sourceElement),
        'versionMetadataWorkspaceId': value.versionMetadataWorkspaceId,
        'versionMetadataWorkspaceMicroversionId': value.versionMetadataWorkspaceMicroversionId,
    };
}

