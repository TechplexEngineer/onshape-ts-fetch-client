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
import type { BTPLValue249 } from './BTPLValue249';
import {
    BTPLValue249FromJSON,
    BTPLValue249FromJSONTyped,
    BTPLValue249ToJSON,
} from './BTPLValue249';
import type { BTPPropertyAccessor23 } from './BTPPropertyAccessor23';
import {
    BTPPropertyAccessor23FromJSON,
    BTPPropertyAccessor23FromJSONTyped,
    BTPPropertyAccessor23ToJSON,
} from './BTPPropertyAccessor23';

/**
 * 
 * @export
 * @interface BTPLValueAccess250AllOf
 */
export interface BTPLValueAccess250AllOf {
    /**
     * 
     * @type {BTPPropertyAccessor23}
     * @memberof BTPLValueAccess250AllOf
     */
    accessor?: BTPPropertyAccessor23;
    /**
     * 
     * @type {BTPLValue249}
     * @memberof BTPLValueAccess250AllOf
     */
    base?: BTPLValue249;
    /**
     * 
     * @type {string}
     * @memberof BTPLValueAccess250AllOf
     */
    btType?: string;
}

/**
 * Check if a given object implements the BTPLValueAccess250AllOf interface.
 */
export function instanceOfBTPLValueAccess250AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPLValueAccess250AllOfFromJSON(json: any): BTPLValueAccess250AllOf {
    return BTPLValueAccess250AllOfFromJSONTyped(json, false);
}

export function BTPLValueAccess250AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPLValueAccess250AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessor': !exists(json, 'accessor') ? undefined : BTPPropertyAccessor23FromJSON(json['accessor']),
        'base': !exists(json, 'base') ? undefined : BTPLValue249FromJSON(json['base']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
    };
}

export function BTPLValueAccess250AllOfToJSON(value?: BTPLValueAccess250AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessor': BTPPropertyAccessor23ToJSON(value.accessor),
        'base': BTPLValue249ToJSON(value.base),
        'btType': value.btType,
    };
}

