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

import { exists, mapValues } from '../runtime';
import type { BTRevisionApproverInfo } from './BTRevisionApproverInfo';
import {
    BTRevisionApproverInfoFromJSON,
    BTRevisionApproverInfoFromJSONTyped,
    BTRevisionApproverInfoToJSON,
} from './BTRevisionApproverInfo';
import type { BTUserSummaryInfo } from './BTUserSummaryInfo';
import {
    BTUserSummaryInfoFromJSON,
    BTUserSummaryInfoFromJSONTyped,
    BTUserSummaryInfoToJSON,
} from './BTUserSummaryInfo';

/**
 * A revision of PART/ASSEMBLY etc created by release management.
 * @export
 * @interface BTRevisionInfo
 */
export interface BTRevisionInfo {
    /**
     * The users who approved the release package that created this revision.
     * @type {Array<BTRevisionApproverInfo>}
     * @memberof BTRevisionInfo
     */
    approvers?: Array<BTRevisionApproverInfo>;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    autoObsoletionReleaseId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    autoObsoletionReleaseName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTRevisionInfo
     */
    canExport?: boolean;
    /**
     * The company or enterprise ID that owns the resource.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    _configuration?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTRevisionInfo
     */
    createdAt?: Date;
    /**
     * The Revision Description metadata property if revision is of a drawing.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    description?: string;
    /**
     * The document that contains the item.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    documentId?: string;
    /**
     * The name of the document that contains the item.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    documentName?: string;
    /**
     * The element that contains the item.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    elementId?: string;
    /**
     * The type of item 0: Part Studio, 1: Assembly, 2: Drawing. 4: Blob
     * @type {number}
     * @memberof BTRevisionInfo
     */
    elementType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    flatPartInsertableId?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    insertableId?: string;
    /**
     * Whether the revision has been obsoleted.
     * @type {boolean}
     * @memberof BTRevisionInfo
     */
    isObsolete?: boolean;
    /**
     * If true, the revision can be created again.
     * @type {boolean}
     * @memberof BTRevisionInfo
     */
    isRereleasable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTRevisionInfo
     */
    isTranslatable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    mimeType?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    name?: string;
    /**
     * The next revision if applicable. null for the latest revision.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    nextRevisionId?: string;
    /**
     * The OBSOLETION release package that obsoleted this revision if applicable.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    obsoletionPackageId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    partId?: string;
    /**
     * The Part Number with which the item was revised.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    partNumber?: string;
    /**
     * The previous revision if applicable. null for first revision.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    previousRevisionId?: string;
    /**
     * 
     * @type {Date}
     * @memberof BTRevisionInfo
     */
    releaseCreatedDate?: Date;
    /**
     * The release package that created this revision.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    releaseId?: string;
    /**
     * The name of the release package that created this item.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    releaseName?: string;
    /**
     * 
     * @type {BTUserSummaryInfo}
     * @memberof BTRevisionInfo
     */
    releasedBy?: BTUserSummaryInfo;
    /**
     * The id of the revision.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    revision?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRevisionInfo
     */
    revisionRuleId?: string;
    /**
     * The version of the document that contains this revision.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    versionId?: string;
    /**
     * The name of the version of the document that contains this revision.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    versionName?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTRevisionInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTRevisionInfo interface.
 */
export function instanceOfBTRevisionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRevisionInfoFromJSON(json: any): BTRevisionInfo {
    return BTRevisionInfoFromJSONTyped(json, false);
}

export function BTRevisionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRevisionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'approvers': !exists(json, 'approvers') ? undefined : ((json['approvers'] as Array<any>).map(BTRevisionApproverInfoFromJSON)),
        'autoObsoletionReleaseId': !exists(json, 'autoObsoletionReleaseId') ? undefined : json['autoObsoletionReleaseId'],
        'autoObsoletionReleaseName': !exists(json, 'autoObsoletionReleaseName') ? undefined : json['autoObsoletionReleaseName'],
        'canExport': !exists(json, 'canExport') ? undefined : json['canExport'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentName': !exists(json, 'documentName') ? undefined : json['documentName'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementType': !exists(json, 'elementType') ? undefined : json['elementType'],
        'errorMessage': !exists(json, 'errorMessage') ? undefined : json['errorMessage'],
        'flatPartInsertableId': !exists(json, 'flatPartInsertableId') ? undefined : json['flatPartInsertableId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'insertableId': !exists(json, 'insertableId') ? undefined : json['insertableId'],
        'isObsolete': !exists(json, 'isObsolete') ? undefined : json['isObsolete'],
        'isRereleasable': !exists(json, 'isRereleasable') ? undefined : json['isRereleasable'],
        'isTranslatable': !exists(json, 'isTranslatable') ? undefined : json['isTranslatable'],
        'mimeType': !exists(json, 'mimeType') ? undefined : json['mimeType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nextRevisionId': !exists(json, 'nextRevisionId') ? undefined : json['nextRevisionId'],
        'obsoletionPackageId': !exists(json, 'obsoletionPackageId') ? undefined : json['obsoletionPackageId'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'previousRevisionId': !exists(json, 'previousRevisionId') ? undefined : json['previousRevisionId'],
        'releaseCreatedDate': !exists(json, 'releaseCreatedDate') ? undefined : (new Date(json['releaseCreatedDate'])),
        'releaseId': !exists(json, 'releaseId') ? undefined : json['releaseId'],
        'releaseName': !exists(json, 'releaseName') ? undefined : json['releaseName'],
        'releasedBy': !exists(json, 'releasedBy') ? undefined : BTUserSummaryInfoFromJSON(json['releasedBy']),
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'revisionRuleId': !exists(json, 'revisionRuleId') ? undefined : json['revisionRuleId'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'versionName': !exists(json, 'versionName') ? undefined : json['versionName'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTRevisionInfoToJSON(value?: BTRevisionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'approvers': value.approvers === undefined ? undefined : ((value.approvers as Array<any>).map(BTRevisionApproverInfoToJSON)),
        'autoObsoletionReleaseId': value.autoObsoletionReleaseId,
        'autoObsoletionReleaseName': value.autoObsoletionReleaseName,
        'canExport': value.canExport,
        'companyId': value.companyId,
        'configuration': value._configuration,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'description': value.description,
        'documentId': value.documentId,
        'documentName': value.documentName,
        'elementId': value.elementId,
        'elementType': value.elementType,
        'errorMessage': value.errorMessage,
        'flatPartInsertableId': value.flatPartInsertableId,
        'href': value.href,
        'id': value.id,
        'insertableId': value.insertableId,
        'isObsolete': value.isObsolete,
        'isRereleasable': value.isRereleasable,
        'isTranslatable': value.isTranslatable,
        'mimeType': value.mimeType,
        'name': value.name,
        'nextRevisionId': value.nextRevisionId,
        'obsoletionPackageId': value.obsoletionPackageId,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'previousRevisionId': value.previousRevisionId,
        'releaseCreatedDate': value.releaseCreatedDate === undefined ? undefined : (value.releaseCreatedDate.toISOString()),
        'releaseId': value.releaseId,
        'releaseName': value.releaseName,
        'releasedBy': BTUserSummaryInfoToJSON(value.releasedBy),
        'revision': value.revision,
        'revisionRuleId': value.revisionRuleId,
        'versionId': value.versionId,
        'versionName': value.versionName,
        'viewRef': value.viewRef,
    };
}

