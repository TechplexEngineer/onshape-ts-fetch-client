/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
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
 * @interface Coupon
 */
export interface Coupon {
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    amountOff?: number;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    created?: number;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    duration?: string;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    durationInMonths?: number;
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Coupon
     */
    livemode?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    maxRedemptions?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Coupon
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Coupon
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    percentOff?: number;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    redeemBy?: number;
    /**
     * 
     * @type {number}
     * @memberof Coupon
     */
    timesRedeemed?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Coupon
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the Coupon interface.
 */
export function instanceOfCoupon(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponFromJSON(json: any): Coupon {
    return CouponFromJSONTyped(json, false);
}

export function CouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coupon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountOff': !exists(json, 'amountOff') ? undefined : json['amountOff'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'durationInMonths': !exists(json, 'durationInMonths') ? undefined : json['durationInMonths'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'livemode': !exists(json, 'livemode') ? undefined : json['livemode'],
        'maxRedemptions': !exists(json, 'maxRedemptions') ? undefined : json['maxRedemptions'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'percentOff': !exists(json, 'percentOff') ? undefined : json['percentOff'],
        'redeemBy': !exists(json, 'redeemBy') ? undefined : json['redeemBy'],
        'timesRedeemed': !exists(json, 'timesRedeemed') ? undefined : json['timesRedeemed'],
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
    };
}

export function CouponToJSON(value?: Coupon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountOff': value.amountOff,
        'created': value.created,
        'currency': value.currency,
        'duration': value.duration,
        'durationInMonths': value.durationInMonths,
        'id': value.id,
        'livemode': value.livemode,
        'maxRedemptions': value.maxRedemptions,
        'metadata': value.metadata,
        'object': value.object,
        'percentOff': value.percentOff,
        'redeemBy': value.redeemBy,
        'timesRedeemed': value.timesRedeemed,
        'valid': value.valid,
    };
}
