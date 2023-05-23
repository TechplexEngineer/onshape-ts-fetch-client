/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTWebhookOptions } from './BTWebhookOptions';
import {
    BTWebhookOptionsFromJSON,
    BTWebhookOptionsFromJSONTyped,
    BTWebhookOptionsToJSON,
} from './BTWebhookOptions';

/**
 * 
 * @export
 * @interface BTWebhookParams
 */
export interface BTWebhookParams {
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    clientId?: string;
    /**
     * Company admins can register webhooks to listen to all company events.
     * @type {string}
     * @memberof BTWebhookParams
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    elementId?: string;
    /**
     * List of events for which webhook callback is invoked.
     * @type {Array<string>}
     * @memberof BTWebhookParams
     */
    events?: Array<string>;
    /**
     * Applications can pass this parameter as X-Session-ID with every REST call to distinguish webhooks triggered by self.
     * @type {string}
     * @memberof BTWebhookParams
     */
    externalSessionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    filter?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    folderId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    id?: string;
    /**
     * Transient webhooks are automatically cleaned up after a period of inactivity.
     * @type {boolean}
     * @memberof BTWebhookParams
     */
    isTransient?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    linkDocumentId?: string;
    /**
     * 
     * @type {BTWebhookOptions}
     * @memberof BTWebhookParams
     */
    options?: BTWebhookOptions;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTWebhookParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTWebhookParams interface.
 */
export function instanceOfBTWebhookParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTWebhookParamsFromJSON(json: any): BTWebhookParams {
    return BTWebhookParamsFromJSONTyped(json, false);
}

export function BTWebhookParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTWebhookParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'events': !exists(json, 'events') ? undefined : json['events'],
        'externalSessionId': !exists(json, 'externalSessionId') ? undefined : json['externalSessionId'],
        'filter': !exists(json, 'filter') ? undefined : json['filter'],
        'folderId': !exists(json, 'folderId') ? undefined : json['folderId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isTransient': !exists(json, 'isTransient') ? undefined : json['isTransient'],
        'linkDocumentId': !exists(json, 'linkDocumentId') ? undefined : json['linkDocumentId'],
        'options': !exists(json, 'options') ? undefined : BTWebhookOptionsFromJSON(json['options']),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTWebhookParamsToJSON(value?: BTWebhookParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clientId': value.clientId,
        'companyId': value.companyId,
        'data': value.data,
        'description': value.description,
        'documentId': value.documentId,
        'elementId': value.elementId,
        'events': value.events,
        'externalSessionId': value.externalSessionId,
        'filter': value.filter,
        'folderId': value.folderId,
        'id': value.id,
        'isTransient': value.isTransient,
        'linkDocumentId': value.linkDocumentId,
        'options': BTWebhookOptionsToJSON(value.options),
        'partId': value.partId,
        'projectId': value.projectId,
        'url': value.url,
        'userId': value.userId,
        'versionId': value.versionId,
        'workspaceId': value.workspaceId,
    };
}
