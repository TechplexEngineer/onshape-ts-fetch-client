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


import * as runtime from '../runtime';
import type {
  BTListResponseBTPurchaseInfo,
  BTPurchaseInfo,
  BTPurchaseUserParams,
} from '../models';
import {
    BTListResponseBTPurchaseInfoFromJSON,
    BTListResponseBTPurchaseInfoToJSON,
    BTPurchaseInfoFromJSON,
    BTPurchaseInfoToJSON,
    BTPurchaseUserParamsFromJSON,
    BTPurchaseUserParamsToJSON,
} from '../models';

export interface CancelPurchaseNewRequest {
    aid: string;
    pid: string;
    cancelImmediately?: boolean;
}

export interface ConsumePurchaseRequest {
    pid: string;
    bTPurchaseUserParams?: BTPurchaseUserParams;
}

export interface GetPlanPurchasesRequest {
    planId: string;
    offset?: number;
    limit?: number;
}

export interface GetPurchasesRequest {
    all?: boolean;
    ownPurchaseOnly?: boolean;
    includeGoDEnabledAppPurchases?: boolean;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     * Cancel recurring subscription for the account by account ID and purchase ID.
     */
    async cancelPurchaseNewRaw(requestParameters: CancelPurchaseNewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.aid === null || requestParameters.aid === undefined) {
            throw new runtime.RequiredError('aid','Required parameter requestParameters.aid was null or undefined when calling cancelPurchaseNew.');
        }

        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling cancelPurchaseNew.');
        }

        const queryParameters: any = {};

        if (requestParameters.cancelImmediately !== undefined) {
            queryParameters['cancelImmediately'] = requestParameters.cancelImmediately;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Purchase"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/{aid}/purchases/{pid}`.replace(`{${"aid"}}`, encodeURIComponent(String(requestParameters.aid))).replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Cancel recurring subscription for the account by account ID and purchase ID.
     */
    async cancelPurchaseNew(requestParameters: CancelPurchaseNewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.cancelPurchaseNewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Mark a purchase as consumed by the current user.
     */
    async consumePurchaseRaw(requestParameters: ConsumePurchaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPurchaseInfo>> {
        if (requestParameters.pid === null || requestParameters.pid === undefined) {
            throw new runtime.RequiredError('pid','Required parameter requestParameters.pid was null or undefined when calling consumePurchase.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Purchase"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/purchases/{pid}/consume`.replace(`{${"pid"}}`, encodeURIComponent(String(requestParameters.pid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPurchaseUserParamsToJSON(requestParameters.bTPurchaseUserParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPurchaseInfoFromJSON(jsonValue));
    }

    /**
     * Mark a purchase as consumed by the current user.
     */
    async consumePurchase(requestParameters: ConsumePurchaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPurchaseInfo> {
        const response = await this.consumePurchaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     */
    async getPlanPurchasesRaw(requestParameters: GetPlanPurchasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTPurchaseInfo>> {
        if (requestParameters.planId === null || requestParameters.planId === undefined) {
            throw new runtime.RequiredError('planId','Required parameter requestParameters.planId was null or undefined when calling getPlanPurchases.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/plans/{planId}/purchases`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters.planId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTPurchaseInfoFromJSON(jsonValue));
    }

    /**
     * Get a list of all app purchases made for the specified plan.
     */
    async getPlanPurchases(requestParameters: GetPlanPurchasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTPurchaseInfo> {
        const response = await this.getPlanPurchasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all app purchases made by the current user.
     * This API should be used within the context of an OAuth-enabled application.
     */
    async getPurchasesRaw(requestParameters: GetPurchasesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTPurchaseInfo>>> {
        const queryParameters: any = {};

        if (requestParameters.all !== undefined) {
            queryParameters['all'] = requestParameters.all;
        }

        if (requestParameters.ownPurchaseOnly !== undefined) {
            queryParameters['ownPurchaseOnly'] = requestParameters.ownPurchaseOnly;
        }

        if (requestParameters.includeGoDEnabledAppPurchases !== undefined) {
            queryParameters['includeGoDEnabledAppPurchases'] = requestParameters.includeGoDEnabledAppPurchases;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/accounts/purchases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTPurchaseInfoFromJSON));
    }

    /**
     * Get a list of all app purchases made by the current user.
     * This API should be used within the context of an OAuth-enabled application.
     */
    async getPurchases(requestParameters: GetPurchasesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTPurchaseInfo>> {
        const response = await this.getPurchasesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
