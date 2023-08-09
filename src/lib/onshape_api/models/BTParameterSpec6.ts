/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.167.20169-88260985a0b6
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMParameter1 } from './BTMParameter1';
import {
    BTMParameter1FromJSON,
    BTMParameter1FromJSONTyped,
    BTMParameter1ToJSON,
} from './BTMParameter1';
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';
import type { GBTQuantityType } from './GBTQuantityType';
import {
    GBTQuantityTypeFromJSON,
    GBTQuantityTypeFromJSONTyped,
    GBTQuantityTypeToJSON,
} from './GBTQuantityType';
import type { GBTUIHint } from './GBTUIHint';
import {
    GBTUIHintFromJSON,
    GBTUIHintFromJSONTyped,
    GBTUIHintToJSON,
} from './GBTUIHint';

import {
     BTParameterSpecAppearance1740FromJSONTyped,
     BTParameterSpecArray2600FromJSONTyped,
     BTParameterSpecBoolean170FromJSONTyped,
     BTParameterSpecDatabase1071FromJSONTyped,
     BTParameterSpecDerived736FromJSONTyped,
     BTParameterSpecEnum171FromJSONTyped,
     BTParameterSpecFeatureList703FromJSONTyped,
     BTParameterSpecForeignId172FromJSONTyped,
     BTParameterSpecLookupTablePath761FromJSONTyped,
     BTParameterSpecMaterial2700FromJSONTyped,
     BTParameterSpecNullableQuantity715FromJSONTyped,
     BTParameterSpecQuantity173FromJSONTyped,
     BTParameterSpecQuery174FromJSONTyped,
     BTParameterSpecReference2789FromJSONTyped,
     BTParameterSpecString175FromJSONTyped,
     BTReadOnlyParameterSpec1889FromJSONTyped
} from './';

/**
 * 
 * @export
 * @interface BTParameterSpec6
 */
export interface BTParameterSpec6 {
    /**
     * 
     * @type {number}
     * @memberof BTParameterSpec6
     */
    additionalLocalizedStrings?: number;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    columnName?: string;
    /**
     * 
     * @type {BTMParameter1}
     * @memberof BTParameterSpec6
     */
    defaultValue?: BTMParameter1;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    iconUri?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    localizableName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    localizedName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    parameterDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    parameterId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    parameterName?: string;
    /**
     * 
     * @type {GBTQuantityType}
     * @memberof BTParameterSpec6
     */
    quantityType?: GBTQuantityType;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpec6
     */
    stringsToLocalize?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpec6
     */
    uiHint?: string;
    /**
     * 
     * @type {Array<GBTUIHint>}
     * @memberof BTParameterSpec6
     */
    uiHints?: Array<GBTUIHint>;
    /**
     * 
     * @type {BTParameterVisibilityCondition177}
     * @memberof BTParameterSpec6
     */
    visibilityCondition?: BTParameterVisibilityCondition177;
}

/**
 * Check if a given object implements the BTParameterSpec6 interface.
 */
export function instanceOfBTParameterSpec6(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpec6FromJSON(json: any): BTParameterSpec6 {
    return BTParameterSpec6FromJSONTyped(json, false);
}

export function BTParameterSpec6FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpec6 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTParameterSpecAppearance-1740') {
            return BTParameterSpecAppearance1740FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecArray-2600') {
            return BTParameterSpecArray2600FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecBoolean-170') {
            return BTParameterSpecBoolean170FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecDatabase-1071') {
            return BTParameterSpecDatabase1071FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecDerived-736') {
            return BTParameterSpecDerived736FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecEnum-171') {
            return BTParameterSpecEnum171FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecFeatureList-703') {
            return BTParameterSpecFeatureList703FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecForeignId-172') {
            return BTParameterSpecForeignId172FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecLookupTablePath-761') {
            return BTParameterSpecLookupTablePath761FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecMaterial-2700') {
            return BTParameterSpecMaterial2700FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecNullableQuantity-715') {
            return BTParameterSpecNullableQuantity715FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecQuantity-173') {
            return BTParameterSpecQuantity173FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecQuery-174') {
            return BTParameterSpecQuery174FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecReference-2789') {
            return BTParameterSpecReference2789FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTParameterSpecString-175') {
            return BTParameterSpecString175FromJSONTyped(json, true);
        }
        if (json['btType'] === 'BTReadOnlyParameterSpec-1889') {
            return BTReadOnlyParameterSpec1889FromJSONTyped(json, true);
        }
    }
    return {
        
        'additionalLocalizedStrings': !exists(json, 'additionalLocalizedStrings') ? undefined : json['additionalLocalizedStrings'],
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'columnName': !exists(json, 'columnName') ? undefined : json['columnName'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : BTMParameter1FromJSON(json['defaultValue']),
        'iconUri': !exists(json, 'iconUri') ? undefined : json['iconUri'],
        'localizableName': !exists(json, 'localizableName') ? undefined : json['localizableName'],
        'localizedName': !exists(json, 'localizedName') ? undefined : json['localizedName'],
        'parameterDescription': !exists(json, 'parameterDescription') ? undefined : json['parameterDescription'],
        'parameterId': !exists(json, 'parameterId') ? undefined : json['parameterId'],
        'parameterName': !exists(json, 'parameterName') ? undefined : json['parameterName'],
        'quantityType': !exists(json, 'quantityType') ? undefined : GBTQuantityTypeFromJSON(json['quantityType']),
        'stringsToLocalize': !exists(json, 'stringsToLocalize') ? undefined : json['stringsToLocalize'],
        'uiHint': !exists(json, 'uiHint') ? undefined : json['uiHint'],
        'uiHints': !exists(json, 'uiHints') ? undefined : ((json['uiHints'] as Array<any>).map(GBTUIHintFromJSON)),
        'visibilityCondition': !exists(json, 'visibilityCondition') ? undefined : BTParameterVisibilityCondition177FromJSON(json['visibilityCondition']),
    };
}

export function BTParameterSpec6ToJSON(value?: BTParameterSpec6 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalLocalizedStrings': value.additionalLocalizedStrings,
        'btType': value.btType,
        'columnName': value.columnName,
        'defaultValue': BTMParameter1ToJSON(value.defaultValue),
        'iconUri': value.iconUri,
        'localizableName': value.localizableName,
        'localizedName': value.localizedName,
        'parameterDescription': value.parameterDescription,
        'parameterId': value.parameterId,
        'parameterName': value.parameterName,
        'quantityType': GBTQuantityTypeToJSON(value.quantityType),
        'stringsToLocalize': value.stringsToLocalize,
        'uiHint': value.uiHint,
        'uiHints': value.uiHints === undefined ? undefined : ((value.uiHints as Array<any>).map(GBTUIHintToJSON)),
        'visibilityCondition': BTParameterVisibilityCondition177ToJSON(value.visibilityCondition),
    };
}

