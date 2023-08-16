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
/**
 * 
 * @export
 * @interface BTMetadataPropertyValidatorInfo
 */
export interface BTMetadataPropertyValidatorInfo {
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    max?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    maxCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    maxDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    maxLength?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    minCount?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    minDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    minLength?: number;
    /**
     * 
     * @type {string}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    pattern?: string;
    /**
     * 
     * @type {number}
     * @memberof BTMetadataPropertyValidatorInfo
     */
    quantityType?: number;
}

/**
 * Check if a given object implements the BTMetadataPropertyValidatorInfo interface.
 */
export function instanceOfBTMetadataPropertyValidatorInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMetadataPropertyValidatorInfoFromJSON(json: any): BTMetadataPropertyValidatorInfo {
    return BTMetadataPropertyValidatorInfoFromJSONTyped(json, false);
}

export function BTMetadataPropertyValidatorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMetadataPropertyValidatorInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'max': !exists(json, 'max') ? undefined : json['max'],
        'maxCount': !exists(json, 'maxCount') ? undefined : json['maxCount'],
        'maxDate': !exists(json, 'maxDate') ? undefined : (new Date(json['maxDate'])),
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'min': !exists(json, 'min') ? undefined : json['min'],
        'minCount': !exists(json, 'minCount') ? undefined : json['minCount'],
        'minDate': !exists(json, 'minDate') ? undefined : (new Date(json['minDate'])),
        'minLength': !exists(json, 'minLength') ? undefined : json['minLength'],
        'pattern': !exists(json, 'pattern') ? undefined : json['pattern'],
        'quantityType': !exists(json, 'quantityType') ? undefined : json['quantityType'],
    };
}

export function BTMetadataPropertyValidatorInfoToJSON(value?: BTMetadataPropertyValidatorInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max': value.max,
        'maxCount': value.maxCount,
        'maxDate': value.maxDate === undefined ? undefined : (value.maxDate.toISOString()),
        'maxLength': value.maxLength,
        'min': value.min,
        'minCount': value.minCount,
        'minDate': value.minDate === undefined ? undefined : (value.minDate.toISOString()),
        'minLength': value.minLength,
        'pattern': value.pattern,
        'quantityType': value.quantityType,
    };
}

