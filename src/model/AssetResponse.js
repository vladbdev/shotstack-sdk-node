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
    define(['ApiClient', 'model/AssetResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssetResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.AssetResponse = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.AssetResponseData);
  }
}(this, function(ApiClient, AssetResponseData) {
  'use strict';



  /**
   * The AssetResponse model module.
   * @module model/AssetResponse
   * @version v1
   */

  /**
   * Constructs a new <code>AssetResponse</code>.
   * The response returned by the Serve API [get asset](#get-asset) request. Includes details of a hosted video, image, audio file, thumbnail or poster image. The response follows the [json:api](https://jsonapi.org/) specification.
   * @alias module:model/AssetResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AssetResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssetResponse} obj Optional instance to populate.
   * @return {module:model/AssetResponse} The populated <code>AssetResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('data')) {
        obj['data'] = AssetResponseData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AssetResponseData} data
   */
  exports.prototype['data'] = undefined;


  /**
   * @return {module:model/AssetResponseData}
   */
  exports.prototype.getData = function() {
    return this['data'];
  }

  /**
   * @param {module:model/AssetResponseData} data
   */
  exports.prototype.setData = function(data) {
    this['data'] = data;
  }



  return exports;
}));


