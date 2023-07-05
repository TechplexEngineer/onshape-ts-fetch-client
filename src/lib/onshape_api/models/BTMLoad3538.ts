/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMAssemblyFeature887 } from './BTMAssemblyFeature887';
import {
    BTMAssemblyFeature887FromJSON,
    BTMAssemblyFeature887FromJSONTyped,
    BTMAssemblyFeature887ToJSON,
} from './BTMAssemblyFeature887';
import type { BTMFeature134 } from './BTMFeature134';
import {
    BTMFeature134FromJSON,
    BTMFeature134FromJSONTyped,
    BTMFeature134ToJSON,
} from './BTMFeature134';
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { GBTLoadType } from './GBTLoadType';
import {
    GBTLoadTypeFromJSON,
    GBTLoadTypeFromJSONTyped,
    GBTLoadTypeToJSON,
} from './GBTLoadType';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';

/**
 * 
 * @export
 * @interface BTMLoad3538
 */
export interface BTMLoad3538 extends BTMAssemblyFeature887 {
    /**
     * 
     * @type {string}
     * @memberof BTMLoad3538
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMLoad3538
     */
    definedByComponents?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMLoad3538
     */
    directionFlipped?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMLoad3538
     */
    fgsBaseUnits?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTMLoad3538
     */
    loadComponentParameterIds?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof BTMLoad3538
     */
    loadRegionParameterId?: string;
    /**
     * 
     * @type {GBTLoadType}
     * @memberof BTMLoad3538
     */
    loadType?: GBTLoadType;
    /**
     * 
     * @type {string}
     * @memberof BTMLoad3538
     */
    magnitudeParameterId?: string;
    /**
     * 
     * @type {GBTQuantityType}
     * @memberof BTMLoad3538
     */
    magnitudeQuantityType?: GBTQuantityType;
    /**
     * 
     * @type {boolean}
     * @memberof BTMLoad3538
     */
    structuralLoad?: boolean;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTMLoad3538
     */
    suppressedInSimulations?: { [key: string]: number; };
}

/**
 * Check if a given object implements the BTMLoad3538 interface.
 */
export function instanceOfBTMLoad3538(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMLoad3538FromJSON(json: any): BTMLoad3538 {
    return BTMLoad3538FromJSONTyped(json, false);
}

export function BTMLoad3538FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMLoad3538 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMAssemblyFeature887FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'definedByComponents': !exists(json, 'definedByComponents') ? undefined : json['definedByComponents'],
        'directionFlipped': !exists(json, 'directionFlipped') ? undefined : json['directionFlipped'],
        'fgsBaseUnits': !exists(json, 'fgsBaseUnits') ? undefined : json['fgsBaseUnits'],
        'loadComponentParameterIds': !exists(json, 'loadComponentParameterIds') ? undefined : json['loadComponentParameterIds'],
        'loadRegionParameterId': !exists(json, 'loadRegionParameterId') ? undefined : json['loadRegionParameterId'],
        'loadType': !exists(json, 'loadType') ? undefined : GBTLoadTypeFromJSON(json['loadType']),
        'magnitudeParameterId': !exists(json, 'magnitudeParameterId') ? undefined : json['magnitudeParameterId'],
        'magnitudeQuantityType': !exists(json, 'magnitudeQuantityType') ? undefined : GBTQuantityTypeFromJSON(json['magnitudeQuantityType']),
        'structuralLoad': !exists(json, 'structuralLoad') ? undefined : json['structuralLoad'],
        'suppressedInSimulations': !exists(json, 'suppressedInSimulations') ? undefined : json['suppressedInSimulations'],
    };
}

export function BTMLoad3538ToJSON(value?: BTMLoad3538 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMAssemblyFeature887ToJSON(value),
        'btType': value.btType,
        'definedByComponents': value.definedByComponents,
        'directionFlipped': value.directionFlipped,
        'fgsBaseUnits': value.fgsBaseUnits,
        'loadComponentParameterIds': value.loadComponentParameterIds,
        'loadRegionParameterId': value.loadRegionParameterId,
        'loadType': GBTLoadTypeToJSON(value.loadType),
        'magnitudeParameterId': value.magnitudeParameterId,
        'magnitudeQuantityType': GBTQuantityTypeToJSON(value.magnitudeQuantityType),
        'structuralLoad': value.structuralLoad,
        'suppressedInSimulations': value.suppressedInSimulations,
    };
}

