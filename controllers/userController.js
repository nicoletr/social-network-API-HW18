const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res){
    User.find()
      .then(async (users) => {
        const userObj = {
          users
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  getSingleUser(req, res) {

  },

  createUser(req, res) {

  },

  deleteUser(req, res) {

  },

  updateUser(req, res) {

  },

  addFriend(req, res) {

  },

  removeFriend(req, res) {

  },
};