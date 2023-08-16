/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
import type { BTGeometryMateDisplayData1050 } from './BTGeometryMateDisplayData1050';
import {
    BTGeometryMateDisplayData1050FromJSON,
    BTGeometryMateDisplayData1050FromJSONTyped,
    BTGeometryMateDisplayData1050ToJSON,
} from './BTGeometryMateDisplayData1050';
import type { BTLoadDisplayData837 } from './BTLoadDisplayData837';
import {
    BTLoadDisplayData837FromJSON,
    BTLoadDisplayData837FromJSONTyped,
    BTLoadDisplayData837ToJSON,
} from './BTLoadDisplayData837';
import type { BTMateConnectorDisplayData94 } from './BTMateConnectorDisplayData94';
import {
    BTMateConnectorDisplayData94FromJSON,
    BTMateConnectorDisplayData94FromJSONTyped,
    BTMateConnectorDisplayData94ToJSON,
} from './BTMateConnectorDisplayData94';
import type { BTMateDisplayData1358 } from './BTMateDisplayData1358';
import {
    BTMateDisplayData1358FromJSON,
    BTMateDisplayData1358FromJSONTyped,
    BTMateDisplayData1358ToJSON,
} from './BTMateDisplayData1358';
import type { BTMateGroupDisplayData1990 } from './BTMateGroupDisplayData1990';
import {
    BTMateGroupDisplayData1990FromJSON,
    BTMateGroupDisplayData1990FromJSONTyped,
    BTMateGroupDisplayData1990ToJSON,
} from './BTMateGroupDisplayData1990';
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
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { BTOccurrenceDisplayData95 } from './BTOccurrenceDisplayData95';
import {
    BTOccurrenceDisplayData95FromJSON,
    BTOccurrenceDisplayData95FromJSONTyped,
    BTOccurrenceDisplayData95ToJSON,
} from './BTOccurrenceDisplayData95';
import type { BTOriginDisplayData934 } from './BTOriginDisplayData934';
import {
    BTOriginDisplayData934FromJSON,
    BTOriginDisplayData934FromJSONTyped,
    BTOriginDisplayData934ToJSON,
} from './BTOriginDisplayData934';
import type { BTPartStudioDisplayDataBase2751 } from './BTPartStudioDisplayDataBase2751';
import {
    BTPartStudioDisplayDataBase2751FromJSON,
    BTPartStudioDisplayDataBase2751FromJSONTyped,
    BTPartStudioDisplayDataBase2751ToJSON,
} from './BTPartStudioDisplayDataBase2751';

/**
 * 
 * @export
 * @interface BTRootAssemblyDisplayData96
 */
