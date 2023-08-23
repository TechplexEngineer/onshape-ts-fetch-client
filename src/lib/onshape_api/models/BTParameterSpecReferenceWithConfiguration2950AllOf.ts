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
import type { GBTPartStudioItemType } from './GBTPartStudioItemType';
import {
    GBTPartStudioItemTypeFromJSON,
    GBTPartStudioItemTypeFromJSONTyped,
    GBTPartStudioItemTypeToJSON,
} from './GBTPartStudioItemType';

/**
 * 
 * @export
 * @interface BTParameterSpecReferenceWithConfiguration2950AllOf
 */
export interface BTParameterSpecReferenceWithConfiguration2950AllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    allowAssemblies?: boolean;
    /**
     * 
     * @type {Array<GBTPartStudioItemType>}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    allowedInsertableTypes?: Array<GBTPartStudioItemType>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpecReferenceWithConfiguration2950AllOf
     */
    maxNumberOfPicks?: number;
}

/**
 * Check if a given object implements the BTParameterSpecReferenceWithConfiguration2950AllOf interface.
 */
export function instanceOfBTParameterSpecReferenceWithConfiguration2950AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecReferenceWithConfiguration2950AllOfFromJSON(json: any): BTParameterSpecReferenceWithConfiguration2950AllOf {
    return BTParameterSpecReferenceWithConfiguration2950AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecReferenceWithConfiguration2950AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecReferenceWithConfiguration2950AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowAssemblies': !exists(json, 'allowAssemblies') ? undefined : json['allowAssemblies'],
        'allowedInsertableTypes': !exists(json, 'allowedInsertableTypes') ? undefined : ((json['allowedInsertableTypes'] as Array<any>).map(GBTPartStudioItemTypeFromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'maxNumberOfPicks': !exists(json, 'maxNumberOfPicks') ? undefined : json['maxNumberOfPicks'],
    };
}

export function BTParameterSpecReferenceWithConfiguration2950AllOfToJSON(value?: BTParameterSpecReferenceWithConfiguration2950AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowAssemblies': value.allowAssemblies,
        'allowedInsertableTypes': value.allowedInsertableTypes === undefined ? undefined : ((value.allowedInsertableTypes as Array<any>).map(GBTPartStudioItemTypeToJSON)),
        'btType': value.btType,
        'maxNumberOfPicks': value.maxNumberOfPicks,
    };
}

