/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
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
 * @interface BTRevisionMessageBody
 */
export interface BTRevisionMessageBody {
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    appElementSessionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    commentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    documentState?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRevisionMessageBody
     */
    documentType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    event?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    messageId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    metadataObjectType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    partIdentity?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    partNumber?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTRevisionMessageBody
     */
    timestamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    translatationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    translationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    versionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    webhookId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    workspaceId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTRevisionMessageBody
     */
    elementType?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTRevisionMessageBody
     */
    isFromInitialState?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTRevisionMessageBody
     */
    isToTerminalState?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    releaseId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    transitionName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionMessageBody
     */
    revisionId?: string;
}

/**
 * Check if a given object implements the BTRevisionMessageBody interface.
 */
export function instanceOfBTRevisionMessageBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRevisionMessageBodyFromJSON(json: any): BTRevisionMessageBody {
    return BTRevisionMessageBodyFromJSONTyped(json, false);
}

export function BTRevisionMessageBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRevisionMessageBody {
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
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'isFromInitialState': !exists(json, 'isFromInitialState') ? undefined : json['isFromInitialState'],
        'isToTerminalState': !exists(json, 'isToTerminalState') ? undefined : json['isToTerminalState'],
        'releaseId': !exists(json, 'releaseId') ? undefined : json['releaseId'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'transitionName': !exists(json, 'transitionName') ? undefined : json['transitionName'],
        'revisionId': !exists(json, 'revisionId') ? undefined : json['revisionId'],
    };
}

export function BTRevisionMessageBodyToJSON(value?: BTRevisionMessageBody | null): any {
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
        'elementType': value.elementType,
        'isFromInitialState': value.isFromInitialState,
        'isToTerminalState': value.isToTerminalState,
        'releaseId': value.releaseId,
        'status': value.status,
        'transitionName': value.transitionName,
        'revisionId': value.revisionId,
    };
}

