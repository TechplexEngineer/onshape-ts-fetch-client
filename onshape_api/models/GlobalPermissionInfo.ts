/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
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
 * @interface GlobalPermissionInfo
 */
export interface GlobalPermissionInfo {
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    accessReports?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    adminEnterprise?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    allowAppStoreAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    allowPublicDocumentsAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    approveReleases?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    createChangeOrders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    createChangeRequests?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    createDocumentsInRoot?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    createProject?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    createReleases?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    createTasks?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    deletePermanently?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    manageGuestUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    manageNonGeometricItems?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    manageRbac?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    manageStandardContentMetadata?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    manageUsers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    manageWorkflows?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    shareForAnonymousAccess?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    transferDocumentsFromEnterprise?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    viewChangeOrders?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalPermissionInfo
     */
    viewChangeRequests?: boolean;
}

/**
 * Check if a given object implements the GlobalPermissionInfo interface.
 */
export function instanceOfGlobalPermissionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GlobalPermissionInfoFromJSON(json: any): GlobalPermissionInfo {
    return GlobalPermissionInfoFromJSONTyped(json, false);
}

export function GlobalPermissionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalPermissionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessReports': !exists(json, 'accessReports') ? undefined : json['accessReports'],
        'adminEnterprise': !exists(json, 'adminEnterprise') ? undefined : json['adminEnterprise'],
        'allowAppStoreAccess': !exists(json, 'allowAppStoreAccess') ? undefined : json['allowAppStoreAccess'],
        'allowPublicDocumentsAccess': !exists(json, 'allowPublicDocumentsAccess') ? undefined : json['allowPublicDocumentsAccess'],
        'approveReleases': !exists(json, 'approveReleases') ? undefined : json['approveReleases'],
        'createChangeOrders': !exists(json, 'createChangeOrders') ? undefined : json['createChangeOrders'],
        'createChangeRequests': !exists(json, 'createChangeRequests') ? undefined : json['createChangeRequests'],
        'createDocumentsInRoot': !exists(json, 'createDocumentsInRoot') ? undefined : json['createDocumentsInRoot'],
        'createProject': !exists(json, 'createProject') ? undefined : json['createProject'],
        'createReleases': !exists(json, 'createReleases') ? undefined : json['createReleases'],
        'createTasks': !exists(json, 'createTasks') ? undefined : json['createTasks'],
        'deletePermanently': !exists(json, 'deletePermanently') ? undefined : json['deletePermanently'],
        'manageGuestUsers': !exists(json, 'manageGuestUsers') ? undefined : json['manageGuestUsers'],
        'manageNonGeometricItems': !exists(json, 'manageNonGeometricItems') ? undefined : json['manageNonGeometricItems'],
        'manageRbac': !exists(json, 'manageRbac') ? undefined : json['manageRbac'],
        'manageStandardContentMetadata': !exists(json, 'manageStandardContentMetadata') ? undefined : json['manageStandardContentMetadata'],
        'manageUsers': !exists(json, 'manageUsers') ? undefined : json['manageUsers'],
        'manageWorkflows': !exists(json, 'manageWorkflows') ? undefined : json['manageWorkflows'],
        'shareForAnonymousAccess': !exists(json, 'shareForAnonymousAccess') ? undefined : json['shareForAnonymousAccess'],
        'transferDocumentsFromEnterprise': !exists(json, 'transferDocumentsFromEnterprise') ? undefined : json['transferDocumentsFromEnterprise'],
        'viewChangeOrders': !exists(json, 'viewChangeOrders') ? undefined : json['viewChangeOrders'],
        'viewChangeRequests': !exists(json, 'viewChangeRequests') ? undefined : json['viewChangeRequests'],
    };
}

export function GlobalPermissionInfoToJSON(value?: GlobalPermissionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessReports': value.accessReports,
        'adminEnterprise': value.adminEnterprise,
        'allowAppStoreAccess': value.allowAppStoreAccess,
        'allowPublicDocumentsAccess': value.allowPublicDocumentsAccess,
        'approveReleases': value.approveReleases,
        'createChangeOrders': value.createChangeOrders,
        'createChangeRequests': value.createChangeRequests,
        'createDocumentsInRoot': value.createDocumentsInRoot,
        'createProject': value.createProject,
        'createReleases': value.createReleases,
        'createTasks': value.createTasks,
        'deletePermanently': value.deletePermanently,
        'manageGuestUsers': value.manageGuestUsers,
        'manageNonGeometricItems': value.manageNonGeometricItems,
        'manageRbac': value.manageRbac,
        'manageStandardContentMetadata': value.manageStandardContentMetadata,
        'manageUsers': value.manageUsers,
        'manageWorkflows': value.manageWorkflows,
        'shareForAnonymousAccess': value.shareForAnonymousAccess,
        'transferDocumentsFromEnterprise': value.transferDocumentsFromEnterprise,
        'viewChangeOrders': value.viewChangeOrders,
        'viewChangeRequests': value.viewChangeRequests,
    };
}
