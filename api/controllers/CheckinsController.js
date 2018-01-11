/**
 * RunsController
 *
 * @description :: Server-side logic for managing runs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  add: (req, res) => {
    Users.findOne({ id: req.params.id }).populateAll().exec((err, user) => {
      if (err) return res.json(err);
      let likes = user.checkins_liked;
      likes.push(req.query.checkin);
      Users.update({ id: req.params.id }, { checkins_liked: likes }).exec((e, u) => {
        if (err) return res.json(err);
        return res.json(u);
      });
    });
  },

};

