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
import type { BTPartWithConfiguredProperties2163 } from './BTPartWithConfiguredProperties2163';
import {
    BTPartWithConfiguredProperties2163FromJSON,
    BTPartWithConfiguredProperties2163FromJSONTyped,
    BTPartWithConfiguredProperties2163ToJSON,
} from './BTPartWithConfiguredProperties2163';

/**
 * 
 * @export
 * @interface BTConfiguredPartProperties2645
 */
export interface BTConfiguredPartProperties2645 {
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartProperties2645
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTConfiguredPartProperties2645
     */
    nodeId?: string;
    /**
     * 
     * @type {Array<BTPartWithConfiguredProperties2163>}
     * @memberof BTConfiguredPartProperties2645
     */
    parts?: Array<BTPartWithConfiguredProperties2163>;
    /**
     * 
     * @type {{ [key: string]: BTPartWithConfiguredProperties2163; }}
     * @memberof BTConfiguredPartProperties2645
     */
    propertyIdToConfiguredTable?: { [key: string]: BTPartWithConfiguredProperties2163; };
    /**
     * 
     * @type {boolean}
     * @memberof BTConfiguredPartProperties2645
     */
    synchronizeToSingleEnumInput?: boolean;
}

/**
 * Check if a given object implements the BTConfiguredPartProperties2645 interface.
 */
export function instanceOfBTConfiguredPartProperties2645(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTConfiguredPartProperties2645FromJSON(json: any): BTConfiguredPartProperties2645 {
    return BTConfiguredPartProperties2645FromJSONTyped(json, false);
}

export function BTConfiguredPartProperties2645FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTConfiguredPartProperties2645 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'parts': !exists(json, 'parts') ? undefined : ((json['parts'] as Array<any>).map(BTPartWithConfiguredProperties2163FromJSON)),
        'propertyIdToConfiguredTable': !exists(json, 'propertyIdToConfiguredTable') ? undefined : (mapValues(json['propertyIdToConfiguredTable'], BTPartWithConfiguredProperties2163FromJSON)),
        'synchronizeToSingleEnumInput': !exists(json, 'synchronizeToSingleEnumInput') ? undefined : json['synchronizeToSingleEnumInput'],
    };
}

export function BTConfiguredPartProperties2645ToJSON(value?: BTConfiguredPartProperties2645 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'nodeId': value.nodeId,
        'parts': value.parts === undefined ? undefined : ((value.parts as Array<any>).map(BTPartWithConfiguredProperties2163ToJSON)),
        'propertyIdToConfiguredTable': value.propertyIdToConfiguredTable === undefined ? undefined : (mapValues(value.propertyIdToConfiguredTable, BTPartWithConfiguredProperties2163ToJSON)),
        'synchronizeToSingleEnumInput': value.synchronizeToSingleEnumInput,
    };
}

