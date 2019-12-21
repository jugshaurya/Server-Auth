const mongoose = require("mongoose");
const hashedPassword = require("../utils/hashedPassword");

// describe schema using mongoose.Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

// Hashing the password before saving the user
// we need function() here because we will call newUser.save()
// and this points to newUser only if we dont use
// arrow function as they ahve lexical scoping
userSchema.pre("save", async function(next) {
  // console.log(this);
  try {
    const hashedPass = await hashedPassword(this.password);
    this.password = hashedPass;
    return next();
  } catch (error) {
    return next(error);
  }
});

// descibe model class using mongoose.model
// later in db 'User' becomes plural anf all lowecase means
// our db will be names users
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
