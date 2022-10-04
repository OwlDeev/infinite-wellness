const express = require("express");
const passport = require("passport");
var PORT = 5000;
const session = require('express-session');

require("./auth");

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

const app = express();


// After you declare "app"
app.use(session({ secret: 'melody hensley is my spirit animal' }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/protected", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/protected",
    failureRedirect: "/auth/failure",
  })
);

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/secrets",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  }
);

app.get("/secrets", isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get("/auth/failure", (req, res) => {
  res.send("algo esta mal");
});

app.get("./logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("nos vimos");
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
