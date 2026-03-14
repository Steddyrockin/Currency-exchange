const passport = require("passport")
const FacebookStrategy = require("passport-facebook").Strategy

passport.use(new FacebookStrategy({

    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "/auth/facebook/callback"

}, function(accessToken, refreshToken, profile, done){

    return done(null, profile)

}))