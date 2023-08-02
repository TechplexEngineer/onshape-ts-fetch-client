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


import * as runtime from '../runtime';
import type {
  BTActiveWorkflowInfo,
  BTReleasePackageInfo,
  BTReleasePackageParams,
  BTUpdateReleasePackageParams,
} from '../models';
import {
    BTActiveWorkflowInfoFromJSON,
    BTActiveWorkflowInfoToJSON,
    BTReleasePackageInfoFromJSON,
    BTReleasePackageInfoToJSON,
    BTReleasePackageParamsFromJSON,
    BTReleasePackageParamsToJSON,
    BTUpdateReleasePackageParamsFromJSON,
    BTUpdateReleasePackageParamsToJSON,
} from '../models';

export interface CreateObsoletionPackageRequest {
    wfid: string;
    revisionId: string;
    debugMode?: boolean;
}

export interface CreateReleasePackageRequest {
    wfid: string;
    bTReleasePackageParams: BTReleasePackageParams;
    debugMode?: boolean;
}

export interface GetCompanyReleaseWorkflowRequest {
    documentId?: string;
}

export interface GetReleasePackageRequest {
    rpid: string;
    detailed?: boolean;
}

export interface UpdateReleasePackageRequest {
    rpid: string;
    bTUpdateReleasePackageParams: BTUpdateReleasePackageParams;
    action?: string;
    wfaction?: string;
}

/**
 * 
 */
export class ReleasePackageApi extends runtime.BaseAPI {

    /**
     * Update release package obsoletion by workflow ID.
     */
    async createObsoletionPackageRaw(requestParameters: CreateObsoletionPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.wfid === null || requestParameters.wfid === undefined) {
            throw new runtime.RequiredError('wfid','Required parameter requestParameters.wfid was null or undefined when calling createObsoletionPackage.');
        }

        if (requestParameters.revisionId === null || requestParameters.revisionId === undefined) {
            throw new runtime.RequiredError('revisionId','Required parameter requestParameters.revisionId was null or undefined when calling createObsoletionPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.revisionId !== undefined) {
            queryParameters['revisionId'] = requestParameters.revisionId;
        }

        if (requestParameters.debugMode !== undefined) {
            queryParameters['debugMode'] = requestParameters.debugMode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/releasepackages/obsoletion/{wfid}`.replace(`{${"wfid"}}`, encodeURIComponent(String(requestParameters.wfid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update release package obsoletion by workflow ID.
     */
    async createObsoletionPackage(requestParameters: CreateObsoletionPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.createObsoletionPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update release package release by workflow ID.
     */
    async createReleasePackageRaw(requestParameters: CreateReleasePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.wfid === null || requestParameters.wfid === undefined) {
            throw new runtime.RequiredError('wfid','Required parameter requestParameters.wfid was null or undefined when calling createReleasePackage.');
        }

        if (requestParameters.bTReleasePackageParams === null || requestParameters.bTReleasePackageParams === undefined) {
            throw new runtime.RequiredError('bTReleasePackageParams','Required parameter requestParameters.bTReleasePackageParams was null or undefined when calling createReleasePackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.debugMode !== undefined) {
            queryParameters['debugMode'] = requestParameters.debugMode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/releasepackages/release/{wfid}`.replace(`{${"wfid"}}`, encodeURIComponent(String(requestParameters.wfid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTReleasePackageParamsToJSON(requestParameters.bTReleasePackageParams),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update release package release by workflow ID.
     */
    async createReleasePackage(requestParameters: CreateReleasePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.createReleasePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve release packages company release workflow.
     */
    async getCompanyReleaseWorkflowRaw(requestParameters: GetCompanyReleaseWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTActiveWorkflowInfo>> {
        const queryParameters: any = {};

        if (requestParameters.documentId !== undefined) {
            queryParameters['documentId'] = requestParameters.documentId;
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
            path: `/releasepackages/companyreleaseworkflow`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTActiveWorkflowInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve release packages company release workflow.
     */
    async getCompanyReleaseWorkflow(requestParameters: GetCompanyReleaseWorkflowRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTActiveWorkflowInfo> {
        const response = await this.getCompanyReleaseWorkflowRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve release packages by release package ID.
     */
    async getReleasePackageRaw(requestParameters: GetReleasePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTReleasePackageInfo>> {
        if (requestParameters.rpid === null || requestParameters.rpid === undefined) {
            throw new runtime.RequiredError('rpid','Required parameter requestParameters.rpid was null or undefined when calling getReleasePackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.detailed !== undefined) {
            queryParameters['detailed'] = requestParameters.detailed;
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
            path: `/releasepackages/{rpid}`.replace(`{${"rpid"}}`, encodeURIComponent(String(requestParameters.rpid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTReleasePackageInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve release packages by release package ID.
     */
    async getReleasePackage(requestParameters: GetReleasePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTReleasePackageInfo> {
        const response = await this.getReleasePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update release packages by release package ID.
     */
    async updateReleasePackageRaw(requestParameters: UpdateReleasePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTReleasePackageInfo>> {
        if (requestParameters.rpid === null || requestParameters.rpid === undefined) {
            throw new runtime.RequiredError('rpid','Required parameter requestParameters.rpid was null or undefined when calling updateReleasePackage.');
        }

        if (requestParameters.bTUpdateReleasePackageParams === null || requestParameters.bTUpdateReleasePackageParams === undefined) {
            throw new runtime.RequiredError('bTUpdateReleasePackageParams','Required parameter requestParameters.bTUpdateReleasePackageParams was null or undefined when calling updateReleasePackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.action !== undefined) {
            queryParameters['action'] = requestParameters.action;
        }

        if (requestParameters.wfaction !== undefined) {
            queryParameters['wfaction'] = requestParameters.wfaction;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/releasepackages/{rpid}`.replace(`{${"rpid"}}`, encodeURIComponent(String(requestParameters.rpid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTUpdateReleasePackageParamsToJSON(requestParameters.bTUpdateReleasePackageParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTReleasePackageInfoFromJSON(jsonValue));
    }

    /**
     * Update release packages by release package ID.
     */
    async updateReleasePackage(requestParameters: UpdateReleasePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTReleasePackageInfo> {
        const response = await this.updateReleasePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
