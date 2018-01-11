/**
 * Runs.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongo',

  attributes: {

    type: {
      type: 'string',
      required: 'true',
    },

    user: {
      model: 'users',
      required: 'true',
    },

    liked_users: {
      collection: 'users',
      via: 'checkins_liked',
    },

    location: {
      model: 'locations',
      required: 'true'
    },

    comments: {
      collection: 'comments',
      via: 'checkin',
    }
  }
};

