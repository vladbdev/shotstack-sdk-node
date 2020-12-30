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
    define(['ApiClient', 'model/Font', 'model/Soundtrack', 'model/Track'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Font'), require('./Soundtrack'), require('./Track'));
  } else {
    // Browser globals (root is window)
    if (!root.ShotstackSdk) {
      root.ShotstackSdk = {};
    }
    root.ShotstackSdk.Timeline = factory(root.ShotstackSdk.ApiClient, root.ShotstackSdk.Font, root.ShotstackSdk.Soundtrack, root.ShotstackSdk.Track);
  }
}(this, function(ApiClient, Font, Soundtrack, Track) {
  'use strict';



  /**
   * The Timeline model module.
   * @module model/Timeline
   * @version v1
   */

  /**
   * Constructs a new <code>Timeline</code>.
   * A timeline represents the contents of a video edit over time, in seconds. A timeline consists of layers called tracks. Tracks are composed of titles, images or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
   * @alias module:model/Timeline
   * @class
   * @param tracks {Array.<module:model/Track>} A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
   */
  var exports = function(tracks) {
    var _this = this;

    _this['tracks'] = tracks;
  };

  /**
   * Constructs a <code>Timeline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timeline} obj Optional instance to populate.
   * @return {module:model/Timeline} The populated <code>Timeline</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('soundtrack')) {
        obj['soundtrack'] = Soundtrack.constructFromObject(data['soundtrack']);
      }
      if (data.hasOwnProperty('background')) {
        obj['background'] = ApiClient.convertToType(data['background'], 'String');
      }
      if (data.hasOwnProperty('fonts')) {
        obj['fonts'] = ApiClient.convertToType(data['fonts'], [Font]);
      }
      if (data.hasOwnProperty('tracks')) {
        obj['tracks'] = ApiClient.convertToType(data['tracks'], [Track]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Soundtrack} soundtrack
   */
  exports.prototype['soundtrack'] = undefined;
  /**
   * A hexadecimal value for the timeline background colour. Defaults to #000000 (black).
   * @member {String} background
   * @default '#000000'
   */
  exports.prototype['background'] = '#000000';
  /**
   * An array of custom fonts to be downloaded for use by the HTML assets.
   * @member {Array.<module:model/Font>} fonts
   */
  exports.prototype['fonts'] = undefined;
  /**
   * A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
   * @member {Array.<module:model/Track>} tracks
   */
  exports.prototype['tracks'] = undefined;


  /**
   * @return {module:model/Soundtrack}
   */
  exports.prototype.getSoundtrack = function() {
    return this['soundtrack'];
  }

  /**
   * @param {module:model/Soundtrack} soundtrack
   */
  exports.prototype.setSoundtrack = function(soundtrack) {
    this['soundtrack'] = soundtrack;
    return this;
  }


  /**
   * Returns A hexadecimal value for the timeline background colour. Defaults to #000000 (black).
   * @return {String}
   */
  exports.prototype.getBackground = function() {
    return this['background'];
  }

  /**
   * Sets A hexadecimal value for the timeline background colour. Defaults to #000000 (black).
   * @param {String} background A hexadecimal value for the timeline background colour. Defaults to #000000 (black).
   */
  exports.prototype.setBackground = function(background) {
    this['background'] = background;
    return this;
  }


  /**
   * Returns An array of custom fonts to be downloaded for use by the HTML assets.
   * @return {Array.<module:model/Font>}
   */
  exports.prototype.getFonts = function() {
    return this['fonts'];
  }

  /**
   * Sets An array of custom fonts to be downloaded for use by the HTML assets.
   * @param {Array.<module:model/Font>} fonts An array of custom fonts to be downloaded for use by the HTML assets.
   */
  exports.prototype.setFonts = function(fonts) {
    this['fonts'] = fonts;
    return this;
  }


  /**
   * Returns A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
   * @return {Array.<module:model/Track>}
   */
  exports.prototype.getTracks = function() {
    return this['tracks'];
  }

  /**
   * Sets A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
   * @param {Array.<module:model/Track>} tracks A timeline consists of an array of tracks, each track containing clips. Tracks are layered on top of each other in the same order they are added to the array with the top most track layered over the top of those below it. Ensure that a track containing titles is the top most track so that it is displayed above videos and images.
   */
  exports.prototype.setTracks = function(tracks) {
    this['tracks'] = tracks;
    return this;
  }



  return exports;
}));


