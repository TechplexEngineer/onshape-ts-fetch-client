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
 * @interface BTBExportModelParams
 */
export interface BTBExportModelParams {
    /**
     * 
     * @type {number}
     * @memberof BTBExportModelParams
     */
    angleTolerance?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    batchFlatPatterns?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTBExportModelParams
     */
    chordTolerance?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    cloudObjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    cloudStorageAccountId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    destinationName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    documentId: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    documentVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    elementIds?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    emailLink?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    emailMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    emailSubject?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    emailTo?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    featureIds?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    flatten?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    format: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    fromUserId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    grouping?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    ignoreExportRulesForContents?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    includeBendCenterlines?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    includeBendLines?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    includeExportIds?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    includeSketches?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    isPartingOut?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    linkDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    linkDocumentWorkspaceId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTBExportModelParams
     */
    maxFacetWidth?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    microversion?: string;
    /**
     * 
     * @type {number}
     * @memberof BTBExportModelParams
     */
    minFacetWidth?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    mode?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    partIds?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    partQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    password?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    passwordRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    resolution?: string;
    /**
     * 
     * @type {number}
     * @memberof BTBExportModelParams
     */
    scale?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    sendCopyToMe?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    sheetMetalFlat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    splinesAsPolylines?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    storeInDocument?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    triggerAutoDownload?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    units?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    userId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTBExportModelParams
     */
    validForDays?: number;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    view?: string;
    /**
     * 
     * @type {string}
     * @memberof BTBExportModelParams
     */
    workspaceId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTBExportModelParams
     */
    zipSingleFileOutput?: boolean;
}

/**
 * Check if a given object implements the BTBExportModelParams interface.
 */
export function instanceOfBTBExportModelParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "documentId" in value;
    isInstance = isInstance && "format" in value;

    return isInstance;
}

export function BTBExportModelParamsFromJSON(json: any): BTBExportModelParams {
    return BTBExportModelParamsFromJSONTyped(json, false);
}

