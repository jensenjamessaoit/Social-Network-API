const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  editUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getOneUser).put(editUser).delete(deleteUser);

// api/users/:userId/friend/:friendId
router.route("/:userId/friend/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
