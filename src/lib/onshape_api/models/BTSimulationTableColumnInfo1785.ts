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
import type { BTTableAssemblyCrossHighlightData2675 } from './BTTableAssemblyCrossHighlightData2675';
import {
    BTTableAssemblyCrossHighlightData2675FromJSON,
    BTTableAssemblyCrossHighlightData2675FromJSONTyped,
    BTTableAssemblyCrossHighlightData2675ToJSON,
} from './BTTableAssemblyCrossHighlightData2675';
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';

/**
 * 
 * @export
 * @interface BTSimulationTableColumnInfo1785
 */
export interface BTSimulationTableColumnInfo1785 extends BTTableColumnInfo1222 {
    /**
     * 
     * @type {string}
     * @memberof BTSimulationTableColumnInfo1785
     */
    btType?: string;
    /**
     * 
     * @type {BTTableAssemblyCrossHighlightData2675}
     * @memberof BTSimulationTableColumnInfo1785
     */
    crossHighlightData?: BTTableAssemblyCrossHighlightData2675;
}

/**
 * Check if a given object implements the BTSimulationTableColumnInfo1785 interface.
 */
export function instanceOfBTSimulationTableColumnInfo1785(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSimulationTableColumnInfo1785FromJSON(json: any): BTSimulationTableColumnInfo1785 {
    return BTSimulationTableColumnInfo1785FromJSONTyped(json, false);
}

export function BTSimulationTableColumnInfo1785FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSimulationTableColumnInfo1785 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableColumnInfo1222FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableAssemblyCrossHighlightData2675FromJSON(json['crossHighlightData']),
    };
}

export function BTSimulationTableColumnInfo1785ToJSON(value?: BTSimulationTableColumnInfo1785 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableColumnInfo1222ToJSON(value),
        'btType': value.btType,
        'crossHighlightData': BTTableAssemblyCrossHighlightData2675ToJSON(value.crossHighlightData),
    };
}

