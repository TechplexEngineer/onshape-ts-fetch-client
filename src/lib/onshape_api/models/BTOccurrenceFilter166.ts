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
import type { BTQueryFilter183 } from './BTQueryFilter183';
import {
    BTQueryFilter183FromJSON,
    BTQueryFilter183FromJSONTyped,
    BTQueryFilter183ToJSON,
} from './BTQueryFilter183';

/**
 * 
 * @export
 * @interface BTOccurrenceFilter166
 */
export interface BTOccurrenceFilter166 extends BTQueryFilter183 {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceFilter166
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeFlattenedParts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludePatternInstances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeReplicatedInstances?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeSketch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeStandardContent?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeStudioInserts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeSubAssemblies?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    excludeSuppressed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    includeAssemblyRoot?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    includeParametricInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    includePatternOccurrence?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    solidOrCompositeBodyOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTOccurrenceFilter166
     */
    topLevelOnly?: boolean;
}

/**
 * Check if a given object implements the BTOccurrenceFilter166 interface.
 */
export function instanceOfBTOccurrenceFilter166(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrenceFilter166FromJSON(json: any): BTOccurrenceFilter166 {
    return BTOccurrenceFilter166FromJSONTyped(json, false);
}

export function BTOccurrenceFilter166FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrenceFilter166 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTQueryFilter183FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'excludeFlattenedParts': !exists(json, 'excludeFlattenedParts') ? undefined : json['excludeFlattenedParts'],
        'excludePatternInstances': !exists(json, 'excludePatternInstances') ? undefined : json['excludePatternInstances'],
        'excludeReplicatedInstances': !exists(json, 'excludeReplicatedInstances') ? undefined : json['excludeReplicatedInstances'],
        'excludeSketch': !exists(json, 'excludeSketch') ? undefined : json['excludeSketch'],
        'excludeStandardContent': !exists(json, 'excludeStandardContent') ? undefined : json['excludeStandardContent'],
        'excludeStudioInserts': !exists(json, 'excludeStudioInserts') ? undefined : json['excludeStudioInserts'],
        'excludeSubAssemblies': !exists(json, 'excludeSubAssemblies') ? undefined : json['excludeSubAssemblies'],
        'excludeSuppressed': !exists(json, 'excludeSuppressed') ? undefined : json['excludeSuppressed'],
        'includeAssemblyRoot': !exists(json, 'includeAssemblyRoot') ? undefined : json['includeAssemblyRoot'],
        'includeParametricInstance': !exists(json, 'includeParametricInstance') ? undefined : json['includeParametricInstance'],
        'includePatternOccurrence': !exists(json, 'includePatternOccurrence') ? undefined : json['includePatternOccurrence'],
        'solidOrCompositeBodyOnly': !exists(json, 'solidOrCompositeBodyOnly') ? undefined : json['solidOrCompositeBodyOnly'],
        'topLevelOnly': !exists(json, 'topLevelOnly') ? undefined : json['topLevelOnly'],
    };
}

export function BTOccurrenceFilter166ToJSON(value?: BTOccurrenceFilter166 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTQueryFilter183ToJSON(value),
        'btType': value.btType,
        'excludeFlattenedParts': value.excludeFlattenedParts,
        'excludePatternInstances': value.excludePatternInstances,
        'excludeReplicatedInstances': value.excludeReplicatedInstances,
        'excludeSketch': value.excludeSketch,
        'excludeStandardContent': value.excludeStandardContent,
        'excludeStudioInserts': value.excludeStudioInserts,
        'excludeSubAssemblies': value.excludeSubAssemblies,
        'excludeSuppressed': value.excludeSuppressed,
        'includeAssemblyRoot': value.includeAssemblyRoot,
        'includeParametricInstance': value.includeParametricInstance,
        'includePatternOccurrence': value.includePatternOccurrence,
        'solidOrCompositeBodyOnly': value.solidOrCompositeBodyOnly,
        'topLevelOnly': value.topLevelOnly,
    };
}

