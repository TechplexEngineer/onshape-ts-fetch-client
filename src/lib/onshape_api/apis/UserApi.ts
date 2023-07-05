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
  BTLoginParams,
  BTUserOAuth2SummaryInfo,
  BTUserSettingsInfo,
} from '../models';
import {
    BTLoginParamsFromJSON,
    BTLoginParamsToJSON,
    BTUserOAuth2SummaryInfoFromJSON,
    BTUserOAuth2SummaryInfoToJSON,
    BTUserSettingsInfoFromJSON,
    BTUserSettingsInfoToJSON,
} from '../models';

export interface GetUserSettingsRequest {
    uid: string;
    includematerials?: boolean;
}

export interface GetUserSettingsCurrentLoggedInUserRequest {
    includematerials?: boolean;
}

export interface SessionRequest {
    bTLoginParams: BTLoginParams;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Retrieve user settings by user ID.
     */
    async getUserSettingsRaw(requestParameters: GetUserSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTUserSettingsInfo>> {
        if (requestParameters.uid === null || requestParameters.uid === undefined) {
            throw new runtime.RequiredError('uid','Required parameter requestParameters.uid was null or undefined when calling getUserSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.includematerials !== undefined) {
            queryParameters['includematerials'] = requestParameters.includematerials;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users/{uid}/settings`.replace(`{${"uid"}}`, encodeURIComponent(String(requestParameters.uid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTUserSettingsInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve user settings by user ID.
     */
    async getUserSettings(requestParameters: GetUserSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTUserSettingsInfo> {
        const response = await this.getUserSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get user settings for the currently signed-in user if there is one, or else return the default settings.
     */
    async getUserSettingsCurrentLoggedInUserRaw(requestParameters: GetUserSettingsCurrentLoggedInUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTUserSettingsInfo>> {
        const queryParameters: any = {};

        if (requestParameters.includematerials !== undefined) {
            queryParameters['includematerials'] = requestParameters.includematerials;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTUserSettingsInfoFromJSON(jsonValue));
    }

    /**
     * Get user settings for the currently signed-in user if there is one, or else return the default settings.
     */
    async getUserSettingsCurrentLoggedInUser(requestParameters: GetUserSettingsCurrentLoggedInUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTUserSettingsInfo> {
        const response = await this.getUserSettingsCurrentLoggedInUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returned information depends on caller\'s OAuth2ReadPll scope.
     * Check if current user is signed-in.Information returned depends on OAuth2ReadPII scope.
     */
    async sessionRaw(requestParameters: SessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.bTLoginParams === null || requestParameters.bTLoginParams === undefined) {
            throw new runtime.RequiredError('bTLoginParams','Required parameter requestParameters.bTLoginParams was null or undefined when calling session.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users/session`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTLoginParamsToJSON(requestParameters.bTLoginParams),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returned information depends on caller\'s OAuth2ReadPll scope.
     * Check if current user is signed-in.Information returned depends on OAuth2ReadPII scope.
     */
    async session(requestParameters: SessionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.sessionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returned information depends on caller\'s OAuth2ReadPll scope.
     * Check to see if a user is signed in to a current session.
     */
    async sessionInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTUserOAuth2SummaryInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/users/sessioninfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTUserOAuth2SummaryInfoFromJSON(jsonValue));
    }

    /**
     * Returned information depends on caller\'s OAuth2ReadPll scope.
     * Check to see if a user is signed in to a current session.
     */
    async sessionInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTUserOAuth2SummaryInfo> {
        const response = await this.sessionInfoRaw(initOverrides);
        return await response.value();
    }

}
