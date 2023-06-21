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
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';
import type { BTObjectId } from './BTObjectId';
import {
    BTObjectIdFromJSON,
    BTObjectIdFromJSONTyped,
    BTObjectIdToJSON,
} from './BTObjectId';
import type { BTPartCustomProperties1338 } from './BTPartCustomProperties1338';
import {
    BTPartCustomProperties1338FromJSON,
    BTPartCustomProperties1338FromJSONTyped,
    BTPartCustomProperties1338ToJSON,
} from './BTPartCustomProperties1338';
import type { BTPartMaterial1445 } from './BTPartMaterial1445';
import {
    BTPartMaterial1445FromJSON,
    BTPartMaterial1445FromJSONTyped,
    BTPartMaterial1445ToJSON,
} from './BTPartMaterial1445';
import type { BTPartMetadataSource2895 } from './BTPartMetadataSource2895';
import {
    BTPartMetadataSource2895FromJSON,
    BTPartMetadataSource2895FromJSONTyped,
    BTPartMetadataSource2895ToJSON,
} from './BTPartMetadataSource2895';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';
import type { GBTMeshState } from './GBTMeshState';
import {
    GBTMeshStateFromJSON,
    GBTMeshStateFromJSONTyped,
    GBTMeshStateToJSON,
} from './GBTMeshState';
import type { GBTPartVisibility } from './GBTPartVisibility';
import {
    GBTPartVisibilityFromJSON,
    GBTPartVisibilityFromJSONTyped,
    GBTPartVisibilityToJSON,
} from './GBTPartVisibility';

/**
 * 
 * @export
 * @interface BTPartDisplayData17
 */
export interface BTPartDisplayData17 {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTPartDisplayData17
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTPartDisplayData17
     */
    appearanceForNewCell?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {string}
     * @memberof BTPartDisplayData17
     */
    btType?: string;
    /**
     * 
     * @type {BTPartCustomProperties1338}
     * @memberof BTPartDisplayData17
     */
    customProperties?: BTPartCustomProperties1338;
    /**
     * 
     * @type {string}
     * @memberof BTPartDisplayData17
     */
    defaultColorHash?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    hasFaults?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    hidden?: boolean;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTPartDisplayData17
     */
    highBoxCorner?: BTVector3d389;
    /**
     * 
     * @type {string}
     * @memberof BTPartDisplayData17
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    isActiveSheetMetal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    isMesh?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    isModifiable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    isSheet?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    isSolid?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartDisplayData17
     */
    isWire?: boolean;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTPartDisplayData17
     */
    lowBoxCorner?: BTVector3d389;
    /**
     * 
     * @type {BTPartMaterial1445}
     * @memberof BTPartDisplayData17
     */
    material?: BTPartMaterial1445;
    /**
     * 
     * @type {BTPartMaterial1445}
     * @memberof BTPartDisplayData17
     */
    materialForNewCell?: BTPartMaterial1445;
    /**
     * 
     * @type {GBTMeshState}
     * @memberof BTPartDisplayData17
     */
    meshState?: GBTMeshState;
    /**
     * 
     * @type {string}
     * @memberof BTPartDisplayData17
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartDisplayData17
     */
    nameForNewCell?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPartDisplayData17
     */
    ordinal?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPartDisplayData17
     */
    partId?: string;
    /**
     * 
     * @type {{ [key: string]: BTPartMetadataSource2895; }}
     * @memberof BTPartDisplayData17
     */
    propertyIdToSource?: { [key: string]: BTPartMetadataSource2895; };
    /**
     * 
     * @type {Array<BTObjectId>}
     * @memberof BTPartDisplayData17
     */
    referencingConfiguredPartNodeIds?: Array<BTObjectId>;
    /**
     * 
     * @type {GBTPartVisibility}
     * @memberof BTPartDisplayData17
     */
    visibility?: GBTPartVisibility;
}

/**
 * Check if a given object implements the BTPartDisplayData17 interface.
 */
