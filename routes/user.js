const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveredirectUrl } = require("../middleware");

const userController = require("../controllers/users");

//GET Signup Route
router.get("/signup", userController.renderSignupForm);

//POST Signup Route
router.post("/signup", wrapAsync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveredirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

router.get("/logout", userController.logout);

module.exports = router;
