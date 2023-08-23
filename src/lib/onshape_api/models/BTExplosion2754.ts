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
import type { BTExplosionStepFeature3008 } from './BTExplosionStepFeature3008';
import {
    BTExplosionStepFeature3008FromJSON,
    BTExplosionStepFeature3008FromJSONTyped,
    BTExplosionStepFeature3008ToJSON,
} from './BTExplosionStepFeature3008';
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
import type { BTMicroversionIdAndConfiguration2338 } from './BTMicroversionIdAndConfiguration2338';
import {
    BTMicroversionIdAndConfiguration2338FromJSON,
    BTMicroversionIdAndConfiguration2338FromJSONTyped,
    BTMicroversionIdAndConfiguration2338ToJSON,
} from './BTMicroversionIdAndConfiguration2338';

/**
 * 
 * @export
 * @interface BTExplosion2754
 */
export interface BTExplosion2754 extends BTMAssemblyFeature887 {
    /**
     * 
     * @type {string}
     * @memberof BTExplosion2754
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTExplosionStepFeature3008>}
     * @memberof BTExplosion2754
     */
    explodeSteps?: Array<BTExplosionStepFeature3008>;
    /**
     * 
     * @type {BTMicroversionIdAndConfiguration2338}
     * @memberof BTExplosion2754
     */
    startingPositionId?: BTMicroversionIdAndConfiguration2338;
}

/**
 * Check if a given object implements the BTExplosion2754 interface.
 */
export function instanceOfBTExplosion2754(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExplosion2754FromJSON(json: any): BTExplosion2754 {
    return BTExplosion2754FromJSONTyped(json, false);
}

export function BTExplosion2754FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExplosion2754 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMAssemblyFeature887FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'explodeSteps': !exists(json, 'explodeSteps') ? undefined : ((json['explodeSteps'] as Array<any>).map(BTExplosionStepFeature3008FromJSON)),
        'startingPositionId': !exists(json, 'startingPositionId') ? undefined : BTMicroversionIdAndConfiguration2338FromJSON(json['startingPositionId']),
    };
}

export function BTExplosion2754ToJSON(value?: BTExplosion2754 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMAssemblyFeature887ToJSON(value),
        'btType': value.btType,
        'explodeSteps': value.explodeSteps === undefined ? undefined : ((value.explodeSteps as Array<any>).map(BTExplosionStepFeature3008ToJSON)),
        'startingPositionId': BTMicroversionIdAndConfiguration2338ToJSON(value.startingPositionId),
    };
}

