/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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

import {
     BTAssemblySimulation2246FromJSONTyped,
     BTExplosion2754FromJSONTyped,
     BTExplosionStepFeature3008FromJSONTyped,
     BTMAssemblyFeature12218FromJSONTyped,
     BTMAssemblyFeature21022FromJSONTyped,
     BTMAssemblyFeatureFolder2543FromJSONTyped,
     BTMAssemblyPatternFeature2241FromJSONTyped,
     BTMAssemblyReplicateFeature1351FromJSONTyped,
     BTMGenerativeDesignFeature3195FromJSONTyped,
     BTMGeometryMate1260FromJSONTyped,
     BTMLoad3538FromJSONTyped,
     BTMMate64FromJSONTyped,
     BTMMateConnector66FromJSONTyped,
     BTMMateGroup65FromJSONTyped,
     BTMMateRelation1412FromJSONTyped,
     BTMNonGeometricItem1864FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMAssemblyFeature887
 */
export interface BTMAssemblyFeature887 extends BTMFeature134 {
    /**
     * 
     * @type {string}
     * @memberof BTMAssemblyFeature887
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeature887
     */
    auxiliaryTreeFeature?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeature887
     */
    featureFolder?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTMAssemblyFeature887
     */
    featureListFieldIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMAssemblyFeature887
     */
    fieldIndexForOwnedMateConnectors?: number;
    /**
     * 
     * @type {Array<BTMIndividualQueryWithOccurrenceBase904>}
     * @memberof BTMAssemblyFeature887
     */
    occurrenceQueriesFromAllConfigurations?: Array<BTMIndividualQueryWithOccurrenceBase904>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMAssemblyFeature887
     */
    parametricInstanceFeature?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTMAssemblyFeature887
     */
    version?: number;
}

/**
 * Check if a given object implements the BTMAssemblyFeature887 interface.
 */
export function instanceOfBTMAssemblyFeature887(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMAssemblyFeature887FromJSON(json: any): BTMAssemblyFeature887 {
    return BTMAssemblyFeature887FromJSONTyped(json, false);
}

export function BTMAssemblyFeature887FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMAssemblyFeature887 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblySimulation-2246') {
            return BTAssemblySimulation2246FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTExplosion-2754') {
            return BTExplosion2754FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTExplosionStepFeature-3008') {
            return BTExplosionStepFeature3008FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMAssemblyFeature1-2218') {
            return BTMAssemblyFeature12218FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMAssemblyFeature2-1022') {
            return BTMAssemblyFeature21022FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMAssemblyFeatureFolder-2543') {
            return BTMAssemblyFeatureFolder2543FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMAssemblyPatternFeature-2241') {
            return BTMAssemblyPatternFeature2241FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMAssemblyReplicateFeature-1351') {
            return BTMAssemblyReplicateFeature1351FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMGenerativeDesignFeature-3195') {
            return BTMGenerativeDesignFeature3195FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMGeometryMate-1260') {
            return BTMGeometryMate1260FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMLoad-3538') {
            return BTMLoad3538FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMMate-64') {
            return BTMMate64FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMMateConnector-66') {
            return BTMMateConnector66FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMMateGroup-65') {
            return BTMMateGroup65FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMMateRelation-1412') {
            return BTMMateRelation1412FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTMNonGeometricItem-1864') {
            return BTMNonGeometricItem1864FromJSONTyped(json, true);
        }
    }
    return {
        ...BTMFeature134FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'auxiliaryTreeFeature': !exists(json, 'auxiliaryTreeFeature') ? undefined : json['auxiliaryTreeFeature'],
        'featureFolder': !exists(json, 'featureFolder') ? undefined : json['featureFolder'],
        'featureListFieldIndex': !exists(json, 'featureListFieldIndex') ? undefined : json['featureListFieldIndex'],
        'fieldIndexForOwnedMateConnectors': !exists(json, 'fieldIndexForOwnedMateConnectors') ? undefined : json['fieldIndexForOwnedMateConnectors'],
        'occurrenceQueriesFromAllConfigurations': !exists(json, 'occurrenceQueriesFromAllConfigurations') ? undefined : ((json['occurrenceQueriesFromAllConfigurations'] as Array<any>).map(BTMIndividualQueryWithOccurrenceBase904FromJSON)),
        'parametricInstanceFeature': !exists(json, 'parametricInstanceFeature') ? undefined : json['parametricInstanceFeature'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BTMAssemblyFeature887ToJSON(value?: BTMAssemblyFeature887 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMFeature134ToJSON(value),
        'btType': value.btType,
        'auxiliaryTreeFeature': value.auxiliaryTreeFeature,
        'featureFolder': value.featureFolder,
        'featureListFieldIndex': value.featureListFieldIndex,
        'fieldIndexForOwnedMateConnectors': value.fieldIndexForOwnedMateConnectors,
        'occurrenceQueriesFromAllConfigurations': value.occurrenceQueriesFromAllConfigurations === undefined ? undefined : ((value.occurrenceQueriesFromAllConfigurations as Array<any>).map(BTMIndividualQueryWithOccurrenceBase904ToJSON)),
        'parametricInstanceFeature': value.parametricInstanceFeature,
        'version': value.version,
    };
}

