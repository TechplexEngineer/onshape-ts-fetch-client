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
import type { BTMParameterReferenceJSON790 } from './BTMParameterReferenceJSON790';
import {
    BTMParameterReferenceJSON790FromJSON,
    BTMParameterReferenceJSON790FromJSONTyped,
    BTMParameterReferenceJSON790ToJSON,
} from './BTMParameterReferenceJSON790';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';

/**
 * 
 * @export
 * @interface BTMGenerativeDesignFeature3195AllOf
 */
export interface BTMGenerativeDesignFeature3195AllOf {
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    additiveSupportsOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {string}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    draftOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    extrusionOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {BTMParameterReferenceJSON790}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    jsonRecipe?: BTMParameterReferenceJSON790;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    millingOccurrences?: Array<BTOccurrence74>;
    /**
     * 
     * @type {Array<BTOccurrence74>}
     * @memberof BTMGenerativeDesignFeature3195AllOf
     */
    occurrences?: Array<BTOccurrence74>;
}

/**
 * Check if a given object implements the BTMGenerativeDesignFeature3195AllOf interface.
 */
export function instanceOfBTMGenerativeDesignFeature3195AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMGenerativeDesignFeature3195AllOfFromJSON(json: any): BTMGenerativeDesignFeature3195AllOf {
    return BTMGenerativeDesignFeature3195AllOfFromJSONTyped(json, false);
}

export function BTMGenerativeDesignFeature3195AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMGenerativeDesignFeature3195AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additiveSupportsOccurrences': !exists(json, 'additiveSupportsOccurrences') ? undefined : ((json['additiveSupportsOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'draftOccurrences': !exists(json, 'draftOccurrences') ? undefined : ((json['draftOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'extrusionOccurrences': !exists(json, 'extrusionOccurrences') ? undefined : ((json['extrusionOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'jsonRecipe': !exists(json, 'jsonRecipe') ? undefined : BTMParameterReferenceJSON790FromJSON(json['jsonRecipe']),
        'millingOccurrences': !exists(json, 'millingOccurrences') ? undefined : ((json['millingOccurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
        'occurrences': !exists(json, 'occurrences') ? undefined : ((json['occurrences'] as Array<any>).map(BTOccurrence74FromJSON)),
    };
}

export function BTMGenerativeDesignFeature3195AllOfToJSON(value?: BTMGenerativeDesignFeature3195AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additiveSupportsOccurrences': value.additiveSupportsOccurrences === undefined ? undefined : ((value.additiveSupportsOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'btType': value.btType,
        'draftOccurrences': value.draftOccurrences === undefined ? undefined : ((value.draftOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'extrusionOccurrences': value.extrusionOccurrences === undefined ? undefined : ((value.extrusionOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'jsonRecipe': BTMParameterReferenceJSON790ToJSON(value.jsonRecipe),
        'millingOccurrences': value.millingOccurrences === undefined ? undefined : ((value.millingOccurrences as Array<any>).map(BTOccurrence74ToJSON)),
        'occurrences': value.occurrences === undefined ? undefined : ((value.occurrences as Array<any>).map(BTOccurrence74ToJSON)),
    };
}

