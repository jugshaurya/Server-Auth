const bcrypt = require("bcrypt");

const hashedPassword = async password => {
  const saltRounds = 4;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;
};

module.exports = hashedPassword;
