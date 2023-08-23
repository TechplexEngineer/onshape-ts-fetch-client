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
import type { BTIndividualTableProperties3760 } from './BTIndividualTableProperties3760';
import {
    BTIndividualTableProperties3760FromJSON,
    BTIndividualTableProperties3760FromJSONTyped,
    BTIndividualTableProperties3760ToJSON,
} from './BTIndividualTableProperties3760';
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
} from './BTTableBaseCrossHighlightData2609';

/**
 * 
 * @export
 * @interface BTFSTable953AllOf
 */
export interface BTFSTable953AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTFSTable953AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTTableBaseCrossHighlightData2609}
     * @memberof BTFSTable953AllOf
     */
    crossHighlightData?: BTTableBaseCrossHighlightData2609;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTFSTable953AllOf
     */
    hiddenColumnIdsToNames?: { [key: string]: string; };
    /**
     * 
     * @type {BTIndividualTableProperties3760}
     * @memberof BTFSTable953AllOf
     */
    individualTableProperties?: BTIndividualTableProperties3760;
}

/**
 * Check if a given object implements the BTFSTable953AllOf interface.
 */
export function instanceOfBTFSTable953AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFSTable953AllOfFromJSON(json: any): BTFSTable953AllOf {
    return BTFSTable953AllOfFromJSONTyped(json, false);
}

export function BTFSTable953AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFSTable953AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableBaseCrossHighlightData2609FromJSON(json['crossHighlightData']),
        'hiddenColumnIdsToNames': !exists(json, 'hiddenColumnIdsToNames') ? undefined : json['hiddenColumnIdsToNames'],
        'individualTableProperties': !exists(json, 'individualTableProperties') ? undefined : BTIndividualTableProperties3760FromJSON(json['individualTableProperties']),
    };
}

export function BTFSTable953AllOfToJSON(value?: BTFSTable953AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'crossHighlightData': BTTableBaseCrossHighlightData2609ToJSON(value.crossHighlightData),
        'hiddenColumnIdsToNames': value.hiddenColumnIdsToNames,
        'individualTableProperties': BTIndividualTableProperties3760ToJSON(value.individualTableProperties),
    };
}

