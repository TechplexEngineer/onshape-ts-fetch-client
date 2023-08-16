/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20544-ab34447a30b0
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTParameterGroupSpec3469
 */
export interface BTParameterGroupSpec3469 {
    /**
     * 
     * @type {number}
     * @memberof BTParameterGroupSpec3469
     */
    additionalLocalizedStrings?: number;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTParameterGroupSpec3469
     */
    collapsedByDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    drivingParameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    groupId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    groupName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterGroupSpec3469
     */
    groupOrParameterIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterGroupSpec3469
     */
    localizedName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterGroupSpec3469
     */
    stringsToLocalize?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterGroupSpec3469 interface.
 */
export function instanceOfBTParameterGroupSpec3469(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterGroupSpec3469FromJSON(json: any): BTParameterGroupSpec3469 {
    return BTParameterGroupSpec3469FromJSONTyped(json, false);
}

export function BTParameterGroupSpec3469FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterGroupSpec3469 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'collapsedByDefault': !exists(json, 'collapsedByDefault') ? undefined : json['collapsedByDefault'],
        'drivingParameterId': !exists(json, 'drivingParameterId') ? undefined : json['drivingParameterId'],
        'groupId': !exists(json, 'groupId') ? undefined : json['groupId'],
        'groupName': !exists(json, 'groupName') ? undefined : json['groupName'],
        'groupOrParameterIds': !exists(json, 'groupOrParameterIds') ? undefined : json['groupOrParameterIds'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
    };
}

export function BTParameterGroupSpec3469ToJSON(value?: BTParameterGroupSpec3469 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'btType': value.btType,
        'collapsedByDefault': value.collapsedByDefault,
        'drivingParameterId': value.drivingParameterId,
        'groupId': value.groupId,
        'groupName': value.groupName,
        'groupOrParameterIds': value.groupOrParameterIds,
        'localizableName': value.localizableName,
        'localizedName': value.localizedName,
        'stringsToLocalize': value.stringsToLocalize,
    };
}

