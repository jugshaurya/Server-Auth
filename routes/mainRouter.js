const router = require("express").Router();
const Authentication = require("../controllers/authentication");
const { isUserAuthenticated, localLogin } = require("../passport/passport");

router.post("/signup", Authentication.signup);
router.post("/login", localLogin, Authentication.login);

// protected Resources
router.post("/", isUserAuthenticated, (req, res) => {
  res.status(200).send(`Hello ${req.user.name}`);
});

module.exports = router;
