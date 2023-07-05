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
import type { BTEntityGeometry35 } from './BTEntityGeometry35';
import {
    BTEntityGeometry35FromJSON,
    BTEntityGeometry35FromJSONTyped,
    BTEntityGeometry35ToJSON,
} from './BTEntityGeometry35';

import {
     BTEntityDeletion24FromJSONTyped,
     BTFeatureEntity34FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTBaseEntityData33
 */
export interface BTBaseEntityData33 {
    /**
     * 
     * @type {string}
     * @memberof BTBaseEntityData33
     */
    btType?: string;
    /**
     * 
     * @type {BTBaseEntityData33}
     * @memberof BTBaseEntityData33
     */
    copyWithoutGeometry?: BTBaseEntityData33;
    /**
     * 
     * @type {BTBaseEntityData33}
     * @memberof BTBaseEntityData33
     */
    decompressed?: BTBaseEntityData33;
    /**
     * 
     * @type {boolean}
     * @memberof BTBaseEntityData33
     */
    deletion?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTBaseEntityData33
     */
    featureIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTBaseEntityData33
     */
    fromSketch?: boolean;
    /**
     * 
     * @type {Array<BTEntityGeometry35>}
     * @memberof BTBaseEntityData33
     */
    geometries?: Array<BTEntityGeometry35>;
}

/**
 * Check if a given object implements the BTBaseEntityData33 interface.
 */
export function instanceOfBTBaseEntityData33(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBaseEntityData33FromJSON(json: any): BTBaseEntityData33 {
    return BTBaseEntityData33FromJSONTyped(json, false);
}

export function BTBaseEntityData33FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBaseEntityData33 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTEntityDeletion-24') {
            return BTEntityDeletion24FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFeatureEntity-34') {
            return BTFeatureEntity34FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'copyWithoutGeometry': !exists(json, 'copyWithoutGeometry') ? undefined : BTBaseEntityData33FromJSON(json['copyWithoutGeometry']),
        'decompressed': !exists(json, 'decompressed') ? undefined : BTBaseEntityData33FromJSON(json['decompressed']),
        'deletion': !exists(json, 'deletion') ? undefined : json['deletion'],
        'featureIds': !exists(json, 'featureIds') ? undefined : json['featureIds'],
        'fromSketch': !exists(json, 'fromSketch') ? undefined : json['fromSketch'],
        'geometries': !exists(json, 'geometries') ? undefined : ((json['geometries'] as Array<any>).map(BTEntityGeometry35FromJSON)),
    };
}

export function BTBaseEntityData33ToJSON(value?: BTBaseEntityData33 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'copyWithoutGeometry': BTBaseEntityData33ToJSON(value.copyWithoutGeometry),
        'decompressed': BTBaseEntityData33ToJSON(value.decompressed),
        'deletion': value.deletion,
        'featureIds': value.featureIds,
        'fromSketch': value.fromSketch,
        'geometries': value.geometries === undefined ? undefined : ((value.geometries as Array<any>).map(BTEntityGeometry35ToJSON)),
    };
}

