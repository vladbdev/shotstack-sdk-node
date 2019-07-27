/**
 * shotstack
 * The Shotstack API is a video editing service that allows for the programatic creation of videos using JSON. 
 *
 * The version of the OpenAPI document: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0
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
    root.ShotstackSdk.ImageAsset = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ImageAsset model module.
   * @module model/ImageAsset
   * @version v1
   */

  /**
   * Constructs a new <code>ImageAsset</code>.
   * The ImageAsset is used to create video from images. The src must be a publicly accesible URL to an image resource such as a jpg or png file. 
   * @alias module:model/ImageAsset
   * @class
   * @param type {String} The type of asset - set to <b>image</b> for images.
   * @param src {String} The image source URL. The URL must be publicly accessible or include credentials. 
   */
  var exports = function(type, src) {
    var _this = this;

    _this['type'] = type;
    _this['src'] = src;
  };

  /**
   * Constructs a <code>ImageAsset</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageAsset} obj Optional instance to populate.
   * @return {module:model/ImageAsset} The populated <code>ImageAsset</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('src')) {
        obj['src'] = ApiClient.convertToType(data['src'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of asset - set to <b>image</b> for images.
   * @member {String} type
   * @default 'image'
   */
  exports.prototype['type'] = 'image';
  /**
   * The image source URL. The URL must be publicly accessible or include credentials. 
   * @member {String} src
   */
  exports.prototype['src'] = undefined;


  /**
   * Returns The type of asset - set to <b>image</b> for images.
   * @return {String}
   */
  exports.prototype.getType = function() {
    return this['type'];
  }

  /**
   * Sets The type of asset - set to <b>image</b> for images.
   * @param {String} type The type of asset - set to <b>image</b> for images.
   */
  exports.prototype.setType = function(type) {
    this['type'] = type;
    return this;
  }


  /**
   * Returns The image source URL. The URL must be publicly accessible or include credentials. 
   * @return {String}
   */
  exports.prototype.getSrc = function() {
    return this['src'];
  }

  /**
   * Sets The image source URL. The URL must be publicly accessible or include credentials. 
   * @param {String} src The image source URL. The URL must be publicly accessible or include credentials. 
   */
  exports.prototype.setSrc = function(src) {
    this['src'] = src;
    return this;
  }



  return exports;
}));


