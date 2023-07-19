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
  BTAppAssociativeDataArrayInfo,
  BTAppElementBasicInfo,
  BTAppElementParamsArrayBTCopyViewAssociativeDataParams,
} from '../models';
import {
    BTAppAssociativeDataArrayInfoFromJSON,
    BTAppAssociativeDataArrayInfoToJSON,
    BTAppElementBasicInfoFromJSON,
    BTAppElementBasicInfoToJSON,
    BTAppElementParamsArrayBTCopyViewAssociativeDataParamsFromJSON,
    BTAppElementParamsArrayBTCopyViewAssociativeDataParamsToJSON,
} from '../models';

export interface CopyAssociativeDataRequest {
    did: string;
    wid: string;
    eid: string;
    bTAppElementParamsArrayBTCopyViewAssociativeDataParams?: BTAppElementParamsArrayBTCopyViewAssociativeDataParams;
}

export interface DeleteAssociativeDataRequest {
    did: string;
    eid: string;
    wvm: string;
    wvmid: string;
    transactionId?: string;
    parentChangeId?: string;
    associativeDataId?: Array<string>;
    elementId?: string;
    viewId?: string;
    microversionId?: string;
    documentMicroversion?: string;
    deterministicId?: string;
    featureId?: string;
    entityId?: string;
    occurrenceId?: string;
}

export interface GetAssociativeDataRequest {
    did: string;
    wvm: GetAssociativeDataWvmEnum;
    wvmid: string;
    eid: string;
    linkDocumentId?: string;
    transactionId?: string;
    changeId?: string;
    associativeDataId?: Array<string>;
    elementId?: string;
    viewId?: string;
    microversionId?: string;
    documentMicroversion?: string;
    deterministicId?: string;
    featureId?: string;
    entityId?: string;
    occurrenceId?: string;
    returnIdTags?: boolean;
}

export interface PostAssociativeDataRequest {
    did: string;
    eid: string;
    wvm: string;
    wvmid: string;
    body: string;
}

/**
 * 
 */
export class AppAssociativeDataApi extends runtime.BaseAPI {

