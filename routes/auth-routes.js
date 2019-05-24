const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";
const CLIENT_SUCCESS_REDIRECT = "http://localhost:3000";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "User has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with instagram
router.get("/reddit", passport.authenticate("reddit"));

// redirect to home page after successfully login via instagram
router.get(
    "/reddit/redirect",
    passport.authenticate("reddit", {
      successRedirect: CLIENT_SUCCESS_REDIRECT,
      failureRedirect: "/auth/login/failed"
    }));


// auth with instagram
router.get("/instagram", passport.authenticate("instagram"));

// redirect to home page after successfully login via instagram
router.get(
    "/instagram/redirect",
    passport.authenticate("instagram", {
      successRedirect: CLIENT_SUCCESS_REDIRECT,
      failureRedirect: "/auth/login/failed"
    }));


// auth with twitter
router.get("/twitter", passport.authenticate("twitter"));

// redirect to home page after successfully login via twitter
router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: CLIENT_SUCCESS_REDIRECT,
    failureRedirect: "/auth/login/failed",
    display : 'popup'
  }));

module.exports = router;
