/**
 * Comments.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongo',

  attributes: {
    op: {
      type: 'users',
      required: 'true'
    },

    checkin: {
      type: 'checkins',
      required: 'true',
    },

    description: {
      type: 'string',
      required: 'true',
    }
  }
};

