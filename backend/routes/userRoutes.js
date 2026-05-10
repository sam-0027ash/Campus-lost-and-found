const express = require("express");

const router = express.Router();

const {

  registerUser,

  loginUser,

  getProfile,

  updateProfile

} = require("../controllers/userController");

const authMiddleware =
  require("../middleware/authMiddleware");


// REGISTER USER
router.post(
  "/register",
  registerUser
);


// LOGIN USER
router.post(
  "/login",
  loginUser
);


// GET USER PROFILE
router.get(

  "/profile",

  authMiddleware,

  getProfile

);


// UPDATE USER PROFILE
router.put(

  "/profile",

  authMiddleware,

  updateProfile

);


module.exports = router;