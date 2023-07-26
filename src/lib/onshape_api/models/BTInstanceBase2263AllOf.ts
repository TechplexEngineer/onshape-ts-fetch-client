/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.19458-7ff87863110f
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMSuppressionState1924 } from './BTMSuppressionState1924';
import {
    BTMSuppressionState1924FromJSON,
    BTMSuppressionState1924FromJSONTyped,
    BTMSuppressionState1924ToJSON,
} from './BTMSuppressionState1924';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTReferenceCustomData1551 } from './BTReferenceCustomData1551';
import {
    BTReferenceCustomData1551FromJSON,
    BTReferenceCustomData1551FromJSONTyped,
    BTReferenceCustomData1551ToJSON,
} from './BTReferenceCustomData1551';
import type { BTRevisionCustomData2090 } from './BTRevisionCustomData2090';
import {
    BTRevisionCustomData2090FromJSON,
    BTRevisionCustomData2090FromJSONTyped,
    BTRevisionCustomData2090ToJSON,
} from './BTRevisionCustomData2090';

/**
 * 
 * @export
 * @interface BTInstanceBase2263AllOf
 */
export interface BTInstanceBase2263AllOf {
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    assemblyInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    assemblyPattern?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    assemblyReplicate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTInstanceBase2263AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    clonedInstance?: boolean;
    /**
     * 
     * @type {{ [key: string]: BTReferenceCustomData1551; }}
     * @memberof BTInstanceBase2263AllOf
     */
    customData?: { [key: string]: BTReferenceCustomData1551; };
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    instanceFolder?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTInstanceBase2263AllOf
     */
    instanceName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    isFlattenedPart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    locked?: boolean;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTInstanceBase2263AllOf
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    parametricInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    partInstance?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    releasable?: boolean;
    /**
     * 
     * @type {BTRevisionCustomData2090}
     * @memberof BTInstanceBase2263AllOf
     */
    revisionCustomData?: BTRevisionCustomData2090;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    standardContent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTInstanceBase2263AllOf
     */
    standardContentParametersId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    suppressed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTInstanceBase2263AllOf
     */
    suppressedFieldIndex?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    suppressionConfigured?: boolean;
    /**
     * 
     * @type {BTMSuppressionState1924}
     * @memberof BTInstanceBase2263AllOf
     */
    suppressionState?: BTMSuppressionState1924;
    /**
     * 
     * @type {boolean}
     * @memberof BTInstanceBase2263AllOf
     */
    validRevisionReference?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTInstanceBase2263AllOf
     */
    version?: number;
}

/**
 * Check if a given object implements the BTInstanceBase2263AllOf interface.
 */
export function instanceOfBTInstanceBase2263AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTInstanceBase2263AllOfFromJSON(json: any): BTInstanceBase2263AllOf {
    return BTInstanceBase2263AllOfFromJSONTyped(json, false);
}

export function BTInstanceBase2263AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTInstanceBase2263AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assemblyInstance': !exists(json, 'assemblyInstance') ? undefined : json['assemblyInstance'],
        'assemblyPattern': !exists(json, 'assemblyPattern') ? undefined : json['assemblyPattern'],
        'assemblyReplicate': !exists(json, 'assemblyReplicate') ? undefined : json['assemblyReplicate'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'clonedInstance': !exists(json, 'clonedInstance') ? undefined : json['clonedInstance'],
        'customData': !exists(json, 'customData') ? undefined : (mapValues(json['customData'], BTReferenceCustomData1551FromJSON)),
        'instanceFolder': !exists(json, 'instanceFolder') ? undefined : json['instanceFolder'],
        'instanceName': !exists(json, 'instanceName') ? undefined : json['instanceName'],
        'isFlattenedPart': !exists(json, 'isFlattenedPart') ? undefined : json['isFlattenedPart'],
        'locked': !exists(json, 'locked') ? undefined : json['locked'],
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'parametricInstance': !exists(json, 'parametricInstance') ? undefined : json['parametricInstance'],
        'partInstance': !exists(json, 'partInstance') ? undefined : json['partInstance'],
        'releasable': !exists(json, 'releasable') ? undefined : json['releasable'],
        'revisionCustomData': !exists(json, 'revisionCustomData') ? undefined : BTRevisionCustomData2090FromJSON(json['revisionCustomData']),
        'standardContent': !exists(json, 'standardContent') ? undefined : json['standardContent'],
        'standardContentParametersId': !exists(json, 'standardContentParametersId') ? undefined : json['standardContentParametersId'],
        'suppressed': !exists(json, 'suppressed') ? undefined : json['suppressed'],
        'suppressedFieldIndex': !exists(json, 'suppressedFieldIndex') ? undefined : json['suppressedFieldIndex'],
        'suppressionConfigured': !exists(json, 'suppressionConfigured') ? undefined : json['suppressionConfigured'],
        'suppressionState': !exists(json, 'suppressionState') ? undefined : BTMSuppressionState1924FromJSON(json['suppressionState']),
        'validRevisionReference': !exists(json, 'validRevisionReference') ? undefined : json['validRevisionReference'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function BTInstanceBase2263AllOfToJSON(value?: BTInstanceBase2263AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assemblyInstance': value.assemblyInstance,
        'assemblyPattern': value.assemblyPattern,
        'assemblyReplicate': value.assemblyReplicate,
        'btType': value.btType,
        'clonedInstance': value.clonedInstance,
        'customData': value.customData === undefined ? undefined : (mapValues(value.customData, BTReferenceCustomData1551ToJSON)),
        'instanceFolder': value.instanceFolder,
        'instanceName': value.instanceName,
        'isFlattenedPart': value.isFlattenedPart,
        'locked': value.locked,
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'parametricInstance': value.parametricInstance,
        'partInstance': value.partInstance,
        'releasable': value.releasable,
        'revisionCustomData': BTRevisionCustomData2090ToJSON(value.revisionCustomData),
        'standardContent': value.standardContent,
        'standardContentParametersId': value.standardContentParametersId,
        'suppressed': value.suppressed,
        'suppressedFieldIndex': value.suppressedFieldIndex,
        'suppressionConfigured': value.suppressionConfigured,
        'suppressionState': BTMSuppressionState1924ToJSON(value.suppressionState),
        'validRevisionReference': value.validRevisionReference,
        'version': value.version,
    };
}

