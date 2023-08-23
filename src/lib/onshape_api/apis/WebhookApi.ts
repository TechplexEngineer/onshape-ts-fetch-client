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


import * as runtime from '../runtime';
import type {
  BTListResponseBTWebhookInfo,
  BTWebhookInfo,
  BTWebhookParams,
} from '../models';
import {
    BTListResponseBTWebhookInfoFromJSON,
    BTListResponseBTWebhookInfoToJSON,
    BTWebhookInfoFromJSON,
    BTWebhookInfoToJSON,
    BTWebhookParamsFromJSON,
    BTWebhookParamsToJSON,
} from '../models';

export interface CreateWebhookRequest {
    bTWebhookParams?: BTWebhookParams;
}

export interface GetWebhookRequest {
    webhookid: string;
}

export interface GetWebhooksRequest {
    company?: string;
    user?: string;
    offset?: number;
    limit?: number;
}

export interface PingWebhookRequest {
    webhookid: string;
}

export interface UnregisterWebhookRequest {
    webhookid: string;
    blockNotification?: boolean;
}

export interface UpdateWebhookRequest {
    webhookid: string;
    bTWebhookParams?: BTWebhookParams;
}

/**
 * 
 */
export class WebhookApi extends runtime.BaseAPI {

    /**
     * Create a webhook
     * Create a new webhook.
     */
    async createWebhookRaw(requestParameters: CreateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTWebhookInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/webhooks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTWebhookParamsToJSON(requestParameters.bTWebhookParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTWebhookInfoFromJSON(jsonValue));
    }

    /**
     * Create a webhook
     * Create a new webhook.
     */
    async createWebhook(requestParameters: CreateWebhookRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTWebhookInfo> {
        const response = await this.createWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get webhook info by webhook ID.
     */
    async getWebhookRaw(requestParameters: GetWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTWebhookInfo>> {
        if (requestParameters.webhookid === null || requestParameters.webhookid === undefined) {
            throw new runtime.RequiredError('webhookid','Required parameter requestParameters.webhookid was null or undefined when calling getWebhook.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/webhooks/{webhookid}`.replace(`{${"webhookid"}}`, encodeURIComponent(String(requestParameters.webhookid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTWebhookInfoFromJSON(jsonValue));
    }

    /**
     * Get webhook info by webhook ID.
     */
    async getWebhook(requestParameters: GetWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTWebhookInfo> {
        const response = await this.getWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all webhooks registered by a user or company.
     */
    async getWebhooksRaw(requestParameters: GetWebhooksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTWebhookInfo>> {
        const queryParameters: any = {};

        if (requestParameters.company !== undefined) {
            queryParameters['company'] = requestParameters.company;
        }

        if (requestParameters.user !== undefined) {
            queryParameters['user'] = requestParameters.user;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/webhooks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTWebhookInfoFromJSON(jsonValue));
    }

    /**
     * Get a list of all webhooks registered by a user or company.
     */
    async getWebhooks(requestParameters: GetWebhooksRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTWebhookInfo> {
        const response = await this.getWebhooksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Ping a webhook
     * Ping a webhook.
     */
    async pingWebhookRaw(requestParameters: PingWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.webhookid === null || requestParameters.webhookid === undefined) {
            throw new runtime.RequiredError('webhookid','Required parameter requestParameters.webhookid was null or undefined when calling pingWebhook.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/webhooks/{webhookid}/ping`.replace(`{${"webhookid"}}`, encodeURIComponent(String(requestParameters.webhookid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Ping a webhook
     * Ping a webhook.
     */
    async pingWebhook(requestParameters: PingWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.pingWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unregister a webhook.
     */
    async unregisterWebhookRaw(requestParameters: UnregisterWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.webhookid === null || requestParameters.webhookid === undefined) {
            throw new runtime.RequiredError('webhookid','Required parameter requestParameters.webhookid was null or undefined when calling unregisterWebhook.');
        }

        const queryParameters: any = {};

        if (requestParameters.blockNotification !== undefined) {
            queryParameters['blockNotification'] = requestParameters.blockNotification;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/webhooks/{webhookid}`.replace(`{${"webhookid"}}`, encodeURIComponent(String(requestParameters.webhookid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Unregister a webhook.
     */
    async unregisterWebhook(requestParameters: UnregisterWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.unregisterWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a webhook
     * Update a webhook.
     */
    async updateWebhookRaw(requestParameters: UpdateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTWebhookInfo>> {
        if (requestParameters.webhookid === null || requestParameters.webhookid === undefined) {
            throw new runtime.RequiredError('webhookid','Required parameter requestParameters.webhookid was null or undefined when calling updateWebhook.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/webhooks/{webhookid}`.replace(`{${"webhookid"}}`, encodeURIComponent(String(requestParameters.webhookid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTWebhookParamsToJSON(requestParameters.bTWebhookParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTWebhookInfoFromJSON(jsonValue));
    }

    /**
     * Update a webhook
     * Update a webhook.
     */
    async updateWebhook(requestParameters: UpdateWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTWebhookInfo> {
        const response = await this.updateWebhookRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
