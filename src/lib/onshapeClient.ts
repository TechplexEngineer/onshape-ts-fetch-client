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
} from "./onshape_api/index.js";

// Note this is a convenient accessor, but does not allow for tree shaking
export class OnshapeClient {

    public AccountApi;
    public AliasApi;
    public APIApplicationApi;
    public AppAssociativeDataApi;
    public AppElementApi;
    public AssemblyApi;
    public BillingApi;
    public BlobElementApi;
    public CommentApi;
    public CompanyApi;
    public DocumentApi;
    public DrawingApi;
    public ElementApi;
    public ExportRuleApi;
    public FeatureStudioApi;
    public FolderApi;
    public InsertableApi;
    public MetadataApi;
    public MetadataCategoryApi;
    public OpenApiApi;
    public PartApi;
    public PartNumberApi;
    public PartStudioApi;
    public PropertiesTableTemplateApi;
    public PublicationApi;
    public ReleasePackageApi;
    public RevisionApi;
    public SketchApi;
    public TeamApi;
    public ThumbnailApi;
    public TranslationApi;
    public UserApi;
    public VariablesApi;
    public VersionApi;
    public WebhookApi;
    public WorkflowApi;
    constructor(private configuration: Configuration = DefaultConfig) {
        this.AccountApi = new AccountApi(this.configuration);
        this.AliasApi = new AliasApi(this.configuration);
        this.APIApplicationApi = new APIApplicationApi(this.configuration);
        this.AppAssociativeDataApi = new AppAssociativeDataApi(this.configuration);
        this.AppElementApi = new AppElementApi(this.configuration);
        this.AssemblyApi = new AssemblyApi(this.configuration);
        this.BillingApi = new BillingApi(this.configuration);
        this.BlobElementApi = new BlobElementApi(this.configuration);
        this.CommentApi = new CommentApi(this.configuration);
        this.CompanyApi = new CompanyApi(this.configuration);
        this.DocumentApi = new DocumentApi(this.configuration);
        this.DrawingApi = new DrawingApi(this.configuration);
        this.ElementApi = new ElementApi(this.configuration);
        this.ExportRuleApi = new ExportRuleApi(this.configuration);
        this.FeatureStudioApi = new FeatureStudioApi(this.configuration);
        this.FolderApi = new FolderApi(this.configuration);
        this.InsertableApi = new InsertableApi(this.configuration);
        this.MetadataApi = new MetadataApi(this.configuration);
        this.MetadataCategoryApi = new MetadataCategoryApi(this.configuration);
        this.OpenApiApi = new OpenApiApi(this.configuration);
        this.PartApi = new PartApi(this.configuration);
        this.PartNumberApi = new PartNumberApi(this.configuration);
        this.PartStudioApi = new PartStudioApi(this.configuration);
        this.PropertiesTableTemplateApi = new PropertiesTableTemplateApi(this.configuration);
        this.PublicationApi = new PublicationApi(this.configuration);
        this.ReleasePackageApi = new ReleasePackageApi(this.configuration);
        this.RevisionApi = new RevisionApi(this.configuration);
        this.SketchApi = new SketchApi(this.configuration);
        this.TeamApi = new TeamApi(this.configuration);
        this.ThumbnailApi = new ThumbnailApi(this.configuration);
        this.TranslationApi = new TranslationApi(this.configuration);
        this.UserApi = new UserApi(this.configuration);
        this.VariablesApi = new VariablesApi(this.configuration);
        this.VersionApi = new VersionApi(this.configuration);
        this.WebhookApi = new WebhookApi(this.configuration);
        this.WorkflowApi = new WorkflowApi(this.configuration);
    }

}

export {default as APIKeyAuthMiddleware} from './authMiddleware.js'
export * from './onshape_api/index.js'