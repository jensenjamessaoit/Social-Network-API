const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
  editThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");
