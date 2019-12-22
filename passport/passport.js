const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const config = require("../config");
const UserModel = require("../models/user");

const opts = {
  // header should have `Authorization: BEARER token`
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWTSECRETKEY
};

passport.use(
  new JwtStrategy(opts, function(token_stored_payload, done) {
    console.log(token_stored_payload);
    UserModel.findOne({ email: token_stored_payload.email }, function(
      err,
      user
    ) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport.authenticate("jwt", { session: false });
