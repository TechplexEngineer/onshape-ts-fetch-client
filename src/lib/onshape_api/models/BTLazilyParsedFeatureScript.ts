/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.165.18120-f464f720d215
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTMModel141 } from './BTMModel141';
import {
    BTMModel141FromJSON,
    BTMModel141FromJSONTyped,
    BTMModel141ToJSON,
} from './BTMModel141';
import type { BTMicroversionId366 } from './BTMicroversionId366';
import {
    BTMicroversionId366FromJSON,
    BTMicroversionId366FromJSONTyped,
    BTMicroversionId366ToJSON,
} from './BTMicroversionId366';
import type { BTPModule234 } from './BTPModule234';
import {
    BTPModule234FromJSON,
    BTPModule234FromJSONTyped,
    BTPModule234ToJSON,
} from './BTPModule234';
import type { BTPModuleId235 } from './BTPModuleId235';
import {
    BTPModuleId235FromJSON,
    BTPModuleId235FromJSONTyped,
    BTPModuleId235ToJSON,
} from './BTPModuleId235';
import type { BTUiFeatureStudioChecksum2438 } from './BTUiFeatureStudioChecksum2438';
import {
    BTUiFeatureStudioChecksum2438FromJSON,
    BTUiFeatureStudioChecksum2438FromJSONTyped,
    BTUiFeatureStudioChecksum2438ToJSON,
} from './BTUiFeatureStudioChecksum2438';

/**
 * 
 * @export
 * @interface BTLazilyParsedFeatureScript
 */
export interface BTLazilyParsedFeatureScript {
    /**
     * 
     * @type {BTUiFeatureStudioChecksum2438}
     * @memberof BTLazilyParsedFeatureScript
     */
    checksum?: BTUiFeatureStudioChecksum2438;
    /**
     * 
     * @type {number}
     * @memberof BTLazilyParsedFeatureScript
     */
    languageVersion?: number;
    /**
     * 
     * @type {object}
     * @memberof BTLazilyParsedFeatureScript
     */
    lines?: object;
    /**
     * 
     * @type {BTMModel141}
     * @memberof BTLazilyParsedFeatureScript
     */
    model?: BTMModel141;
    /**
     * 
     * @type {BTPModule234}
     * @memberof BTLazilyParsedFeatureScript
     */
    module?: BTPModule234;
    /**
     * 
     * @type {BTPModuleId235}
     * @memberof BTLazilyParsedFeatureScript
     */
    moduleId?: BTPModuleId235;
    /**
     * 
     * @type {BTPModuleId235}
     * @memberof BTLazilyParsedFeatureScript
     */
    noticeModuleIds?: BTPModuleId235;
    /**
     * 
     * @type {number}
     * @memberof BTLazilyParsedFeatureScript
     */
    parentLanguageVersion?: number;
    /**
     * 
     * @type {{ [key: string]: BTMicroversionId366; }}
     * @memberof BTLazilyParsedFeatureScript
     */
    references?: { [key: string]: BTMicroversionId366; };
    /**
     * 
     * @type {string}
     * @memberof BTLazilyParsedFeatureScript
     */
    source?: string;
}

/**
 * Check if a given object implements the BTLazilyParsedFeatureScript interface.
 */
export function instanceOfBTLazilyParsedFeatureScript(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTLazilyParsedFeatureScriptFromJSON(json: any): BTLazilyParsedFeatureScript {
    return BTLazilyParsedFeatureScriptFromJSONTyped(json, false);
}

export function BTLazilyParsedFeatureScriptFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTLazilyParsedFeatureScript {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checksum': !exists(json, 'checksum') ? undefined : BTUiFeatureStudioChecksum2438FromJSON(json['checksum']),
        'languageVersion': !exists(json, 'languageVersion') ? undefined : json['languageVersion'],
        'lines': !exists(json, 'lines') ? undefined : json['lines'],
        'model': !exists(json, 'model') ? undefined : BTMModel141FromJSON(json['model']),
        'module': !exists(json, 'module') ? undefined : BTPModule234FromJSON(json['module']),
        'moduleId': !exists(json, 'moduleId') ? undefined : BTPModuleId235FromJSON(json['moduleId']),
        'noticeModuleIds': !exists(json, 'noticeModuleIds') ? undefined : BTPModuleId235FromJSON(json['noticeModuleIds']),
        'parentLanguageVersion': !exists(json, 'parentLanguageVersion') ? undefined : json['parentLanguageVersion'],
        'references': !exists(json, 'references') ? undefined : (mapValues(json['references'], BTMicroversionId366FromJSON)),
        'source': !exists(json, 'source') ? undefined : json['source'],
    };
}

export function BTLazilyParsedFeatureScriptToJSON(value?: BTLazilyParsedFeatureScript | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checksum': BTUiFeatureStudioChecksum2438ToJSON(value.checksum),
        'languageVersion': value.languageVersion,
        'lines': value.lines,
        'model': BTMModel141ToJSON(value.model),
        'module': BTPModule234ToJSON(value.module),
        'moduleId': BTPModuleId235ToJSON(value.moduleId),
        'noticeModuleIds': BTPModuleId235ToJSON(value.noticeModuleIds),
        'parentLanguageVersion': value.parentLanguageVersion,
        'references': value.references === undefined ? undefined : (mapValues(value.references, BTMicroversionId366ToJSON)),
        'source': value.source,
    };
}

