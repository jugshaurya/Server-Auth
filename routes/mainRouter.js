const router = require("express").Router();
const Authentication = require("../controllers/authentication");

router.get("/", (req, res) => {
  console.log("Hello From Server");
  res.status(200).send("Sucessfully connected to server");
});

router.post("/signup", Authentication.signup);
router.post("/signin", Authentication.signin);

module.exports = router;
