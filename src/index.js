(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/AccessFilter', './model/AccessToken', './model/ApiSession', './model/ApiVersion', './model/ApiVersionElement', './model/BackupConfiguration', './model/ContentFavorite', './model/ContentMeta', './model/ContentMetaGroupUser', './model/ContentView', './model/CreateDashboardRenderTask', './model/CreateQueryTask', './model/CredentialsApi', './model/CredentialsApi3', './model/CredentialsEmail', './model/CredentialsEmbed', './model/CredentialsGoogle', './model/CredentialsLDAP', './model/CredentialsLookerOpenid', './model/CredentialsSaml', './model/CredentialsTotp', './model/DBConnection', './model/DBConnectionBase', './model/DBConnectionTestResult', './model/Dashboard', './model/DashboardBase', './model/DashboardElement', './model/DashboardFilter', './model/DashboardLayout', './model/DashboardLayoutComponent', './model/DataActionForm', './model/DataActionFormField', './model/DataActionFormSelectOption', './model/DataActionRequest', './model/DataActionResponse', './model/Datagroup', './model/Dialect', './model/DialectInfo', './model/DialectInfoOptions', './model/Error', './model/GitStatus', './model/Group', './model/GroupIdForGroupInclusion', './model/GroupIdForGroupUserInclusion', './model/HomepageItem', './model/HomepageSection', './model/LDAPConfig', './model/LDAPConfigTestResult', './model/LDAPGroupRead', './model/LDAPGroupWrite', './model/LDAPUser', './model/LegacyFeature', './model/Look', './model/LookBasic', './model/LookModel', './model/LookWithDashboards', './model/LookWithQuery', './model/LookmlModel', './model/LookmlModelExplore', './model/LookmlModelExploreAccessFilter', './model/LookmlModelExploreAlias', './model/LookmlModelExploreAlwaysFilter', './model/LookmlModelExploreConditionallyFilter', './model/LookmlModelExploreError', './model/LookmlModelExploreField', './model/LookmlModelExploreFieldEnumeration', './model/LookmlModelExploreFieldSqlCase', './model/LookmlModelExploreFieldset', './model/LookmlModelExploreJoins', './model/LookmlModelExploreSet', './model/LookmlModelNavExplore', './model/ModelSet', './model/ModelsNotValidated', './model/Permission', './model/PermissionSet', './model/PrefetchAccessFilterValue', './model/PrefetchDashboardFilterValue', './model/PrefetchDashboardRequest', './model/PrefetchMapper', './model/Project', './model/ProjectError', './model/ProjectFile', './model/ProjectValidation', './model/ProjectValidationCache', './model/ProjectWorkspace', './model/Query', './model/QueryTask', './model/RenderTask', './model/Role', './model/RunningQueries', './model/SamlConfig', './model/SamlGroupRead', './model/SamlGroupWrite', './model/SamlMetadataParseResult', './model/SamlUserAttributeRead', './model/SamlUserAttributeWrite', './model/ScheduledPlan', './model/ScheduledPlanDestination', './model/Session', './model/Snippet', './model/Space', './model/SpaceBase', './model/SqlQuery', './model/SqlQueryCreate', './model/Timezone', './model/User', './model/UserAttribute', './model/UserAttributeGroupValue', './model/UserAttributeWithValue', './model/UserIdOnly', './model/UserPublic', './model/ValidationError', './model/ValidationErrorDetail', './model/Whitelabel', './model/Workspace', './api/ApiAuthApi', './api/AuthApi', './api/ConfigApi', './api/ConnectionApi', './api/ContentApi', './api/DashboardApi', './api/DataActionApi', './api/DatagroupApi', './api/GroupApi', './api/HomepageApi', './api/LookApi', './api/LookmlModelApi', './api/ProjectApi', './api/QueryApi', './api/RenderTaskApi', './api/RoleApi', './api/RunningQueriesApi', './api/ScheduledPlanApi', './api/SessionApi', './api/SpaceApi', './api/SqlQueryApi', './api/UserApi', './api/UserAttributeApi', './api/WorkspaceApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccessFilter'), require('./model/AccessToken'), require('./model/ApiSession'), require('./model/ApiVersion'), require('./model/ApiVersionElement'), require('./model/BackupConfiguration'), require('./model/ContentFavorite'), require('./model/ContentMeta'), require('./model/ContentMetaGroupUser'), require('./model/ContentView'), require('./model/CreateDashboardRenderTask'), require('./model/CreateQueryTask'), require('./model/CredentialsApi'), require('./model/CredentialsApi3'), require('./model/CredentialsEmail'), require('./model/CredentialsEmbed'), require('./model/CredentialsGoogle'), require('./model/CredentialsLDAP'), require('./model/CredentialsLookerOpenid'), require('./model/CredentialsSaml'), require('./model/CredentialsTotp'), require('./model/DBConnection'), require('./model/DBConnectionBase'), require('./model/DBConnectionTestResult'), require('./model/Dashboard'), require('./model/DashboardBase'), require('./model/DashboardElement'), require('./model/DashboardFilter'), require('./model/DashboardLayout'), require('./model/DashboardLayoutComponent'), require('./model/DataActionForm'), require('./model/DataActionFormField'), require('./model/DataActionFormSelectOption'), require('./model/DataActionRequest'), require('./model/DataActionResponse'), require('./model/Datagroup'), require('./model/Dialect'), require('./model/DialectInfo'), require('./model/DialectInfoOptions'), require('./model/Error'), require('./model/GitStatus'), require('./model/Group'), require('./model/GroupIdForGroupInclusion'), require('./model/GroupIdForGroupUserInclusion'), require('./model/HomepageItem'), require('./model/HomepageSection'), require('./model/LDAPConfig'), require('./model/LDAPConfigTestResult'), require('./model/LDAPGroupRead'), require('./model/LDAPGroupWrite'), require('./model/LDAPUser'), require('./model/LegacyFeature'), require('./model/Look'), require('./model/LookBasic'), require('./model/LookModel'), require('./model/LookWithDashboards'), require('./model/LookWithQuery'), require('./model/LookmlModel'), require('./model/LookmlModelExplore'), require('./model/LookmlModelExploreAccessFilter'), require('./model/LookmlModelExploreAlias'), require('./model/LookmlModelExploreAlwaysFilter'), require('./model/LookmlModelExploreConditionallyFilter'), require('./model/LookmlModelExploreError'), require('./model/LookmlModelExploreField'), require('./model/LookmlModelExploreFieldEnumeration'), require('./model/LookmlModelExploreFieldSqlCase'), require('./model/LookmlModelExploreFieldset'), require('./model/LookmlModelExploreJoins'), require('./model/LookmlModelExploreSet'), require('./model/LookmlModelNavExplore'), require('./model/ModelSet'), require('./model/ModelsNotValidated'), require('./model/Permission'), require('./model/PermissionSet'), require('./model/PrefetchAccessFilterValue'), require('./model/PrefetchDashboardFilterValue'), require('./model/PrefetchDashboardRequest'), require('./model/PrefetchMapper'), require('./model/Project'), require('./model/ProjectError'), require('./model/ProjectFile'), require('./model/ProjectValidation'), require('./model/ProjectValidationCache'), require('./model/ProjectWorkspace'), require('./model/Query'), require('./model/QueryTask'), require('./model/RenderTask'), require('./model/Role'), require('./model/RunningQueries'), require('./model/SamlConfig'), require('./model/SamlGroupRead'), require('./model/SamlGroupWrite'), require('./model/SamlMetadataParseResult'), require('./model/SamlUserAttributeRead'), require('./model/SamlUserAttributeWrite'), require('./model/ScheduledPlan'), require('./model/ScheduledPlanDestination'), require('./model/Session'), require('./model/Snippet'), require('./model/Space'), require('./model/SpaceBase'), require('./model/SqlQuery'), require('./model/SqlQueryCreate'), require('./model/Timezone'), require('./model/User'), require('./model/UserAttribute'), require('./model/UserAttributeGroupValue'), require('./model/UserAttributeWithValue'), require('./model/UserIdOnly'), require('./model/UserPublic'), require('./model/ValidationError'), require('./model/ValidationErrorDetail'), require('./model/Whitelabel'), require('./model/Workspace'), require('./api/ApiAuthApi'), require('./api/AuthApi'), require('./api/ConfigApi'), require('./api/ConnectionApi'), require('./api/ContentApi'), require('./api/DashboardApi'), require('./api/DataActionApi'), require('./api/DatagroupApi'), require('./api/GroupApi'), require('./api/HomepageApi'), require('./api/LookApi'), require('./api/LookmlModelApi'), require('./api/ProjectApi'), require('./api/QueryApi'), require('./api/RenderTaskApi'), require('./api/RoleApi'), require('./api/RunningQueriesApi'), require('./api/ScheduledPlanApi'), require('./api/SessionApi'), require('./api/SpaceApi'), require('./api/SqlQueryApi'), require('./api/UserApi'), require('./api/UserAttributeApi'), require('./api/WorkspaceApi'));
  }
}(function(ApiClient, AccessFilter, AccessToken, ApiSession, ApiVersion, ApiVersionElement, BackupConfiguration, ContentFavorite, ContentMeta, ContentMetaGroupUser, ContentView, CreateDashboardRenderTask, CreateQueryTask, CredentialsApi, CredentialsApi3, CredentialsEmail, CredentialsEmbed, CredentialsGoogle, CredentialsLDAP, CredentialsLookerOpenid, CredentialsSaml, CredentialsTotp, DBConnection, DBConnectionBase, DBConnectionTestResult, Dashboard, DashboardBase, DashboardElement, DashboardFilter, DashboardLayout, DashboardLayoutComponent, DataActionForm, DataActionFormField, DataActionFormSelectOption, DataActionRequest, DataActionResponse, Datagroup, Dialect, DialectInfo, DialectInfoOptions, Error, GitStatus, Group, GroupIdForGroupInclusion, GroupIdForGroupUserInclusion, HomepageItem, HomepageSection, LDAPConfig, LDAPConfigTestResult, LDAPGroupRead, LDAPGroupWrite, LDAPUser, LegacyFeature, Look, LookBasic, LookModel, LookWithDashboards, LookWithQuery, LookmlModel, LookmlModelExplore, LookmlModelExploreAccessFilter, LookmlModelExploreAlias, LookmlModelExploreAlwaysFilter, LookmlModelExploreConditionallyFilter, LookmlModelExploreError, LookmlModelExploreField, LookmlModelExploreFieldEnumeration, LookmlModelExploreFieldSqlCase, LookmlModelExploreFieldset, LookmlModelExploreJoins, LookmlModelExploreSet, LookmlModelNavExplore, ModelSet, ModelsNotValidated, Permission, PermissionSet, PrefetchAccessFilterValue, PrefetchDashboardFilterValue, PrefetchDashboardRequest, PrefetchMapper, Project, ProjectError, ProjectFile, ProjectValidation, ProjectValidationCache, ProjectWorkspace, Query, QueryTask, RenderTask, Role, RunningQueries, SamlConfig, SamlGroupRead, SamlGroupWrite, SamlMetadataParseResult, SamlUserAttributeRead, SamlUserAttributeWrite, ScheduledPlan, ScheduledPlanDestination, Session, Snippet, Space, SpaceBase, SqlQuery, SqlQueryCreate, Timezone, User, UserAttribute, UserAttributeGroupValue, UserAttributeWithValue, UserIdOnly, UserPublic, ValidationError, ValidationErrorDetail, Whitelabel, Workspace, ApiAuthApi, AuthApi, ConfigApi, ConnectionApi, ContentApi, DashboardApi, DataActionApi, DatagroupApi, GroupApi, HomepageApi, LookApi, LookmlModelApi, ProjectApi, QueryApi, RenderTaskApi, RoleApi, RunningQueriesApi, ScheduledPlanApi, SessionApi, SpaceApi, SqlQueryApi, UserApi, UserAttributeApi, WorkspaceApi) {
  'use strict';

  /**
   * ### Authorization\n\nThe Looker API uses Looker **API3** credentials for authorization and access control. Looker admins can\ncreate API3 credentials on Looker&#39;s **Admin/Users** page. Pass API3 credentials to the login endpoint to\nobtain a temporary access_token. Include that access_token in the Authorization header of Looker API requests.\nFor details, see [Looker API Authorization](https://looker.com/docs/r/api/authorization)\n\n### Client SDKs\n\nThe Looker API is a RESTful system that should be usable by any programming language capable of making\nHTTPS requests. Client SDKs for a variety of programming languages can be generated from the Looker API&#39;s Swagger\nJSON metadata to streamline use of the Looker API in your applications. A client SDK for Ruby is available\nas an example. For more information, see [Looker API Client SDKs](https://looker.com/docs/r/api/client_sdks)\n\n### Try It Out!\n\nThe &#39;api-docs&#39; page served by the Looker instance includes &#39;Try It Out!&#39; buttons for each API method. After logging\nin with API3 credentials, you can use the \&quot;Try It Out!\&quot; buttons to call the API directly from the documentation\npage to interactively explore API features and responses.\n\n### Versioning\n\nFuture releases of Looker will expand this API release-by-release to securely expose more and more of the core\npower of Looker to API client applications. API endpoints marked as \&quot;beta\&quot; may receive breaking changes without\nwarning. Stable (non-beta) API endpoints should not receive breaking changes in future releases.\nFor more information, see [Looker API Versioning](https://looker.com/docs/r/api/versioning)\n.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LookerApi30Reference = require('./index'); // See note below*.
   * var xxxSvc = new LookerApi30Reference.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LookerApi30Reference.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LookerApi30Reference.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LookerApi30Reference.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessFilter model constructor.
     * @property {module:model/AccessFilter}
     */
    AccessFilter: AccessFilter,
    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken: AccessToken,
    /**
     * The ApiSession model constructor.
     * @property {module:model/ApiSession}
     */
    ApiSession: ApiSession,
    /**
     * The ApiVersion model constructor.
     * @property {module:model/ApiVersion}
     */
    ApiVersion: ApiVersion,
    /**
     * The ApiVersionElement model constructor.
     * @property {module:model/ApiVersionElement}
     */
    ApiVersionElement: ApiVersionElement,
    /**
     * The BackupConfiguration model constructor.
     * @property {module:model/BackupConfiguration}
     */
    BackupConfiguration: BackupConfiguration,
    /**
     * The ContentFavorite model constructor.
     * @property {module:model/ContentFavorite}
     */
    ContentFavorite: ContentFavorite,
    /**
     * The ContentMeta model constructor.
     * @property {module:model/ContentMeta}
     */
    ContentMeta: ContentMeta,
    /**
     * The ContentMetaGroupUser model constructor.
     * @property {module:model/ContentMetaGroupUser}
     */
    ContentMetaGroupUser: ContentMetaGroupUser,
    /**
     * The ContentView model constructor.
     * @property {module:model/ContentView}
     */
    ContentView: ContentView,
    /**
     * The CreateDashboardRenderTask model constructor.
     * @property {module:model/CreateDashboardRenderTask}
     */
    CreateDashboardRenderTask: CreateDashboardRenderTask,
    /**
     * The CreateQueryTask model constructor.
     * @property {module:model/CreateQueryTask}
     */
    CreateQueryTask: CreateQueryTask,
    /**
     * The CredentialsApi model constructor.
     * @property {module:model/CredentialsApi}
     */
    CredentialsApi: CredentialsApi,
    /**
     * The CredentialsApi3 model constructor.
     * @property {module:model/CredentialsApi3}
     */
    CredentialsApi3: CredentialsApi3,
    /**
     * The CredentialsEmail model constructor.
     * @property {module:model/CredentialsEmail}
     */
    CredentialsEmail: CredentialsEmail,
    /**
     * The CredentialsEmbed model constructor.
     * @property {module:model/CredentialsEmbed}
     */
    CredentialsEmbed: CredentialsEmbed,
    /**
     * The CredentialsGoogle model constructor.
     * @property {module:model/CredentialsGoogle}
     */
    CredentialsGoogle: CredentialsGoogle,
    /**
     * The CredentialsLDAP model constructor.
     * @property {module:model/CredentialsLDAP}
     */
    CredentialsLDAP: CredentialsLDAP,
    /**
     * The CredentialsLookerOpenid model constructor.
     * @property {module:model/CredentialsLookerOpenid}
     */
    CredentialsLookerOpenid: CredentialsLookerOpenid,
    /**
     * The CredentialsSaml model constructor.
     * @property {module:model/CredentialsSaml}
     */
    CredentialsSaml: CredentialsSaml,
    /**
     * The CredentialsTotp model constructor.
     * @property {module:model/CredentialsTotp}
     */
    CredentialsTotp: CredentialsTotp,
    /**
     * The DBConnection model constructor.
     * @property {module:model/DBConnection}
     */
    DBConnection: DBConnection,
    /**
     * The DBConnectionBase model constructor.
     * @property {module:model/DBConnectionBase}
     */
    DBConnectionBase: DBConnectionBase,
    /**
     * The DBConnectionTestResult model constructor.
     * @property {module:model/DBConnectionTestResult}
     */
    DBConnectionTestResult: DBConnectionTestResult,
    /**
     * The Dashboard model constructor.
     * @property {module:model/Dashboard}
     */
    Dashboard: Dashboard,
    /**
     * The DashboardBase model constructor.
     * @property {module:model/DashboardBase}
     */
    DashboardBase: DashboardBase,
    /**
     * The DashboardElement model constructor.
     * @property {module:model/DashboardElement}
     */
    DashboardElement: DashboardElement,
    /**
     * The DashboardFilter model constructor.
     * @property {module:model/DashboardFilter}
     */
    DashboardFilter: DashboardFilter,
    /**
     * The DashboardLayout model constructor.
     * @property {module:model/DashboardLayout}
     */
    DashboardLayout: DashboardLayout,
    /**
     * The DashboardLayoutComponent model constructor.
     * @property {module:model/DashboardLayoutComponent}
     */
    DashboardLayoutComponent: DashboardLayoutComponent,
    /**
     * The DataActionForm model constructor.
     * @property {module:model/DataActionForm}
     */
    DataActionForm: DataActionForm,
    /**
     * The DataActionFormField model constructor.
     * @property {module:model/DataActionFormField}
     */
    DataActionFormField: DataActionFormField,
    /**
     * The DataActionFormSelectOption model constructor.
     * @property {module:model/DataActionFormSelectOption}
     */
    DataActionFormSelectOption: DataActionFormSelectOption,
    /**
     * The DataActionRequest model constructor.
     * @property {module:model/DataActionRequest}
     */
    DataActionRequest: DataActionRequest,
    /**
     * The DataActionResponse model constructor.
     * @property {module:model/DataActionResponse}
     */
    DataActionResponse: DataActionResponse,
    /**
     * The Datagroup model constructor.
     * @property {module:model/Datagroup}
     */
    Datagroup: Datagroup,
    /**
     * The Dialect model constructor.
     * @property {module:model/Dialect}
     */
    Dialect: Dialect,
    /**
     * The DialectInfo model constructor.
     * @property {module:model/DialectInfo}
     */
    DialectInfo: DialectInfo,
    /**
     * The DialectInfoOptions model constructor.
     * @property {module:model/DialectInfoOptions}
     */
    DialectInfoOptions: DialectInfoOptions,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The GitStatus model constructor.
     * @property {module:model/GitStatus}
     */
    GitStatus: GitStatus,
    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group: Group,
    /**
     * The GroupIdForGroupInclusion model constructor.
     * @property {module:model/GroupIdForGroupInclusion}
     */
    GroupIdForGroupInclusion: GroupIdForGroupInclusion,
    /**
     * The GroupIdForGroupUserInclusion model constructor.
     * @property {module:model/GroupIdForGroupUserInclusion}
     */
    GroupIdForGroupUserInclusion: GroupIdForGroupUserInclusion,
    /**
     * The HomepageItem model constructor.
     * @property {module:model/HomepageItem}
     */
    HomepageItem: HomepageItem,
    /**
     * The HomepageSection model constructor.
     * @property {module:model/HomepageSection}
     */
    HomepageSection: HomepageSection,
    /**
     * The LDAPConfig model constructor.
     * @property {module:model/LDAPConfig}
     */
    LDAPConfig: LDAPConfig,
    /**
     * The LDAPConfigTestResult model constructor.
     * @property {module:model/LDAPConfigTestResult}
     */
    LDAPConfigTestResult: LDAPConfigTestResult,
    /**
     * The LDAPGroupRead model constructor.
     * @property {module:model/LDAPGroupRead}
     */
    LDAPGroupRead: LDAPGroupRead,
    /**
     * The LDAPGroupWrite model constructor.
     * @property {module:model/LDAPGroupWrite}
     */
    LDAPGroupWrite: LDAPGroupWrite,
    /**
     * The LDAPUser model constructor.
     * @property {module:model/LDAPUser}
     */
    LDAPUser: LDAPUser,
    /**
     * The LegacyFeature model constructor.
     * @property {module:model/LegacyFeature}
     */
    LegacyFeature: LegacyFeature,
    /**
     * The Look model constructor.
     * @property {module:model/Look}
     */
    Look: Look,
    /**
     * The LookBasic model constructor.
     * @property {module:model/LookBasic}
     */
    LookBasic: LookBasic,
    /**
     * The LookModel model constructor.
     * @property {module:model/LookModel}
     */
    LookModel: LookModel,
    /**
     * The LookWithDashboards model constructor.
     * @property {module:model/LookWithDashboards}
     */
    LookWithDashboards: LookWithDashboards,
    /**
     * The LookWithQuery model constructor.
     * @property {module:model/LookWithQuery}
     */
    LookWithQuery: LookWithQuery,
    /**
     * The LookmlModel model constructor.
     * @property {module:model/LookmlModel}
     */
    LookmlModel: LookmlModel,
    /**
     * The LookmlModelExplore model constructor.
     * @property {module:model/LookmlModelExplore}
     */
    LookmlModelExplore: LookmlModelExplore,
    /**
     * The LookmlModelExploreAccessFilter model constructor.
     * @property {module:model/LookmlModelExploreAccessFilter}
     */
    LookmlModelExploreAccessFilter: LookmlModelExploreAccessFilter,
    /**
     * The LookmlModelExploreAlias model constructor.
     * @property {module:model/LookmlModelExploreAlias}
     */
    LookmlModelExploreAlias: LookmlModelExploreAlias,
    /**
     * The LookmlModelExploreAlwaysFilter model constructor.
     * @property {module:model/LookmlModelExploreAlwaysFilter}
     */
    LookmlModelExploreAlwaysFilter: LookmlModelExploreAlwaysFilter,
    /**
     * The LookmlModelExploreConditionallyFilter model constructor.
     * @property {module:model/LookmlModelExploreConditionallyFilter}
     */
    LookmlModelExploreConditionallyFilter: LookmlModelExploreConditionallyFilter,
    /**
     * The LookmlModelExploreError model constructor.
     * @property {module:model/LookmlModelExploreError}
     */
    LookmlModelExploreError: LookmlModelExploreError,
    /**
     * The LookmlModelExploreField model constructor.
     * @property {module:model/LookmlModelExploreField}
     */
    LookmlModelExploreField: LookmlModelExploreField,
    /**
     * The LookmlModelExploreFieldEnumeration model constructor.
     * @property {module:model/LookmlModelExploreFieldEnumeration}
     */
    LookmlModelExploreFieldEnumeration: LookmlModelExploreFieldEnumeration,
    /**
     * The LookmlModelExploreFieldSqlCase model constructor.
     * @property {module:model/LookmlModelExploreFieldSqlCase}
     */
    LookmlModelExploreFieldSqlCase: LookmlModelExploreFieldSqlCase,
    /**
     * The LookmlModelExploreFieldset model constructor.
     * @property {module:model/LookmlModelExploreFieldset}
     */
    LookmlModelExploreFieldset: LookmlModelExploreFieldset,
    /**
     * The LookmlModelExploreJoins model constructor.
     * @property {module:model/LookmlModelExploreJoins}
     */
    LookmlModelExploreJoins: LookmlModelExploreJoins,
    /**
     * The LookmlModelExploreSet model constructor.
     * @property {module:model/LookmlModelExploreSet}
     */
    LookmlModelExploreSet: LookmlModelExploreSet,
    /**
     * The LookmlModelNavExplore model constructor.
     * @property {module:model/LookmlModelNavExplore}
     */
    LookmlModelNavExplore: LookmlModelNavExplore,
    /**
     * The ModelSet model constructor.
     * @property {module:model/ModelSet}
     */
    ModelSet: ModelSet,
    /**
     * The ModelsNotValidated model constructor.
     * @property {module:model/ModelsNotValidated}
     */
    ModelsNotValidated: ModelsNotValidated,
    /**
     * The Permission model constructor.
     * @property {module:model/Permission}
     */
    Permission: Permission,
    /**
     * The PermissionSet model constructor.
     * @property {module:model/PermissionSet}
     */
    PermissionSet: PermissionSet,
    /**
     * The PrefetchAccessFilterValue model constructor.
     * @property {module:model/PrefetchAccessFilterValue}
     */
    PrefetchAccessFilterValue: PrefetchAccessFilterValue,
    /**
     * The PrefetchDashboardFilterValue model constructor.
     * @property {module:model/PrefetchDashboardFilterValue}
     */
    PrefetchDashboardFilterValue: PrefetchDashboardFilterValue,
    /**
     * The PrefetchDashboardRequest model constructor.
     * @property {module:model/PrefetchDashboardRequest}
     */
    PrefetchDashboardRequest: PrefetchDashboardRequest,
    /**
     * The PrefetchMapper model constructor.
     * @property {module:model/PrefetchMapper}
     */
    PrefetchMapper: PrefetchMapper,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The ProjectError model constructor.
     * @property {module:model/ProjectError}
     */
    ProjectError: ProjectError,
    /**
     * The ProjectFile model constructor.
     * @property {module:model/ProjectFile}
     */
    ProjectFile: ProjectFile,
    /**
     * The ProjectValidation model constructor.
     * @property {module:model/ProjectValidation}
     */
    ProjectValidation: ProjectValidation,
    /**
     * The ProjectValidationCache model constructor.
     * @property {module:model/ProjectValidationCache}
     */
    ProjectValidationCache: ProjectValidationCache,
    /**
     * The ProjectWorkspace model constructor.
     * @property {module:model/ProjectWorkspace}
     */
    ProjectWorkspace: ProjectWorkspace,
    /**
     * The Query model constructor.
     * @property {module:model/Query}
     */
    Query: Query,
    /**
     * The QueryTask model constructor.
     * @property {module:model/QueryTask}
     */
    QueryTask: QueryTask,
    /**
     * The RenderTask model constructor.
     * @property {module:model/RenderTask}
     */
    RenderTask: RenderTask,
    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role: Role,
    /**
     * The RunningQueries model constructor.
     * @property {module:model/RunningQueries}
     */
    RunningQueries: RunningQueries,
    /**
     * The SamlConfig model constructor.
     * @property {module:model/SamlConfig}
     */
    SamlConfig: SamlConfig,
    /**
     * The SamlGroupRead model constructor.
     * @property {module:model/SamlGroupRead}
     */
    SamlGroupRead: SamlGroupRead,
    /**
     * The SamlGroupWrite model constructor.
     * @property {module:model/SamlGroupWrite}
     */
    SamlGroupWrite: SamlGroupWrite,
    /**
     * The SamlMetadataParseResult model constructor.
     * @property {module:model/SamlMetadataParseResult}
     */
    SamlMetadataParseResult: SamlMetadataParseResult,
    /**
     * The SamlUserAttributeRead model constructor.
     * @property {module:model/SamlUserAttributeRead}
     */
    SamlUserAttributeRead: SamlUserAttributeRead,
    /**
     * The SamlUserAttributeWrite model constructor.
     * @property {module:model/SamlUserAttributeWrite}
     */
    SamlUserAttributeWrite: SamlUserAttributeWrite,
    /**
     * The ScheduledPlan model constructor.
     * @property {module:model/ScheduledPlan}
     */
    ScheduledPlan: ScheduledPlan,
    /**
     * The ScheduledPlanDestination model constructor.
     * @property {module:model/ScheduledPlanDestination}
     */
    ScheduledPlanDestination: ScheduledPlanDestination,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The Snippet model constructor.
     * @property {module:model/Snippet}
     */
    Snippet: Snippet,
    /**
     * The Space model constructor.
     * @property {module:model/Space}
     */
    Space: Space,
    /**
     * The SpaceBase model constructor.
     * @property {module:model/SpaceBase}
     */
    SpaceBase: SpaceBase,
    /**
     * The SqlQuery model constructor.
     * @property {module:model/SqlQuery}
     */
    SqlQuery: SqlQuery,
    /**
     * The SqlQueryCreate model constructor.
     * @property {module:model/SqlQueryCreate}
     */
    SqlQueryCreate: SqlQueryCreate,
    /**
     * The Timezone model constructor.
     * @property {module:model/Timezone}
     */
    Timezone: Timezone,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserAttribute model constructor.
     * @property {module:model/UserAttribute}
     */
    UserAttribute: UserAttribute,
    /**
     * The UserAttributeGroupValue model constructor.
     * @property {module:model/UserAttributeGroupValue}
     */
    UserAttributeGroupValue: UserAttributeGroupValue,
    /**
     * The UserAttributeWithValue model constructor.
     * @property {module:model/UserAttributeWithValue}
     */
    UserAttributeWithValue: UserAttributeWithValue,
    /**
     * The UserIdOnly model constructor.
     * @property {module:model/UserIdOnly}
     */
    UserIdOnly: UserIdOnly,
    /**
     * The UserPublic model constructor.
     * @property {module:model/UserPublic}
     */
    UserPublic: UserPublic,
    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError: ValidationError,
    /**
     * The ValidationErrorDetail model constructor.
     * @property {module:model/ValidationErrorDetail}
     */
    ValidationErrorDetail: ValidationErrorDetail,
    /**
     * The Whitelabel model constructor.
     * @property {module:model/Whitelabel}
     */
    Whitelabel: Whitelabel,
    /**
     * The Workspace model constructor.
     * @property {module:model/Workspace}
     */
    Workspace: Workspace,
    /**
     * The ApiAuthApi service constructor.
     * @property {module:api/ApiAuthApi}
     */
    ApiAuthApi: ApiAuthApi,
    /**
     * The AuthApi service constructor.
     * @property {module:api/AuthApi}
     */
    AuthApi: AuthApi,
    /**
     * The ConfigApi service constructor.
     * @property {module:api/ConfigApi}
     */
    ConfigApi: ConfigApi,
    /**
     * The ConnectionApi service constructor.
     * @property {module:api/ConnectionApi}
     */
    ConnectionApi: ConnectionApi,
    /**
     * The ContentApi service constructor.
     * @property {module:api/ContentApi}
     */
    ContentApi: ContentApi,
    /**
     * The DashboardApi service constructor.
     * @property {module:api/DashboardApi}
     */
    DashboardApi: DashboardApi,
    /**
     * The DataActionApi service constructor.
     * @property {module:api/DataActionApi}
     */
    DataActionApi: DataActionApi,
    /**
     * The DatagroupApi service constructor.
     * @property {module:api/DatagroupApi}
     */
    DatagroupApi: DatagroupApi,
    /**
     * The GroupApi service constructor.
     * @property {module:api/GroupApi}
     */
    GroupApi: GroupApi,
    /**
     * The HomepageApi service constructor.
     * @property {module:api/HomepageApi}
     */
    HomepageApi: HomepageApi,
    /**
     * The LookApi service constructor.
     * @property {module:api/LookApi}
     */
    LookApi: LookApi,
    /**
     * The LookmlModelApi service constructor.
     * @property {module:api/LookmlModelApi}
     */
    LookmlModelApi: LookmlModelApi,
    /**
     * The ProjectApi service constructor.
     * @property {module:api/ProjectApi}
     */
    ProjectApi: ProjectApi,
    /**
     * The QueryApi service constructor.
     * @property {module:api/QueryApi}
     */
    QueryApi: QueryApi,
    /**
     * The RenderTaskApi service constructor.
     * @property {module:api/RenderTaskApi}
     */
    RenderTaskApi: RenderTaskApi,
    /**
     * The RoleApi service constructor.
     * @property {module:api/RoleApi}
     */
    RoleApi: RoleApi,
    /**
     * The RunningQueriesApi service constructor.
     * @property {module:api/RunningQueriesApi}
     */
    RunningQueriesApi: RunningQueriesApi,
    /**
     * The ScheduledPlanApi service constructor.
     * @property {module:api/ScheduledPlanApi}
     */
    ScheduledPlanApi: ScheduledPlanApi,
    /**
     * The SessionApi service constructor.
     * @property {module:api/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The SpaceApi service constructor.
     * @property {module:api/SpaceApi}
     */
    SpaceApi: SpaceApi,
    /**
     * The SqlQueryApi service constructor.
     * @property {module:api/SqlQueryApi}
     */
    SqlQueryApi: SqlQueryApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The UserAttributeApi service constructor.
     * @property {module:api/UserAttributeApi}
     */
    UserAttributeApi: UserAttributeApi,
    /**
     * The WorkspaceApi service constructor.
     * @property {module:api/WorkspaceApi}
     */
    WorkspaceApi: WorkspaceApi
  };

  return exports;
}));