export function instanceOfBTPartDisplayData17(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartDisplayData17FromJSON(json: any): BTPartDisplayData17 {
    return BTPartDisplayData17FromJSONTyped(json, false);
}

export function BTPartDisplayData17FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartDisplayData17 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'appearanceForNewCell': !exists(json, 'appearanceForNewCell') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearanceForNewCell']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'customProperties': !exists(json, 'customProperties') ? undefined : BTPartCustomProperties1338FromJSON(json['customProperties']),
        'defaultColorHash': !exists(json, 'defaultColorHash') ? undefined : json['defaultColorHash'],
        'hasFaults': !exists(json, 'hasFaults') ? undefined : json['hasFaults'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'highBoxCorner': !exists(json, 'highBoxCorner') ? undefined : BTVector3d389FromJSON(json['highBoxCorner']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isActiveSheetMetal': !exists(json, 'isActiveSheetMetal') ? undefined : json['isActiveSheetMetal'],
        'isMesh': !exists(json, 'isMesh') ? undefined : json['isMesh'],
        'isModifiable': !exists(json, 'isModifiable') ? undefined : json['isModifiable'],
        'isSheet': !exists(json, 'isSheet') ? undefined : json['isSheet'],
        'isSolid': !exists(json, 'isSolid') ? undefined : json['isSolid'],
        'isWire': !exists(json, 'isWire') ? undefined : json['isWire'],
        'lowBoxCorner': !exists(json, 'lowBoxCorner') ? undefined : BTVector3d389FromJSON(json['lowBoxCorner']),
        'material': !exists(json, 'material') ? undefined : BTPartMaterial1445FromJSON(json['material']),
        'materialForNewCell': !exists(json, 'materialForNewCell') ? undefined : BTPartMaterial1445FromJSON(json['materialForNewCell']),
        'meshState': !exists(json, 'meshState') ? undefined : GBTMeshStateFromJSON(json['meshState']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nameForNewCell': !exists(json, 'nameForNewCell') ? undefined : json['nameForNewCell'],
        'ordinal': !exists(json, 'ordinal') ? undefined : json['ordinal'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'propertyIdToSource': !exists(json, 'propertyIdToSource') ? undefined : (mapValues(json['propertyIdToSource'], BTPartMetadataSource2895FromJSON)),
        'referencingConfiguredPartNodeIds': !exists(json, 'referencingConfiguredPartNodeIds') ? undefined : ((json['referencingConfiguredPartNodeIds'] as Array<any>).map(BTObjectIdFromJSON)),
        'visibility': !exists(json, 'visibility') ? undefined : GBTPartVisibilityFromJSON(json['visibility']),
    };
}

export function BTPartDisplayData17ToJSON(value?: BTPartDisplayData17 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'appearanceForNewCell': BTGraphicsAppearance1152ToJSON(value.appearanceForNewCell),
        'btType': value.btType,
        'customProperties': BTPartCustomProperties1338ToJSON(value.customProperties),
        'defaultColorHash': value.defaultColorHash,
        'hasFaults': value.hasFaults,
        'hidden': value.hidden,
        'highBoxCorner': BTVector3d389ToJSON(value.highBoxCorner),
        'id': value.id,
        'isActiveSheetMetal': value.isActiveSheetMetal,
        'isMesh': value.isMesh,
        'isModifiable': value.isModifiable,
        'isSheet': value.isSheet,
        'isSolid': value.isSolid,
        'isWire': value.isWire,
        'lowBoxCorner': BTVector3d389ToJSON(value.lowBoxCorner),
        'material': BTPartMaterial1445ToJSON(value.material),
        'materialForNewCell': BTPartMaterial1445ToJSON(value.materialForNewCell),
        'meshState': GBTMeshStateToJSON(value.meshState),
        'name': value.name,
        'nameForNewCell': value.nameForNewCell,
        'ordinal': value.ordinal,
        'partId': value.partId,
        'propertyIdToSource': value.propertyIdToSource === undefined ? undefined : (mapValues(value.propertyIdToSource, BTPartMetadataSource2895ToJSON)),
        'referencingConfiguredPartNodeIds': value.referencingConfiguredPartNodeIds === undefined ? undefined : ((value.referencingConfiguredPartNodeIds as Array<any>).map(BTObjectIdToJSON)),
        'visibility': GBTPartVisibilityToJSON(value.visibility),
    };
}

