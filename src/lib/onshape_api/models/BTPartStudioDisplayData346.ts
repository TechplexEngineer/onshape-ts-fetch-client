/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAppearanceOverride2517 } from './BTAppearanceOverride2517';
import {
    BTAppearanceOverride2517FromJSON,
    BTAppearanceOverride2517FromJSONTyped,
    BTAppearanceOverride2517ToJSON,
} from './BTAppearanceOverride2517';
import type { BTAssemblyReferencesDisplayData1562 } from './BTAssemblyReferencesDisplayData1562';
import {
    BTAssemblyReferencesDisplayData1562FromJSON,
    BTAssemblyReferencesDisplayData1562FromJSONTyped,
    BTAssemblyReferencesDisplayData1562ToJSON,
} from './BTAssemblyReferencesDisplayData1562';
import type { BTBaseEntityData33 } from './BTBaseEntityData33';
import {
    BTBaseEntityData33FromJSON,
    BTBaseEntityData33FromJSONTyped,
    BTBaseEntityData33ToJSON,
} from './BTBaseEntityData33';
import type { BTBasePartColorCycle2614 } from './BTBasePartColorCycle2614';
import {
    BTBasePartColorCycle2614FromJSON,
    BTBasePartColorCycle2614FromJSONTyped,
    BTBasePartColorCycle2614ToJSON,
} from './BTBasePartColorCycle2614';
import type { BTDecal2404 } from './BTDecal2404';
import {
    BTDecal2404FromJSON,
    BTDecal2404FromJSONTyped,
    BTDecal2404ToJSON,
} from './BTDecal2404';
import type { BTDimensionDisplayData323 } from './BTDimensionDisplayData323';
import {
    BTDimensionDisplayData323FromJSON,
    BTDimensionDisplayData323FromJSONTyped,
    BTDimensionDisplayData323ToJSON,
} from './BTDimensionDisplayData323';
import type { BTElementDisplayData326 } from './BTElementDisplayData326';
import {
    BTElementDisplayData326FromJSON,
    BTElementDisplayData326FromJSONTyped,
    BTElementDisplayData326ToJSON,
} from './BTElementDisplayData326';
import type { BTFullElementId756 } from './BTFullElementId756';
import {
    BTFullElementId756FromJSON,
    BTFullElementId756FromJSONTyped,
    BTFullElementId756ToJSON,
} from './BTFullElementId756';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTMicroversionIdAndConfigurationInterval2364 } from './BTMicroversionIdAndConfigurationInterval2364';
import {
    BTMicroversionIdAndConfigurationInterval2364FromJSON,
    BTMicroversionIdAndConfigurationInterval2364FromJSONTyped,
    BTMicroversionIdAndConfigurationInterval2364ToJSON,
} from './BTMicroversionIdAndConfigurationInterval2364';
import type { BTMicroversionIdInterval367 } from './BTMicroversionIdInterval367';
import {
    BTMicroversionIdInterval367FromJSON,
    BTMicroversionIdInterval367FromJSONTyped,
    BTMicroversionIdInterval367ToJSON,
} from './BTMicroversionIdInterval367';
import type { BTPartData16 } from './BTPartData16';
import {
    BTPartData16FromJSON,
    BTPartData16FromJSONTyped,
    BTPartData16ToJSON,
} from './BTPartData16';
import type { BTPartDisplayData17 } from './BTPartDisplayData17';
import {
    BTPartDisplayData17FromJSON,
    BTPartDisplayData17FromJSONTyped,
    BTPartDisplayData17ToJSON,
} from './BTPartDisplayData17';
import type { BTSketchImageDisplayData1379 } from './BTSketchImageDisplayData1379';
import {
    BTSketchImageDisplayData1379FromJSON,
    BTSketchImageDisplayData1379FromJSONTyped,
    BTSketchImageDisplayData1379ToJSON,
} from './BTSketchImageDisplayData1379';
import type { GBTDisplayDataUsage } from './GBTDisplayDataUsage';
import {
    GBTDisplayDataUsageFromJSON,
    GBTDisplayDataUsageFromJSONTyped,
    GBTDisplayDataUsageToJSON,
} from './GBTDisplayDataUsage';
import type { GBTPartStudioDisplayDataVersion } from './GBTPartStudioDisplayDataVersion';
import {
    GBTPartStudioDisplayDataVersionFromJSON,
    GBTPartStudioDisplayDataVersionFromJSONTyped,
    GBTPartStudioDisplayDataVersionToJSON,
} from './GBTPartStudioDisplayDataVersion';

