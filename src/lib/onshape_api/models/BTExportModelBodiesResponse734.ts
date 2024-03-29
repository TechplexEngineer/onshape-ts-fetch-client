/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.168.20965-e01b1f4d96d1
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTExportModelBody1272 } from './BTExportModelBody1272';
import {
    BTExportModelBody1272FromJSON,
    BTExportModelBody1272FromJSONTyped,
    BTExportModelBody1272ToJSON,
} from './BTExportModelBody1272';
import type { BTExportModelProperties3216 } from './BTExportModelProperties3216';
import {
    BTExportModelProperties3216FromJSON,
    BTExportModelProperties3216FromJSONTyped,
    BTExportModelProperties3216ToJSON,
} from './BTExportModelProperties3216';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { GBTErrorStringEnum } from './GBTErrorStringEnum';
import {
    GBTErrorStringEnumFromJSON,
    GBTErrorStringEnumFromJSONTyped,
    GBTErrorStringEnumToJSON,
} from './GBTErrorStringEnum';

/**
 * 
 * @export
 * @interface BTExportModelBodiesResponse734
 */
export interface BTExportModelBodiesResponse734 {
    /**
     * 
     * @type {Array<BTExportModelBody1272>}
     * @memberof BTExportModelBodiesResponse734
     */
    bodies?: Array<BTExportModelBody1272>;
    /**
     * 
     * @type {string}
     * @memberof BTExportModelBodiesResponse734
     */
    btType?: string;
    /**
     * 
     * @type {GBTErrorStringEnum}
     * @memberof BTExportModelBodiesResponse734
     */
    errorEnum?: GBTErrorStringEnum;
    /**
     * 
     * @type {BTMicroversionId366}
     * @memberof BTExportModelBodiesResponse734
     */
    microversionId?: BTMicroversionId366;
    /**
     * 
     * @type {{ [key: string]: BTExportModelProperties3216; }}
     * @memberof BTExportModelBodiesResponse734
     */
    nodeIdToReferencedProperty?: { [key: string]: BTExportModelProperties3216; };
}

/**
 * Check if a given object implements the BTExportModelBodiesResponse734 interface.
 */
export function instanceOfBTExportModelBodiesResponse734(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExportModelBodiesResponse734FromJSON(json: any): BTExportModelBodiesResponse734 {
    return BTExportModelBodiesResponse734FromJSONTyped(json, false);
}

export function BTExportModelBodiesResponse734FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExportModelBodiesResponse734 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bodies': !exists(json, 'bodies') ? undefined : ((json['bodies'] as Array<any>).map(BTExportModelBody1272FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'errorEnum': !exists(json, 'errorEnum') ? undefined : GBTErrorStringEnumFromJSON(json['errorEnum']),
        'microversionId': !exists(json, 'microversionId') ? undefined : BTMicroversionId366FromJSON(json['microversionId']),
        'nodeIdToReferencedProperty': !exists(json, 'nodeIdToReferencedProperty') ? undefined : (mapValues(json['nodeIdToReferencedProperty'], BTExportModelProperties3216FromJSON)),
    };
}

export function BTExportModelBodiesResponse734ToJSON(value?: BTExportModelBodiesResponse734 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bodies': value.bodies === undefined ? undefined : ((value.bodies as Array<any>).map(BTExportModelBody1272ToJSON)),
        'btType': value.btType,
        'errorEnum': GBTErrorStringEnumToJSON(value.errorEnum),
        'microversionId': BTMicroversionId366ToJSON(value.microversionId),
        'nodeIdToReferencedProperty': value.nodeIdToReferencedProperty === undefined ? undefined : (mapValues(value.nodeIdToReferencedProperty, BTExportModelProperties3216ToJSON)),
    };
}

