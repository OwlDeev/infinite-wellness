const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const FacebookStrategy = require("passport-facebook");

const GOOGLE_CLIENT_ID =
  "910031431035-r9no81lorghcvkdi2skfms27dvcoa4ag.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_CLIENT_ID = "1068070560519723";
const FACEBOOK_CLIENT_SECRET = "7c49f6f0b76a6ed8f0da692777337fbc";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/secrets",
    },

    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
