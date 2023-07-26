/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAssemblyInstanceOccurrenceInfo } from './BTAssemblyInstanceOccurrenceInfo';
import {
    BTAssemblyInstanceOccurrenceInfoFromJSON,
    BTAssemblyInstanceOccurrenceInfoFromJSONTyped,
    BTAssemblyInstanceOccurrenceInfoToJSON,
} from './BTAssemblyInstanceOccurrenceInfo';
import type { BTAssemblyOccurrenceInfo } from './BTAssemblyOccurrenceInfo';
import {
    BTAssemblyOccurrenceInfoFromJSON,
    BTAssemblyOccurrenceInfoFromJSONTyped,
    BTAssemblyOccurrenceInfoToJSON,
} from './BTAssemblyOccurrenceInfo';

/**
 * 
 * @export
 * @interface BTAssemblyInsertTransformedInstancesResponse
 */
export interface BTAssemblyInsertTransformedInstancesResponse {
    /**
     * 
     * @type {Array<BTAssemblyInstanceOccurrenceInfo>}
     * @memberof BTAssemblyInsertTransformedInstancesResponse
     */
    insertInstanceResponses?: Array<BTAssemblyInstanceOccurrenceInfo>;
    /**
     * 
     * @type {Array<BTAssemblyOccurrenceInfo>}
     * @memberof BTAssemblyInsertTransformedInstancesResponse
     */
    insertResponses?: Array<BTAssemblyOccurrenceInfo>;
}

/**
 * Check if a given object implements the BTAssemblyInsertTransformedInstancesResponse interface.
 */
export function instanceOfBTAssemblyInsertTransformedInstancesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyInsertTransformedInstancesResponseFromJSON(json: any): BTAssemblyInsertTransformedInstancesResponse {
    return BTAssemblyInsertTransformedInstancesResponseFromJSONTyped(json, false);
}

export function BTAssemblyInsertTransformedInstancesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyInsertTransformedInstancesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'insertInstanceResponses': !exists(json, 'insertInstanceResponses') ? undefined : ((json['insertInstanceResponses'] as Array<any>).map(BTAssemblyInstanceOccurrenceInfoFromJSON)),
        'insertResponses': !exists(json, 'insertResponses') ? undefined : ((json['insertResponses'] as Array<any>).map(BTAssemblyOccurrenceInfoFromJSON)),
    };
}

export function BTAssemblyInsertTransformedInstancesResponseToJSON(value?: BTAssemblyInsertTransformedInstancesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'insertInstanceResponses': value.insertInstanceResponses === undefined ? undefined : ((value.insertInstanceResponses as Array<any>).map(BTAssemblyInstanceOccurrenceInfoToJSON)),
        'insertResponses': value.insertResponses === undefined ? undefined : ((value.insertResponses as Array<any>).map(BTAssemblyOccurrenceInfoToJSON)),
    };
}

