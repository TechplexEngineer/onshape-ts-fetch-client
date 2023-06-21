/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMConfigurationParameter819 } from './BTMConfigurationParameter819';
import {
    BTMConfigurationParameter819FromJSON,
    BTMConfigurationParameter819FromJSONTyped,
    BTMConfigurationParameter819ToJSON,
} from './BTMConfigurationParameter819';
import type { BTQuantityRange181 } from './BTQuantityRange181';
import {
    BTQuantityRange181FromJSON,
    BTQuantityRange181FromJSONTyped,
    BTQuantityRange181ToJSON,
} from './BTQuantityRange181';
import type { BTTreeNode20 } from './BTTreeNode20';
import {
    BTTreeNode20FromJSON,
    BTTreeNode20FromJSONTyped,
    BTTreeNode20ToJSON,
} from './BTTreeNode20';
import type { GBTConfigurationParameterType } from './GBTConfigurationParameterType';
import {
    GBTConfigurationParameterTypeFromJSON,
    GBTConfigurationParameterTypeFromJSONTyped,
    GBTConfigurationParameterTypeToJSON,
} from './GBTConfigurationParameterType';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';

/**
 * 
 * @export
 * @interface BTMConfigurationParameterQuantity1826
 */
export interface BTMConfigurationParameterQuantity1826 extends BTMConfigurationParameter819 {
    /**
     * 
     * @type {string}
     * @memberof BTMConfigurationParameterQuantity1826
     */
    btType?: string;
    /**
     * 
     * @type {GBTQuantityType}
     * @memberof BTMConfigurationParameterQuantity1826
     */
    quantityType?: GBTQuantityType;
    /**
     * 
     * @type {BTQuantityRange181}
     * @memberof BTMConfigurationParameterQuantity1826
     */
    rangeAndDefault?: BTQuantityRange181;
}

/**
 * Check if a given object implements the BTMConfigurationParameterQuantity1826 interface.
 */
export function instanceOfBTMConfigurationParameterQuantity1826(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMConfigurationParameterQuantity1826FromJSON(json: any): BTMConfigurationParameterQuantity1826 {
    return BTMConfigurationParameterQuantity1826FromJSONTyped(json, false);
}

export function BTMConfigurationParameterQuantity1826FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMConfigurationParameterQuantity1826 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMConfigurationParameter819FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'quantityType': !exists(json, 'quantityType') ? undefined : GBTQuantityTypeFromJSON(json['quantityType']),
        'rangeAndDefault': !exists(json, 'rangeAndDefault') ? undefined : BTQuantityRange181FromJSON(json['rangeAndDefault']),
    };
}

export function BTMConfigurationParameterQuantity1826ToJSON(value?: BTMConfigurationParameterQuantity1826 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMConfigurationParameter819ToJSON(value),
        'btType': value.btType,
        'quantityType': GBTQuantityTypeToJSON(value.quantityType),
        'rangeAndDefault': BTQuantityRange181ToJSON(value.rangeAndDefault),
    };
}

