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
import type { BTStringFormatCondition683 } from './BTStringFormatCondition683';
import {
    BTStringFormatCondition683FromJSON,
    BTStringFormatCondition683FromJSONTyped,
    BTStringFormatCondition683ToJSON,
} from './BTStringFormatCondition683';

/**
 * 
 * @export
 * @interface BTStringMaximumLengthPattern2593
 */
export interface BTStringMaximumLengthPattern2593 extends BTStringFormatCondition683 {
    /**
     * 
     * @type {string}
     * @memberof BTStringMaximumLengthPattern2593
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTStringMaximumLengthPattern2593
     */
    maximumLength?: number;
}

/**
 * Check if a given object implements the BTStringMaximumLengthPattern2593 interface.
 */
export function instanceOfBTStringMaximumLengthPattern2593(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTStringMaximumLengthPattern2593FromJSON(json: any): BTStringMaximumLengthPattern2593 {
    return BTStringMaximumLengthPattern2593FromJSONTyped(json, false);
}

export function BTStringMaximumLengthPattern2593FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTStringMaximumLengthPattern2593 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTStringFormatCondition683FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'maximumLength': !exists(json, 'maximumLength') ? undefined : json['maximumLength'],
    };
}

export function BTStringMaximumLengthPattern2593ToJSON(value?: BTStringMaximumLengthPattern2593 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTStringFormatCondition683ToJSON(value),
        'btType': value.btType,
        'maximumLength': value.maximumLength,
    };
}