/**
 * 
 * @export
 * @interface BTPartStudioDisplayData346
 */
export interface BTPartStudioDisplayData346 {
    /**
     * 
     * @type {{ [key: string]: BTAppearanceOverride2517; }}
     * @memberof BTPartStudioDisplayData346
     */
    appearanceIdToAppearanceOverride?: { [key: string]: BTAppearanceOverride2517; };
    /**
     * 
     * @type {BTAssemblyReferencesDisplayData1562}
     * @memberof BTPartStudioDisplayData346
     */
    assemblyReferenceDisplayData?: BTAssemblyReferencesDisplayData1562;
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayData346
     */
    btType?: string;
    /**
     * 
     * @type {GBTPartStudioDisplayDataVersion}
     * @memberof BTPartStudioDisplayData346
     */
    cacheablePartStudioDisplayDataVersion?: GBTPartStudioDisplayDataVersion;
    /**
     * 
     * @type {{ [key: string]: BTDecal2404; }}
     * @memberof BTPartStudioDisplayData346
     */
    decalIdToDecal?: { [key: string]: BTDecal2404; };
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BTPartStudioDisplayData346
     */
    deterministicIdToAssociatedFeatureIds?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {{ [key: string]: BTBaseEntityData33; }}
     * @memberof BTPartStudioDisplayData346
     */
    deterministicIdToEntity?: { [key: string]: BTBaseEntityData33; };
    /**
     * 
     * @type {{ [key: string]: BTPartDisplayData17; }}
     * @memberof BTPartStudioDisplayData346
     */
    deterministicIdToPartDisplayData?: { [key: string]: BTPartDisplayData17; };
    /**
     * 
     * @type {{ [key: string]: BTPartData16; }}
     * @memberof BTPartStudioDisplayData346
     */
    deterministicPartIdToData?: { [key: string]: BTPartData16; };
    /**
     * 
     * @type {Array<BTDimensionDisplayData323>}
     * @memberof BTPartStudioDisplayData346
     */
    dimensions?: Array<BTDimensionDisplayData323>;
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayData346
     */
    displayStateId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartStudioDisplayData346
     */
    elementId?: string;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof BTPartStudioDisplayData346
     */
    featureIdToOperationIndices?: { [key: string]: Array<number>; };
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    fromCache?: boolean;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTPartStudioDisplayData346
     */
    fromFullElementId?: BTFullElementId756;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTPartStudioDisplayData346
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    incremental?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTPartStudioDisplayData346
     */
    instanceCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    isBase?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    isExternal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    isNoop?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    keepFromMicroversion?: boolean;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTPartStudioDisplayData346
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {BTMicroversionIdAndConfigurationInterval2364}
     * @memberof BTPartStudioDisplayData346
     */
    microversionIdAndConfigurationInterval?: BTMicroversionIdAndConfigurationInterval2364;
    /**
     * 
     * @type {BTMicroversionIdInterval367}
     * @memberof BTPartStudioDisplayData346
     */
    microversionInterval?: BTMicroversionIdInterval367;
    /**
     * 
     * @type {number}
     * @memberof BTPartStudioDisplayData346
     */
    numberOfSketchEntities?: number;
    /**
     * 
     * @type {BTBasePartColorCycle2614}
     * @memberof BTPartStudioDisplayData346
     */
    partColorCycle?: BTBasePartColorCycle2614;
    /**
     * 
     * @type {Array<BTPartDisplayData17>}
     * @memberof BTPartStudioDisplayData346
     */
    partDisplayData?: Array<BTPartDisplayData17>;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: BTSketchImageDisplayData1379; }; }}
     * @memberof BTPartStudioDisplayData346
     */
    sketchImages?: { [key: string]: { [key: string]: BTSketchImageDisplayData1379; }; };
    /**
     * 
     * @type {Array<string>}
     * @memberof BTPartStudioDisplayData346
     */
    updatedParts?: Array<string>;
    /**
     * 
     * @type {GBTDisplayDataUsage}
     * @memberof BTPartStudioDisplayData346
     */
    usage?: GBTDisplayDataUsage;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartStudioDisplayData346
     */
    usesMultipleTessellationSettings?: boolean;
    /**
     * 
     * @type {BTElementDisplayData326}
     * @memberof BTPartStudioDisplayData346
     */
    versionForRasterization?: BTElementDisplayData326;
}

