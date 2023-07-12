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
import type { GBTPatternType } from './GBTPatternType';
import {
    GBTPatternTypeFromJSON,
    GBTPatternTypeFromJSONTyped,
    GBTPatternTypeToJSON,
} from './GBTPatternType';

/**
 * Pattern description.
 * @export
 * @interface BTAssemblyPatternInfo
 */
export interface BTAssemblyPatternInfo {
    /**
     * Id of the pattern.
     * @type {string}
     * @memberof BTAssemblyPatternInfo
     */
    id?: string;
    /**
     * Name of the pattern.
     * @type {string}
     * @memberof BTAssemblyPatternInfo
     */
    name?: string;
    /**
     * Mapping of seed to pattern instance ids.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BTAssemblyPatternInfo
     */
    seedToPatternInstances?: { [key: string]: Array<string>; };
    /**
     * If pattern is suppressed.
     * @type {boolean}
     * @memberof BTAssemblyPatternInfo
     */
    suppressed?: boolean;
    /**
     * 
     * @type {GBTPatternType}
     * @memberof BTAssemblyPatternInfo
     */
    type?: GBTPatternType;
}

/**
 * Check if a given object implements the BTAssemblyPatternInfo interface.
 */
export function instanceOfBTAssemblyPatternInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyPatternInfoFromJSON(json: any): BTAssemblyPatternInfo {
    return BTAssemblyPatternInfoFromJSONTyped(json, false);
}

export function BTAssemblyPatternInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyPatternInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'seedToPatternInstances': !exists(json, 'seedToPatternInstances') ? undefined : json['seedToPatternInstances'],
        'suppressed': !exists(json, 'suppressed') ? undefined : json['suppressed'],
        'type': !exists(json, 'type') ? undefined : GBTPatternTypeFromJSON(json['type']),
    };
}

export function BTAssemblyPatternInfoToJSON(value?: BTAssemblyPatternInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'seedToPatternInstances': value.seedToPatternInstances,
        'suppressed': value.suppressed,
        'type': GBTPatternTypeToJSON(value.type),
    };
}

