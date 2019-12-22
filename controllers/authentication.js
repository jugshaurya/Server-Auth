const User = require("../models/user");
const createToken = require("../utils/createToken");

exports.signup = async (req, res, next) => {
  // TODO: Client Side Verification of req.body
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user)
    return res.status(422).send("User already Available! Unprocessable Entity");

  try {
    const newUser = new User({
      name,
      email,
      password // password will be hashed before `save`
    });

    const token = await createToken({ email });
    await newUser.save();
    res.status(201).send({ token, message: "New User Created" });
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await createToken(req.user);
    return res
      .status(200)
      .send({ token, message: `Welcome Back ${req.user.name}` });
  } catch (error) {
    return next(error);
  }
};
