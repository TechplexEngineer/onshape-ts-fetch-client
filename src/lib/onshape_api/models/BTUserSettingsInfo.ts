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
import type { BTCommonUnitsInfo } from './BTCommonUnitsInfo';
import {
    BTCommonUnitsInfoFromJSON,
    BTCommonUnitsInfoFromJSONTyped,
    BTCommonUnitsInfoToJSON,
} from './BTCommonUnitsInfo';
import type { BTDefaultUnitsInfo } from './BTDefaultUnitsInfo';
import {
    BTDefaultUnitsInfoFromJSON,
    BTDefaultUnitsInfoFromJSONTyped,
    BTDefaultUnitsInfoToJSON,
} from './BTDefaultUnitsInfo';
import type { BTMaterialLibrarySettingsInfo } from './BTMaterialLibrarySettingsInfo';
import {
    BTMaterialLibrarySettingsInfoFromJSON,
    BTMaterialLibrarySettingsInfoFromJSONTyped,
    BTMaterialLibrarySettingsInfoToJSON,
} from './BTMaterialLibrarySettingsInfo';
import type { BTSelectItemViewStateInfo } from './BTSelectItemViewStateInfo';
import {
    BTSelectItemViewStateInfoFromJSON,
    BTSelectItemViewStateInfoFromJSONTyped,
    BTSelectItemViewStateInfoToJSON,
} from './BTSelectItemViewStateInfo';
import type { BTSubstituteApproverInfo } from './BTSubstituteApproverInfo';
import {
    BTSubstituteApproverInfoFromJSON,
    BTSubstituteApproverInfoFromJSONTyped,
    BTSubstituteApproverInfoToJSON,
} from './BTSubstituteApproverInfo';
import type { BTUnitsMaximumDisplayPrecisionInfo } from './BTUnitsMaximumDisplayPrecisionInfo';
import {
    BTUnitsMaximumDisplayPrecisionInfoFromJSON,
    BTUnitsMaximumDisplayPrecisionInfoFromJSONTyped,
    BTUnitsMaximumDisplayPrecisionInfoToJSON,
} from './BTUnitsMaximumDisplayPrecisionInfo';
import type { BTViewManipulationMouseKeyMappingInfo } from './BTViewManipulationMouseKeyMappingInfo';
import {
    BTViewManipulationMouseKeyMappingInfoFromJSON,
    BTViewManipulationMouseKeyMappingInfoFromJSONTyped,
    BTViewManipulationMouseKeyMappingInfoToJSON,
} from './BTViewManipulationMouseKeyMappingInfo';

/**
 * 
 * @export
 * @interface BTUserSettingsInfo
 */
export interface BTUserSettingsInfo {
    /**
     * 
     * @type {BTCommonUnitsInfo}
     * @memberof BTUserSettingsInfo
     */
    commonUnits?: BTCommonUnitsInfo;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTUserSettingsInfo
     */
    customColors?: Array<string>;
    /**
     * 
     * @type {BTDefaultUnitsInfo}
     * @memberof BTUserSettingsInfo
     */
    defaultUnits?: BTDefaultUnitsInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSettingsInfo
     */
    displayAssemblyProperties?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTUserSettingsInfo
     */
    drawingBackgroundId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSettingsInfo
     */
    enforceApplicationAcl?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    exportDrawingOptions?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    exportSolidOptions?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    importOptions?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    locale?: string;
    /**
     * 
     * @type {BTMaterialLibrarySettingsInfo}
     * @memberof BTUserSettingsInfo
     */
    materialLibrarySettings?: BTMaterialLibrarySettingsInfo;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    miniToolbarSettings?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserSettingsInfo
     */
    mouseActions?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSettingsInfo
     */
    reverseScrollWheelZoomDirection?: boolean;
    /**
     * 
     * @type {Array<BTSelectItemViewStateInfo>}
     * @memberof BTUserSettingsInfo
     */
    selectItemViewStateInfos?: Array<BTSelectItemViewStateInfo>;
    /**
     * 
     * @type {number}
     * @memberof BTUserSettingsInfo
     */
    startupPage?: number;
    /**
     * 
     * @type {Array<BTSubstituteApproverInfo>}
     * @memberof BTUserSettingsInfo
     */
    substituteApprovers?: Array<BTSubstituteApproverInfo>;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTUserSettingsInfo
     */
    unitsDisplayPrecision?: { [key: string]: number; };
    /**
     * 
     * @type {BTUnitsMaximumDisplayPrecisionInfo}
     * @memberof BTUserSettingsInfo
     */
    unitsMaximumDisplayPrecision?: BTUnitsMaximumDisplayPrecisionInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSettingsInfo
     */
    use24HourTime?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTUserSettingsInfo
     */
    useDecimalComma?: boolean;
    /**
     * 
     * @type {BTViewManipulationMouseKeyMappingInfo}
     * @memberof BTUserSettingsInfo
     */
    viewManipulationMouseKeyMapping?: BTViewManipulationMouseKeyMappingInfo;
    /**
     * 
     * @type {number}
     * @memberof BTUserSettingsInfo
     */
    viewMappingId?: number;
}

/**
 * Check if a given object implements the BTUserSettingsInfo interface.
 */
export function instanceOfBTUserSettingsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserSettingsInfoFromJSON(json: any): BTUserSettingsInfo {
    return BTUserSettingsInfoFromJSONTyped(json, false);
}

export function BTUserSettingsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserSettingsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commonUnits': !exists(json, 'commonUnits') ? undefined : BTCommonUnitsInfoFromJSON(json['commonUnits']),
        'customColors': !exists(json, 'customColors') ? undefined : json['customColors'],
        'defaultUnits': !exists(json, 'defaultUnits') ? undefined : BTDefaultUnitsInfoFromJSON(json['defaultUnits']),
        'displayAssemblyProperties': !exists(json, 'displayAssemblyProperties') ? undefined : json['displayAssemblyProperties'],
        'drawingBackgroundId': !exists(json, 'drawingBackgroundId') ? undefined : json['drawingBackgroundId'],
        'enforceApplicationAcl': !exists(json, 'enforceApplicationAcl') ? undefined : json['enforceApplicationAcl'],
        'exportDrawingOptions': !exists(json, 'exportDrawingOptions') ? undefined : json['exportDrawingOptions'],
        'exportSolidOptions': !exists(json, 'exportSolidOptions') ? undefined : json['exportSolidOptions'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'importOptions': !exists(json, 'importOptions') ? undefined : json['importOptions'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'materialLibrarySettings': !exists(json, 'materialLibrarySettings') ? undefined : BTMaterialLibrarySettingsInfoFromJSON(json['materialLibrarySettings']),
        'miniToolbarSettings': !exists(json, 'miniToolbarSettings') ? undefined : json['miniToolbarSettings'],
        'mouseActions': !exists(json, 'mouseActions') ? undefined : json['mouseActions'],
        'reverseScrollWheelZoomDirection': !exists(json, 'reverseScrollWheelZoomDirection') ? undefined : json['reverseScrollWheelZoomDirection'],
        'selectItemViewStateInfos': !exists(json, 'selectItemViewStateInfos') ? undefined : ((json['selectItemViewStateInfos'] as Array<any>).map(BTSelectItemViewStateInfoFromJSON)),
        'startupPage': !exists(json, 'startupPage') ? undefined : json['startupPage'],
        'substituteApprovers': !exists(json, 'substituteApprovers') ? undefined : ((json['substituteApprovers'] as Array<any>).map(BTSubstituteApproverInfoFromJSON)),
        'unitsDisplayPrecision': !exists(json, 'unitsDisplayPrecision') ? undefined : json['unitsDisplayPrecision'],
        'unitsMaximumDisplayPrecision': !exists(json, 'unitsMaximumDisplayPrecision') ? undefined : BTUnitsMaximumDisplayPrecisionInfoFromJSON(json['unitsMaximumDisplayPrecision']),
        'use24HourTime': !exists(json, 'use24HourTime') ? undefined : json['use24HourTime'],
        'useDecimalComma': !exists(json, 'useDecimalComma') ? undefined : json['useDecimalComma'],
        'viewManipulationMouseKeyMapping': !exists(json, 'viewManipulationMouseKeyMapping') ? undefined : BTViewManipulationMouseKeyMappingInfoFromJSON(json['viewManipulationMouseKeyMapping']),
        'viewMappingId': !exists(json, 'viewMappingId') ? undefined : json['viewMappingId'],
    };
}

export function BTUserSettingsInfoToJSON(value?: BTUserSettingsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commonUnits': BTCommonUnitsInfoToJSON(value.commonUnits),
        'customColors': value.customColors,
        'defaultUnits': BTDefaultUnitsInfoToJSON(value.defaultUnits),
        'displayAssemblyProperties': value.displayAssemblyProperties,
        'drawingBackgroundId': value.drawingBackgroundId,
        'enforceApplicationAcl': value.enforceApplicationAcl,
        'exportDrawingOptions': value.exportDrawingOptions,
        'exportSolidOptions': value.exportSolidOptions,
        'id': value.id,
        'importOptions': value.importOptions,
        'locale': value.locale,
        'materialLibrarySettings': BTMaterialLibrarySettingsInfoToJSON(value.materialLibrarySettings),
        'miniToolbarSettings': value.miniToolbarSettings,
        'mouseActions': value.mouseActions,
        'reverseScrollWheelZoomDirection': value.reverseScrollWheelZoomDirection,
        'selectItemViewStateInfos': value.selectItemViewStateInfos === undefined ? undefined : ((value.selectItemViewStateInfos as Array<any>).map(BTSelectItemViewStateInfoToJSON)),
        'startupPage': value.startupPage,
        'substituteApprovers': value.substituteApprovers === undefined ? undefined : ((value.substituteApprovers as Array<any>).map(BTSubstituteApproverInfoToJSON)),
        'unitsDisplayPrecision': value.unitsDisplayPrecision,
        'unitsMaximumDisplayPrecision': BTUnitsMaximumDisplayPrecisionInfoToJSON(value.unitsMaximumDisplayPrecision),
        'use24HourTime': value.use24HourTime,
        'useDecimalComma': value.useDecimalComma,
        'viewManipulationMouseKeyMapping': BTViewManipulationMouseKeyMappingInfoToJSON(value.viewManipulationMouseKeyMapping),
        'viewMappingId': value.viewMappingId,
    };
}