/**
 * Check if a given object implements the BTPartStudioDisplayData346 interface.
 */
export function instanceOfBTPartStudioDisplayData346(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartStudioDisplayData346FromJSON(json: any): BTPartStudioDisplayData346 {
    return BTPartStudioDisplayData346FromJSONTyped(json, false);
}

export function BTPartStudioDisplayData346FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartStudioDisplayData346 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearanceIdToAppearanceOverride': !exists(json, 'appearanceIdToAppearanceOverride') ? undefined : (mapValues(json['appearanceIdToAppearanceOverride'], BTAppearanceOverride2517FromJSON)),
        'assemblyReferenceDisplayData': !exists(json, 'assemblyReferenceDisplayData') ? undefined : BTAssemblyReferencesDisplayData1562FromJSON(json['assemblyReferenceDisplayData']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'cacheablePartStudioDisplayDataVersion': !exists(json, 'cacheablePartStudioDisplayDataVersion') ? undefined : GBTPartStudioDisplayDataVersionFromJSON(json['cacheablePartStudioDisplayDataVersion']),
        'decalIdToDecal': !exists(json, 'decalIdToDecal') ? undefined : (mapValues(json['decalIdToDecal'], BTDecal2404FromJSON)),
        'deterministicIdToAssociatedFeatureIds': !exists(json, 'deterministicIdToAssociatedFeatureIds') ? undefined : json['deterministicIdToAssociatedFeatureIds'],
        'deterministicIdToEntity': !exists(json, 'deterministicIdToEntity') ? undefined : (mapValues(json['deterministicIdToEntity'], BTBaseEntityData33FromJSON)),
        'deterministicIdToPartDisplayData': !exists(json, 'deterministicIdToPartDisplayData') ? undefined : (mapValues(json['deterministicIdToPartDisplayData'], BTPartDisplayData17FromJSON)),
        'deterministicPartIdToData': !exists(json, 'deterministicPartIdToData') ? undefined : (mapValues(json['deterministicPartIdToData'], BTPartData16FromJSON)),
        'dimensions': !exists(json, 'dimensions') ? undefined : ((json['dimensions'] as Array<any>).map(BTDimensionDisplayData323FromJSON)),
        'displayStateId': !exists(json, 'displayStateId') ? undefined : json['displayStateId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'featureIdToOperationIndices': !exists(json, 'featureIdToOperationIndices') ? undefined : json['featureIdToOperationIndices'],
        'fromCache': !exists(json, 'fromCache') ? undefined : json['fromCache'],
        'fromFullElementId': !exists(json, 'fromFullElementId') ? undefined : BTFullElementId756FromJSON(json['fromFullElementId']),
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'incremental': !exists(json, 'incremental') ? undefined : json['incremental'],
        'instanceCount': !exists(json, 'instanceCount') ? undefined : json['instanceCount'],
        'isBase': !exists(json, 'isBase') ? undefined : json['isBase'],
        'isExternal': !exists(json, 'isExternal') ? undefined : json['isExternal'],
        'isNoop': !exists(json, 'isNoop') ? undefined : json['isNoop'],
        'keepFromMicroversion': !exists(json, 'keepFromMicroversion') ? undefined : json['keepFromMicroversion'],
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'microversionIdAndConfigurationInterval': !exists(json, 'microversionIdAndConfigurationInterval') ? undefined : BTMicroversionIdAndConfigurationInterval2364FromJSON(json['microversionIdAndConfigurationInterval']),
        'microversionInterval': !exists(json, 'microversionInterval') ? undefined : BTMicroversionIdInterval367FromJSON(json['microversionInterval']),
        'numberOfSketchEntities': !exists(json, 'numberOfSketchEntities') ? undefined : json['numberOfSketchEntities'],
        'partColorCycle': !exists(json, 'partColorCycle') ? undefined : BTBasePartColorCycle2614FromJSON(json['partColorCycle']),
        'partDisplayData': !exists(json, 'partDisplayData') ? undefined : ((json['partDisplayData'] as Array<any>).map(BTPartDisplayData17FromJSON)),
        'sketchImages': !exists(json, 'sketchImages') ? undefined : json['sketchImages'],
        'updatedParts': !exists(json, 'updatedParts') ? undefined : json['updatedParts'],
        'usage': !exists(json, 'usage') ? undefined : GBTDisplayDataUsageFromJSON(json['usage']),
        'usesMultipleTessellationSettings': !exists(json, 'usesMultipleTessellationSettings') ? undefined : json['usesMultipleTessellationSettings'],
        'versionForRasterization': !exists(json, 'versionForRasterization') ? undefined : BTElementDisplayData326FromJSON(json['versionForRasterization']),
    };
}

export function BTPartStudioDisplayData346ToJSON(value?: BTPartStudioDisplayData346 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearanceIdToAppearanceOverride': value.appearanceIdToAppearanceOverride === undefined ? undefined : (mapValues(value.appearanceIdToAppearanceOverride, BTAppearanceOverride2517ToJSON)),
        'assemblyReferenceDisplayData': BTAssemblyReferencesDisplayData1562ToJSON(value.assemblyReferenceDisplayData),
        'btType': value.btType,
        'cacheablePartStudioDisplayDataVersion': GBTPartStudioDisplayDataVersionToJSON(value.cacheablePartStudioDisplayDataVersion),
        'decalIdToDecal': value.decalIdToDecal === undefined ? undefined : (mapValues(value.decalIdToDecal, BTDecal2404ToJSON)),
        'deterministicIdToAssociatedFeatureIds': value.deterministicIdToAssociatedFeatureIds,
        'deterministicIdToEntity': value.deterministicIdToEntity === undefined ? undefined : (mapValues(value.deterministicIdToEntity, BTBaseEntityData33ToJSON)),
        'deterministicIdToPartDisplayData': value.deterministicIdToPartDisplayData === undefined ? undefined : (mapValues(value.deterministicIdToPartDisplayData, BTPartDisplayData17ToJSON)),
        'deterministicPartIdToData': value.deterministicPartIdToData === undefined ? undefined : (mapValues(value.deterministicPartIdToData, BTPartData16ToJSON)),
        'dimensions': value.dimensions === undefined ? undefined : ((value.dimensions as Array<any>).map(BTDimensionDisplayData323ToJSON)),
        'displayStateId': value.displayStateId,
        'elementId': value.elementId,
        'featureIdToOperationIndices': value.featureIdToOperationIndices,
        'fromCache': value.fromCache,
        'fromFullElementId': BTFullElementId756ToJSON(value.fromFullElementId),
        'fullElementId': BTFullElementId756ToJSON(value.fullElementId),
        'incremental': value.incremental,
        'instanceCount': value.instanceCount,
        'isBase': value.isBase,
        'isExternal': value.isExternal,
        'isNoop': value.isNoop,
        'keepFromMicroversion': value.keepFromMicroversion,
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'microversionIdAndConfigurationInterval': BTMicroversionIdAndConfigurationInterval2364ToJSON(value.microversionIdAndConfigurationInterval),
        'microversionInterval': BTMicroversionIdInterval367ToJSON(value.microversionInterval),
        'numberOfSketchEntities': value.numberOfSketchEntities,
        'partColorCycle': BTBasePartColorCycle2614ToJSON(value.partColorCycle),
        'partDisplayData': value.partDisplayData === undefined ? undefined : ((value.partDisplayData as Array<any>).map(BTPartDisplayData17ToJSON)),
        'sketchImages': value.sketchImages,
        'updatedParts': value.updatedParts,
        'usage': GBTDisplayDataUsageToJSON(value.usage),
        'usesMultipleTessellationSettings': value.usesMultipleTessellationSettings,
        'versionForRasterization': BTElementDisplayData326ToJSON(value.versionForRasterization),
    };
}

