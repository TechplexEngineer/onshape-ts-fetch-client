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
import type { BTESResultsFilter } from './BTESResultsFilter';
import {
    BTESResultsFilterFromJSON,
    BTESResultsFilterFromJSONTyped,
    BTESResultsFilterToJSON,
} from './BTESResultsFilter';
import type { BTESVersionWorkspaceChoice } from './BTESVersionWorkspaceChoice';
import {
    BTESVersionWorkspaceChoiceFromJSON,
    BTESVersionWorkspaceChoiceFromJSONTyped,
    BTESVersionWorkspaceChoiceToJSON,
} from './BTESVersionWorkspaceChoice';

/**
 * 
 * @export
 * @interface BTDocumentSearchParams
 */
export interface BTDocumentSearchParams {
    /**
     * Filter ID. Options are 0 (my documents), 1 (created), 2 (shared), 3 (trash), 4 (public), 5 (recent), 6 (by owner), 7 (by company), or 9 (by team).
     * @type {number}
     * @memberof BTDocumentSearchParams
     */
    documentFilter?: number;
    /**
     * 
     * @type {BTESVersionWorkspaceChoice}
     * @memberof BTDocumentSearchParams
     */
    foundIn?: BTESVersionWorkspaceChoice;
    /**
     * Number of results to return per page. Default value is 20 (also the maximum).
     * @type {number}
     * @memberof BTDocumentSearchParams
     */
    limit?: number;
    /**
     * Offset. Determines where search results begin. Default value is 0.
     * @type {number}
     * @memberof BTDocumentSearchParams
     */
    offset?: number;
    /**
     * Document owner's ID (if the filter is 6 or 7), or Team Id (if the filter is 9) 
     * @type {string}
     * @memberof BTDocumentSearchParams
     */
    ownerId?: string;
    /**
     * Search document parent Id 
     * @type {string}
     * @memberof BTDocumentSearchParams
     */
    parentId?: string;
    /**
     * Search for documents that contain the given string in the name. Search is not case-sensitive.
     * @type {string}
     * @memberof BTDocumentSearchParams
     */
    rawQuery?: string;
    /**
     * Column by which to sort search results. Options are name, modifiedAt, createdAt (Default), email, modifiedBy, and promotedAt.
     * @type {string}
     * @memberof BTDocumentSearchParams
     */
    sortColumn?: string;
    /**
     * Sort order. Options are desc (descending, the default), or asc (ascending).
     * @type {string}
     * @memberof BTDocumentSearchParams
     */
    sortOrder?: string;
    /**
     * Type of owner. Options are 0 (user), 1 (company), 2 (onshape). If the owner is a teamId, leave this unspecified.
     * @type {string}
     * @memberof BTDocumentSearchParams
     */
    type?: string;
    /**
     * 
     * @type {BTESResultsFilter}
     * @memberof BTDocumentSearchParams
     */
    when?: BTESResultsFilter;
}

/**
 * Check if a given object implements the BTDocumentSearchParams interface.
 */
export function instanceOfBTDocumentSearchParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentSearchParamsFromJSON(json: any): BTDocumentSearchParams {
    return BTDocumentSearchParamsFromJSONTyped(json, false);
}

export function BTDocumentSearchParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentSearchParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentFilter': !exists(json, 'documentFilter') ? undefined : json['documentFilter'],
        'foundIn': !exists(json, 'foundIn') ? undefined : BTESVersionWorkspaceChoiceFromJSON(json['foundIn']),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'rawQuery': !exists(json, 'rawQuery') ? undefined : json['rawQuery'],
        'sortColumn': !exists(json, 'sortColumn') ? undefined : json['sortColumn'],
        'sortOrder': !exists(json, 'sortOrder') ? undefined : json['sortOrder'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'when': !exists(json, 'when') ? undefined : BTESResultsFilterFromJSON(json['when']),
    };
}

export function BTDocumentSearchParamsToJSON(value?: BTDocumentSearchParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentFilter': value.documentFilter,
        'foundIn': BTESVersionWorkspaceChoiceToJSON(value.foundIn),
        'limit': value.limit,
        'offset': value.offset,
        'ownerId': value.ownerId,
        'parentId': value.parentId,
        'rawQuery': value.rawQuery,
        'sortColumn': value.sortColumn,
        'sortOrder': value.sortOrder,
        'type': value.type,
        'when': BTESResultsFilterToJSON(value.when),
    };
}

