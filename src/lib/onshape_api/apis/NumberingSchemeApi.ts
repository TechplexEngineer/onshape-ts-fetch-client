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
  BTNextPartNumber,
  BTNextPartNumbersParam,
} from '../models';
import {
    BTNextPartNumberFromJSON,
    BTNextPartNumberToJSON,
    BTNextPartNumbersParamFromJSON,
    BTNextPartNumbersParamToJSON,
} from '../models';

export interface NextNumbersRequest {
    bTNextPartNumbersParam: BTNextPartNumbersParam;
    cid?: string;
    did?: string;
}

/**
 * 
 */
export class NumberingSchemeApi extends runtime.BaseAPI {

    /**
     * Update a set of valid part numbers for the supplied parts.
     */
    async nextNumbersRaw(requestParameters: NextNumbersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: Array<BTNextPartNumber>; }>> {
        if (requestParameters.bTNextPartNumbersParam === null || requestParameters.bTNextPartNumbersParam === undefined) {
            throw new runtime.RequiredError('bTNextPartNumbersParam','Required parameter requestParameters.bTNextPartNumbersParam was null or undefined when calling nextNumbers.');
        }

        const queryParameters: any = {};

        if (requestParameters.cid !== undefined) {
            queryParameters['cid'] = requestParameters.cid;
        }

        if (requestParameters.did !== undefined) {
            queryParameters['did'] = requestParameters.did;
        }

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
            path: `/numberingscheme/nextnumbers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTNextPartNumbersParamToJSON(requestParameters.bTNextPartNumbersParam),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update a set of valid part numbers for the supplied parts.
     */
    async nextNumbers(requestParameters: NextNumbersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: Array<BTNextPartNumber>; }> {
        const response = await this.nextNumbersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
