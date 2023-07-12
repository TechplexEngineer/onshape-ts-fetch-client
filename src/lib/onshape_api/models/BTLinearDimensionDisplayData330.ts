/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTDimensionDisplayData323 } from './BTDimensionDisplayData323';
import {
    BTDimensionDisplayData323FromJSON,
    BTDimensionDisplayData323FromJSONTyped,
    BTDimensionDisplayData323ToJSON,
} from './BTDimensionDisplayData323';
import type { BTMatrix3x3340 } from './BTMatrix3x3340';
import {
    BTMatrix3x3340FromJSON,
    BTMatrix3x3340FromJSONTyped,
    BTMatrix3x3340ToJSON,
} from './BTMatrix3x3340';

import {
     BTCenterlineDimensionDisplayData1798FromJSONTyped,
     BTEllipseDiameterDimensionDisplayData1301FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTLinearDimensionDisplayData330
 */
export interface BTLinearDimensionDisplayData330 extends BTDimensionDisplayData323 {
    /**
     * 
     * @type {string}
     * @memberof BTLinearDimensionDisplayData330
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330
     */
    positionX?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330
     */
    positionY?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330
     */
    witnessEndPoint0X?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330
     */
    witnessEndPoint0Y?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330
     */
    witnessEndPoint1X?: number;
    /**
     * 
     * @type {number}
     * @memberof BTLinearDimensionDisplayData330
     */
    witnessEndPoint1Y?: number;
}

/**
 * Check if a given object implements the BTLinearDimensionDisplayData330 interface.
 */
export function instanceOfBTLinearDimensionDisplayData330(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLinearDimensionDisplayData330FromJSON(json: any): BTLinearDimensionDisplayData330 {
    return BTLinearDimensionDisplayData330FromJSONTyped(json, false);
}

export function BTLinearDimensionDisplayData330FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLinearDimensionDisplayData330 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTCenterlineDimensionDisplayData-1798') {
            return BTCenterlineDimensionDisplayData1798FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTEllipseDiameterDimensionDisplayData-1301') {
            return BTEllipseDiameterDimensionDisplayData1301FromJSONTyped(json, true);
        }
    }
    return {
        ...BTDimensionDisplayData323FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'positionX': !exists(json, 'positionX') ? undefined : json['positionX'],
        'positionY': !exists(json, 'positionY') ? undefined : json['positionY'],
        'witnessEndPoint0X': !exists(json, 'witnessEndPoint0X') ? undefined : json['witnessEndPoint0X'],
        'witnessEndPoint0Y': !exists(json, 'witnessEndPoint0Y') ? undefined : json['witnessEndPoint0Y'],
        'witnessEndPoint1X': !exists(json, 'witnessEndPoint1X') ? undefined : json['witnessEndPoint1X'],
        'witnessEndPoint1Y': !exists(json, 'witnessEndPoint1Y') ? undefined : json['witnessEndPoint1Y'],
    };
}

export function BTLinearDimensionDisplayData330ToJSON(value?: BTLinearDimensionDisplayData330 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDimensionDisplayData323ToJSON(value),
        'btType': value.btType,
        'positionX': value.positionX,
        'positionY': value.positionY,
        'witnessEndPoint0X': value.witnessEndPoint0X,
        'witnessEndPoint0Y': value.witnessEndPoint0Y,
        'witnessEndPoint1X': value.witnessEndPoint1X,
        'witnessEndPoint1Y': value.witnessEndPoint1Y,
    };
}

