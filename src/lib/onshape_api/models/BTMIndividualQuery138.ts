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
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';

import {
     BTMIndividualCoEdgeQuery1332FromJSONTyped,
     BTMIndividualCreatedByQuery137FromJSONTyped,
     BTMIndividualSketchRegionQuery140FromJSONTyped,
     BTMIndividualSketchUniqueVerticesQuery1472FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMIndividualQuery138
 */
export interface BTMIndividualQuery138 extends BTMIndividualQueryBase139 {
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQuery138
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMIndividualQuery138
     */
    persistentQuery?: BTPStatement269;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMIndividualQuery138
     */
    queryStatement?: BTPStatement269;
    /**
     * 
     * @type {BTMIndividualQuery138}
     * @memberof BTMIndividualQuery138
     */
    variableName?: BTMIndividualQuery138;
}

/**
 * Check if a given object implements the BTMIndividualQuery138 interface.
 */
export function instanceOfBTMIndividualQuery138(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualQuery138FromJSON(json: any): BTMIndividualQuery138 {
    return BTMIndividualQuery138FromJSONTyped(json, false);
}

export function BTMIndividualQuery138FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualQuery138 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTMIndividualCoEdgeQuery-1332') {
            return BTMIndividualCoEdgeQuery1332FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualCreatedByQuery-137') {
            return BTMIndividualCreatedByQuery137FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualSketchRegionQuery-140') {
            return BTMIndividualSketchRegionQuery140FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMIndividualSketchUniqueVerticesQuery-1472') {
            return BTMIndividualSketchUniqueVerticesQuery1472FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMIndividualQueryBase139FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'persistentQuery': !exists(json, 'persistentQuery') ? undefined : BTPStatement269FromJSON(json['persistentQuery']),
        'queryStatement': !exists(json, 'queryStatement') ? undefined : BTPStatement269FromJSON(json['queryStatement']),
        'variableName': !exists(json, 'variableName') ? undefined : BTMIndividualQuery138FromJSON(json['variableName']),
    };
}

export function BTMIndividualQuery138ToJSON(value?: BTMIndividualQuery138 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMIndividualQueryBase139ToJSON(value),
        'btType': value.btType,
        'persistentQuery': BTPStatement269ToJSON(value.persistentQuery),
        'queryStatement': BTPStatement269ToJSON(value.queryStatement),
        'variableName': BTMIndividualQuery138ToJSON(value.variableName),
    };
}

