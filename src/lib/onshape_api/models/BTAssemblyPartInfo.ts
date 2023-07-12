/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18506-14c88dcadb12
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTAssemblyMateConnectorInfo } from './BTAssemblyMateConnectorInfo';
import {
    BTAssemblyMateConnectorInfoFromJSON,
    BTAssemblyMateConnectorInfoFromJSONTyped,
    BTAssemblyMateConnectorInfoToJSON,
} from './BTAssemblyMateConnectorInfo';
import type { BTAssemblyPartBodyType } from './BTAssemblyPartBodyType';
import {
    BTAssemblyPartBodyTypeFromJSON,
    BTAssemblyPartBodyTypeFromJSONTyped,
    BTAssemblyPartBodyTypeToJSON,
} from './BTAssemblyPartBodyType';

/**
 * 
 * @export
 * @interface BTAssemblyPartInfo
 */
export interface BTAssemblyPartInfo {
    /**
     * 
     * @type {BTAssemblyPartBodyType}
     * @memberof BTAssemblyPartInfo
     */
    bodyType?: BTAssemblyPartBodyType;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    documentMicroversion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    documentVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    fullConfiguration?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTAssemblyPartInfo
     */
    isStandardContent?: boolean;
    /**
     * 
     * @type {Array<BTAssemblyMateConnectorInfo>}
     * @memberof BTAssemblyPartInfo
     */
    mateConnectors?: Array<BTAssemblyMateConnectorInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTAssemblyPartInfo
     */
    revision?: string;
}

/**
 * Check if a given object implements the BTAssemblyPartInfo interface.
 */
export function instanceOfBTAssemblyPartInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTAssemblyPartInfoFromJSON(json: any): BTAssemblyPartInfo {
    return BTAssemblyPartInfoFromJSONTyped(json, false);
}

export function BTAssemblyPartInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTAssemblyPartInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodyType': !exists(json, 'bodyType') ? undefined : BTAssemblyPartBodyTypeFromJSON(json['bodyType']),
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentMicroversion': !exists(json, 'documentMicroversion') ? undefined : json['documentMicroversion'],
        'documentVersion': !exists(json, 'documentVersion') ? undefined : json['documentVersion'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'fullConfiguration': !exists(json, 'fullConfiguration') ? undefined : json['fullConfiguration'],
        'isStandardContent': !exists(json, 'isStandardContent') ? undefined : json['isStandardContent'],
        'mateConnectors': !exists(json, 'mateConnectors') ? undefined : ((json['mateConnectors'] as Array<any>).map(BTAssemblyMateConnectorInfoFromJSON)),
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
    };
}

export function BTAssemblyPartInfoToJSON(value?: BTAssemblyPartInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodyType': BTAssemblyPartBodyTypeToJSON(value.bodyType),
        'configuration': value._configuration,
        'documentId': value.documentId,
        'documentMicroversion': value.documentMicroversion,
        'documentVersion': value.documentVersion,
        'elementId': value.elementId,
        'fullConfiguration': value.fullConfiguration,
        'isStandardContent': value.isStandardContent,
        'mateConnectors': value.mateConnectors === undefined ? undefined : ((value.mateConnectors as Array<any>).map(BTAssemblyMateConnectorInfoToJSON)),
        'partId': value.partId,
        'partNumber': value.partNumber,
        'revision': value.revision,
    };
}

