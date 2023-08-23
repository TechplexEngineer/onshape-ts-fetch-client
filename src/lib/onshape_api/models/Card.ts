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
import type { ThreeDSecure } from './ThreeDSecure';
import {
    ThreeDSecureFromJSON,
    ThreeDSecureFromJSONTyped,
    ThreeDSecureToJSON,
} from './ThreeDSecure';

/**
 * 
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    account?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressCity?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressCountry?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressLine1Check?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressState?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressZip?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    addressZipCheck?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Card
     */
    availablePayoutMethods?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    brand?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    customer?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    cvcCheck?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Card
     */
    defaultForCurrency?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    dynamicLast4?: string;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    expMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof Card
     */
    expYear?: number;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    fingerprint?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    funding?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    iin?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    instanceURL?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    issuer?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    last4?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Card
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    object?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    recipient?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    status?: string;
    /**
     * 
     * @type {ThreeDSecure}
     * @memberof Card
     */
    threeDSecure?: ThreeDSecure;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    tokenizationMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    type?: string;
}

/**
 * Check if a given object implements the Card interface.
 */
export function instanceOfCard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CardFromJSON(json: any): Card {
    return CardFromJSONTyped(json, false);
}

export function CardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Card {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : json['account'],
        'addressCity': !exists(json, 'addressCity') ? undefined : json['addressCity'],
        'addressCountry': !exists(json, 'addressCountry') ? undefined : json['addressCountry'],
        'addressLine1': !exists(json, 'addressLine1') ? undefined : json['addressLine1'],
        'addressLine1Check': !exists(json, 'addressLine1Check') ? undefined : json['addressLine1Check'],
        'addressLine2': !exists(json, 'addressLine2') ? undefined : json['addressLine2'],
        'addressState': !exists(json, 'addressState') ? undefined : json['addressState'],
        'addressZip': !exists(json, 'addressZip') ? undefined : json['addressZip'],
        'addressZipCheck': !exists(json, 'addressZipCheck') ? undefined : json['addressZipCheck'],
        'availablePayoutMethods': !exists(json, 'availablePayoutMethods') ? undefined : json['availablePayoutMethods'],
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'cvcCheck': !exists(json, 'cvcCheck') ? undefined : json['cvcCheck'],
        'defaultForCurrency': !exists(json, 'defaultForCurrency') ? undefined : json['defaultForCurrency'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dynamicLast4': !exists(json, 'dynamicLast4') ? undefined : json['dynamicLast4'],
        'expMonth': !exists(json, 'expMonth') ? undefined : json['expMonth'],
        'expYear': !exists(json, 'expYear') ? undefined : json['expYear'],
        'fingerprint': !exists(json, 'fingerprint') ? undefined : json['fingerprint'],
        'funding': !exists(json, 'funding') ? undefined : json['funding'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'iin': !exists(json, 'iin') ? undefined : json['iin'],
        'instanceURL': !exists(json, 'instanceURL') ? undefined : json['instanceURL'],
        'issuer': !exists(json, 'issuer') ? undefined : json['issuer'],
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'recipient': !exists(json, 'recipient') ? undefined : json['recipient'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'threeDSecure': !exists(json, 'threeDSecure') ? undefined : ThreeDSecureFromJSON(json['threeDSecure']),
        'tokenizationMethod': !exists(json, 'tokenizationMethod') ? undefined : json['tokenizationMethod'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function CardToJSON(value?: Card | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': value.account,
        'addressCity': value.addressCity,
        'addressCountry': value.addressCountry,
        'addressLine1': value.addressLine1,
        'addressLine1Check': value.addressLine1Check,
        'addressLine2': value.addressLine2,
        'addressState': value.addressState,
        'addressZip': value.addressZip,
        'addressZipCheck': value.addressZipCheck,
        'availablePayoutMethods': value.availablePayoutMethods,
        'brand': value.brand,
        'country': value.country,
        'currency': value.currency,
        'customer': value.customer,
        'cvcCheck': value.cvcCheck,
        'defaultForCurrency': value.defaultForCurrency,
        'description': value.description,
        'dynamicLast4': value.dynamicLast4,
        'expMonth': value.expMonth,
        'expYear': value.expYear,
        'fingerprint': value.fingerprint,
        'funding': value.funding,
        'id': value.id,
        'iin': value.iin,
        'instanceURL': value.instanceURL,
        'issuer': value.issuer,
        'last4': value.last4,
        'metadata': value.metadata,
        'name': value.name,
        'object': value.object,
        'recipient': value.recipient,
        'status': value.status,
        'threeDSecure': ThreeDSecureToJSON(value.threeDSecure),
        'tokenizationMethod': value.tokenizationMethod,
        'type': value.type,
    };
}

