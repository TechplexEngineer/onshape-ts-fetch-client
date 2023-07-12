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
import type { BTGraphicsAppearance1152 } from './BTGraphicsAppearance1152';
import {
    BTGraphicsAppearance1152FromJSON,
    BTGraphicsAppearance1152FromJSONTyped,
    BTGraphicsAppearance1152ToJSON,
} from './BTGraphicsAppearance1152';

/**
 * 
 * @export
 * @interface BTAppearanceOverride2517
 */
export interface BTAppearanceOverride2517 {
    /**
     * 
     * @type {BTGraphicsAppearance1152}
     * @memberof BTAppearanceOverride2517
     */
    appearance?: BTGraphicsAppearance1152;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppearanceOverride2517
     */
    appearanceReset?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTAppearanceOverride2517
     */
    btType?: string;
    /**
     * 
     * @type {BTAppearanceOverride2517}
     * @memberof BTAppearanceOverride2517
     */
    copyWithoutEntities?: BTAppearanceOverride2517;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTAppearanceOverride2517
     */
    entityDeterministicIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTAppearanceOverride2517
     */
    isDeletion?: boolean;
}

/**
 * Check if a given object implements the BTAppearanceOverride2517 interface.
 */
export function instanceOfBTAppearanceOverride2517(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAppearanceOverride2517FromJSON(json: any): BTAppearanceOverride2517 {
    return BTAppearanceOverride2517FromJSONTyped(json, false);
}

export function BTAppearanceOverride2517FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAppearanceOverride2517 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTGraphicsAppearance1152FromJSON(json['appearance']),
        'appearanceReset': !exists(json, 'appearanceReset') ? undefined : json['appearanceReset'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'copyWithoutEntities': !exists(json, 'copyWithoutEntities') ? undefined : BTAppearanceOverride2517FromJSON(json['copyWithoutEntities']),
        'entityDeterministicIds': !exists(json, 'entityDeterministicIds') ? undefined : json['entityDeterministicIds'],
        'isDeletion': !exists(json, 'isDeletion') ? undefined : json['isDeletion'],
    };
}

export function BTAppearanceOverride2517ToJSON(value?: BTAppearanceOverride2517 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTGraphicsAppearance1152ToJSON(value.appearance),
        'appearanceReset': value.appearanceReset,
        'btType': value.btType,
        'copyWithoutEntities': BTAppearanceOverride2517ToJSON(value.copyWithoutEntities),
        'entityDeterministicIds': value.entityDeterministicIds,
        'isDeletion': value.isDeletion,
    };
}

