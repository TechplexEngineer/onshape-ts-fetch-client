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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
} from './BTQueryFilter183';

/**
 * 
 * @export
 * @interface BTParameterSpecQuery174AllOf
 */
export interface BTParameterSpecQuery174AllOf {
    /**
     * 
     * @type {BTQueryFilter183}
     * @memberof BTParameterSpecQuery174AllOf
     */
    additionalBoxSelectFilter?: BTQueryFilter183;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecQuery174AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTQueryFilter183}
     * @memberof BTParameterSpecQuery174AllOf
     */
    filter?: BTQueryFilter183;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecQuery174AllOf
     */
    maxNumberOfPicks?: number;
}

/**
 * Check if a given object implements the BTParameterSpecQuery174AllOf interface.
 */
export function instanceOfBTParameterSpecQuery174AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecQuery174AllOfFromJSON(json: any): BTParameterSpecQuery174AllOf {
    return BTParameterSpecQuery174AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecQuery174AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecQuery174AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalBoxSelectFilter': !exists(json, 'additionalBoxSelectFilter') ? undefined : BTQueryFilter183FromJSON(json['additionalBoxSelectFilter']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'filter': !exists(json, 'filter') ? undefined : BTQueryFilter183FromJSON(json['filter']),
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
    };
}

export function BTParameterSpecQuery174AllOfToJSON(value?: BTParameterSpecQuery174AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalBoxSelectFilter': BTQueryFilter183ToJSON(value.additionalBoxSelectFilter),
        'btType': value.btType,
        'filter': BTQueryFilter183ToJSON(value.filter),
        'maxNumberOfPicks': value.maxNumberOfPicks,
    };
}

