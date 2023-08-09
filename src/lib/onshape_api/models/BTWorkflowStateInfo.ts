/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.20169-88260985a0b6
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTWorkflowStateInfo
 */
export interface BTWorkflowStateInfo {
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowStateInfo
     */
    approverSourceProperty?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowStateInfo
     */
    displayName?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTWorkflowStateInfo
     */
    editPermissions?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTWorkflowStateInfo
     */
    editableProperties?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowStateInfo
     */
    name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTWorkflowStateInfo
     */
    nonEditableProperties?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof BTWorkflowStateInfo
     */
    notifierSourceProperty?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTWorkflowStateInfo
     */
    requiredItemProperties?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof BTWorkflowStateInfo
     */
    requiredProperties?: Set<string>;
}

/**
 * Check if a given object implements the BTWorkflowStateInfo interface.
 */
export function instanceOfBTWorkflowStateInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWorkflowStateInfoFromJSON(json: any): BTWorkflowStateInfo {
    return BTWorkflowStateInfoFromJSONTyped(json, false);
}

export function BTWorkflowStateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWorkflowStateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'approverSourceProperty': !exists(json, 'approverSourceProperty') ? undefined : json['approverSourceProperty'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'editPermissions': !exists(json, 'editPermissions') ? undefined : json['editPermissions'],
        'editableProperties': !exists(json, 'editableProperties') ? undefined : json['editableProperties'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nonEditableProperties': !exists(json, 'nonEditableProperties') ? undefined : json['nonEditableProperties'],
        'notifierSourceProperty': !exists(json, 'notifierSourceProperty') ? undefined : json['notifierSourceProperty'],
        'requiredItemProperties': !exists(json, 'requiredItemProperties') ? undefined : json['requiredItemProperties'],
        'requiredProperties': !exists(json, 'requiredProperties') ? undefined : json['requiredProperties'],
    };
}

export function BTWorkflowStateInfoToJSON(value?: BTWorkflowStateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'approverSourceProperty': value.approverSourceProperty,
        'displayName': value.displayName,
        'editPermissions': value.editPermissions === undefined ? undefined : Array.from(value.editPermissions as Set<any>),
        'editableProperties': value.editableProperties === undefined ? undefined : Array.from(value.editableProperties as Set<any>),
        'name': value.name,
        'nonEditableProperties': value.nonEditableProperties === undefined ? undefined : Array.from(value.nonEditableProperties as Set<any>),
        'notifierSourceProperty': value.notifierSourceProperty,
        'requiredItemProperties': value.requiredItemProperties === undefined ? undefined : Array.from(value.requiredItemProperties as Set<any>),
        'requiredProperties': value.requiredProperties === undefined ? undefined : Array.from(value.requiredProperties as Set<any>),
    };
}

