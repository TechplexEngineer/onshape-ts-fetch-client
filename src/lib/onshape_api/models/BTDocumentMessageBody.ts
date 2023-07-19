/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
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
 * @interface BTDocumentMessageBody
 */
export interface BTDocumentMessageBody {
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    appElementSessionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    commentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    documentState?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDocumentMessageBody
     */
    documentType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    event?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    messageId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    metadataObjectType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    partIdentity?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    partNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTDocumentMessageBody
     */
    timestamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    translatationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    translationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    webhookId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentMessageBody
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTDocumentMessageBody interface.
 */
export function instanceOfBTDocumentMessageBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentMessageBodyFromJSON(json: any): BTDocumentMessageBody {
    return BTDocumentMessageBodyFromJSONTyped(json, false);
}

export function BTDocumentMessageBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentMessageBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appElementSessionId': !exists(json, 'appElementSessionId') ? undefined : json['appElementSessionId'],
        'commentId': !exists(json, 'commentId') ? undefined : json['commentId'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentState': !exists(json, 'documentState') ? undefined : json['documentState'],
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'event': !exists(json, 'event') ? undefined : json['event'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'metadataObjectType': !exists(json, 'metadataObjectType') ? undefined : json['metadataObjectType'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : json['partIdentity'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'translatationId': !exists(json, 'translatationId') ? undefined : json['translatationId'],
        'translationId': !exists(json, 'translationId') ? undefined : json['translationId'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'webhookId': !exists(json, 'webhookId') ? undefined : json['webhookId'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTDocumentMessageBodyToJSON(value?: BTDocumentMessageBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appElementSessionId': value.appElementSessionId,
        'commentId': value.commentId,
        'data': value.data,
        'documentId': value.documentId,
        'documentState': value.documentState,
        'documentType': value.documentType,
        'elementId': value.elementId,
        'event': value.event,
        'messageId': value.messageId,
        'metadataObjectType': value.metadataObjectType,
        'partId': value.partId,
        'partIdentity': value.partIdentity,
        'partNumber': value.partNumber,
        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'translatationId': value.translatationId,
        'translationId': value.translationId,
        'userId': value.userId,
        'versionId': value.versionId,
        'webhookId': value.webhookId,
        'workspaceId': value.workspaceId,
    };
}

