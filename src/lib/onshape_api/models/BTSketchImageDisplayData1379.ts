/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTSketchEntityDisplayData354 } from './BTSketchEntityDisplayData354';
import {
    BTSketchEntityDisplayData354FromJSON,
    BTSketchEntityDisplayData354FromJSONTyped,
    BTSketchEntityDisplayData354ToJSON,
} from './BTSketchEntityDisplayData354';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTSketchImageDisplayData1379
 */
export interface BTSketchImageDisplayData1379 {
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSketchImageDisplayData1379
     */
    bottomLeftCorner?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSketchImageDisplayData1379
     */
    bottomRightCorner?: BTVector3d389;
    /**
     * 
     * @type {string}
     * @memberof BTSketchImageDisplayData1379
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTSketchEntityDisplayData354>}
     * @memberof BTSketchImageDisplayData1379
     */
    entities?: Array<BTSketchEntityDisplayData354>;
    /**
     * 
     * @type {string}
     * @memberof BTSketchImageDisplayData1379
     */
    featureId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchImageDisplayData1379
     */
    isOnFlat?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTSketchImageDisplayData1379
     */
    points?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof BTSketchImageDisplayData1379
     */
    sourceId?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTSketchImageDisplayData1379
     */
    topLeftCorner?: BTVector3d389;
}

/**
 * Check if a given object implements the BTSketchImageDisplayData1379 interface.
 */
export function instanceOfBTSketchImageDisplayData1379(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchImageDisplayData1379FromJSON(json: any): BTSketchImageDisplayData1379 {
    return BTSketchImageDisplayData1379FromJSONTyped(json, false);
}

export function BTSketchImageDisplayData1379FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchImageDisplayData1379 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bottomLeftCorner': !exists(json, 'bottomLeftCorner') ? undefined : BTVector3d389FromJSON(json['bottomLeftCorner']),
        'bottomRightCorner': !exists(json, 'bottomRightCorner') ? undefined : BTVector3d389FromJSON(json['bottomRightCorner']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'entities': !exists(json, 'entities') ? undefined : ((json['entities'] as Array<any>).map(BTSketchEntityDisplayData354FromJSON)),
        'featureId': !exists(json, 'featureId') ? undefined : json['featureId'],
        'isOnFlat': !exists(json, 'isOnFlat') ? undefined : json['isOnFlat'],
        'points': !exists(json, 'points') ? undefined : json['points'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'topLeftCorner': !exists(json, 'topLeftCorner') ? undefined : BTVector3d389FromJSON(json['topLeftCorner']),
    };
}

export function BTSketchImageDisplayData1379ToJSON(value?: BTSketchImageDisplayData1379 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bottomLeftCorner': BTVector3d389ToJSON(value.bottomLeftCorner),
        'bottomRightCorner': BTVector3d389ToJSON(value.bottomRightCorner),
        'btType': value.btType,
        'entities': value.entities === undefined ? undefined : ((value.entities as Array<any>).map(BTSketchEntityDisplayData354ToJSON)),
        'featureId': value.featureId,
        'isOnFlat': value.isOnFlat,
        'points': value.points,
        'sourceId': value.sourceId,
        'topLeftCorner': BTVector3d389ToJSON(value.topLeftCorner),
    };
}

