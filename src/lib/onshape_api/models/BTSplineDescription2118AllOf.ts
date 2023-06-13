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
/**
 * 
 * @export
 * @interface BTSplineDescription2118AllOf
 */
export interface BTSplineDescription2118AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTSplineDescription2118AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTSplineDescription2118AllOf
     */
    controlPoints?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof BTSplineDescription2118AllOf
     */
    degree?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTSplineDescription2118AllOf
     */
    isPeriodic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSplineDescription2118AllOf
     */
    isRational?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTSplineDescription2118AllOf
     */
    knots?: Array<number>;
}

/**
 * Check if a given object implements the BTSplineDescription2118AllOf interface.
 */
export function instanceOfBTSplineDescription2118AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSplineDescription2118AllOfFromJSON(json: any): BTSplineDescription2118AllOf {
    return BTSplineDescription2118AllOfFromJSONTyped(json, false);
}

export function BTSplineDescription2118AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSplineDescription2118AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'controlPoints': !exists(json, 'controlPoints') ? undefined : json['controlPoints'],
        'degree': !exists(json, 'degree') ? undefined : json['degree'],
        'isPeriodic': !exists(json, 'isPeriodic') ? undefined : json['isPeriodic'],
        'isRational': !exists(json, 'isRational') ? undefined : json['isRational'],
        'knots': !exists(json, 'knots') ? undefined : json['knots'],
    };
}

export function BTSplineDescription2118AllOfToJSON(value?: BTSplineDescription2118AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'controlPoints': value.controlPoints,
        'degree': value.degree,
        'isPeriodic': value.isPeriodic,
        'isRational': value.isRational,
        'knots': value.knots,
    };
}

