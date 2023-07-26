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


import * as runtime from '../runtime';
import type {
  BTAPIWorkflowableType,
  BTActiveWorkflowInfo,
  BTListResponseBTObjectWorkflowInfo,
  BTListResponseBTWorkflowObserverOptionInfo,
  BTWorkflowAuditLogInfo,
} from '../models';
import {
    BTAPIWorkflowableTypeFromJSON,
    BTAPIWorkflowableTypeToJSON,
    BTActiveWorkflowInfoFromJSON,
    BTActiveWorkflowInfoToJSON,
    BTListResponseBTObjectWorkflowInfoFromJSON,
    BTListResponseBTObjectWorkflowInfoToJSON,
    BTListResponseBTWorkflowObserverOptionInfoFromJSON,
    BTListResponseBTWorkflowObserverOptionInfoToJSON,
    BTWorkflowAuditLogInfoFromJSON,
    BTWorkflowAuditLogInfoToJSON,
} from '../models';

export interface EnumerateObjectWorkflowsRequest {
    cid: string;
    objectTypes?: Array<BTAPIWorkflowableType>;
    states?: Set<string>;
    limit?: number;
    modifiedAfter?: Date;
}

export interface GetActiveWorkflowsRequest {
    documentId?: string;
}

export interface GetAllowedApproversRequest {
    companyId: string;
    q?: string;
    expandTeams?: boolean;
    includeSelf?: boolean;
}

export interface GetAuditLogRequest {
    objectId: string;
}

/**
 * 
 */
export class WorkflowApi extends runtime.BaseAPI {

    /**
     * Enumerate all workflowable objects like RELEASES, TASKS in a company by last modified time. Caller must be a company admin. Specify modifiedAfter and use the next URI to do complete enumeration.
     * Enumerate workflowable objects created in a company.
     */
    async enumerateObjectWorkflowsRaw(requestParameters: EnumerateObjectWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTObjectWorkflowInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling enumerateObjectWorkflows.');
        }

        const queryParameters: any = {};

        if (requestParameters.objectTypes) {
            queryParameters['objectTypes'] = requestParameters.objectTypes;
        }

        if (requestParameters.states) {
            queryParameters['states'] = requestParameters.states;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modifiedAfter'] = (requestParameters.modifiedAfter as any).toISOString();
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
            path: `/workflow/companies/{cid}/objects`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTObjectWorkflowInfoFromJSON(jsonValue));
    }

    /**
     * Enumerate all workflowable objects like RELEASES, TASKS in a company by last modified time. Caller must be a company admin. Specify modifiedAfter and use the next URI to do complete enumeration.
     * Enumerate workflowable objects created in a company.
     */
    async enumerateObjectWorkflows(requestParameters: EnumerateObjectWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTObjectWorkflowInfo> {
        const response = await this.enumerateObjectWorkflowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve active workflow.
     */
    async getActiveWorkflowsRaw(requestParameters: GetActiveWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTActiveWorkflowInfo>> {
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
            path: `/workflow/active`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTActiveWorkflowInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve active workflow.
     */
    async getActiveWorkflows(requestParameters: GetActiveWorkflowsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTActiveWorkflowInfo> {
        const response = await this.getActiveWorkflowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     */
    async getAllowedApproversRaw(requestParameters: GetAllowedApproversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTWorkflowObserverOptionInfo>> {
        if (requestParameters.companyId === null || requestParameters.companyId === undefined) {
            throw new runtime.RequiredError('companyId','Required parameter requestParameters.companyId was null or undefined when calling getAllowedApprovers.');
        }

        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.expandTeams !== undefined) {
            queryParameters['expandTeams'] = requestParameters.expandTeams;
        }

        if (requestParameters.includeSelf !== undefined) {
            queryParameters['includeSelf'] = requestParameters.includeSelf;
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
            path: `/workflow/c/{companyId}/approvers`.replace(`{${"companyId"}}`, encodeURIComponent(String(requestParameters.companyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTWorkflowObserverOptionInfoFromJSON(jsonValue));
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     */
    async getAllowedApprovers(requestParameters: GetAllowedApproversRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTWorkflowObserverOptionInfo> {
        const response = await this.getAllowedApproversRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     */
    async getAuditLogRaw(requestParameters: GetAuditLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTWorkflowAuditLogInfo>> {
        if (requestParameters.objectId === null || requestParameters.objectId === undefined) {
            throw new runtime.RequiredError('objectId','Required parameter requestParameters.objectId was null or undefined when calling getAuditLog.');
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
            path: `/workflow/obj/{objectId}/auditlog`.replace(`{${"objectId"}}`, encodeURIComponent(String(requestParameters.objectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTWorkflowAuditLogInfoFromJSON(jsonValue));
    }

    /**
     * Get identities (users and/or teams) allowed to be approvers on a workflow object for the company. Not object- or property-specific; used for delegation and company settings
     */
    async getAuditLog(requestParameters: GetAuditLogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTWorkflowAuditLogInfo> {
        const response = await this.getAuditLogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
