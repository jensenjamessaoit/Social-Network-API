const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "freinds", select: "-__v" });

      const usersObj = {
        users,
      };

      res.json(usersObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // get one user
  async getOneUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userID })
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      const userObj = {
        user,
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