export interface BTRootAssemblyDisplayData96 {
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyDisplayData96
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRootAssemblyDisplayData96
     */
    buildDurationMillis?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTRootAssemblyDisplayData96
     */
    deletedGeometryMateIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTRootAssemblyDisplayData96
     */
    deletedLoads?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTRootAssemblyDisplayData96
     */
    deletedMateConnectorIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTRootAssemblyDisplayData96
     */
    deletedMateGroupIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTRootAssemblyDisplayData96
     */
    deletedMateIds?: Array<string>;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTRootAssemblyDisplayData96
     */
    deletedOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyDisplayData96
     */
    elementId?: string;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTRootAssemblyDisplayData96
     */
    fromFullElementId?: BTFullElementId756;
    /**
     * 
     * @type {BTFullElementId756}
     * @memberof BTRootAssemblyDisplayData96
     */
    fullElementId?: BTFullElementId756;
    /**
     * 
     * @type {Array<BTGeometryMateDisplayData1050>}
     * @memberof BTRootAssemblyDisplayData96
     */
    geometryMates?: Array<BTGeometryMateDisplayData1050>;
    /**
     * 
     * @type {boolean}
     * @memberof BTRootAssemblyDisplayData96
     */
    incremental?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTRootAssemblyDisplayData96
     */
    instanceCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTRootAssemblyDisplayData96
     */
    isCollapsible?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTRootAssemblyDisplayData96
     */
    isForInContext?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTRootAssemblyDisplayData96
     */
    keepFromMicroversion?: boolean;
    /**
     * 
     * @type {Array<BTLoadDisplayData837>}
     * @memberof BTRootAssemblyDisplayData96
     */
    loads?: Array<BTLoadDisplayData837>;
    /**
     * 
     * @type {Array<BTMateConnectorDisplayData94>}
     * @memberof BTRootAssemblyDisplayData96
     */
    mateConnectors?: Array<BTMateConnectorDisplayData94>;
    /**
     * 
     * @type {Array<BTMateGroupDisplayData1990>}
     * @memberof BTRootAssemblyDisplayData96
     */
    mateGroups?: Array<BTMateGroupDisplayData1990>;
    /**
     * 
     * @type {Array<BTMateDisplayData1358>}
     * @memberof BTRootAssemblyDisplayData96
     */
    mates?: Array<BTMateDisplayData1358>;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTRootAssemblyDisplayData96
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {BTMicroversionIdAndConfigurationInterval2364}
     * @memberof BTRootAssemblyDisplayData96
     */
    microversionIdAndConfigurationInterval?: BTMicroversionIdAndConfigurationInterval2364;
    /**
     * 
     * @type {BTMicroversionIdInterval367}
     * @memberof BTRootAssemblyDisplayData96
     */
    microversionInterval?: BTMicroversionIdInterval367;
    /**
     * 
     * @type {Array<BTOccurrenceDisplayData95>}
     * @memberof BTRootAssemblyDisplayData96
     */
    occurrences?: Array<BTOccurrenceDisplayData95>;
    /**
     * 
     * @type {BTOriginDisplayData934}
     * @memberof BTRootAssemblyDisplayData96
     */
    originDisplayData?: BTOriginDisplayData934;
    /**
     * 
     * @type {Array<BTPartStudioDisplayDataBase2751>}
     * @memberof BTRootAssemblyDisplayData96
     */
    partStudioDisplayData?: Array<BTPartStudioDisplayDataBase2751>;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyDisplayData96
     */
    quickSummary?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootAssemblyDisplayData96
     */
    sentTimeISO?: string;
    /**
     * 
     * @type {BTElementDisplayData326}
     * @memberof BTRootAssemblyDisplayData96
     */
    versionForRasterization?: BTElementDisplayData326;
}

/**
 * Check if a given object implements the BTRootAssemblyDisplayData96 interface.
 */
