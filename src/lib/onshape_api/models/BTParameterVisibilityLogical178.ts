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
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTParameterVisibilityLogicalOp } from './GBTParameterVisibilityLogicalOp';
import {
    GBTParameterVisibilityLogicalOpFromJSON,
    GBTParameterVisibilityLogicalOpFromJSONTyped,
    GBTParameterVisibilityLogicalOpToJSON,
} from './GBTParameterVisibilityLogicalOp';

/**
 * 
 * @export
 * @interface BTParameterVisibilityLogical178
 */
export interface BTParameterVisibilityLogical178 extends BTParameterVisibilityCondition177 {
    /**
     * 
     * @type {string}
     * @memberof BTParameterVisibilityLogical178
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTParameterVisibilityCondition177>}
     * @memberof BTParameterVisibilityLogical178
     */
    children?: Array<BTParameterVisibilityCondition177>;
    /**
     * 
     * @type {GBTParameterVisibilityLogicalOp}
     * @memberof BTParameterVisibilityLogical178
     */
    operation?: GBTParameterVisibilityLogicalOp;
}

/**
 * Check if a given object implements the BTParameterVisibilityLogical178 interface.
 */
export function instanceOfBTParameterVisibilityLogical178(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterVisibilityLogical178FromJSON(json: any): BTParameterVisibilityLogical178 {
    return BTParameterVisibilityLogical178FromJSONTyped(json, false);
}

export function BTParameterVisibilityLogical178FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterVisibilityLogical178 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTParameterVisibilityCondition177FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(BTParameterVisibilityCondition177FromJSON)),
        'operation': !exists(json, 'operation') ? undefined : GBTParameterVisibilityLogicalOpFromJSON(json['operation']),
    };
}

export function BTParameterVisibilityLogical178ToJSON(value?: BTParameterVisibilityLogical178 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTParameterVisibilityCondition177ToJSON(value),
        'btType': value.btType,
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(BTParameterVisibilityCondition177ToJSON)),
        'operation': GBTParameterVisibilityLogicalOpToJSON(value.operation),
    };
}

