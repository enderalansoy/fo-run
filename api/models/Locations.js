/**
 * Locations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongo',

  attributes: {

    name: {
      type: 'string',
      required: 'true',
    },

    rating: {
      type: 'float',
    },

    lat: {
      type: 'float',
      required: 'true',
    },

    lng: {
      type: 'float',
      required: 'true',
    },

  }
};

