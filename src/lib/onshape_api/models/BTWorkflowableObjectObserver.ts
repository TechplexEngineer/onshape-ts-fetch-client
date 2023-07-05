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
import type { BTWorkflowObserverEntryType } from './BTWorkflowObserverEntryType';
import {
    BTWorkflowObserverEntryTypeFromJSON,
    BTWorkflowObserverEntryTypeFromJSONTyped,
    BTWorkflowObserverEntryTypeToJSON,
} from './BTWorkflowObserverEntryType';
import type { BTWorkflowObserverState } from './BTWorkflowObserverState';
import {
    BTWorkflowObserverStateFromJSON,
    BTWorkflowObserverStateFromJSONTyped,
    BTWorkflowObserverStateToJSON,
} from './BTWorkflowObserverState';

/**
 * 
 * @export
 * @interface BTWorkflowableObjectObserver
 */
export interface BTWorkflowableObjectObserver {
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowableObjectObserver
     */
    adminOverride?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkflowableObjectObserver
     */
    approvalDate?: Date;
    /**
     * 
     * @type {BTWorkflowObserverState}
     * @memberof BTWorkflowableObjectObserver
     */
    approvalState?: BTWorkflowObserverState;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    approverId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    approverName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    associatedStates?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    companyId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkflowableObjectObserver
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    createdBy?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    entryId?: string;
    /**
     * 
     * @type {BTWorkflowObserverEntryType}
     * @memberof BTWorkflowableObjectObserver
     */
    entryType?: BTWorkflowObserverEntryType;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkflowableObjectObserver
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    modifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowableObjectObserver
     */
    _new?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    objectId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTWorkflowableObjectObserver
     */
    observationType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowableObjectObserver
     */
    propertyId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTWorkflowableObjectObserver
     */
    rejectionDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof BTWorkflowableObjectObserver
     */
    removable?: boolean;
}

/**
 * Check if a given object implements the BTWorkflowableObjectObserver interface.
 */
export function instanceOfBTWorkflowableObjectObserver(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowableObjectObserverFromJSON(json: any): BTWorkflowableObjectObserver {
    return BTWorkflowableObjectObserverFromJSONTyped(json, false);
}

export function BTWorkflowableObjectObserverFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowableObjectObserver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adminOverride': !exists(json, 'adminOverride') ? undefined : json['adminOverride'],
        'approvalDate': !exists(json, 'approvalDate') ? undefined : (new Date(json['approvalDate'])),
        'approvalState': !exists(json, 'approvalState') ? undefined : BTWorkflowObserverStateFromJSON(json['approvalState']),
        'approverId': !exists(json, 'approverId') ? undefined : json['approverId'],
        'approverName': !exists(json, 'approverName') ? undefined : json['approverName'],
        'associatedStates': !exists(json, 'associatedStates') ? undefined : json['associatedStates'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'entryId': !exists(json, 'entryId') ? undefined : json['entryId'],
        'entryType': !exists(json, 'entryType') ? undefined : BTWorkflowObserverEntryTypeFromJSON(json['entryType']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        '_new': !exists(json, 'new') ? undefined : json['new'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'observationType': !exists(json, 'observationType') ? undefined : json['observationType'],
        'propertyId': !exists(json, 'propertyId') ? undefined : json['propertyId'],
        'rejectionDate': !exists(json, 'rejectionDate') ? undefined : (new Date(json['rejectionDate'])),
        'removable': !exists(json, 'removable') ? undefined : json['removable'],
    };
}

export function BTWorkflowableObjectObserverToJSON(value?: BTWorkflowableObjectObserver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adminOverride': value.adminOverride,
        'approvalDate': value.approvalDate === undefined ? undefined : (value.approvalDate.toISOString()),
        'approvalState': BTWorkflowObserverStateToJSON(value.approvalState),
        'approverId': value.approverId,
        'approverName': value.approverName,
        'associatedStates': value.associatedStates,
        'companyId': value.companyId,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': value.createdBy,
        'description': value.description,
        'entryId': value.entryId,
        'entryType': BTWorkflowObserverEntryTypeToJSON(value.entryType),
        'id': value.id,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': value.modifiedBy,
        'name': value.name,
        'new': value._new,
        'objectId': value.objectId,
        'observationType': value.observationType,
        'propertyId': value.propertyId,
        'rejectionDate': value.rejectionDate === undefined ? undefined : (value.rejectionDate.toISOString()),
        'removable': value.removable,
    };
}

