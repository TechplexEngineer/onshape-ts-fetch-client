/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17666-197c9d1638c5
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableRow1054 } from './BTTableRow1054';
import {
    BTTableRow1054FromJSON,
    BTTableRow1054FromJSONTyped,
    BTTableRow1054ToJSON,
} from './BTTableRow1054';
import type { BTTableSortOrder4371 } from './BTTableSortOrder4371';
import {
    BTTableSortOrder4371FromJSON,
    BTTableSortOrder4371FromJSONTyped,
    BTTableSortOrder4371ToJSON,
} from './BTTableSortOrder4371';

import {
     BTAssemblySimulationStructuralLoadsTable3867FromJSONTyped,
     BTAssemblySimulationTable3236FromJSONTyped,
     BTBillOfMaterialsTable1073FromJSONTyped,
     BTConfiguredPartPropertiesTable2740FromJSONTyped,
     BTFSTable953FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTTable1825
 */
export interface BTTable1825 {
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof BTTable1825
     */
    allRowValues?: Array<Array<string>>;
    /**
     * 
     * @type {string}
     * @memberof BTTable1825
     */
    btType?: string;
    /**
     * 
     * @type {number}
     * @memberof BTTable1825
     */
    columnCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BTTable1825
     */
    frozenColumns?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTTable1825
     */
    isFailed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTable1825
     */
    nodeId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTable1825
     */
    readOnly?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTTable1825
     */
    rowCount?: number;
    /**
     * 
     * @type {BTTableSortOrder4371}
     * @memberof BTTable1825
     */
    sortOrder?: BTTableSortOrder4371;
    /**
     * 
     * @type {Array<BTTableColumnInfo1222>}
     * @memberof BTTable1825
     */
    tableColumns?: Array<BTTableColumnInfo1222>;
    /**
     * 
     * @type {string}
     * @memberof BTTable1825
     */
    tableId?: string;
    /**
     * 
     * @type {Array<BTTableRow1054>}
     * @memberof BTTable1825
     */
    tableRows?: Array<BTTableRow1054>;
    /**
     * 
     * @type {string}
     * @memberof BTTable1825
     */
    title?: string;
}

/**
 * Check if a given object implements the BTTable1825 interface.
 */
export function instanceOfBTTable1825(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTable1825FromJSON(json: any): BTTable1825 {
    return BTTable1825FromJSONTyped(json, false);
}

export function BTTable1825FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTable1825 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTAssemblySimulationStructuralLoadsTable-3867') {
            return BTAssemblySimulationStructuralLoadsTable3867FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTAssemblySimulationTable-3236') {
            return BTAssemblySimulationTable3236FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTBillOfMaterialsTable-1073') {
            return BTBillOfMaterialsTable1073FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTConfiguredPartPropertiesTable-2740') {
            return BTConfiguredPartPropertiesTable2740FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTFSTable-953') {
            return BTFSTable953FromJSONTyped(json, true);
        }
    }
    return {
        
        'allRowValues': !exists(json, 'allRowValues') ? undefined : json['allRowValues'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'columnCount': !exists(json, 'columnCount') ? undefined : json['columnCount'],
        'frozenColumns': !exists(json, 'frozenColumns') ? undefined : json['frozenColumns'],
        'isFailed': !exists(json, 'isFailed') ? undefined : json['isFailed'],
        'nodeId': !exists(json, 'nodeId') ? undefined : json['nodeId'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
        'rowCount': !exists(json, 'rowCount') ? undefined : json['rowCount'],
        'sortOrder': !exists(json, 'sortOrder') ? undefined : BTTableSortOrder4371FromJSON(json['sortOrder']),
        'tableColumns': !exists(json, 'tableColumns') ? undefined : ((json['tableColumns'] as Array<any>).map(BTTableColumnInfo1222FromJSON)),
        'tableId': !exists(json, 'tableId') ? undefined : json['tableId'],
        'tableRows': !exists(json, 'tableRows') ? undefined : ((json['tableRows'] as Array<any>).map(BTTableRow1054FromJSON)),
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function BTTable1825ToJSON(value?: BTTable1825 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allRowValues': value.allRowValues,
        'btType': value.btType,
        'columnCount': value.columnCount,
        'frozenColumns': value.frozenColumns,
        'isFailed': value.isFailed,
        'nodeId': value.nodeId,
        'readOnly': value.readOnly,
        'rowCount': value.rowCount,
        'sortOrder': BTTableSortOrder4371ToJSON(value.sortOrder),
        'tableColumns': value.tableColumns === undefined ? undefined : ((value.tableColumns as Array<any>).map(BTTableColumnInfo1222ToJSON)),
        'tableId': value.tableId,
        'tableRows': value.tableRows === undefined ? undefined : ((value.tableRows as Array<any>).map(BTTableRow1054ToJSON)),
        'title': value.title,
    };
}

