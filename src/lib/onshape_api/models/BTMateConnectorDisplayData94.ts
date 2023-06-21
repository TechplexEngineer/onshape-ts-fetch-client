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
import type { BTCoordinateSystem387 } from './BTCoordinateSystem387';
import {
    BTCoordinateSystem387FromJSON,
    BTCoordinateSystem387FromJSONTyped,
    BTCoordinateSystem387ToJSON,
} from './BTCoordinateSystem387';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTMateConnectorDisplayData94
 */
export interface BTMateConnectorDisplayData94 {
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorDisplayData94
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorDisplayData94
     */
    elementId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMateConnectorDisplayData94
     */
    entityIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateConnectorDisplayData94
     */
    hidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateConnectorDisplayData94
     */
    implicit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMateConnectorDisplayData94
     */
    isDerivedFeature?: boolean;
    /**
     * 
     * @type {BTCoordinateSystem387}
     * @memberof BTMateConnectorDisplayData94
     */
    location?: BTCoordinateSystem387;
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorDisplayData94
     */
    nodeId?: string;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTMateConnectorDisplayData94
     */
    occurrence?: BTOccurrence74;
    /**
     * 
     * @type {BTOccurrence74}
     * @memberof BTMateConnectorDisplayData94
     */
    ownerOccurrence?: BTOccurrence74;
    /**
     * 
     * @type {string}
     * @memberof BTMateConnectorDisplayData94
     */
    partId?: string;
}

/**
 * Check if a given object implements the BTMateConnectorDisplayData94 interface.
 */
export function instanceOfBTMateConnectorDisplayData94(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMateConnectorDisplayData94FromJSON(json: any): BTMateConnectorDisplayData94 {
    return BTMateConnectorDisplayData94FromJSONTyped(json, false);
}

export function BTMateConnectorDisplayData94FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMateConnectorDisplayData94 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'entityIds': !exists(json, 'entityIds') ? undefined : json['entityIds'],
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'implicit': !exists(json, 'implicit') ? undefined : json['implicit'],
        'isDerivedFeature': !exists(json, 'isDerivedFeature') ? undefined : json['isDerivedFeature'],
        'location': !exists(json, 'location') ? undefined : BTCoordinateSystem387FromJSON(json['location']),
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'occurrence': !exists(json, 'occurrence') ? undefined : BTOccurrence74FromJSON(json['occurrence']),
        'ownerOccurrence': !exists(json, 'ownerOccurrence') ? undefined : BTOccurrence74FromJSON(json['ownerOccurrence']),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
    };
}

export function BTMateConnectorDisplayData94ToJSON(value?: BTMateConnectorDisplayData94 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'elementId': value.elementId,
        'entityIds': value.entityIds,
        'hidden': value.hidden,
        'implicit': value.implicit,
        'isDerivedFeature': value.isDerivedFeature,
        'location': BTCoordinateSystem387ToJSON(value.location),
        'nodeId': value.nodeId,
        'occurrence': BTOccurrence74ToJSON(value.occurrence),
        'ownerOccurrence': BTOccurrence74ToJSON(value.ownerOccurrence),
        'partId': value.partId,
    };
}

