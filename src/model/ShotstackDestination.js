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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.ShotstackDestination = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ShotstackDestination model module.
   * @module model/ShotstackDestination
   * @version v1
   */

  /**
   * Constructs a new <code>ShotstackDestination</code>.
   * Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
   * @alias module:model/ShotstackDestination
   * @class
   * @param provider {String} The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
   */
  var exports = function(provider) {
    var _this = this;

    _this['provider'] = provider || 'shotstack';
  };

  /**
   * Constructs a <code>ShotstackDestination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShotstackDestination} obj Optional instance to populate.
   * @return {module:model/ShotstackDestination} The populated <code>ShotstackDestination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('exclude')) {
        obj['exclude'] = ApiClient.convertToType(data['exclude'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
   * @member {String} provider
   * @default 'shotstack'
   */
  exports.prototype['provider'] = 'shotstack';
  /**
   * Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering.
   * @member {Boolean} exclude
   * @default false
   */
  exports.prototype['exclude'] = false;


  /**
   * Returns The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
   * @return {String}
   */
  exports.prototype.getProvider = function() {
    return this['provider'];
  }

  /**
   * Sets The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
   * @param {String} provider The destination to send rendered assets to - set to `shotstack` for Shotstack hosting and CDN.
   */
  exports.prototype.setProvider = function(provider) {
    this['provider'] = provider;
    return this;
  }


  /**
   * Returns Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering.
   * @return {Boolean}
   */
  exports.prototype.getExclude = function() {
    return this['exclude'];
  }

  /**
   * Sets Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering.
   * @param {Boolean} exclude Set to `true` to opt-out from the Shotstack hosting and CDN service. All files must be downloaded within 24 hours of rendering.
   */
  exports.prototype.setExclude = function(exclude) {
    this['exclude'] = exclude;
    return this;
  }



  return exports;
}));


