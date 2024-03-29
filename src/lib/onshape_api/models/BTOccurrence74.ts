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
import {
     BTOccurrenceWithFullPartIds1464FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTOccurrence74
 */
export interface BTOccurrence74 {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    fullPathAsString?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    headInstanceId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrence74
     */
    occurrenceWithoutHead?: BTOccurrence74;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrence74
     */
    occurrenceWithoutTail?: BTOccurrence74;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTOccurrence74
     */
    parent?: BTOccurrence74;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTOccurrence74
     */
    path?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrence74
     */
    rootOccurrence?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTOccurrence74
     */
    tailInstanceId?: string;
}

/**
 * Check if a given object implements the BTOccurrence74 interface.
 */
export function instanceOfBTOccurrence74(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrence74FromJSON(json: any): BTOccurrence74 {
    return BTOccurrence74FromJSONTyped(json, false);
}

export function BTOccurrence74FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrence74 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTOccurrenceWithFullPartIds-1464') {
            return BTOccurrenceWithFullPartIds1464FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'fullPathAsString': !exists(json, 'fullPathAsString') ? undefined : json['fullPathAsString'],
        'headInstanceId': !exists(json, 'headInstanceId') ? undefined : json['headInstanceId'],
        'occurrenceWithoutHead': !exists(json, 'occurrenceWithoutHead') ? undefined : BTOccurrence74FromJSON(json['occurrenceWithoutHead']),
        'occurrenceWithoutTail': !exists(json, 'occurrenceWithoutTail') ? undefined : BTOccurrence74FromJSON(json['occurrenceWithoutTail']),
        'parent': !exists(json, 'parent') ? undefined : BTOccurrence74FromJSON(json['parent']),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'rootOccurrence': !exists(json, 'rootOccurrence') ? undefined : json['rootOccurrence'],
        'tailInstanceId': !exists(json, 'tailInstanceId') ? undefined : json['tailInstanceId'],
    };
}

export function BTOccurrence74ToJSON(value?: BTOccurrence74 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'fullPathAsString': value.fullPathAsString,
        'headInstanceId': value.headInstanceId,
        'occurrenceWithoutHead': BTOccurrence74ToJSON(value.occurrenceWithoutHead),
        'occurrenceWithoutTail': BTOccurrence74ToJSON(value.occurrenceWithoutTail),
        'parent': BTOccurrence74ToJSON(value.parent),
        'path': value.path,
        'rootOccurrence': value.rootOccurrence,
        'tailInstanceId': value.tailInstanceId,
    };
}

