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
  BTListResponseBTInsertableInfo,
} from '../models';
import {
    BTListResponseBTInsertableInfoFromJSON,
    BTListResponseBTInsertableInfoToJSON,
} from '../models';

export interface GetLatestInDocumentRequest {
    did: string;
    betaCapabilityIds?: Set<string>;
    includeParts?: boolean;
    includeSurfaces?: boolean;
    includeSketches?: boolean;
    includeReferenceFeatures?: boolean;
    includeAssemblies?: boolean;
    includeFeatureStudios?: boolean;
    includeBlobs?: boolean;
    allowedBlobMimeTypes?: string;
    excludeNewerFSVersions?: boolean;
    maxFeatureScriptVersion?: number;
    includePartStudios?: boolean;
    includeFeatures?: boolean;
    includeMeshes?: boolean;
    includeWires?: boolean;
    includeFlattenedBodies?: boolean;
    includeApplications?: boolean;
    allowedApplicationMimeTypes?: string;
    includeCompositeParts?: boolean;
    includeFSTables?: boolean;
    includeFSComputedPartPropertyFunctions?: boolean;
    includeVariables?: boolean;
    includeVariableStudios?: boolean;
    allowedBlobExtensions?: string;
}

/**
 * 
 */
export class InsertableApi extends runtime.BaseAPI {

    /**
     * Retrieve insertables for a document by document ID.
     */
    async getLatestInDocumentRaw(requestParameters: GetLatestInDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTInsertableInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getLatestInDocument.');
        }

        const queryParameters: any = {};

        if (requestParameters.betaCapabilityIds) {
            queryParameters['betaCapabilityIds'] = requestParameters.betaCapabilityIds;
        }

        if (requestParameters.includeParts !== undefined) {
            queryParameters['includeParts'] = requestParameters.includeParts;
        }

        if (requestParameters.includeSurfaces !== undefined) {
            queryParameters['includeSurfaces'] = requestParameters.includeSurfaces;
        }

        if (requestParameters.includeSketches !== undefined) {
            queryParameters['includeSketches'] = requestParameters.includeSketches;
        }

        if (requestParameters.includeReferenceFeatures !== undefined) {
            queryParameters['includeReferenceFeatures'] = requestParameters.includeReferenceFeatures;
        }

        if (requestParameters.includeAssemblies !== undefined) {
            queryParameters['includeAssemblies'] = requestParameters.includeAssemblies;
        }

        if (requestParameters.includeFeatureStudios !== undefined) {
            queryParameters['includeFeatureStudios'] = requestParameters.includeFeatureStudios;
        }

        if (requestParameters.includeBlobs !== undefined) {
            queryParameters['includeBlobs'] = requestParameters.includeBlobs;
        }

        if (requestParameters.allowedBlobMimeTypes !== undefined) {
            queryParameters['allowedBlobMimeTypes'] = requestParameters.allowedBlobMimeTypes;
        }

        if (requestParameters.excludeNewerFSVersions !== undefined) {
            queryParameters['excludeNewerFSVersions'] = requestParameters.excludeNewerFSVersions;
        }

        if (requestParameters.maxFeatureScriptVersion !== undefined) {
            queryParameters['maxFeatureScriptVersion'] = requestParameters.maxFeatureScriptVersion;
        }

        if (requestParameters.includePartStudios !== undefined) {
            queryParameters['includePartStudios'] = requestParameters.includePartStudios;
        }

        if (requestParameters.includeFeatures !== undefined) {
            queryParameters['includeFeatures'] = requestParameters.includeFeatures;
        }

        if (requestParameters.includeMeshes !== undefined) {
            queryParameters['includeMeshes'] = requestParameters.includeMeshes;
        }

        if (requestParameters.includeWires !== undefined) {
            queryParameters['includeWires'] = requestParameters.includeWires;
        }

        if (requestParameters.includeFlattenedBodies !== undefined) {
            queryParameters['includeFlattenedBodies'] = requestParameters.includeFlattenedBodies;
        }

        if (requestParameters.includeApplications !== undefined) {
            queryParameters['includeApplications'] = requestParameters.includeApplications;
        }

        if (requestParameters.allowedApplicationMimeTypes !== undefined) {
            queryParameters['allowedApplicationMimeTypes'] = requestParameters.allowedApplicationMimeTypes;
        }

        if (requestParameters.includeCompositeParts !== undefined) {
            queryParameters['includeCompositeParts'] = requestParameters.includeCompositeParts;
        }

        if (requestParameters.includeFSTables !== undefined) {
            queryParameters['includeFSTables'] = requestParameters.includeFSTables;
        }

        if (requestParameters.includeFSComputedPartPropertyFunctions !== undefined) {
            queryParameters['includeFSComputedPartPropertyFunctions'] = requestParameters.includeFSComputedPartPropertyFunctions;
        }

        if (requestParameters.includeVariables !== undefined) {
            queryParameters['includeVariables'] = requestParameters.includeVariables;
        }

        if (requestParameters.includeVariableStudios !== undefined) {
            queryParameters['includeVariableStudios'] = requestParameters.includeVariableStudios;
        }

        if (requestParameters.allowedBlobExtensions !== undefined) {
            queryParameters['allowedBlobExtensions'] = requestParameters.allowedBlobExtensions;
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
            path: `/insertables/d/{did}/latest`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTInsertableInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve insertables for a document by document ID.
     */
    async getLatestInDocument(requestParameters: GetLatestInDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTInsertableInfo> {
        const response = await this.getLatestInDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
