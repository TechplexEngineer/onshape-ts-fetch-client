/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTCacheDataPath191 } from './BTCacheDataPath191';
import {
    BTCacheDataPath191FromJSON,
    BTCacheDataPath191FromJSONTyped,
    BTCacheDataPath191ToJSON,
} from './BTCacheDataPath191';
import type { BTDefaultFeatures119 } from './BTDefaultFeatures119';
import {
    BTDefaultFeatures119FromJSON,
    BTDefaultFeatures119FromJSONTyped,
    BTDefaultFeatures119ToJSON,
} from './BTDefaultFeatures119';
import type { BTImport } from './BTImport';
import {
    BTImportFromJSON,
    BTImportFromJSONTyped,
    BTImportToJSON,
} from './BTImport';
import type { BTMConfigurationData1560 } from './BTMConfigurationData1560';
import {
    BTMConfigurationData1560FromJSON,
    BTMConfigurationData1560FromJSONTyped,
    BTMConfigurationData1560ToJSON,
} from './BTMConfigurationData1560';
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';
import type { BTMImport136 } from './BTMImport136';
import {
    BTMImport136FromJSON,
    BTMImport136FromJSONTyped,
    BTMImport136ToJSON,
} from './BTMImport136';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
} from './BTMNode19';
import type { BTMRollback150 } from './BTMRollback150';
import {
    BTMRollback150FromJSON,
    BTMRollback150FromJSONTyped,
    BTMRollback150ToJSON,
} from './BTMRollback150';
import type { BTMUnitsDefault160 } from './BTMUnitsDefault160';
import {
    BTMUnitsDefault160FromJSON,
    BTMUnitsDefault160FromJSONTyped,
    BTMUnitsDefault160ToJSON,
} from './BTMUnitsDefault160';
import type { BTMVariableStudioReference2764 } from './BTMVariableStudioReference2764';
import {
    BTMVariableStudioReference2764FromJSON,
    BTMVariableStudioReference2764FromJSONTyped,
    BTMVariableStudioReference2764ToJSON,
} from './BTMVariableStudioReference2764';
import type { BTModelProperties1258 } from './BTModelProperties1258';
import {
    BTModelProperties1258FromJSON,
    BTModelProperties1258FromJSONTyped,
    BTModelProperties1258ToJSON,
} from './BTModelProperties1258';
import type { BTPModuleId235 } from './BTPModuleId235';
import {
    BTPModuleId235FromJSON,
    BTPModuleId235FromJSONTyped,
    BTPModuleId235ToJSON,
} from './BTPModuleId235';
import type { BTPartProperties293 } from './BTPartProperties293';
import {
    BTPartProperties293FromJSON,
    BTPartProperties293FromJSONTyped,
    BTPartProperties293ToJSON,
} from './BTPartProperties293';

/**
 * 
 * @export
 * @interface BTMModel141
 */
export interface BTMModel141 {
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTMModel141
     */
    allFeatures?: Array<BTMFeature134>;
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTMModel141
     */
    allFeaturesAndOtherReferences?: Array<BTMFeature134>;
    /**
     * 
     * @type {Array<BTMFeature134>}
     * @memberof BTMModel141
     */
    allFeaturesAndSubFeatures?: Array<BTMFeature134>;
    /**
     * 
     * @type {string}
     * @memberof BTMModel141
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMNode19>}
     * @memberof BTMModel141
     */
    children?: Array<BTMNode19>;
    /**
     * 
     * @type {BTMConfigurationData1560}
     * @memberof BTMModel141
     */
    configurationData?: BTMConfigurationData1560;
    /**
     * 
     * @type {boolean}
     * @memberof BTMModel141
     */
    configured?: boolean;
    /**
     * 
     * @type {{ [key: string]: Array<BTImport>; }}
     * @memberof BTMModel141
     */
    deepImports?: { [key: string]: Array<BTImport>; };
    /**
     * 
     * @type {BTDefaultFeatures119}
     * @memberof BTMModel141
     */
    defaultFeatures?: BTDefaultFeatures119;
    /**
     * 
     * @type {BTMUnitsDefault160}
     * @memberof BTMModel141
     */
    defaultUnits?: BTMUnitsDefault160;
    /**
     * 
     * @type {{ [key: string]: Array<BTImport>; }}
     * @memberof BTMModel141
     */
    featureImports?: { [key: string]: Array<BTImport>; };
    /**
     * 
     * @type {number}
     * @memberof BTMModel141
     */
    firstRollbackIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMModel141
     */
    importMicroversion?: string;
    /**
     * 
     * @type {Set<BTPModuleId235>}
     * @memberof BTMModel141
     */
    importSet?: Set<BTPModuleId235>;
    /**
     * 
     * @type {Array<BTMImport136>}
     * @memberof BTMModel141
     */
    imports?: Array<BTMImport136>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMModel141
     */
    isVariableStudio?: boolean;
    /**
     * 
     * @type {BTMFeature134}
     * @memberof BTMModel141
     */
    lastFeatureBeforeRollBack?: BTMFeature134;
    /**
     * 
     * @type {string}
     * @memberof BTMModel141
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMModel141
     */
    nodeId?: string;
    /**
     * 
     * @type {BTPartProperties293}
     * @memberof BTMModel141
     */
    partProperties?: BTPartProperties293;
    /**
     * 
     * @type {BTCacheDataPath191}
     * @memberof BTMModel141
     */
    pathToCache?: BTCacheDataPath191;
    /**
     * 
     * @type {BTModelProperties1258}
     * @memberof BTMModel141
     */
    properties?: BTModelProperties1258;
    /**
     * 
     * @type {BTMRollback150}
     * @memberof BTMModel141
     */
    rollbackBar?: BTMRollback150;
    /**
     * 
     * @type {boolean}
     * @memberof BTMModel141
     */
    rolledBackToEnd?: boolean;
    /**
     * 
     * @type {Array<BTMVariableStudioReference2764>}
     * @memberof BTMModel141
     */
    variableStudios?: Array<BTMVariableStudioReference2764>;
}