export function instanceOfBTRootAssemblyDisplayData96(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRootAssemblyDisplayData96FromJSON(json: any): BTRootAssemblyDisplayData96 {
    return BTRootAssemblyDisplayData96FromJSONTyped(json, false);
}

export function BTRootAssemblyDisplayData96FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRootAssemblyDisplayData96 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'buildDurationMillis': !exists(json, 'buildDurationMillis') ? undefined : json['buildDurationMillis'],
        'deletedGeometryMateIds': !exists(json, 'deletedGeometryMateIds') ? undefined : json['deletedGeometryMateIds'],
        'deletedLoads': !exists(json, 'deletedLoads') ? undefined : json['deletedLoads'],
        'deletedMateConnectorIds': !exists(json, 'deletedMateConnectorIds') ? undefined : json['deletedMateConnectorIds'],
        'deletedMateGroupIds': !exists(json, 'deletedMateGroupIds') ? undefined : json['deletedMateGroupIds'],
        'deletedMateIds': !exists(json, 'deletedMateIds') ? undefined : json['deletedMateIds'],
        'deletedOccurrences': !exists(json, 'deletedOccurrences') ? undefined : ((json['deletedOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'fromFullElementId': !exists(json, 'fromFullElementId') ? undefined : BTFullElementId756FromJSON(json['fromFullElementId']),
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementId756FromJSON(json['fullElementId']),
        'geometryMates': !exists(json, 'geometryMates') ? undefined : ((json['geometryMates'] as Array<any>).map(BTGeometryMateDisplayData1050FromJSON)),
        'incremental': !exists(json, 'incremental') ? undefined : json['incremental'],
        'instanceCount': !exists(json, 'instanceCount') ? undefined : json['instanceCount'],
        'isCollapsible': !exists(json, 'isCollapsible') ? undefined : json['isCollapsible'],
        'isForInContext': !exists(json, 'isForInContext') ? undefined : json['isForInContext'],
        'keepFromMicroversion': !exists(json, 'keepFromMicroversion') ? undefined : json['keepFromMicroversion'],
        'loads': !exists(json, 'loads') ? undefined : ((json['loads'] as Array<any>).map(BTLoadDisplayData837FromJSON)),
        'mateConnectors': !exists(json, 'mateConnectors') ? undefined : ((json['mateConnectors'] as Array<any>).map(BTMateConnectorDisplayData94FromJSON)),
        'mateGroups': !exists(json, 'mateGroups') ? undefined : ((json['mateGroups'] as Array<any>).map(BTMateGroupDisplayData1990FromJSON)),
        'mates': !exists(json, 'mates') ? undefined : ((json['mates'] as Array<any>).map(BTMateDisplayData1358FromJSON)),
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'microversionIdAndConfigurationInterval': !exists(json, 'microversionIdAndConfigurationInterval') ? undefined : BTMicroversionIdAndConfigurationInterval2364FromJSON(json['microversionIdAndConfigurationInterval']),
        'microversionInterval': !exists(json, 'microversionInterval') ? undefined : BTMicroversionIdInterval367FromJSON(json['microversionInterval']),
        'occurrences': !exists(json, 'occurrences') ? undefined : ((json['occurrences'] as Array<any>).map(BTOccurrenceDisplayData95FromJSON)),
        'originDisplayData': !exists(json, 'originDisplayData') ? undefined : BTOriginDisplayData934FromJSON(json['originDisplayData']),
        'partStudioDisplayData': !exists(json, 'partStudioDisplayData') ? undefined : ((json['partStudioDisplayData'] as Array<any>).map(BTPartStudioDisplayDataBase2751FromJSON)),
        'quickSummary': !exists(json, 'quickSummary') ? undefined : json['quickSummary'],
        'sentTimeISO': !exists(json, 'sentTimeISO') ? undefined : json['sentTimeISO'],
        'versionForRasterization': !exists(json, 'versionForRasterization') ? undefined : BTElementDisplayData326FromJSON(json['versionForRasterization']),
    };
}

export function BTRootAssemblyDisplayData96ToJSON(value?: BTRootAssemblyDisplayData96 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'buildDurationMillis': value.buildDurationMillis,
        'deletedGeometryMateIds': value.deletedGeometryMateIds,
        'deletedLoads': value.deletedLoads,
        'deletedMateConnectorIds': value.deletedMateConnectorIds,
        'deletedMateGroupIds': value.deletedMateGroupIds,
        'deletedMateIds': value.deletedMateIds,
        'deletedOccurrences': value.deletedOccurrences === undefined ? undefined : ((value.deletedOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'elementId': value.elementId,
        'fromFullElementId': BTFullElementId756ToJSON(value.fromFullElementId),
        'fullElementId': BTFullElementId756ToJSON(value.fullElementId),
        'geometryMates': value.geometryMates === undefined ? undefined : ((value.geometryMates as Array<any>).map(BTGeometryMateDisplayData1050ToJSON)),
        'incremental': value.incremental,
        'instanceCount': value.instanceCount,
        'isCollapsible': value.isCollapsible,
        'isForInContext': value.isForInContext,
        'keepFromMicroversion': value.keepFromMicroversion,
        'loads': value.loads === undefined ? undefined : ((value.loads as Array<any>).map(BTLoadDisplayData837ToJSON)),
        'mateConnectors': value.mateConnectors === undefined ? undefined : ((value.mateConnectors as Array<any>).map(BTMateConnectorDisplayData94ToJSON)),
        'mateGroups': value.mateGroups === undefined ? undefined : ((value.mateGroups as Array<any>).map(BTMateGroupDisplayData1990ToJSON)),
        'mates': value.mates === undefined ? undefined : ((value.mates as Array<any>).map(BTMateDisplayData1358ToJSON)),
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'microversionIdAndConfigurationInterval': BTMicroversionIdAndConfigurationInterval2364ToJSON(value.microversionIdAndConfigurationInterval),
        'microversionInterval': BTMicroversionIdInterval367ToJSON(value.microversionInterval),
        'occurrences': value.occurrences === undefined ? undefined : ((value.occurrences as Array<any>).map(BTOccurrenceDisplayData95ToJSON)),
        'originDisplayData': BTOriginDisplayData934ToJSON(value.originDisplayData),
        'partStudioDisplayData': value.partStudioDisplayData === undefined ? undefined : ((value.partStudioDisplayData as Array<any>).map(BTPartStudioDisplayDataBase2751ToJSON)),
        'quickSummary': value.quickSummary,
        'sentTimeISO': value.sentTimeISO,
        'versionForRasterization': BTElementDisplayData326ToJSON(value.versionForRasterization),
    };
}

