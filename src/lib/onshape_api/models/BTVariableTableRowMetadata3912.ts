/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19740-5e8d8b0919a8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
} from './BTTableBaseCrossHighlightData2609';
import type { BTTableBaseRowMetadata3181 } from './BTTableBaseRowMetadata3181';
import {
    BTTableBaseRowMetadata3181FromJSON,
    BTTableBaseRowMetadata3181FromJSONTyped,
    BTTableBaseRowMetadata3181ToJSON,
} from './BTTableBaseRowMetadata3181';

/**
 * 
 * @export
 * @interface BTVariableTableRowMetadata3912
 */
export interface BTVariableTableRowMetadata3912 extends BTTableBaseRowMetadata3181 {
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912
     */
    btType?: string;
    /**
     * 
     * @type {BTTableBaseCrossHighlightData2609}
     * @memberof BTVariableTableRowMetadata3912
     */
    crossHighlightData?: BTTableBaseCrossHighlightData2609;
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912
     */
    info?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTVariableTableRowMetadata3912
     */
    isFullyEditable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTVariableTableRowMetadata3912
     */
    isRecursiveImport?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTVariableTableRowMetadata3912
     */
    lastWritingFeatureNodeId?: string;
}

/**
 * Check if a given object implements the BTVariableTableRowMetadata3912 interface.
 */
export function instanceOfBTVariableTableRowMetadata3912(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTVariableTableRowMetadata3912FromJSON(json: any): BTVariableTableRowMetadata3912 {
    return BTVariableTableRowMetadata3912FromJSONTyped(json, false);
}

export function BTVariableTableRowMetadata3912FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTVariableTableRowMetadata3912 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableBaseRowMetadata3181FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableBaseCrossHighlightData2609FromJSON(json['crossHighlightData']),
        'info': !exists(json, 'info') ? undefined : json['info'],
        'isFullyEditable': !exists(json, 'isFullyEditable') ? undefined : json['isFullyEditable'],
        'isRecursiveImport': !exists(json, 'isRecursiveImport') ? undefined : json['isRecursiveImport'],
        'lastWritingFeatureNodeId': !exists(json, 'lastWritingFeatureNodeId') ? undefined : json['lastWritingFeatureNodeId'],
    };
}

export function BTVariableTableRowMetadata3912ToJSON(value?: BTVariableTableRowMetadata3912 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableBaseRowMetadata3181ToJSON(value),
        'btType': value.btType,
        'crossHighlightData': BTTableBaseCrossHighlightData2609ToJSON(value.crossHighlightData),
        'info': value.info,
        'isFullyEditable': value.isFullyEditable,
        'isRecursiveImport': value.isRecursiveImport,
        'lastWritingFeatureNodeId': value.lastWritingFeatureNodeId,
    };
}

