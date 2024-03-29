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
import type { BTWorkflowActionInfo } from './BTWorkflowActionInfo';
import {
    BTWorkflowActionInfoFromJSON,
    BTWorkflowActionInfoFromJSONTyped,
    BTWorkflowActionInfoToJSON,
} from './BTWorkflowActionInfo';
import type { BTWorkflowStateInfo } from './BTWorkflowStateInfo';
import {
    BTWorkflowStateInfoFromJSON,
    BTWorkflowStateInfoFromJSONTyped,
    BTWorkflowStateInfoToJSON,
} from './BTWorkflowStateInfo';

/**
 * 
 * @export
 * @interface BTWorkflowSnapshotInfo
 */
export interface BTWorkflowSnapshotInfo {
    /**
     * 
     * @type {Array<BTWorkflowActionInfo>}
     * @memberof BTWorkflowSnapshotInfo
     */
    actions?: Array<BTWorkflowActionInfo>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTWorkflowSnapshotInfo
     */
    approverIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowSnapshotInfo
     */
    canBeDiscarded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowSnapshotInfo
     */
    debugMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowSnapshotInfo
     */
    errorMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowSnapshotInfo
     */
    isCreator?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowSnapshotInfo
     */
    isDiscarded?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowSnapshotInfo
     */
    isFrozen?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowSnapshotInfo
     */
    isSetup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowSnapshotInfo
     */
    metadataState?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTWorkflowSnapshotInfo
     */
    notifierIds?: Array<string>;
    /**
     * 
     * @type {BTWorkflowStateInfo}
     * @memberof BTWorkflowSnapshotInfo
     */
    state?: BTWorkflowStateInfo;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowSnapshotInfo
     */
    usesExternalPlm?: boolean;
}

/**
 * Check if a given object implements the BTWorkflowSnapshotInfo interface.
 */
export function instanceOfBTWorkflowSnapshotInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowSnapshotInfoFromJSON(json: any): BTWorkflowSnapshotInfo {
    return BTWorkflowSnapshotInfoFromJSONTyped(json, false);
}

export function BTWorkflowSnapshotInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowSnapshotInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : ((json['actions'] as Array<any>).map(BTWorkflowActionInfoFromJSON)),
        'approverIds': !exists(json, 'approverIds') ? undefined : json['approverIds'],
        'canBeDiscarded': !exists(json, 'canBeDiscarded') ? undefined : json['canBeDiscarded'],
        'debugMicroversionId': !exists(json, 'debugMicroversionId') ? undefined : json['debugMicroversionId'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'isCreator': !exists(json, 'isCreator') ? undefined : json['isCreator'],
        'isDiscarded': !exists(json, 'isDiscarded') ? undefined : json['isDiscarded'],
        'isFrozen': !exists(json, 'isFrozen') ? undefined : json['isFrozen'],
        'isSetup': !exists(json, 'isSetup') ? undefined : json['isSetup'],
        'metadataState': !exists(json, 'metadataState') ? undefined : json['metadataState'],
        'notifierIds': !exists(json, 'notifierIds') ? undefined : json['notifierIds'],
        'state': !exists(json, 'state') ? undefined : BTWorkflowStateInfoFromJSON(json['state']),
        'usesExternalPlm': !exists(json, 'usesExternalPlm') ? undefined : json['usesExternalPlm'],
    };
}

export function BTWorkflowSnapshotInfoToJSON(value?: BTWorkflowSnapshotInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : ((value.actions as Array<any>).map(BTWorkflowActionInfoToJSON)),
        'approverIds': value.approverIds,
        'canBeDiscarded': value.canBeDiscarded,
        'debugMicroversionId': value.debugMicroversionId,
        'errorMessage': value.errorMessage,
        'isCreator': value.isCreator,
        'isDiscarded': value.isDiscarded,
        'isFrozen': value.isFrozen,
        'isSetup': value.isSetup,
        'metadataState': value.metadataState,
        'notifierIds': value.notifierIds,
        'state': BTWorkflowStateInfoToJSON(value.state),
        'usesExternalPlm': value.usesExternalPlm,
    };
}

