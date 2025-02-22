/**
 * Shotstack
 * Shotstack is a video, image and audio editing service that allows for the automated generation of videos, images and audio using JSON and a RESTful API.  You arrange and configure an edit and POST it to the API which will render your media and provide a file  location when complete.  For more details visit [shotstack.io](https://shotstack.io) or checkout our [getting started](https://shotstack.gitbook.io/docs/guides/getting-started) documentation. There are two main API's, one for editing and generating assets (Edit API) and one for managing hosted assets (Serve API).  The Edit API base URL is: <b>https://api.shotstack.io/{version}</b>  The Serve API base URL is: <b>https://api.shotstack.io/serve/{version}</b>
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Edit', 'model/ProbeResponse', 'model/QueuedResponse', 'model/RenderResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Edit'), require('../model/ProbeResponse'), require('../model/QueuedResponse'), require('../model/RenderResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.EditApi = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Edit, root.ShotstackSdk.ProbeResponse, root.ShotstackSdk.QueuedResponse, root.ShotstackSdk.RenderResponse);
  }
}(this, function(ApiClient, Edit, ProbeResponse, QueuedResponse, RenderResponse) {
  'use strict';

  /**
   * Edit service.
   * @module api/EditApi
   * @version v1
   */

  /**
   * Constructs a new EditApi. 
   * @alias module:api/EditApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Render Status
     * Get the rendering status, temporary asset url and details of a render by ID.  **Base URL:** https://api.shotstack.io/{version}
     * @param {String} id The id of the timeline render task in UUID format
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.data Include the data parameter in the response. The data parameter includes the original timeline, output and other settings sent to the API.<br><br><b>Note:</b> the default is currently `true`, this is deprecated and the default will soon be `false`. If you rely on the data being returned in the response you should explicitly set the parameter to `true`.
     * @param {Boolean} opts.merged Used when data is set to true, it will show the [merge fields](#tocs_mergefield) merged in to the data response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RenderResponse} and HTTP response
     */
    this.getRenderWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getRender");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'data': opts['data'],
        'merged': opts['merged'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['DeveloperKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = RenderResponse;
      return this.apiClient.callApi(
        '/render/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Render Status
     * Get the rendering status, temporary asset url and details of a render by ID.  **Base URL:** https://api.shotstack.io/{version}
     * @param {String} id The id of the timeline render task in UUID format
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.data Include the data parameter in the response. The data parameter includes the original timeline, output and other settings sent to the API.<br><br><b>Note:</b> the default is currently `true`, this is deprecated and the default will soon be `false`. If you rely on the data being returned in the response you should explicitly set the parameter to `true`.
     * @param {Boolean} opts.merged Used when data is set to true, it will show the [merge fields](#tocs_mergefield) merged in to the data response.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RenderResponse}
     */
    this.getRender = function(id, opts) {
      return this.getRenderWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Render Asset
     * Queue and render the contents of a timeline as a video, image or audio file.  **Base URL:** https://api.shotstack.io/{version}
     * @param {module:model/Edit} edit The video, image or audio edit specified using JSON.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QueuedResponse} and HTTP response
     */
    this.postRenderWithHttpInfo = function(edit) {
      var postBody = edit;
      // verify the required parameter 'edit' is set
      if (edit === undefined || edit === null) {
        throw new Error("Missing the required parameter 'edit' when calling postRender");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['DeveloperKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = QueuedResponse;
      return this.apiClient.callApi(
        '/render', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Render Asset
     * Queue and render the contents of a timeline as a video, image or audio file.  **Base URL:** https://api.shotstack.io/{version}
     * @param {module:model/Edit} edit The video, image or audio edit specified using JSON.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/QueuedResponse}
     */
    this.postRender = function(edit) {
      return this.postRenderWithHttpInfo(edit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Inspect Media
     * Inspects any media asset (image, video, audio) on the internet using a hosted version of [FFprobe](https://ffmpeg.org/ffprobe.html). The probe endpoint returns useful information about an asset such as width, height, duration, rotation, framerate, etc...  **Base URL:** https://api.shotstack.io/{version}
     * @param {String} url The URL of the media to inspect, must be **URL encoded**.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProbeResponse} and HTTP response
     */
    this.probeWithHttpInfo = function(url) {
      var postBody = null;
      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling probe");
      }

      var pathParams = {
        'url': url
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['DeveloperKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ProbeResponse;
      return this.apiClient.callApi(
        '/probe/{url}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Inspect Media
     * Inspects any media asset (image, video, audio) on the internet using a hosted version of [FFprobe](https://ffmpeg.org/ffprobe.html). The probe endpoint returns useful information about an asset such as width, height, duration, rotation, framerate, etc...  **Base URL:** https://api.shotstack.io/{version}
     * @param {String} url The URL of the media to inspect, must be **URL encoded**.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProbeResponse}
     */
    this.probe = function(url) {
      return this.probeWithHttpInfo(url)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
