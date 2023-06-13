/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBaseSMJointTableRowMetadata2232 } from './BTBaseSMJointTableRowMetadata2232';
import {
    BTBaseSMJointTableRowMetadata2232FromJSON,
    BTBaseSMJointTableRowMetadata2232FromJSONTyped,
    BTBaseSMJointTableRowMetadata2232ToJSON,
} from './BTBaseSMJointTableRowMetadata2232';
import type { BTTableCrossHighlightData1753 } from './BTTableCrossHighlightData1753';
import {
    BTTableCrossHighlightData1753FromJSON,
    BTTableCrossHighlightData1753FromJSONTyped,
    BTTableCrossHighlightData1753ToJSON,
} from './BTTableCrossHighlightData1753';

/**
 * 
 * @export
 * @interface BTSMOtherJointTableRowMetadata2640
 */
export interface BTSMOtherJointTableRowMetadata2640 extends BTBaseSMJointTableRowMetadata2232 {
    /**
     * 
     * @type {string}
     * @memberof BTSMOtherJointTableRowMetadata2640
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTSMOtherJointTableRowMetadata2640 interface.
 */
export function instanceOfBTSMOtherJointTableRowMetadata2640(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSMOtherJointTableRowMetadata2640FromJSON(json: any): BTSMOtherJointTableRowMetadata2640 {
    return BTSMOtherJointTableRowMetadata2640FromJSONTyped(json, false);
}

export function BTSMOtherJointTableRowMetadata2640FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSMOtherJointTableRowMetadata2640 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTBaseSMJointTableRowMetadata2232FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTSMOtherJointTableRowMetadata2640ToJSON(value?: BTSMOtherJointTableRowMetadata2640 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTBaseSMJointTableRowMetadata2232ToJSON(value),
        'btType': value.btType,
    };
}

