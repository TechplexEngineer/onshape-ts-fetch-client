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
import type { BTApiConfiguration } from './BTApiConfiguration';
import {
    BTApiConfigurationFromJSON,
    BTApiConfigurationFromJSONTyped,
    BTApiConfigurationToJSON,
} from './BTApiConfiguration';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMParameterReferenceWithConfiguration3028 } from './BTMParameterReferenceWithConfiguration3028';
import {
    BTMParameterReferenceWithConfiguration3028FromJSON,
    BTMParameterReferenceWithConfiguration3028FromJSONTyped,
    BTMParameterReferenceWithConfiguration3028ToJSON,
} from './BTMParameterReferenceWithConfiguration3028';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTTreeEdit13 } from './BTTreeEdit13';
import {
    BTTreeEdit13FromJSON,
    BTTreeEdit13FromJSONTyped,
    BTTreeEdit13ToJSON,
} from './BTTreeEdit13';

/**
 * 
 * @export
 * @interface BTMVariableStudioReference2764AllOf
 */
export interface BTMVariableStudioReference2764AllOf {
    /**
     * 
     * @type {BTApiConfiguration}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    apiConfiguration?: BTApiConfiguration;
    /**
     * 
     * @type {string}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTMParameter1>}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    _configuration?: Array<BTMParameter1>;
    /**
     * 
     * @type {string}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    elementId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    entireVariableStudio?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    isAutomatic?: boolean;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    lockedState?: BTMParameter1;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {boolean}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    partialReference?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    referenceNamespace?: string;
    /**
     * 
     * @type {BTMParameterReferenceWithConfiguration3028}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    referenceParameter?: BTMParameterReferenceWithConfiguration3028;
    /**
     * 
     * @type {BTTreeEdit13}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    unsetAutomaticEdit?: BTTreeEdit13;
    /**
     * 
     * @type {boolean}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    validRevisionReference?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    variableNames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTMVariableStudioReference2764AllOf
     */
    versionId?: string;
}

/**
 * Check if a given object implements the BTMVariableStudioReference2764AllOf interface.
 */
export function instanceOfBTMVariableStudioReference2764AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMVariableStudioReference2764AllOfFromJSON(json: any): BTMVariableStudioReference2764AllOf {
    return BTMVariableStudioReference2764AllOfFromJSONTyped(json, false);
}

export function BTMVariableStudioReference2764AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMVariableStudioReference2764AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiConfiguration': !exists(json, 'apiConfiguration') ? undefined : BTApiConfigurationFromJSON(json['apiConfiguration']),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        '_configuration': !exists(json, 'configuration') ? undefined : ((json['configuration'] as Array<any>).map(BTMParameter1FromJSON)),
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'entireVariableStudio': !exists(json, 'entireVariableStudio') ? undefined : json['entireVariableStudio'],
        'isAutomatic': !exists(json, 'isAutomatic') ? undefined : json['isAutomatic'],
        'lockedState': !exists(json, 'lockedState') ? undefined : BTMParameter1FromJSON(json['lockedState']),
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'partialReference': !exists(json, 'partialReference') ? undefined : json['partialReference'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'referenceNamespace': !exists(json, 'referenceNamespace') ? undefined : json['referenceNamespace'],
        'referenceParameter': !exists(json, 'referenceParameter') ? undefined : BTMParameterReferenceWithConfiguration3028FromJSON(json['referenceParameter']),
        'unsetAutomaticEdit': !exists(json, 'unsetAutomaticEdit') ? undefined : BTTreeEdit13FromJSON(json['unsetAutomaticEdit']),
        'validRevisionReference': !exists(json, 'validRevisionReference') ? undefined : json['validRevisionReference'],
        'variableNames': !exists(json, 'variableNames') ? undefined : json['variableNames'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
    };
}

export function BTMVariableStudioReference2764AllOfToJSON(value?: BTMVariableStudioReference2764AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiConfiguration': BTApiConfigurationToJSON(value.apiConfiguration),
        'btType': value.btType,
        'configuration': value._configuration === undefined ? undefined : ((value._configuration as Array<any>).map(BTMParameter1ToJSON)),
        'documentId': value.documentId,
        'elementId': value.elementId,
        'entireVariableStudio': value.entireVariableStudio,
        'isAutomatic': value.isAutomatic,
        'lockedState': BTMParameter1ToJSON(value.lockedState),
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'partialReference': value.partialReference,
        'referenceId': value.referenceId,
        'referenceNamespace': value.referenceNamespace,
        'referenceParameter': BTMParameterReferenceWithConfiguration3028ToJSON(value.referenceParameter),
        'unsetAutomaticEdit': BTTreeEdit13ToJSON(value.unsetAutomaticEdit),
        'validRevisionReference': value.validRevisionReference,
        'variableNames': value.variableNames,
        'versionId': value.versionId,
    };
}

