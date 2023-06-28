/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTDocumentSelectorParametersInfo } from './BTDocumentSelectorParametersInfo';
import {
    BTDocumentSelectorParametersInfoFromJSON,
    BTDocumentSelectorParametersInfoFromJSONTyped,
    BTDocumentSelectorParametersInfoToJSON,
} from './BTDocumentSelectorParametersInfo';
import type { BTFolderStateInfo } from './BTFolderStateInfo';
import {
    BTFolderStateInfoFromJSON,
    BTFolderStateInfoFromJSONTyped,
    BTFolderStateInfoToJSON,
} from './BTFolderStateInfo';

/**
 * 
 * @export
 * @interface BTOtherDocumentSelectorParametersInfo
 */
export interface BTOtherDocumentSelectorParametersInfo extends BTDocumentSelectorParametersInfo {
    /**
     * 
     * @type {Array<BTFolderStateInfo>}
     * @memberof BTOtherDocumentSelectorParametersInfo
     */
    folderStatePath?: Array<BTFolderStateInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTOtherDocumentSelectorParametersInfo
     */
    selectedDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTOtherDocumentSelectorParametersInfo
     */
    selectedVersionId?: string;
}

/**
 * Check if a given object implements the BTOtherDocumentSelectorParametersInfo interface.
 */
export function instanceOfBTOtherDocumentSelectorParametersInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOtherDocumentSelectorParametersInfoFromJSON(json: any): BTOtherDocumentSelectorParametersInfo {
    return BTOtherDocumentSelectorParametersInfoFromJSONTyped(json, false);
}

export function BTOtherDocumentSelectorParametersInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOtherDocumentSelectorParametersInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTDocumentSelectorParametersInfoFromJSONTyped(json, ignoreDiscriminator),
        'folderStatePath': !exists(json, 'folderStatePath') ? undefined : ((json['folderStatePath'] as Array<any>).map(BTFolderStateInfoFromJSON)),
        'selectedDocumentId': !exists(json, 'selectedDocumentId') ? undefined : json['selectedDocumentId'],
        'selectedVersionId': !exists(json, 'selectedVersionId') ? undefined : json['selectedVersionId'],
    };
}

export function BTOtherDocumentSelectorParametersInfoToJSON(value?: BTOtherDocumentSelectorParametersInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTDocumentSelectorParametersInfoToJSON(value),
        'folderStatePath': value.folderStatePath === undefined ? undefined : ((value.folderStatePath as Array<any>).map(BTFolderStateInfoToJSON)),
        'selectedDocumentId': value.selectedDocumentId,
        'selectedVersionId': value.selectedVersionId,
    };
}

