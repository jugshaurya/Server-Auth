const User = require("../models/user");
exports.signup = async (req, res, next) => {
  // TODO: Client Side Verification
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user)
    return res.status(422).send("User already Available! Unprocessable Entity");

  try {
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();
    res.status(201).send("User Created");
  } catch (error) {
    return next(error);
  }
};

exports.signin = (req, res, next) => {
  res.send("Signin");
};
