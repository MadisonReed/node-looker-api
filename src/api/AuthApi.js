(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/ValidationError', '../model/SamlConfig', '../model/SamlMetadataParseResult', '../model/LDAPConfig', '../model/LDAPConfigTestResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ValidationError'), require('../model/SamlConfig'), require('../model/SamlMetadataParseResult'), require('../model/LDAPConfig'), require('../model/LDAPConfigTestResult'));
  } else {
    // Browser globals (root is window)
    if (!root.LookerApi30Reference) {
      root.LookerApi30Reference = {};
    }
    root.LookerApi30Reference.AuthApi = factory(root.LookerApi30Reference.ApiClient, root.LookerApi30Reference.Error, root.LookerApi30Reference.ValidationError, root.LookerApi30Reference.SamlConfig, root.LookerApi30Reference.SamlMetadataParseResult, root.LookerApi30Reference.LDAPConfig, root.LookerApi30Reference.LDAPConfigTestResult);
  }
}(this, function(ApiClient, Error, ValidationError, SamlConfig, SamlMetadataParseResult, LDAPConfig, LDAPConfigTestResult) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSamlTestConfig operation.
     * @callback module:api/AuthApi~createSamlTestConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SamlConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create SAML Test Configuration
     * ### Create a SAML test configuration.\n
     * @param {module:model/SamlConfig} body SAML test config
     * @param {module:api/AuthApi~createSamlTestConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SamlConfig}
     */
    this.createSamlTestConfig = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createSamlTestConfig";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SamlConfig;

      return this.apiClient.callApi(
        '/saml_test_configs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSamlTestConfig operation.
     * @callback module:api/AuthApi~deleteSamlTestConfigCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete SAML Test Configuration
     * ### Delete a SAML test configuration.\n
     * @param {String} testSlug Slug of test config
     * @param {module:api/AuthApi~deleteSamlTestConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.deleteSamlTestConfig = function(testSlug, callback) {
      var postBody = null;

      // verify the required parameter 'testSlug' is set
      if (testSlug == undefined || testSlug == null) {
        throw "Missing the required parameter 'testSlug' when calling deleteSamlTestConfig";
      }


      var pathParams = {
        'test_slug': testSlug
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/saml_test_configs/{test_slug}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchAndParseSamlIdpMetadata operation.
     * @callback module:api/AuthApi~fetchAndParseSamlIdpMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SamlMetadataParseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse SAML IdP Url
     * ### Fetch the given url and parse it as a SAML IdP metadata document and return the result.\nNote that this requires that the url be public or at least at a location where the Looker instance\ncan fetch it without requiring any special authentication.\n
     * @param {String} body SAML IdP metadata public url
     * @param {module:api/AuthApi~fetchAndParseSamlIdpMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SamlMetadataParseResult}
     */
    this.fetchAndParseSamlIdpMetadata = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling fetchAndParseSamlIdpMetadata";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = SamlMetadataParseResult;

      return this.apiClient.callApi(
        '/fetch_and_parse_saml_idp_metadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ldapConfig operation.
     * @callback module:api/AuthApi~ldapConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDAPConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get LDAP Configuration
     * ### Get the LDAP configuration.\n\nLooker can be optionally configured to authenticate users against an Active Directory or other LDAP directory server.\nLDAP setup requires coordination with an administrator of that directory server.\n\nOnly Looker administrators can read and update the LDAP configuration.\n\nConfiguring LDAP impacts authentication for all users. This configuration should be done carefully.\n\nLooker maintains a single LDAP configuration. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).\n\nLDAP is enabled or disabled for Looker using the **enabled** field.\n\nLooker will never return an **auth_password** field. That value can be set, but never retrieved.\n\nSee the [Looker LDAP docs](https://www.looker.com/docs/r/api/ldap_setup) for additional information.\n
     * @param {module:api/AuthApi~ldapConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LDAPConfig}
     */
    this.ldapConfig = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LDAPConfig;

      return this.apiClient.callApi(
        '/ldap_config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the parseSamlIdpMetadata operation.
     * @callback module:api/AuthApi~parseSamlIdpMetadataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SamlMetadataParseResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse SAML IdP XML
     * ### Parse the given xml as a SAML IdP metadata document and return the result.\n
     * @param {String} body SAML IdP metadata xml
     * @param {module:api/AuthApi~parseSamlIdpMetadataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SamlMetadataParseResult}
     */
    this.parseSamlIdpMetadata = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling parseSamlIdpMetadata";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = SamlMetadataParseResult;

      return this.apiClient.callApi(
        '/parse_saml_idp_metadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the samlConfig operation.
     * @callback module:api/AuthApi~samlConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SamlConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get SAML Configuration
     * ### Get the SAML configuration.\n\nLooker can be optionally configured to authenticate users against a SAML authentication server.\nSAML setup requires coordination with an administrator of that server.\n\nOnly Looker administrators can read and update the SAML configuration.\n\nConfiguring SAML impacts authentication for all users. This configuration should be done carefully.\n\nLooker maintains a single SAML configuation. It can be read and updated.       Updates only succeed if the new state will be valid (in the sense that all required fields are populated);       it is up to you to ensure that the configuration is appropriate and correct).\n\nSAML is enabled or disabled for Looker using the **enabled** field.\n
     * @param {module:api/AuthApi~samlConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SamlConfig}
     */
    this.samlConfig = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SamlConfig;

      return this.apiClient.callApi(
        '/saml_config', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the samlTestConfig operation.
     * @callback module:api/AuthApi~samlTestConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SamlConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get SAML Test Configuration
     * ### Get a SAML test configuration by test_slug.\n
     * @param {String} testSlug Slug of test config
     * @param {module:api/AuthApi~samlTestConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SamlConfig}
     */
    this.samlTestConfig = function(testSlug, callback) {
      var postBody = null;

      // verify the required parameter 'testSlug' is set
      if (testSlug == undefined || testSlug == null) {
        throw "Missing the required parameter 'testSlug' when calling samlTestConfig";
      }


      var pathParams = {
        'test_slug': testSlug
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SamlConfig;

      return this.apiClient.callApi(
        '/saml_test_configs/{test_slug}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testLdapConfigAuth operation.
     * @callback module:api/AuthApi~testLdapConfigAuthCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDAPConfigTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test LDAP Auth
     * ### Test the connection authentication settings for an LDAP configuration.\n\nThis tests that the connection is possible and that a &#39;server&#39; account to be used by Looker can       authenticate to the LDAP server given connection and authentication information.\n\n**connection_host**, **connection_port**, and **auth_username**, are required.       **connection_tls** and **auth_password** are optional.\n\nExample:\n```json\n{\n  \&quot;connection_host\&quot;: \&quot;ldap.example.com\&quot;,\n  \&quot;connection_port\&quot;: \&quot;636\&quot;,\n  \&quot;connection_tls\&quot;: true,\n  \&quot;auth_username\&quot;: \&quot;cn=looker,dc=example,dc=com\&quot;,\n  \&quot;auth_password\&quot;: \&quot;secret\&quot;\n}\n```\n\nLooker will never return an **auth_password**. If this request omits the **auth_password** field, then       the **auth_password** value from the active config (if present) will be used for the test.\n\nThe active LDAP settings are not modified.\n\n
     * @param {module:model/LDAPConfig} body LDAP Config
     * @param {module:api/AuthApi~testLdapConfigAuthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LDAPConfigTestResult}
     */
    this.testLdapConfigAuth = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling testLdapConfigAuth";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LDAPConfigTestResult;

      return this.apiClient.callApi(
        '/ldap_config/test_auth', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testLdapConfigConnection operation.
     * @callback module:api/AuthApi~testLdapConfigConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDAPConfigTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test LDAP Connection
     * ### Test the connection settings for an LDAP configuration.\n\nThis tests that the connection is possible given a connection_host and connection_port.\n\n**connection_host** and **connection_port** are required. **connection_tls** is optional.\n\nExample:\n```json\n{\n  \&quot;connection_host\&quot;: \&quot;ldap.example.com\&quot;,\n  \&quot;connection_port\&quot;: \&quot;636\&quot;,\n  \&quot;connection_tls\&quot;: true\n}\n```\n\nNo authentication to the LDAP server is attempted.\n\nThe active LDAP settings are not modified.\n
     * @param {module:model/LDAPConfig} body LDAP Config
     * @param {module:api/AuthApi~testLdapConfigConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LDAPConfigTestResult}
     */
    this.testLdapConfigConnection = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling testLdapConfigConnection";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LDAPConfigTestResult;

      return this.apiClient.callApi(
        '/ldap_config/test_connection', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testLdapConfigUserAuth operation.
     * @callback module:api/AuthApi~testLdapConfigUserAuthCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDAPConfigTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test LDAP User Auth
     * ### Test the user authentication settings for an LDAP configuration.\n\nThis test accepts a full LDAP configuration along with a username/password pair and attempts to       authenticate the user with the LDAP server. The configuration is validated before attempting the       authentication.\n\nLooker will never return an **auth_password**. If this request omits the **auth_password** field, then       the **auth_password** value from the active config (if present) will be used for the test.\n\n**test_ldap_user** and **test_ldap_password** are required.\n\nThe active LDAP settings are not modified.\n\n
     * @param {module:model/LDAPConfig} body LDAP Config
     * @param {module:api/AuthApi~testLdapConfigUserAuthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LDAPConfigTestResult}
     */
    this.testLdapConfigUserAuth = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling testLdapConfigUserAuth";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LDAPConfigTestResult;

      return this.apiClient.callApi(
        '/ldap_config/test_user_auth', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the testLdapConfigUserInfo operation.
     * @callback module:api/AuthApi~testLdapConfigUserInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDAPConfigTestResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test LDAP User Info
     * ### Test the user authentication settings for an LDAP configuration without authenticating the user.\n\nThis test will let you easily test the mapping for user properties and roles for any user without      needing to authenticate as that user.\n\nThis test accepts a full LDAP configuration along with a username and attempts to find the full info      for the user from the LDAP server without actually authenticating the user. So, user password is not      required.The configuration is validated before attempting to contact the server.\n\n**test_ldap_user** is required.\n\nThe active LDAP settings are not modified.\n\n
     * @param {module:model/LDAPConfig} body LDAP Config
     * @param {module:api/AuthApi~testLdapConfigUserInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LDAPConfigTestResult}
     */
    this.testLdapConfigUserInfo = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling testLdapConfigUserInfo";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LDAPConfigTestResult;

      return this.apiClient.callApi(
        '/ldap_config/test_user_info', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateLdapConfig operation.
     * @callback module:api/AuthApi~updateLdapConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LDAPConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update LDAP Configuration
     * ### Update the LDAP configuration.\n\nConfiguring LDAP impacts authentication for all users. This configuration should be done carefully.\n\nOnly Looker administrators can read and update the LDAP configuration.\n\nLDAP is enabled or disabled for Looker using the **enabled** field.\n\nIt is **highly** recommended that any LDAP setting changes be tested using the APIs below before being set globally.\n\nSee the [Looker LDAP docs](https://www.looker.com/docs/r/api/ldap_setup) for additional information.\n
     * @param {module:model/LDAPConfig} body LDAP Config
     * @param {module:api/AuthApi~updateLdapConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LDAPConfig}
     */
    this.updateLdapConfig = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateLdapConfig";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LDAPConfig;

      return this.apiClient.callApi(
        '/ldap_config', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSamlConfig operation.
     * @callback module:api/AuthApi~updateSamlConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SamlConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update SAML Configuration
     * ### Update the SAML configuration.\n\nConfiguring SAML impacts authentication for all users. This configuration should be done carefully.\n\nOnly Looker administrators can read and update the SAML configuration.\n\nSAML is enabled or disabled for Looker using the **enabled** field.\n\nIt is **highly** recommended that any SAML setting changes be tested using the APIs below before being set globally.\n
     * @param {module:model/SamlConfig} body SAML Config
     * @param {module:api/AuthApi~updateSamlConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SamlConfig}
     */
    this.updateSamlConfig = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateSamlConfig";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SamlConfig;

      return this.apiClient.callApi(
        '/saml_config', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
