/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.17369-82f2ed5d514e
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTDocumentWithVersionAndElementId } from './BTDocumentWithVersionAndElementId';
import {
    BTDocumentWithVersionAndElementIdFromJSON,
    BTDocumentWithVersionAndElementIdFromJSONTyped,
    BTDocumentWithVersionAndElementIdToJSON,
} from './BTDocumentWithVersionAndElementId';
import type { BTDocumentWithVersionId } from './BTDocumentWithVersionId';
import {
    BTDocumentWithVersionIdFromJSON,
    BTDocumentWithVersionIdFromJSONTyped,
    BTDocumentWithVersionIdToJSON,
} from './BTDocumentWithVersionId';
import type { BTElementReference725 } from './BTElementReference725';
import {
    BTElementReference725FromJSON,
    BTElementReference725FromJSONTyped,
    BTElementReference725ToJSON,
} from './BTElementReference725';
import type { BTInstance642 } from './BTInstance642';
import {
    BTInstance642FromJSON,
    BTInstance642FromJSONTyped,
    BTInstance642ToJSON,
} from './BTInstance642';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTMParameterReferencePartStudio3302 } from './BTMParameterReferencePartStudio3302';
import {
    BTMParameterReferencePartStudio3302FromJSON,
    BTMParameterReferencePartStudio3302FromJSONTyped,
    BTMParameterReferencePartStudio3302ToJSON,
} from './BTMParameterReferencePartStudio3302';
import type { BTMParameterReferenceWithConfiguration3028 } from './BTMParameterReferenceWithConfiguration3028';
import {
    BTMParameterReferenceWithConfiguration3028FromJSON,
    BTMParameterReferenceWithConfiguration3028FromJSONTyped,
    BTMParameterReferenceWithConfiguration3028ToJSON,
} from './BTMParameterReferenceWithConfiguration3028';
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
import type { BTPSOIdentity2741 } from './BTPSOIdentity2741';
import {
    BTPSOIdentity2741FromJSON,
    BTPSOIdentity2741FromJSONTyped,
    BTPSOIdentity2741ToJSON,
} from './BTPSOIdentity2741';
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
import type { GBTPartStudioInstanceType } from './GBTPartStudioInstanceType';
import {
    GBTPartStudioInstanceTypeFromJSON,
    GBTPartStudioInstanceTypeFromJSONTyped,
    GBTPartStudioInstanceTypeToJSON,
} from './GBTPartStudioInstanceType';

/**
 * 
 * @export
 * @interface BTPartInstance81
 */
export interface BTPartInstance81 extends BTInstance642 {
    /**
     * 
     * @type {string}
     * @memberof BTPartInstance81
     */
    btType?: string;
    /**
     * 
     * @type {BTPSOIdentity2741}
     * @memberof BTPartInstance81
     */
    partIdentity?: BTPSOIdentity2741;
    /**
     * 
     * @type {string}
     * @memberof BTPartInstance81
     */
    partQuery?: string;
    /**
     * 
     * @type {BTMParameterReferencePartStudio3302}
     * @memberof BTPartInstance81
     */
    partReference?: BTMParameterReferencePartStudio3302;
    /**
     * 
     * @type {GBTPartStudioInstanceType}
     * @memberof BTPartInstance81
     */
    type?: GBTPartStudioInstanceType;
}

/**
 * Check if a given object implements the BTPartInstance81 interface.
 */
export function instanceOfBTPartInstance81(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartInstance81FromJSON(json: any): BTPartInstance81 {
    return BTPartInstance81FromJSONTyped(json, false);
}

export function BTPartInstance81FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartInstance81 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTInstance642FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : BTPSOIdentity2741FromJSON(json['partIdentity']),
        'partQuery': !exists(json, 'partQuery') ? undefined : json['partQuery'],
        'partReference': !exists(json, 'partReference') ? undefined : BTMParameterReferencePartStudio3302FromJSON(json['partReference']),
        'type': !exists(json, 'type') ? undefined : GBTPartStudioInstanceTypeFromJSON(json['type']),
    };
}

export function BTPartInstance81ToJSON(value?: BTPartInstance81 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTInstance642ToJSON(value),
        'btType': value.btType,
        'partIdentity': BTPSOIdentity2741ToJSON(value.partIdentity),
        'partQuery': value.partQuery,
        'partReference': BTMParameterReferencePartStudio3302ToJSON(value.partReference),
        'type': GBTPartStudioInstanceTypeToJSON(value.type),
    };
}

