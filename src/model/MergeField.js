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
    root.ShotstackSdk.MergeField = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MergeField model module.
   * @module model/MergeField
   * @version v1
   */

  /**
   * Constructs a new <code>MergeField</code>.
   * A merge field consists of a key; &#x60;find&#x60;, and a value; &#x60;replace&#x60;. Merge fields can be used to replace placeholders within the JSON edit to create re-usable templates. Placeholders should be a string with double brace delimiters, i.e. &#x60;\&quot;{{NAME}}\&quot;&#x60;. A placeholder can be used for any value within the JSON edit.
   * @alias module:model/MergeField
   * @class
   * @param find {String} The string to find <u>without</u> delimiters.
   * @param replace {Object} The replacement value. The replacement can be any valid JSON type - string, boolean, number, etc...
   */
  var exports = function(find, replace) {
    var _this = this;

    _this['find'] = find;
    _this['replace'] = replace;
  };

  /**
   * Constructs a <code>MergeField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MergeField} obj Optional instance to populate.
   * @return {module:model/MergeField} The populated <code>MergeField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('find')) {
        obj['find'] = ApiClient.convertToType(data['find'], 'String');
      }
      if (data.hasOwnProperty('replace')) {
        obj['replace'] = ApiClient.convertToType(data['replace'], Object);
      }
    }
    return obj;
  }

  /**
   * The string to find <u>without</u> delimiters.
   * @member {String} find
   */
  exports.prototype['find'] = undefined;
  /**
   * The replacement value. The replacement can be any valid JSON type - string, boolean, number, etc...
   * @member {Object} replace
   */
  exports.prototype['replace'] = undefined;


  /**
   * Returns The string to find <u>without</u> delimiters.
   * @return {String}
   */
  exports.prototype.getFind = function() {
    return this['find'];
  }

  /**
   * Sets The string to find <u>without</u> delimiters.
   * @param {String} find The string to find <u>without</u> delimiters.
   */
  exports.prototype.setFind = function(find) {
    this['find'] = find;
    return this;
  }


  /**
   * Returns The replacement value. The replacement can be any valid JSON type - string, boolean, number, etc...
   * @return {Object}
   */
  exports.prototype.getReplace = function() {
    return this['replace'];
  }

  /**
   * Sets The replacement value. The replacement can be any valid JSON type - string, boolean, number, etc...
   * @param {Object} replace The replacement value. The replacement can be any valid JSON type - string, boolean, number, etc...
   */
  exports.prototype.setReplace = function(replace) {
    this['replace'] = replace;
    return this;
  }



  return exports;
}));


