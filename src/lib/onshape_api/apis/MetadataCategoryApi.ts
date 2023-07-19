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
  BTListResponseBTCategoryPropertyInfo,
} from '../models';
import {
    BTListResponseBTCategoryPropertyInfoFromJSON,
    BTListResponseBTCategoryPropertyInfoToJSON,
} from '../models';

export interface GetCategoryPropertiesRequest {
    ownerId?: string;
    ownerType?: number;
    documentId?: string;
    categoryIds?: Array<string>;
    objectType?: number;
    strict?: boolean;
    includeObjectTypeDefaults?: boolean;
    includeComputedProperties?: boolean;
    includePartPropertiesTableOnlyProperties?: boolean;
    onlyActive?: boolean;
    onlyObjectTypeDefaults?: boolean;
}

/**
 * 
 */
export class MetadataCategoryApi extends runtime.BaseAPI {

    /**
     * Retrieve category properties for metadata.
     */
    async getCategoryPropertiesRaw(requestParameters: GetCategoryPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTCategoryPropertyInfo>> {
        const queryParameters: any = {};

        if (requestParameters.ownerId !== undefined) {
            queryParameters['ownerId'] = requestParameters.ownerId;
        }

        if (requestParameters.ownerType !== undefined) {
            queryParameters['ownerType'] = requestParameters.ownerType;
        }

        if (requestParameters.documentId !== undefined) {
            queryParameters['documentId'] = requestParameters.documentId;
        }

        if (requestParameters.categoryIds) {
            queryParameters['categoryIds'] = requestParameters.categoryIds;
        }

        if (requestParameters.objectType !== undefined) {
            queryParameters['objectType'] = requestParameters.objectType;
        }

        if (requestParameters.strict !== undefined) {
            queryParameters['strict'] = requestParameters.strict;
        }

        if (requestParameters.includeObjectTypeDefaults !== undefined) {
            queryParameters['includeObjectTypeDefaults'] = requestParameters.includeObjectTypeDefaults;
        }

        if (requestParameters.includeComputedProperties !== undefined) {
            queryParameters['includeComputedProperties'] = requestParameters.includeComputedProperties;
        }

        if (requestParameters.includePartPropertiesTableOnlyProperties !== undefined) {
            queryParameters['includePartPropertiesTableOnlyProperties'] = requestParameters.includePartPropertiesTableOnlyProperties;
        }

        if (requestParameters.onlyActive !== undefined) {
            queryParameters['onlyActive'] = requestParameters.onlyActive;
        }

        if (requestParameters.onlyObjectTypeDefaults !== undefined) {
            queryParameters['onlyObjectTypeDefaults'] = requestParameters.onlyObjectTypeDefaults;
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
            path: `/metadatacategory/categoryproperties`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTCategoryPropertyInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve category properties for metadata.
     */
    async getCategoryProperties(requestParameters: GetCategoryPropertiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTCategoryPropertyInfo> {
        const response = await this.getCategoryPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
