const express = require('express');
const passport = require('passport');
const session = require('express-session');

require('./auth');

function isLoggedIn(req, res, next){
    req.user ? next() : res.sendStatus(401);
}

const app = express();

app.use(session({ secret:'cats'}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/login',(req, res)=>{
    res.send('<a href="/auth/google">authenticate with google</a>')
} );

app.get('/protected',isLoggedIn,(req, res) =>{
    res.send(`Hello ${req.user.displayName}`);
});

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure'
}));

app.get('/auth/failure', (req, res) =>{
    res.send('algo esta mal');
});

app.get('./logout',(req, res)=>{
    req.logout();
    req.session.destroy();
    res.send('nos vimos');
})

app.listen(5000,()=> console.log('esta tomando el puerto 5000'))