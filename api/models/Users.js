/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mongo',


  attributes: {

    personnel_no: {
      type: 'string',
      required: 'true',
      unique: 'true',
    },

    password: {
      type: 'string',
      required: 'true',
    },

    name: {
      type: 'string',
      required: 'true',
    },

    surname: {
      type: 'string',
      required: 'true',
    },

    friends: {
      collection: 'users',
      via: 'friends',
    },

    checkins_liked: {
      collection: 'checkins',
      via: 'liked_users',
      //dominant: true,
    },

    checkins_history: {
      collection: 'checkins',
      via: 'user'
    },

    avatar: {
      type: 'string',
    },

    favourite_locs: {
      collection: 'locations',
    },

    comments: {
      collection: 'comments',
      via: 'op',
    }

  }
};

