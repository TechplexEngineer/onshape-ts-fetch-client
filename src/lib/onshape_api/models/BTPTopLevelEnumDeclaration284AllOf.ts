/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19740-5e8d8b0919a8
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTPAnnotation231 } from './BTPAnnotation231';
import {
    BTPAnnotation231FromJSON,
    BTPAnnotation231FromJSONTyped,
    BTPAnnotation231ToJSON,
} from './BTPAnnotation231';
import type { BTPIdentifier8 } from './BTPIdentifier8';
import {
    BTPIdentifier8FromJSON,
    BTPIdentifier8FromJSONTyped,
    BTPIdentifier8ToJSON,
} from './BTPIdentifier8';
import type { BTPSpace10 } from './BTPSpace10';
import {
    BTPSpace10FromJSON,
    BTPSpace10FromJSONTyped,
    BTPSpace10ToJSON,
} from './BTPSpace10';

/**
 * 
 * @export
 * @interface BTPTopLevelEnumDeclaration284AllOf
 */
export interface BTPTopLevelEnumDeclaration284AllOf {
    /**
     * 
     * @type {Array<BTPAnnotation231>}
     * @memberof BTPTopLevelEnumDeclaration284AllOf
     */
    annotations?: Array<BTPAnnotation231>;
    /**
     * 
     * @type {string}
     * @memberof BTPTopLevelEnumDeclaration284AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPSpace10}
     * @memberof BTPTopLevelEnumDeclaration284AllOf
     */
    spaceInEmptyList?: BTPSpace10;
    /**
     * 
     * @type {boolean}
     * @memberof BTPTopLevelEnumDeclaration284AllOf
     */
    trailingComma?: boolean;
    /**
     * 
     * @type {Array<BTPIdentifier8>}
     * @memberof BTPTopLevelEnumDeclaration284AllOf
     */
    values?: Array<BTPIdentifier8>;
}

/**
 * Check if a given object implements the BTPTopLevelEnumDeclaration284AllOf interface.
 */
export function instanceOfBTPTopLevelEnumDeclaration284AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPTopLevelEnumDeclaration284AllOfFromJSON(json: any): BTPTopLevelEnumDeclaration284AllOf {
    return BTPTopLevelEnumDeclaration284AllOfFromJSONTyped(json, false);
}

export function BTPTopLevelEnumDeclaration284AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPTopLevelEnumDeclaration284AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotations': !exists(json, 'annotations') ? undefined : ((json['annotations'] as Array<any>).map(BTPAnnotation231FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'spaceInEmptyList': !exists(json, 'spaceInEmptyList') ? undefined : BTPSpace10FromJSON(json['spaceInEmptyList']),
        'trailingComma': !exists(json, 'trailingComma') ? undefined : json['trailingComma'],
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(BTPIdentifier8FromJSON)),
    };
}

export function BTPTopLevelEnumDeclaration284AllOfToJSON(value?: BTPTopLevelEnumDeclaration284AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotations': value.annotations === undefined ? undefined : ((value.annotations as Array<any>).map(BTPAnnotation231ToJSON)),
        'btType': value.btType,
        'spaceInEmptyList': BTPSpace10ToJSON(value.spaceInEmptyList),
        'trailingComma': value.trailingComma,
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(BTPIdentifier8ToJSON)),
    };
}

