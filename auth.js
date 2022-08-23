const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const GOOGLE_CLIENT_ID =
  "910031431035-r9no81lorghcvkdi2skfms27dvcoa4ag.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

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

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
