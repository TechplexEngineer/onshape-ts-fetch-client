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
import type { Coupon } from './Coupon';
import {
    CouponFromJSON,
    CouponFromJSONTyped,
    CouponToJSON,
} from './Coupon';

/**
 * 
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     * 
     * @type {Coupon}
     * @memberof Discount
     */
    coupon?: Coupon;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    customer?: string;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    end?: number;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    start?: number;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    subscription?: string;
}

/**
 * Check if a given object implements the Discount interface.
 */
export function instanceOfDiscount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountFromJSON(json: any): Discount {
    return DiscountFromJSONTyped(json, false);
}

export function DiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Discount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon': !exists(json, 'coupon') ? undefined : CouponFromJSON(json['coupon']),
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'end': !exists(json, 'end') ? undefined : json['end'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'subscription': !exists(json, 'subscription') ? undefined : json['subscription'],
    };
}

export function DiscountToJSON(value?: Discount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon': CouponToJSON(value.coupon),
        'customer': value.customer,
        'end': value.end,
        'id': value.id,
        'object': value.object,
        'start': value.start,
        'subscription': value.subscription,
    };
}

