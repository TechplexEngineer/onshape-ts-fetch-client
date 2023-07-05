/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMNode19 } from './BTMNode19';
import {
    BTMNode19FromJSON,
    BTMNode19FromJSONTyped,
    BTMNode19ToJSON,
} from './BTMNode19';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';

import {
     BTMSketchCompositeEntity893FromJSONTyped,
     BTMSketchConstraint2FromJSONTyped,
     BTMSketchGeomEntity5FromJSONTyped,
     BTMSketchInvalid1601FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMSketchEntity3
 */
export interface BTMSketchEntity3 extends BTMNode19 {
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3
     */
    entityIdAndReplaceInDependentFields?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMSketchEntity3
     */
    namespace?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMSketchEntity3
     */
    parameters?: Array<BTMParameter1>;
}

/**
 * Check if a given object implements the BTMSketchEntity3 interface.
 */
export function instanceOfBTMSketchEntity3(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMSketchEntity3FromJSON(json: any): BTMSketchEntity3 {
    return BTMSketchEntity3FromJSONTyped(json, false);
}

export function BTMSketchEntity3FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMSketchEntity3 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMSketchCompositeEntity-893') {
            return BTMSketchCompositeEntity893FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchConstraint-2') {
            return BTMSketchConstraint2FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchGeomEntity-5') {
            return BTMSketchGeomEntity5FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMSketchInvalid-1601') {
            return BTMSketchInvalid1601FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMNode19FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'entityId': !exists(json, 'entityId') ? undefined : json['entityId'],
        'entityIdAndReplaceInDependentFields': !exists(json, 'entityIdAndReplaceInDependentFields') ? undefined : json['entityIdAndReplaceInDependentFields'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(BTMParameter1FromJSON)),
    };
}

export function BTMSketchEntity3ToJSON(value?: BTMSketchEntity3 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMNode19ToJSON(value),
        'btType': value.btType,
        'entityId': value.entityId,
        'entityIdAndReplaceInDependentFields': value.entityIdAndReplaceInDependentFields,
        'namespace': value.namespace,
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(BTMParameter1ToJSON)),
    };
}

