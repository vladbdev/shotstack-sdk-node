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
    root.ShotstackSdk.Soundtrack = factory(root.ShotstackSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Soundtrack model module.
   * @module model/Soundtrack
   * @version v1
   */

  /**
   * Constructs a new <code>Soundtrack</code>.
   * A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
   * @alias module:model/Soundtrack
   * @class
   * @param src {String} The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
   */
  var exports = function(src) {
    var _this = this;

    _this['src'] = src;
  };

  /**
   * Constructs a <code>Soundtrack</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Soundtrack} obj Optional instance to populate.
   * @return {module:model/Soundtrack} The populated <code>Soundtrack</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('src')) {
        obj['src'] = ApiClient.convertToType(data['src'], 'String');
      }
      if (data.hasOwnProperty('effect')) {
        obj['effect'] = ApiClient.convertToType(data['effect'], 'String');
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
   * @member {String} src
   */
  exports.prototype['src'] = undefined;
  /**
   * The effect to apply to the audio file <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
   * @member {module:model/Soundtrack.EffectEnum} effect
   */
  exports.prototype['effect'] = undefined;
  /**
   * Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
   * @member {Number} volume
   * @default 1
   */
  exports.prototype['volume'] = 1;


  /**
   * Returns The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
   * @return {String}
   */
  exports.prototype.getSrc = function() {
    return this['src'];
  }

  /**
   * Sets The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
   * @param {String} src The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
   */
  exports.prototype.setSrc = function(src) {
    this['src'] = src;
    return this;
  }


  /**
   * Returns The effect to apply to the audio file <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
   * @return {module:model/Soundtrack.EffectEnum}
   */
  exports.prototype.getEffect = function() {
    return this['effect'];
  }

  /**
   * Sets The effect to apply to the audio file <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
   * @param {module:model/Soundtrack.EffectEnum} effect The effect to apply to the audio file <ul>   <li>`fadeIn` - fade volume in only</li>   <li>`fadeOut` - fade volume out only</li>   <li>`fadeInFadeOut` - fade volume in and out</li> </ul>
   */
  exports.prototype.setEffect = function(effect) {
    this['effect'] = effect;
    return this;
  }


  /**
   * Returns Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
   * @return {Number}
   */
  exports.prototype.getVolume = function() {
    return this['volume'];
  }

  /**
   * Sets Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
   * @param {Number} volume Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
   */
  exports.prototype.setVolume = function(volume) {
    this['volume'] = volume;
    return this;
  }


  /**
   * Allowed values for the <code>effect</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EffectEnum = {
    /**
     * value: "fadeIn"
     * @const
     */
    "fadeIn": "fadeIn",
    /**
     * value: "fadeOut"
     * @const
     */
    "fadeOut": "fadeOut",
    /**
     * value: "fadeInFadeOut"
     * @const
     */
    "fadeInFadeOut": "fadeInFadeOut"  };


  return exports;
}));


