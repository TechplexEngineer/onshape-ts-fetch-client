/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.20169-88260985a0b6
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMIndividualQuery138 } from './BTMIndividualQuery138';
import {
    BTMIndividualQuery138FromJSON,
    BTMIndividualQuery138FromJSONTyped,
    BTMIndividualQuery138ToJSON,
} from './BTMIndividualQuery138';
import type { BTPStatement269 } from './BTPStatement269';
import {
    BTPStatement269FromJSON,
    BTPStatement269FromJSONTyped,
    BTPStatement269ToJSON,
} from './BTPStatement269';

/**
 * 
 * @export
 * @interface BTMIndividualQuery138AllOf
 */
export interface BTMIndividualQuery138AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTMIndividualQuery138AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMIndividualQuery138AllOf
     */
    persistentQuery?: BTPStatement269;
    /**
     * 
     * @type {BTPStatement269}
     * @memberof BTMIndividualQuery138AllOf
     */
    queryStatement?: BTPStatement269;
    /**
     * 
     * @type {BTMIndividualQuery138}
     * @memberof BTMIndividualQuery138AllOf
     */
    variableName?: BTMIndividualQuery138;
}

/**
 * Check if a given object implements the BTMIndividualQuery138AllOf interface.
 */
export function instanceOfBTMIndividualQuery138AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMIndividualQuery138AllOfFromJSON(json: any): BTMIndividualQuery138AllOf {
    return BTMIndividualQuery138AllOfFromJSONTyped(json, false);
}

export function BTMIndividualQuery138AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMIndividualQuery138AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'persistentQuery': !exists(json, 'persistentQuery') ? undefined : BTPStatement269FromJSON(json['persistentQuery']),
        'queryStatement': !exists(json, 'queryStatement') ? undefined : BTPStatement269FromJSON(json['queryStatement']),
        'variableName': !exists(json, 'variableName') ? undefined : BTMIndividualQuery138FromJSON(json['variableName']),
    };
}

export function BTMIndividualQuery138AllOfToJSON(value?: BTMIndividualQuery138AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'persistentQuery': BTPStatement269ToJSON(value.persistentQuery),
        'queryStatement': BTPStatement269ToJSON(value.queryStatement),
        'variableName': BTMIndividualQuery138ToJSON(value.variableName),
    };
}

