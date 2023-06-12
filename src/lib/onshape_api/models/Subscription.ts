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
import type { Customer } from './Customer';
import {
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';
import type { Discount } from './Discount';
import {
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
} from './Discount';
import type { Plan } from './Plan';
import {
    PlanFromJSON,
    PlanFromJSONTyped,
    PlanToJSON,
} from './Plan';
import type { SubscriptionItemCollection } from './SubscriptionItemCollection';
import {
    SubscriptionItemCollectionFromJSON,
    SubscriptionItemCollectionFromJSONTyped,
    SubscriptionItemCollectionToJSON,
} from './SubscriptionItemCollection';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    applicationFeePercent?: number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    billing?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Subscription
     */
    cancelAtPeriodEnd?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    canceledAt?: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    created?: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    currentPeriodEnd?: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    currentPeriodStart?: number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    customer?: string;
    /**
     * 
     * @type {Customer}
     * @memberof Subscription
     */
    customerObject?: Customer;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    daysUntilDue?: number;
    /**
     * 
     * @type {Discount}
     * @memberof Subscription
     */
    discount?: Discount;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    endedAt?: number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    id?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Subscription
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    object?: string;
    /**
     * 
     * @type {Plan}
     * @memberof Subscription
     */
    plan?: Plan;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    quantity?: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    start?: number;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    status?: string;
    /**
     * 
     * @type {SubscriptionItemCollection}
     * @memberof Subscription
     */
    subscriptionItems?: SubscriptionItemCollection;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    taxPercent?: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    trialEnd?: number;
    /**
     * 
     * @type {number}
     * @memberof Subscription
     */
    trialStart?: number;
}

/**
 * Check if a given object implements the Subscription interface.
 */
export function instanceOfSubscription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'applicationFeePercent': !exists(json, 'applicationFeePercent') ? undefined : json['applicationFeePercent'],
        'billing': !exists(json, 'billing') ? undefined : json['billing'],
        'cancelAtPeriodEnd': !exists(json, 'cancelAtPeriodEnd') ? undefined : json['cancelAtPeriodEnd'],
        'canceledAt': !exists(json, 'canceledAt') ? undefined : json['canceledAt'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'currentPeriodEnd': !exists(json, 'currentPeriodEnd') ? undefined : json['currentPeriodEnd'],
        'currentPeriodStart': !exists(json, 'currentPeriodStart') ? undefined : json['currentPeriodStart'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'customerObject': !exists(json, 'customerObject') ? undefined : CustomerFromJSON(json['customerObject']),
        'daysUntilDue': !exists(json, 'daysUntilDue') ? undefined : json['daysUntilDue'],
        'discount': !exists(json, 'discount') ? undefined : DiscountFromJSON(json['discount']),
        'endedAt': !exists(json, 'endedAt') ? undefined : json['endedAt'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'plan': !exists(json, 'plan') ? undefined : PlanFromJSON(json['plan']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'start': !exists(json, 'start') ? undefined : json['start'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'subscriptionItems': !exists(json, 'subscriptionItems') ? undefined : SubscriptionItemCollectionFromJSON(json['subscriptionItems']),
        'taxPercent': !exists(json, 'taxPercent') ? undefined : json['taxPercent'],
        'trialEnd': !exists(json, 'trialEnd') ? undefined : json['trialEnd'],
        'trialStart': !exists(json, 'trialStart') ? undefined : json['trialStart'],
    };
}

export function SubscriptionToJSON(value?: Subscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'applicationFeePercent': value.applicationFeePercent,
        'billing': value.billing,
        'cancelAtPeriodEnd': value.cancelAtPeriodEnd,
        'canceledAt': value.canceledAt,
        'created': value.created,
        'currentPeriodEnd': value.currentPeriodEnd,
        'currentPeriodStart': value.currentPeriodStart,
        'customer': value.customer,
        'customerObject': CustomerToJSON(value.customerObject),
        'daysUntilDue': value.daysUntilDue,
        'discount': DiscountToJSON(value.discount),
        'endedAt': value.endedAt,
        'id': value.id,
        'metadata': value.metadata,
        'object': value.object,
        'plan': PlanToJSON(value.plan),
        'quantity': value.quantity,
        'start': value.start,
        'status': value.status,
        'subscriptionItems': SubscriptionItemCollectionToJSON(value.subscriptionItems),
        'taxPercent': value.taxPercent,
        'trialEnd': value.trialEnd,
        'trialStart': value.trialStart,
    };
}
