const User = require("../models/user");
const createToken = require("../utils/createToken");

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
      password // password will be hashed before `save`
    });

    const token = await createToken({ email });
    await newUser.save();
    res.status(201).send({ token });
  } catch (error) {
    return next(error);
  }
};

exports.signin = (req, res, next) => {
  res.send("Signin");
};
