/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
} from './BTUserSummaryInfo';

/**
 * 
 * @export
 * @interface BTDiscountInfo
 */
export interface BTDiscountInfo {
    /**
     * 
     * @type {number}
     * @memberof BTDiscountInfo
     */
    accountBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDiscountInfo
     */
    amountOff?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDiscountInfo
     */
    couponType?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDiscountInfo
     */
    couponValidMonths?: number;
    /**
     * 
     * @type {Date}
     * @memberof BTDiscountInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTDiscountInfo
     */
    createdBy?: BTUserSummaryInfo;
    /**
     * 
     * @type {Date}
     * @memberof BTDiscountInfo
     */
    expiresAt?: Date;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTDiscountInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTDiscountInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTDiscountInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiscountInfo
     */
    ownerId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDiscountInfo
     */
    percentOff?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDiscountInfo
     */
    planId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDiscountInfo
     */
    trialEndDate?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTDiscountInfo
     */
    usedAt?: Date;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTDiscountInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTDiscountInfo interface.
 */
export function instanceOfBTDiscountInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDiscountInfoFromJSON(json: any): BTDiscountInfo {
    return BTDiscountInfoFromJSONTyped(json, false);
}

export function BTDiscountInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDiscountInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountBalance': !exists(json, 'accountBalance') ? undefined : json['accountBalance'],
        'amountOff': !exists(json, 'amountOff') ? undefined : json['amountOff'],
        'couponType': !exists(json, 'couponType') ? undefined : json['couponType'],
        'couponValidMonths': !exists(json, 'couponValidMonths') ? undefined : json['couponValidMonths'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : BTUserSummaryInfoFromJSON(json['createdBy']),
        'expiresAt': !exists(json, 'expiresAt') ? undefined : (new Date(json['expiresAt'])),
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'percentOff': !exists(json, 'percentOff') ? undefined : json['percentOff'],
        'planId': !exists(json, 'planId') ? undefined : json['planId'],
        'trialEndDate': !exists(json, 'trialEndDate') ? undefined : json['trialEndDate'],
        'usedAt': !exists(json, 'usedAt') ? undefined : (new Date(json['usedAt'])),
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTDiscountInfoToJSON(value?: BTDiscountInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountBalance': value.accountBalance,
        'amountOff': value.amountOff,
        'couponType': value.couponType,
        'couponValidMonths': value.couponValidMonths,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': BTUserSummaryInfoToJSON(value.createdBy),
        'expiresAt': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'ownerId': value.ownerId,
        'percentOff': value.percentOff,
        'planId': value.planId,
        'trialEndDate': value.trialEndDate,
        'usedAt': value.usedAt === undefined ? undefined : (value.usedAt.toISOString()),
        'viewRef': value.viewRef,
    };
}

