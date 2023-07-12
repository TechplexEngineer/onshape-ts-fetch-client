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
import type { BTMetadataPropertyInfo } from './BTMetadataPropertyInfo';
import {
    BTMetadataPropertyInfoFromJSON,
    BTMetadataPropertyInfoFromJSONTyped,
    BTMetadataPropertyInfoToJSON,
} from './BTMetadataPropertyInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';

import {
     BTMetadataElementInfoFromJSONTyped,
     BTMetadataPartInfoFromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTMetadataObjectInfo
 */
export interface BTMetadataObjectInfo {
    /**
     * 
     * @type {string}
     * @memberof BTMetadataObjectInfo
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMetadataObjectInfo
     */
    jsonType: string;
    /**
     * 
     * @type {Array<BTMetadataPropertyInfo>}
     * @memberof BTMetadataObjectInfo
     */
    properties?: Array<BTMetadataPropertyInfo>;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTMetadataObjectInfo
     */
    thumbnail?: BTThumbnailInfo;
}

/**
 * Check if a given object implements the BTMetadataObjectInfo interface.
 */
export function instanceOfBTMetadataObjectInfo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "jsonType" in value;

    return isInstance;
}

export function BTMetadataObjectInfoFromJSON(json: any): BTMetadataObjectInfo {
    return BTMetadataObjectInfoFromJSONTyped(json, false);
}

export function BTMetadataObjectInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMetadataObjectInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['jsonType'] === 'BTMetadataElementInfo') {
            return BTMetadataElementInfoFromJSONTyped(json, true);
        }
        if (json['jsonType'] === 'BTMetadataPartInfo') {
            return BTMetadataPartInfoFromJSONTyped(json, true);
        }
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
        'jsonType': json['jsonType'],
        'properties': !exists(json, 'properties') ? undefined : ((json['properties'] as Array<any>).map(BTMetadataPropertyInfoFromJSON)),
        'thumbnail': !exists(json, 'thumbnail') ? undefined : BTThumbnailInfoFromJSON(json['thumbnail']),
    };
}

export function BTMetadataObjectInfoToJSON(value?: BTMetadataObjectInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
        'jsonType': value.jsonType,
        'properties': value.properties === undefined ? undefined : ((value.properties as Array<any>).map(BTMetadataPropertyInfoToJSON)),
        'thumbnail': BTThumbnailInfoToJSON(value.thumbnail),
    };
}

