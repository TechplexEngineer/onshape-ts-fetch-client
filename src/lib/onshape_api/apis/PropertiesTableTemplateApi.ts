/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTPropertiesTableTemplateInfo,
  BTPropertiesTableTemplateParams,
  BTPropertiesTableTemplateType,
} from '../models';
import {
    BTPropertiesTableTemplateInfoFromJSON,
    BTPropertiesTableTemplateInfoToJSON,
    BTPropertiesTableTemplateParamsFromJSON,
    BTPropertiesTableTemplateParamsToJSON,
    BTPropertiesTableTemplateTypeFromJSON,
    BTPropertiesTableTemplateTypeToJSON,
} from '../models';

export interface CreateTableTemplateRequest {
    bTPropertiesTableTemplateParams: BTPropertiesTableTemplateParams;
    templateGroupId?: string;
}

export interface DeleteTableTemplateRequest {
    tid: string;
}

export interface GetByCompanyIdRequest {
    cid: string;
    templateType?: BTPropertiesTableTemplateType;
    onlyActive?: boolean;
    includeDefaults?: boolean;
}

export interface GetByDocumentIdRequest {
    did: string;
    templateType?: BTPropertiesTableTemplateType;
    onlyActive?: boolean;
    includeDefaults?: boolean;
}

export interface GetTableTemplateRequest {
    tid: string;
}

/**
 * 
 */
export class PropertiesTableTemplateApi extends runtime.BaseAPI {

    /**
     * Create a new properties table template.
     */
    async createTableTemplateRaw(requestParameters: CreateTableTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPropertiesTableTemplateInfo>> {
        if (requestParameters.bTPropertiesTableTemplateParams === null || requestParameters.bTPropertiesTableTemplateParams === undefined) {
            throw new runtime.RequiredError('bTPropertiesTableTemplateParams','Required parameter requestParameters.bTPropertiesTableTemplateParams was null or undefined when calling createTableTemplate.');
        }

        const queryParameters: any = {};

        if (requestParameters.templateGroupId !== undefined) {
            queryParameters['templateGroupId'] = requestParameters.templateGroupId;
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
            path: `/tabletemplates`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTPropertiesTableTemplateParamsToJSON(requestParameters.bTPropertiesTableTemplateParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPropertiesTableTemplateInfoFromJSON(jsonValue));
    }

    /**
     * Create a new properties table template.
     */
    async createTableTemplate(requestParameters: CreateTableTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPropertiesTableTemplateInfo> {
        const response = await this.createTableTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a properties table template by template ID.
     */
    async deleteTableTemplateRaw(requestParameters: DeleteTableTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.tid === null || requestParameters.tid === undefined) {
            throw new runtime.RequiredError('tid','Required parameter requestParameters.tid was null or undefined when calling deleteTableTemplate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Delete"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/tabletemplates/{tid}`.replace(`{${"tid"}}`, encodeURIComponent(String(requestParameters.tid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete a properties table template by template ID.
     */
    async deleteTableTemplate(requestParameters: DeleteTableTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteTableTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the properties table templates by company ID.
     */
    async getByCompanyIdRaw(requestParameters: GetByCompanyIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTPropertiesTableTemplateInfo>>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getByCompanyId.');
        }

        const queryParameters: any = {};

        if (requestParameters.templateType !== undefined) {
            queryParameters['templateType'] = requestParameters.templateType;
        }

        if (requestParameters.onlyActive !== undefined) {
            queryParameters['onlyActive'] = requestParameters.onlyActive;
        }

        if (requestParameters.includeDefaults !== undefined) {
            queryParameters['includeDefaults'] = requestParameters.includeDefaults;
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
            path: `/tabletemplates/companies/{cid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTPropertiesTableTemplateInfoFromJSON));
    }

    /**
     * Retrieve the properties table templates by company ID.
     */
    async getByCompanyId(requestParameters: GetByCompanyIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTPropertiesTableTemplateInfo>> {
        const response = await this.getByCompanyIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the properties table templates by document ID.
     */
    async getByDocumentIdRaw(requestParameters: GetByDocumentIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTPropertiesTableTemplateInfo>>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getByDocumentId.');
        }

        const queryParameters: any = {};

        if (requestParameters.templateType !== undefined) {
            queryParameters['templateType'] = requestParameters.templateType;
        }

        if (requestParameters.onlyActive !== undefined) {
            queryParameters['onlyActive'] = requestParameters.onlyActive;
        }

        if (requestParameters.includeDefaults !== undefined) {
            queryParameters['includeDefaults'] = requestParameters.includeDefaults;
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
            path: `/tabletemplates/d/{did}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTPropertiesTableTemplateInfoFromJSON));
    }

    /**
     * Retrieve the properties table templates by document ID.
     */
    async getByDocumentId(requestParameters: GetByDocumentIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTPropertiesTableTemplateInfo>> {
        const response = await this.getByDocumentIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a properties table template by template ID.
     */
    async getTableTemplateRaw(requestParameters: GetTableTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTPropertiesTableTemplateInfo>> {
        if (requestParameters.tid === null || requestParameters.tid === undefined) {
            throw new runtime.RequiredError('tid','Required parameter requestParameters.tid was null or undefined when calling getTableTemplate.');
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
            path: `/tabletemplates/{tid}`.replace(`{${"tid"}}`, encodeURIComponent(String(requestParameters.tid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTPropertiesTableTemplateInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve a properties table template by template ID.
     */
    async getTableTemplate(requestParameters: GetTableTemplateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTPropertiesTableTemplateInfo> {
        const response = await this.getTableTemplateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
