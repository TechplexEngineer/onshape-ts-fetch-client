/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.19032-0b307c4b0d0e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTBoundingBox1052 } from './BTBoundingBox1052';
import {
    BTBoundingBox1052FromJSON,
    BTBoundingBox1052FromJSONTyped,
    BTBoundingBox1052ToJSON,
} from './BTBoundingBox1052';
import type { BTEntityFace31 } from './BTEntityFace31';
import {
    BTEntityFace31FromJSON,
    BTEntityFace31FromJSONTyped,
    BTEntityFace31ToJSON,
} from './BTEntityFace31';
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';
import type { BTImmutableByteArray } from './BTImmutableByteArray';
import {
    BTImmutableByteArrayFromJSON,
    BTImmutableByteArrayFromJSONTyped,
    BTImmutableByteArrayToJSON,
} from './BTImmutableByteArray';
import type { BTImmutableDoubleArray } from './BTImmutableDoubleArray';
import {
    BTImmutableDoubleArrayFromJSON,
    BTImmutableDoubleArrayFromJSONTyped,
    BTImmutableDoubleArrayToJSON,
} from './BTImmutableDoubleArray';
import type { BTImmutableFloatArray } from './BTImmutableFloatArray';
import {
    BTImmutableFloatArrayFromJSON,
    BTImmutableFloatArrayFromJSONTyped,
    BTImmutableFloatArrayToJSON,
} from './BTImmutableFloatArray';
import type { BTImmutableIntArray } from './BTImmutableIntArray';
import {
    BTImmutableIntArrayFromJSON,
    BTImmutableIntArrayFromJSONTyped,
    BTImmutableIntArrayToJSON,
} from './BTImmutableIntArray';
import type { GBTSurfaceType } from './GBTSurfaceType';
import {
    GBTSurfaceTypeFromJSON,
    GBTSurfaceTypeFromJSONTyped,
    GBTSurfaceTypeToJSON,
} from './GBTSurfaceType';

/**
 * 
 * @export
 * @interface BTSimulationFace2147
 */
export interface BTSimulationFace2147 extends BTEntityFace31 {
    /**
     * 
     * @type {string}
     * @memberof BTSimulationFace2147
     */
    btType?: string;
    /**
     * 
     * @type {BTBoundingBox1052}
     * @memberof BTSimulationFace2147
     */
    bounds?: BTBoundingBox1052;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTSimulationFace2147
     */
    sampleTrianglePointIndices?: BTImmutableIntArray;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTSimulationFace2147
     */
    triangleNormalIndices?: BTImmutableIntArray;
    /**
     * 
     * @type {BTImmutableIntArray}
     * @memberof BTSimulationFace2147
     */
    trianglePointIndices?: BTImmutableIntArray;
}

/**
 * Check if a given object implements the BTSimulationFace2147 interface.
 */
export function instanceOfBTSimulationFace2147(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSimulationFace2147FromJSON(json: any): BTSimulationFace2147 {
    return BTSimulationFace2147FromJSONTyped(json, false);
}

export function BTSimulationFace2147FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSimulationFace2147 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTEntityFace31FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'bounds': !exists(json, 'bounds') ? undefined : BTBoundingBox1052FromJSON(json['bounds']),
        'sampleTrianglePointIndices': !exists(json, 'sampleTrianglePointIndices') ? undefined : BTImmutableIntArrayFromJSON(json['sampleTrianglePointIndices']),
        'triangleNormalIndices': !exists(json, 'triangleNormalIndices') ? undefined : BTImmutableIntArrayFromJSON(json['triangleNormalIndices']),
        'trianglePointIndices': !exists(json, 'trianglePointIndices') ? undefined : BTImmutableIntArrayFromJSON(json['trianglePointIndices']),
    };
}

export function BTSimulationFace2147ToJSON(value?: BTSimulationFace2147 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTEntityFace31ToJSON(value),
        'btType': value.btType,
        'bounds': BTBoundingBox1052ToJSON(value.bounds),
        'sampleTrianglePointIndices': BTImmutableIntArrayToJSON(value.sampleTrianglePointIndices),
        'triangleNormalIndices': BTImmutableIntArrayToJSON(value.triangleNormalIndices),
        'trianglePointIndices': BTImmutableIntArrayToJSON(value.trianglePointIndices),
    };
}