/**
 * Check if a given object implements the BTMModel141 interface.
 */
export function instanceOfBTMModel141(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMModel141FromJSON(json: any): BTMModel141 {
    return BTMModel141FromJSONTyped(json, false);
}

export function BTMModel141FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMModel141 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allFeatures': !exists(json, 'allFeatures') ? undefined : ((json['allFeatures'] as Array<any>).map(BTMFeature134FromJSON)),
        'allFeaturesAndOtherReferences': !exists(json, 'allFeaturesAndOtherReferences') ? undefined : ((json['allFeaturesAndOtherReferences'] as Array<any>).map(BTMFeature134FromJSON)),
        'allFeaturesAndSubFeatures': !exists(json, 'allFeaturesAndSubFeatures') ? undefined : ((json['allFeaturesAndSubFeatures'] as Array<any>).map(BTMFeature134FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(BTMNode19FromJSON)),
        'configurationData': !exists(json, 'configurationData') ? undefined : BTMConfigurationData1560FromJSON(json['configurationData']),
        'configured': !exists(json, 'configured') ? undefined : json['configured'],
        'deepImports': !exists(json, 'deepImports') ? undefined : json['deepImports'],
        'defaultFeatures': !exists(json, 'defaultFeatures') ? undefined : BTDefaultFeatures119FromJSON(json['defaultFeatures']),
        'defaultUnits': !exists(json, 'defaultUnits') ? undefined : BTMUnitsDefault160FromJSON(json['defaultUnits']),
        'featureImports': !exists(json, 'featureImports') ? undefined : json['featureImports'],
        'firstRollbackIndex': !exists(json, 'firstRollbackIndex') ? undefined : json['firstRollbackIndex'],
        'importMicroversion': !exists(json, 'importMicroversion') ? undefined : json['importMicroversion'],
        'importSet': !exists(json, 'importSet') ? undefined : (new Set((json['importSet'] as Array<any>).map(BTPModuleId235FromJSON))),
        'imports': !exists(json, 'imports') ? undefined : ((json['imports'] as Array<any>).map(BTMImport136FromJSON)),
        'isVariableStudio': !exists(json, 'isVariableStudio') ? undefined : json['isVariableStudio'],
        'lastFeatureBeforeRollBack': !exists(json, 'lastFeatureBeforeRollBack') ? undefined : BTMFeature134FromJSON(json['lastFeatureBeforeRollBack']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'partProperties': !exists(json, 'partProperties') ? undefined : BTPartProperties293FromJSON(json['partProperties']),
        'pathToCache': !exists(json, 'pathToCache') ? undefined : BTCacheDataPath191FromJSON(json['pathToCache']),
        'properties': !exists(json, 'properties') ? undefined : BTModelProperties1258FromJSON(json['properties']),
        'rollbackBar': !exists(json, 'rollbackBar') ? undefined : BTMRollback150FromJSON(json['rollbackBar']),
        'rolledBackToEnd': !exists(json, 'rolledBackToEnd') ? undefined : json['rolledBackToEnd'],
        'variableStudios': !exists(json, 'variableStudios') ? undefined : ((json['variableStudios'] as Array<any>).map(BTMVariableStudioReference2764FromJSON)),
    };
}

export function BTMModel141ToJSON(value?: BTMModel141 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allFeatures': value.allFeatures === undefined ? undefined : ((value.allFeatures as Array<any>).map(BTMFeature134ToJSON)),
        'allFeaturesAndOtherReferences': value.allFeaturesAndOtherReferences === undefined ? undefined : ((value.allFeaturesAndOtherReferences as Array<any>).map(BTMFeature134ToJSON)),
        'allFeaturesAndSubFeatures': value.allFeaturesAndSubFeatures === undefined ? undefined : ((value.allFeaturesAndSubFeatures as Array<any>).map(BTMFeature134ToJSON)),
        'btType': value.btType,
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(BTMNode19ToJSON)),
        'configurationData': BTMConfigurationData1560ToJSON(value.configurationData),
        'configured': value.configured,
        'deepImports': value.deepImports,
        'defaultFeatures': BTDefaultFeatures119ToJSON(value.defaultFeatures),
        'defaultUnits': BTMUnitsDefault160ToJSON(value.defaultUnits),
        'featureImports': value.featureImports,
        'firstRollbackIndex': value.firstRollbackIndex,
        'importMicroversion': value.importMicroversion,
        'importSet': value.importSet === undefined ? undefined : (Array.from(value.importSet as Set<any>).map(BTPModuleId235ToJSON)),
        'imports': value.imports === undefined ? undefined : ((value.imports as Array<any>).map(BTMImport136ToJSON)),
        'isVariableStudio': value.isVariableStudio,
        'lastFeatureBeforeRollBack': BTMFeature134ToJSON(value.lastFeatureBeforeRollBack),
        'name': value.name,
        'nodeId': value.nodeId,
        'partProperties': BTPartProperties293ToJSON(value.partProperties),
        'pathToCache': BTCacheDataPath191ToJSON(value.pathToCache),
        'properties': BTModelProperties1258ToJSON(value.properties),
        'rollbackBar': BTMRollback150ToJSON(value.rollbackBar),
        'rolledBackToEnd': value.rolledBackToEnd,
        'variableStudios': value.variableStudios === undefined ? undefined : ((value.variableStudios as Array<any>).map(BTMVariableStudioReference2764ToJSON)),
    };
}

