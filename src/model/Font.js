/**
 * Shotstack
 * The Shotstack API is a video editing service that allows for the automated creation of videos using JSON. You can configure an edit and POST it to the Shotstack API which will render your video and provide a file location when complete. For more details check https://shotstack.io
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
    root.ShotstackSdk.Font = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Font model module.
   * @module model/Font
   * @version v1
   */

  /**
   * Constructs a new <code>Font</code>.
   * Download a custom font to use with the HTML asset type, using the font name in the CSS or font tag.
   * @alias module:model/Font
   * @class
   * @param src {String} The URL of the font file. The URL must be publicly accessible or include credentials.
   */
  var exports = function(src) {
    var _this = this;

    _this['src'] = src;
  };

  /**
   * Constructs a <code>Font</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Font} obj Optional instance to populate.
   * @return {module:model/Font} The populated <code>Font</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('src')) {
        obj['src'] = ApiClient.convertToType(data['src'], 'String');
      }
    }
    return obj;
  }

  /**
   * The URL of the font file. The URL must be publicly accessible or include credentials.
   * @member {String} src
   */
  exports.prototype['src'] = undefined;


  /**
   * Returns The URL of the font file. The URL must be publicly accessible or include credentials.
   * @return {String}
   */
  exports.prototype.getSrc = function() {
    return this['src'];
  }

  /**
   * Sets The URL of the font file. The URL must be publicly accessible or include credentials.
   * @param {String} src The URL of the font file. The URL must be publicly accessible or include credentials.
   */
  exports.prototype.setSrc = function(src) {
    this['src'] = src;
    return this;
  }



  return exports;
}));


