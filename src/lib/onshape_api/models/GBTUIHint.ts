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


/**
 * 
 * @export
 */
export const GBTUIHint = {
    OppositeDirection: 'OPPOSITE_DIRECTION',
    AlwaysHidden: 'ALWAYS_HIDDEN',
    ShowCreateSelection: 'SHOW_CREATE_SELECTION',
    ControlVisibility: 'CONTROL_VISIBILITY',
    NoPreviewProvided: 'NO_PREVIEW_PROVIDED',
    RememberPreviousValue: 'REMEMBER_PREVIOUS_VALUE',
    DisplayShort: 'DISPLAY_SHORT',
    AllowFeatureSelection: 'ALLOW_FEATURE_SELECTION',
    MateConnectorAxisType: 'MATE_CONNECTOR_AXIS_TYPE',
    PrimaryAxis: 'PRIMARY_AXIS',
    ShowExpression: 'SHOW_EXPRESSION',
    OppositeDirectionCircular: 'OPPOSITE_DIRECTION_CIRCULAR',
    ShowLabel: 'SHOW_LABEL',
    HorizontalEnum: 'HORIZONTAL_ENUM',
    Unconfigurable: 'UNCONFIGURABLE',
    MatchLastArrayItem: 'MATCH_LAST_ARRAY_ITEM',
    CollapseArrayItems: 'COLLAPSE_ARRAY_ITEMS',
    InitialFocusOnEdit: 'INITIAL_FOCUS_ON_EDIT',
    InitialFocus: 'INITIAL_FOCUS',
    DisplayCurrentValueOnly: 'DISPLAY_CURRENT_VALUE_ONLY',
    ReadOnly: 'READ_ONLY',
    PreventCreatingNewMateConnectors: 'PREVENT_CREATING_NEW_MATE_CONNECTORS',
    FirstInRow: 'FIRST_IN_ROW',
    AllowQueryOrder: 'ALLOW_QUERY_ORDER',
    PreventArrayReorder: 'PREVENT_ARRAY_REORDER',
    VariableName: 'VARIABLE_NAME',
    FocusInnerQuery: 'FOCUS_INNER_QUERY',
    ShowTolerance: 'SHOW_TOLERANCE',
    Unknown: 'UNKNOWN'
} as const;
export type GBTUIHint = typeof GBTUIHint[keyof typeof GBTUIHint];


export function GBTUIHintFromJSON(json: any): GBTUIHint {
    return GBTUIHintFromJSONTyped(json, false);
}

export function GBTUIHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): GBTUIHint {
    return json as GBTUIHint;
}

export function GBTUIHintToJSON(value?: GBTUIHint | null): any {
    return value as any;
}

