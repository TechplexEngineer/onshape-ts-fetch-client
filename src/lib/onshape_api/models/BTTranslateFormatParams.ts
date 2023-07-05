/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.166.18273-3025d52f81b7
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
 * @interface BTTranslateFormatParams
 */
export interface BTTranslateFormatParams {
    /**
     * If true, parts with faults are imported. If false, faulty parts are omitted.
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    allowFaultyParts?: boolean;
    /**
     * Determines the maximum angular deviation, between the analytical surface and its triangulation. Lower values result in a finer geometry and higher values result in coarser geometry.
     * @type {number}
     * @memberof BTTranslateFormatParams
     */
    angularTolerance?: number;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    blobElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    blobMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    cloudObjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    cloudStorageAccountId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    colorMethod?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    _configuration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    connectionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    createComposite?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    currentSheetOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    destinationName?: string;
    /**
     * 
     * @type {number}
     * @memberof BTTranslateFormatParams
     */
    distanceTolerance?: number;
    /**
     * The id of the element in which to perform the operation.
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    elementId?: string;
    /**
     * An array of element ids.
     * @type {Array<string>}
     * @memberof BTTranslateFormatParams
     */
    elementIds?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    emailLink?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    emailMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    emailSubject?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTTranslateFormatParams
     */
    emailTo?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    extractAssemblyHierarchy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    flatten?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    flattenAssemblies?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    foreignId?: string;
    /**
     * The name of the file format.
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    formatName: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    fromUserId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    getyAxisIsUp?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    grouping?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    ignoreExportRulesForContents?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTTranslateFormatParams
     */
    imageHeight?: number;
    /**
     * 
     * @type {number}
     * @memberof BTTranslateFormatParams
     */
    imageWidth?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    importInBackground?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    importWithinDocument?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    includeExportIds?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    joinAdjacentSurfaces?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    level?: string;
    /**
     * The id of the document through which the above document should be accessed; only applicable when accessing a version of the document. This allows a user who has access to document a to see data from document b, as long as document b has been linked to document a by a user who has permission to both.
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    linkDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    linkDocumentWorkspaceId?: string;
    /**
     * Determines the maximum distance, between the analytical surface and its triangulation. Lower values result in a finer geometry and higher values result in coarser geometry.
     * @type {number}
     * @memberof BTTranslateFormatParams
     */
    maximumChordLength?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    notifyUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    onePartPerDoc?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    originalForeignId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    partIds?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    password?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    passwordRequired?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    processedForeignId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    proxyDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    proxyElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    proxyWorkspaceVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    proxyWorkspaceVersionId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    selectablePdfText?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    sendCopyToMe?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof BTTranslateFormatParams
     */
    sheetIndices?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    showOverriddenDimensions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    skipBodyshop?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    sourceName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    specifyUnits?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    splinesAsPolylines?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    splitAssembliesIntoMultipleDocuments?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    stepVersionString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    storeInDocument?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    textAsGeometry?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    triggerAutoDownload?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    uploadId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTTranslateFormatParams
     */
    useIgesCompatibilityMode?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTTranslateFormatParams
     */
    validForDays?: number;
    /**
     * 
     * @type {string}
     * @memberof BTTranslateFormatParams
     */
    versionString?: string;
}

/**
 * Check if a given object implements the BTTranslateFormatParams interface.
 */
export function instanceOfBTTranslateFormatParams(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "formatName" in value;

    return isInstance;
}

export function BTTranslateFormatParamsFromJSON(json: any): BTTranslateFormatParams {
    return BTTranslateFormatParamsFromJSONTyped(json, false);
}