export function BTBExportModelParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBExportModelParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'angleTolerance': !exists(json, 'angleTolerance') ? undefined : json['angleTolerance'],
        'batchFlatPatterns': !exists(json, 'batchFlatPatterns') ? undefined : json['batchFlatPatterns'],
        'chordTolerance': !exists(json, 'chordTolerance') ? undefined : json['chordTolerance'],
        'cloudObjectId': !exists(json, 'cloudObjectId') ? undefined : json['cloudObjectId'],
        'cloudStorageAccountId': !exists(json, 'cloudStorageAccountId') ? undefined : json['cloudStorageAccountId'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'destinationName': !exists(json, 'destinationName') ? undefined : json['destinationName'],
        'documentId': json['documentId'],
        'documentVersionId': !exists(json, 'documentVersionId') ? undefined : json['documentVersionId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementIds': !exists(json, 'elementIds') ? undefined : json['elementIds'],
        'emailLink': !exists(json, 'emailLink') ? undefined : json['emailLink'],
        'emailMessage': !exists(json, 'emailMessage') ? undefined : json['emailMessage'],
        'emailSubject': !exists(json, 'emailSubject') ? undefined : json['emailSubject'],
        'emailTo': !exists(json, 'emailTo') ? undefined : json['emailTo'],
        'featureIds': !exists(json, 'featureIds') ? undefined : json['featureIds'],
        'flatten': !exists(json, 'flatten') ? undefined : json['flatten'],
        'format': json['format'],
        'fromUserId': !exists(json, 'fromUserId') ? undefined : json['fromUserId'],
        'grouping': !exists(json, 'grouping') ? undefined : json['grouping'],
        'ignoreExportRulesForContents': !exists(json, 'ignoreExportRulesForContents') ? undefined : json['ignoreExportRulesForContents'],
        'includeBendCenterlines': !exists(json, 'includeBendCenterlines') ? undefined : json['includeBendCenterlines'],
        'includeBendLines': !exists(json, 'includeBendLines') ? undefined : json['includeBendLines'],
        'includeExportIds': !exists(json, 'includeExportIds') ? undefined : json['includeExportIds'],
        'includeSketches': !exists(json, 'includeSketches') ? undefined : json['includeSketches'],
        'isPartingOut': !exists(json, 'isPartingOut') ? undefined : json['isPartingOut'],
        'linkDocumentId': !exists(json, 'linkDocumentId') ? undefined : json['linkDocumentId'],
        'linkDocumentWorkspaceId': !exists(json, 'linkDocumentWorkspaceId') ? undefined : json['linkDocumentWorkspaceId'],
        'maxFacetWidth': !exists(json, 'maxFacetWidth') ? undefined : json['maxFacetWidth'],
        'microversion': !exists(json, 'microversion') ? undefined : json['microversion'],
        'minFacetWidth': !exists(json, 'minFacetWidth') ? undefined : json['minFacetWidth'],
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'partIds': !exists(json, 'partIds') ? undefined : json['partIds'],
        'partQuery': !exists(json, 'partQuery') ? undefined : json['partQuery'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'passwordRequired': !exists(json, 'passwordRequired') ? undefined : json['passwordRequired'],
        'resolution': !exists(json, 'resolution') ? undefined : json['resolution'],
        'scale': !exists(json, 'scale') ? undefined : json['scale'],
        'sendCopyToMe': !exists(json, 'sendCopyToMe') ? undefined : json['sendCopyToMe'],
        'sheetMetalFlat': !exists(json, 'sheetMetalFlat') ? undefined : json['sheetMetalFlat'],
        'splinesAsPolylines': !exists(json, 'splinesAsPolylines') ? undefined : json['splinesAsPolylines'],
        'storeInDocument': !exists(json, 'storeInDocument') ? undefined : json['storeInDocument'],
        'triggerAutoDownload': !exists(json, 'triggerAutoDownload') ? undefined : json['triggerAutoDownload'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'validForDays': !exists(json, 'validForDays') ? undefined : json['validForDays'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'view': !exists(json, 'view') ? undefined : json['view'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
        'zipSingleFileOutput': !exists(json, 'zipSingleFileOutput') ? undefined : json['zipSingleFileOutput'],
    };
}

export function BTBExportModelParamsToJSON(value?: BTBExportModelParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'angleTolerance': value.angleTolerance,
        'batchFlatPatterns': value.batchFlatPatterns,
        'chordTolerance': value.chordTolerance,
        'cloudObjectId': value.cloudObjectId,
        'cloudStorageAccountId': value.cloudStorageAccountId,
        'configuration': value._configuration,
        'destinationName': value.destinationName,
        'documentId': value.documentId,
        'documentVersionId': value.documentVersionId,
        'elementId': value.elementId,
        'elementIds': value.elementIds,
        'emailLink': value.emailLink,
        'emailMessage': value.emailMessage,
        'emailSubject': value.emailSubject,
        'emailTo': value.emailTo,
        'featureIds': value.featureIds,
        'flatten': value.flatten,
        'format': value.format,
        'fromUserId': value.fromUserId,
        'grouping': value.grouping,
        'ignoreExportRulesForContents': value.ignoreExportRulesForContents,
        'includeBendCenterlines': value.includeBendCenterlines,
        'includeBendLines': value.includeBendLines,
        'includeExportIds': value.includeExportIds,
        'includeSketches': value.includeSketches,
        'isPartingOut': value.isPartingOut,
        'linkDocumentId': value.linkDocumentId,
        'linkDocumentWorkspaceId': value.linkDocumentWorkspaceId,
        'maxFacetWidth': value.maxFacetWidth,
        'microversion': value.microversion,
        'minFacetWidth': value.minFacetWidth,
        'mode': value.mode,
        'partIds': value.partIds,
        'partQuery': value.partQuery,
        'password': value.password,
        'passwordRequired': value.passwordRequired,
        'resolution': value.resolution,
        'scale': value.scale,
        'sendCopyToMe': value.sendCopyToMe,
        'sheetMetalFlat': value.sheetMetalFlat,
        'splinesAsPolylines': value.splinesAsPolylines,
        'storeInDocument': value.storeInDocument,
        'triggerAutoDownload': value.triggerAutoDownload,
        'units': value.units,
        'userId': value.userId,
        'validForDays': value.validForDays,
        'version': value.version,
        'view': value.view,
        'workspaceId': value.workspaceId,
        'zipSingleFileOutput': value.zipSingleFileOutput,
    };
}

