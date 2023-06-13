/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTDocumentElementInfo,
  BTFeatureSpecsResponse664,
  BTFeatureStudioContents2239,
  BTModelElementParams,
} from '../models';
import {
    BTDocumentElementInfoFromJSON,
    BTDocumentElementInfoToJSON,
    BTFeatureSpecsResponse664FromJSON,
    BTFeatureSpecsResponse664ToJSON,
    BTFeatureStudioContents2239FromJSON,
    BTFeatureStudioContents2239ToJSON,
    BTModelElementParamsFromJSON,
    BTModelElementParamsToJSON,
} from '../models';

export interface CreateFeatureStudioRequest {
    did: string;
    wid: string;
    bTModelElementParams: BTModelElementParams;
}

export interface GetFeatureStudioContentsRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
}

export interface GetFeatureStudioSpecsRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
}

export interface UpdateFeatureStudioContentsRequest {
    did: string;
    wvm: string;
    wvmid: string;
    eid: string;
    bTFeatureStudioContents2239?: BTFeatureStudioContents2239;
}

/**
 * 
 */
export class FeatureStudioApi extends runtime.BaseAPI {

    /**
     * Create Feature Studio by document ID and workspace ID.
     */
    async createFeatureStudioRaw(requestParameters: CreateFeatureStudioRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTDocumentElementInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling createFeatureStudio.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling createFeatureStudio.');
        }

        if (requestParameters.bTModelElementParams === null || requestParameters.bTModelElementParams === undefined) {
            throw new runtime.RequiredError('bTModelElementParams','Required parameter requestParameters.bTModelElementParams was null or undefined when calling createFeatureStudio.');
        }

        const queryParameters: any = {};

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
            path: `/featurestudios/d/{did}/w/{wid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTModelElementParamsToJSON(requestParameters.bTModelElementParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTDocumentElementInfoFromJSON(jsonValue));
    }

    /**
     * Create Feature Studio by document ID and workspace ID.
     */
    async createFeatureStudio(requestParameters: CreateFeatureStudioRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTDocumentElementInfo> {
        const response = await this.createFeatureStudioRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getFeatureStudioContentsRaw(requestParameters: GetFeatureStudioContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTFeatureStudioContents2239>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getFeatureStudioContents.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getFeatureStudioContents.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getFeatureStudioContents.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getFeatureStudioContents.');
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
            path: `/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTFeatureStudioContents2239FromJSON(jsonValue));
    }

    /**
     */
    async getFeatureStudioContents(requestParameters: GetFeatureStudioContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTFeatureStudioContents2239> {
        const response = await this.getFeatureStudioContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve Feature Studio specs by document ID, workspace or version or microversion ID, and tab ID.
     */
    async getFeatureStudioSpecsRaw(requestParameters: GetFeatureStudioSpecsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTFeatureSpecsResponse664>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getFeatureStudioSpecs.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getFeatureStudioSpecs.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getFeatureStudioSpecs.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getFeatureStudioSpecs.');
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
            path: `/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}/featurespecs`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTFeatureSpecsResponse664FromJSON(jsonValue));
    }

    /**
     * Retrieve Feature Studio specs by document ID, workspace or version or microversion ID, and tab ID.
     */
    async getFeatureStudioSpecs(requestParameters: GetFeatureStudioSpecsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTFeatureSpecsResponse664> {
        const response = await this.getFeatureStudioSpecsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Feature Studio contents by document ID, workspace or version or microversion ID, and tab ID.
     */
    async updateFeatureStudioContentsRaw(requestParameters: UpdateFeatureStudioContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTFeatureStudioContents2239>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling updateFeatureStudioContents.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling updateFeatureStudioContents.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling updateFeatureStudioContents.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling updateFeatureStudioContents.');
        }

        const queryParameters: any = {};

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
            path: `/featurestudios/d/{did}/{wvm}/{wvmid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTFeatureStudioContents2239ToJSON(requestParameters.bTFeatureStudioContents2239),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTFeatureStudioContents2239FromJSON(jsonValue));
    }

    /**
     * Update Feature Studio contents by document ID, workspace or version or microversion ID, and tab ID.
     */
    async updateFeatureStudioContents(requestParameters: UpdateFeatureStudioContentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTFeatureStudioContents2239> {
        const response = await this.updateFeatureStudioContentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