    /**
     * Copy associative data between sub-views inside this application tab by document ID, workspace ID, and tab ID. Useful if the application has multiple sub-components; for example, Drawing views.
     */
    async copyAssociativeDataRaw(requestParameters: CopyAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppAssociativeDataArrayInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling copyAssociativeData.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling copyAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling copyAssociativeData.');
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
            path: `/appelements/d/{did}/w/{wid}/e/{eid}/copyassociativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTAppElementParamsArrayBTCopyViewAssociativeDataParamsToJSON(requestParameters.bTAppElementParamsArrayBTCopyViewAssociativeDataParams),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppAssociativeDataArrayInfoFromJSON(jsonValue));
    }

    /**
     * Copy associative data between sub-views inside this application tab by document ID, workspace ID, and tab ID. Useful if the application has multiple sub-components; for example, Drawing views.
     */
    async copyAssociativeData(requestParameters: CopyAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppAssociativeDataArrayInfo> {
        const response = await this.copyAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete associative data for this application tab by document ID, workspace or version or microversion ID, and tab ID.
     */
    async deleteAssociativeDataRaw(requestParameters: DeleteAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppElementBasicInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling deleteAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling deleteAssociativeData.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling deleteAssociativeData.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling deleteAssociativeData.');
        }

        const queryParameters: any = {};

        if (requestParameters.transactionId !== undefined) {
            queryParameters['transactionId'] = requestParameters.transactionId;
        }

        if (requestParameters.parentChangeId !== undefined) {
            queryParameters['parentChangeId'] = requestParameters.parentChangeId;
        }

        if (requestParameters.associativeDataId) {
            queryParameters['associativeDataId'] = requestParameters.associativeDataId;
        }

        if (requestParameters.elementId !== undefined) {
            queryParameters['elementId'] = requestParameters.elementId;
        }

        if (requestParameters.viewId !== undefined) {
            queryParameters['viewId'] = requestParameters.viewId;
        }

        if (requestParameters.microversionId !== undefined) {
            queryParameters['microversionId'] = requestParameters.microversionId;
        }

        if (requestParameters.documentMicroversion !== undefined) {
            queryParameters['documentMicroversion'] = requestParameters.documentMicroversion;
        }

        if (requestParameters.deterministicId !== undefined) {
            queryParameters['deterministicId'] = requestParameters.deterministicId;
        }

        if (requestParameters.featureId !== undefined) {
            queryParameters['featureId'] = requestParameters.featureId;
        }

        if (requestParameters.entityId !== undefined) {
            queryParameters['entityId'] = requestParameters.entityId;
        }

        if (requestParameters.occurrenceId !== undefined) {
            queryParameters['occurrenceId'] = requestParameters.occurrenceId;
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
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppElementBasicInfoFromJSON(jsonValue));
    }

    /**
     * Delete associative data for this application tab by document ID, workspace or version or microversion ID, and tab ID.
     */
    async deleteAssociativeData(requestParameters: DeleteAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppElementBasicInfo> {
        const response = await this.deleteAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve associative data for the application tab by document ID, workspace or version or microversion ID, and tab ID.
     */
    async getAssociativeDataRaw(requestParameters: GetAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppAssociativeDataArrayInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getAssociativeData.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling getAssociativeData.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling getAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getAssociativeData.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.transactionId !== undefined) {
            queryParameters['transactionId'] = requestParameters.transactionId;
        }

        if (requestParameters.changeId !== undefined) {
            queryParameters['changeId'] = requestParameters.changeId;
        }

        if (requestParameters.associativeDataId) {
            queryParameters['associativeDataId'] = requestParameters.associativeDataId;
        }

        if (requestParameters.elementId !== undefined) {
            queryParameters['elementId'] = requestParameters.elementId;
        }

        if (requestParameters.viewId !== undefined) {
            queryParameters['viewId'] = requestParameters.viewId;
        }

        if (requestParameters.microversionId !== undefined) {
            queryParameters['microversionId'] = requestParameters.microversionId;
        }

        if (requestParameters.documentMicroversion !== undefined) {
            queryParameters['documentMicroversion'] = requestParameters.documentMicroversion;
        }

        if (requestParameters.deterministicId !== undefined) {
            queryParameters['deterministicId'] = requestParameters.deterministicId;
        }

        if (requestParameters.featureId !== undefined) {
            queryParameters['featureId'] = requestParameters.featureId;
        }

        if (requestParameters.entityId !== undefined) {
            queryParameters['entityId'] = requestParameters.entityId;
        }

        if (requestParameters.occurrenceId !== undefined) {
            queryParameters['occurrenceId'] = requestParameters.occurrenceId;
        }

        if (requestParameters.returnIdTags !== undefined) {
            queryParameters['returnIdTags'] = requestParameters.returnIdTags;
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
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppAssociativeDataArrayInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve associative data for the application tab by document ID, workspace or version or microversion ID, and tab ID.
     */
    async getAssociativeData(requestParameters: GetAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppAssociativeDataArrayInfo> {
        const response = await this.getAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update associative data for an application tab by document ID, workspace or version or microversion ID, and tab ID.
     */
    async postAssociativeDataRaw(requestParameters: PostAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTAppAssociativeDataArrayInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.wvm === null || requestParameters.wvm === undefined) {
            throw new runtime.RequiredError('wvm','Required parameter requestParameters.wvm was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.wvmid === null || requestParameters.wvmid === undefined) {
            throw new runtime.RequiredError('wvmid','Required parameter requestParameters.wvmid was null or undefined when calling postAssociativeData.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling postAssociativeData.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read", "OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/appelements/d/{did}/{wvm}/{wvmid}/e/{eid}/associativedata`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"wvm"}}`, encodeURIComponent(String(requestParameters.wvm))).replace(`{${"wvmid"}}`, encodeURIComponent(String(requestParameters.wvmid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTAppAssociativeDataArrayInfoFromJSON(jsonValue));
    }

    /**
     * Update associative data for an application tab by document ID, workspace or version or microversion ID, and tab ID.
     */
    async postAssociativeData(requestParameters: PostAssociativeDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTAppAssociativeDataArrayInfo> {
        const response = await this.postAssociativeDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetAssociativeDataWvmEnum = {
    W: 'w',
    V: 'v',
    M: 'm'
} as const;
export type GetAssociativeDataWvmEnum = typeof GetAssociativeDataWvmEnum[keyof typeof GetAssociativeDataWvmEnum];
