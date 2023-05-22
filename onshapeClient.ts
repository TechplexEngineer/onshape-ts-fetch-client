import {
    Configuration, DefaultConfig, AccountApi,
    AliasApi,
    APIApplicationApi,
    AppAssociativeDataApi,
    AppElementApi,
    AssemblyApi,
    BillingApi,
    BlobElementApi,
    CommentApi,
    CompanyApi,
    DocumentApi,
    DrawingApi,
    ElementApi,
    ExportRuleApi,
    FeatureStudioApi,
    FolderApi,
    InsertableApi,
    MetadataApi,
    MetadataCategoryApi,
    OpenApiApi,
    PartApi,
    PartNumberApi,
    PartStudioApi,
    PropertiesTableTemplateApi,
    PublicationApi,
    ReleasePackageApi,
    RevisionApi,
    SketchApi,
    TeamApi,
    ThumbnailApi,
    TranslationApi,
    UserApi,
    VariablesApi,
    VersionApi,
    WebhookApi,
    WorkflowApi,
} from "./onshape_api";

// Note this is a convenient accessor, but does not allow for tree shaking
export class OnshapeClient {
    constructor(private configuration: Configuration = DefaultConfig) {
    }

    AccountApi = new AccountApi(this.configuration);
    AliasApi = new AliasApi(this.configuration);
    APIApplicationApi = new APIApplicationApi(this.configuration);
    AppAssociativeDataApi = new AppAssociativeDataApi(this.configuration);
    AppElementApi = new AppElementApi(this.configuration);
    AssemblyApi = new AssemblyApi(this.configuration);
    BillingApi = new BillingApi(this.configuration);
    BlobElementApi = new BlobElementApi(this.configuration);
    CommentApi = new CommentApi(this.configuration);
    CompanyApi = new CompanyApi(this.configuration);
    DocumentApi = new DocumentApi(this.configuration);
    DrawingApi = new DrawingApi(this.configuration);
    ElementApi = new ElementApi(this.configuration);
    ExportRuleApi = new ExportRuleApi(this.configuration);
    FeatureStudioApi = new FeatureStudioApi(this.configuration);
    FolderApi = new FolderApi(this.configuration);
    InsertableApi = new InsertableApi(this.configuration);
    MetadataApi = new MetadataApi(this.configuration);
    MetadataCategoryApi = new MetadataCategoryApi(this.configuration);
    OpenApiApi = new OpenApiApi(this.configuration);
    PartApi = new PartApi(this.configuration);
    PartNumberApi = new PartNumberApi(this.configuration);
    PartStudioApi = new PartStudioApi(this.configuration);
    PropertiesTableTemplateApi = new PropertiesTableTemplateApi(this.configuration);
    PublicationApi = new PublicationApi(this.configuration);
    ReleasePackageApi = new ReleasePackageApi(this.configuration);
    RevisionApi = new RevisionApi(this.configuration);
    SketchApi = new SketchApi(this.configuration);
    TeamApi = new TeamApi(this.configuration);
    ThumbnailApi = new ThumbnailApi(this.configuration);
    TranslationApi = new TranslationApi(this.configuration);
    UserApi = new UserApi(this.configuration);
    VariablesApi = new VariablesApi(this.configuration);
    VersionApi = new VersionApi(this.configuration);
    WebhookApi = new WebhookApi(this.configuration);
    WorkflowApi = new WorkflowApi(this.configuration);
}