export function BTTranslateFormatParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTranslateFormatParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowFaultyParts': !exists(json, 'allowFaultyParts') ? undefined : json['allowFaultyParts'],
        'angularTolerance': !exists(json, 'angularTolerance') ? undefined : json['angularTolerance'],
        'blobElementId': !exists(json, 'blobElementId') ? undefined : json['blobElementId'],
        'blobMicroversionId': !exists(json, 'blobMicroversionId') ? undefined : json['blobMicroversionId'],
        'cloudObjectId': !exists(json, 'cloudObjectId') ? undefined : json['cloudObjectId'],
        'cloudStorageAccountId': !exists(json, 'cloudStorageAccountId') ? undefined : json['cloudStorageAccountId'],
        'colorMethod': !exists(json, 'colorMethod') ? undefined : json['colorMethod'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'connectionId': !exists(json, 'connectionId') ? undefined : json['connectionId'],
        'createComposite': !exists(json, 'createComposite') ? undefined : json['createComposite'],
        'currentSheetOnly': !exists(json, 'currentSheetOnly') ? undefined : json['currentSheetOnly'],
        'destinationName': !exists(json, 'destinationName') ? undefined : json['destinationName'],
        'distanceTolerance': !exists(json, 'distanceTolerance') ? undefined : json['distanceTolerance'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementIds': !exists(json, 'elementIds') ? undefined : json['elementIds'],
        'emailLink': !exists(json, 'emailLink') ? undefined : json['emailLink'],
        'emailMessage': !exists(json, 'emailMessage') ? undefined : json['emailMessage'],
        'emailSubject': !exists(json, 'emailSubject') ? undefined : json['emailSubject'],
        'emailTo': !exists(json, 'emailTo') ? undefined : json['emailTo'],
        'extractAssemblyHierarchy': !exists(json, 'extractAssemblyHierarchy') ? undefined : json['extractAssemblyHierarchy'],
        'flatten': !exists(json, 'flatten') ? undefined : json['flatten'],
        'flattenAssemblies': !exists(json, 'flattenAssemblies') ? undefined : json['flattenAssemblies'],
        'foreignId': !exists(json, 'foreignId') ? undefined : json['foreignId'],
        'formatName': json['formatName'],
        'fromUserId': !exists(json, 'fromUserId') ? undefined : json['fromUserId'],
        'getyAxisIsUp': !exists(json, 'getyAxisIsUp') ? undefined : json['getyAxisIsUp'],
        'grouping': !exists(json, 'grouping') ? undefined : json['grouping'],
        'ignoreExportRulesForContents': !exists(json, 'ignoreExportRulesForContents') ? undefined : json['ignoreExportRulesForContents'],
        'imageHeight': !exists(json, 'imageHeight') ? undefined : json['imageHeight'],
        'imageWidth': !exists(json, 'imageWidth') ? undefined : json['imageWidth'],
        'importInBackground': !exists(json, 'importInBackground') ? undefined : json['importInBackground'],
        'importWithinDocument': !exists(json, 'importWithinDocument') ? undefined : json['importWithinDocument'],
        'includeExportIds': !exists(json, 'includeExportIds') ? undefined : json['includeExportIds'],
        'joinAdjacentSurfaces': !exists(json, 'joinAdjacentSurfaces') ? undefined : json['joinAdjacentSurfaces'],
        'level': !exists(json, 'level') ? undefined : json['level'],
        'linkDocumentId': !exists(json, 'linkDocumentId') ? undefined : json['linkDocumentId'],
        'linkDocumentWorkspaceId': !exists(json, 'linkDocumentWorkspaceId') ? undefined : json['linkDocumentWorkspaceId'],
        'maximumChordLength': !exists(json, 'maximumChordLength') ? undefined : json['maximumChordLength'],
        'notifyUser': !exists(json, 'notifyUser') ? undefined : json['notifyUser'],
        'onePartPerDoc': !exists(json, 'onePartPerDoc') ? undefined : json['onePartPerDoc'],
        'originalForeignId': !exists(json, 'originalForeignId') ? undefined : json['originalForeignId'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'partIds': !exists(json, 'partIds') ? undefined : json['partIds'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'passwordRequired': !exists(json, 'passwordRequired') ? undefined : json['passwordRequired'],
        'processedForeignId': !exists(json, 'processedForeignId') ? undefined : json['processedForeignId'],
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'proxyDocumentId': !exists(json, 'proxyDocumentId') ? undefined : json['proxyDocumentId'],
        'proxyElementId': !exists(json, 'proxyElementId') ? undefined : json['proxyElementId'],
        'proxyWorkspaceVersion': !exists(json, 'proxyWorkspaceVersion') ? undefined : json['proxyWorkspaceVersion'],
        'proxyWorkspaceVersionId': !exists(json, 'proxyWorkspaceVersionId') ? undefined : json['proxyWorkspaceVersionId'],
        'selectablePdfText': !exists(json, 'selectablePdfText') ? undefined : json['selectablePdfText'],
        'sendCopyToMe': !exists(json, 'sendCopyToMe') ? undefined : json['sendCopyToMe'],
        'sheetIndices': !exists(json, 'sheetIndices') ? undefined : json['sheetIndices'],
        'showOverriddenDimensions': !exists(json, 'showOverriddenDimensions') ? undefined : json['showOverriddenDimensions'],
        'skipBodyshop': !exists(json, 'skipBodyshop') ? undefined : json['skipBodyshop'],
        'sourceName': !exists(json, 'sourceName') ? undefined : json['sourceName'],
        'specifyUnits': !exists(json, 'specifyUnits') ? undefined : json['specifyUnits'],
        'splinesAsPolylines': !exists(json, 'splinesAsPolylines') ? undefined : json['splinesAsPolylines'],
        'splitAssembliesIntoMultipleDocuments': !exists(json, 'splitAssembliesIntoMultipleDocuments') ? undefined : json['splitAssembliesIntoMultipleDocuments'],
        'stepVersionString': !exists(json, 'stepVersionString') ? undefined : json['stepVersionString'],
        'storeInDocument': !exists(json, 'storeInDocument') ? undefined : json['storeInDocument'],
        'textAsGeometry': !exists(json, 'textAsGeometry') ? undefined : json['textAsGeometry'],
        'triggerAutoDownload': !exists(json, 'triggerAutoDownload') ? undefined : json['triggerAutoDownload'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'uploadId': !exists(json, 'uploadId') ? undefined : json['uploadId'],
        'useIgesCompatibilityMode': !exists(json, 'useIgesCompatibilityMode') ? undefined : json['useIgesCompatibilityMode'],
        'validForDays': !exists(json, 'validForDays') ? undefined : json['validForDays'],
        'versionString': !exists(json, 'versionString') ? undefined : json['versionString'],
    };
}

export function BTTranslateFormatParamsToJSON(value?: BTTranslateFormatParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowFaultyParts': value.allowFaultyParts,
        'angularTolerance': value.angularTolerance,
        'blobElementId': value.blobElementId,
        'blobMicroversionId': value.blobMicroversionId,
        'cloudObjectId': value.cloudObjectId,
        'cloudStorageAccountId': value.cloudStorageAccountId,
        'colorMethod': value.colorMethod,
        'configuration': value._configuration,
        'connectionId': value.connectionId,
        'createComposite': value.createComposite,
        'currentSheetOnly': value.currentSheetOnly,
        'destinationName': value.destinationName,
        'distanceTolerance': value.distanceTolerance,
        'elementId': value.elementId,
        'elementIds': value.elementIds,
        'emailLink': value.emailLink,
        'emailMessage': value.emailMessage,
        'emailSubject': value.emailSubject,
        'emailTo': value.emailTo,
        'extractAssemblyHierarchy': value.extractAssemblyHierarchy,
        'flatten': value.flatten,
        'flattenAssemblies': value.flattenAssemblies,
        'foreignId': value.foreignId,
        'formatName': value.formatName,
        'fromUserId': value.fromUserId,
        'getyAxisIsUp': value.getyAxisIsUp,
        'grouping': value.grouping,
        'ignoreExportRulesForContents': value.ignoreExportRulesForContents,
        'imageHeight': value.imageHeight,
        'imageWidth': value.imageWidth,
        'importInBackground': value.importInBackground,
        'importWithinDocument': value.importWithinDocument,
        'includeExportIds': value.includeExportIds,
        'joinAdjacentSurfaces': value.joinAdjacentSurfaces,
        'level': value.level,
        'linkDocumentId': value.linkDocumentId,
        'linkDocumentWorkspaceId': value.linkDocumentWorkspaceId,
        'maximumChordLength': value.maximumChordLength,
        'notifyUser': value.notifyUser,
        'onePartPerDoc': value.onePartPerDoc,
        'originalForeignId': value.originalForeignId,
        'parentId': value.parentId,
        'partIds': value.partIds,
        'password': value.password,
        'passwordRequired': value.passwordRequired,
        'processedForeignId': value.processedForeignId,
        'projectId': value.projectId,
        'proxyDocumentId': value.proxyDocumentId,
        'proxyElementId': value.proxyElementId,
        'proxyWorkspaceVersion': value.proxyWorkspaceVersion,
        'proxyWorkspaceVersionId': value.proxyWorkspaceVersionId,
        'selectablePdfText': value.selectablePdfText,
        'sendCopyToMe': value.sendCopyToMe,
        'sheetIndices': value.sheetIndices,
        'showOverriddenDimensions': value.showOverriddenDimensions,
        'skipBodyshop': value.skipBodyshop,
        'sourceName': value.sourceName,
        'specifyUnits': value.specifyUnits,
        'splinesAsPolylines': value.splinesAsPolylines,
        'splitAssembliesIntoMultipleDocuments': value.splitAssembliesIntoMultipleDocuments,
        'stepVersionString': value.stepVersionString,
        'storeInDocument': value.storeInDocument,
        'textAsGeometry': value.textAsGeometry,
        'triggerAutoDownload': value.triggerAutoDownload,
        'unit': value.unit,
        'uploadId': value.uploadId,
        'useIgesCompatibilityMode': value.useIgesCompatibilityMode,
        'validForDays': value.validForDays,
        'versionString': value.versionString,
    };
}

