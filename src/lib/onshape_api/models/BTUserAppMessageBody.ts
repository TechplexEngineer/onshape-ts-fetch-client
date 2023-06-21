/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTApplicationSettingsType } from './BTApplicationSettingsType';
import {
    BTApplicationSettingsTypeFromJSON,
    BTApplicationSettingsTypeFromJSONTyped,
    BTApplicationSettingsTypeToJSON,
} from './BTApplicationSettingsType';

/**
 * 
 * @export
 * @interface BTUserAppMessageBody
 */
export interface BTUserAppMessageBody {
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    appElementSessionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    event?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    identityId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    messageId?: string;
    /**
     * 
     * @type {BTApplicationSettingsType}
     * @memberof BTUserAppMessageBody
     */
    settingType?: BTApplicationSettingsType;
    /**
     * 
     * @type {Date}
     * @memberof BTUserAppMessageBody
     */
    timestamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof BTUserAppMessageBody
     */
    webhookId?: string;
}

/**
 * Check if a given object implements the BTUserAppMessageBody interface.
 */
export function instanceOfBTUserAppMessageBody(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTUserAppMessageBodyFromJSON(json: any): BTUserAppMessageBody {
    return BTUserAppMessageBodyFromJSONTyped(json, false);
}

export function BTUserAppMessageBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTUserAppMessageBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appElementSessionId': !exists(json, 'appElementSessionId') ? undefined : json['appElementSessionId'],
        'clientId': !exists(json, 'clientId') ? undefined : json['clientId'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'event': !exists(json, 'event') ? undefined : json['event'],
        'identityId': !exists(json, 'identityId') ? undefined : json['identityId'],
        'messageId': !exists(json, 'messageId') ? undefined : json['messageId'],
        'settingType': !exists(json, 'settingType') ? undefined : BTApplicationSettingsTypeFromJSON(json['settingType']),
        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'webhookId': !exists(json, 'webhookId') ? undefined : json['webhookId'],
    };
}

export function BTUserAppMessageBodyToJSON(value?: BTUserAppMessageBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appElementSessionId': value.appElementSessionId,
        'clientId': value.clientId,
        'data': value.data,
        'event': value.event,
        'identityId': value.identityId,
        'messageId': value.messageId,
        'settingType': BTApplicationSettingsTypeToJSON(value.settingType),
        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'webhookId': value.webhookId,
    };
}

