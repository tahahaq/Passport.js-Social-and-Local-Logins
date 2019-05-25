const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");
const InstagramStrategy = require("passport-instagram");
const RedditStrategy = require('passport-reddit').Strategy;
const User = require("../models/user-model");

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
        .catch(e => {
            done(new Error("Failed to deserialize an user"));
        });
});




passport.use(
    new  RedditStrategy(
        {
            clientID: keys.TOKENS.redditAuth.clientID,
            clientSecret: keys.TOKENS.redditAuth.clientSecret,
            callbackURL:"/auth/reddit/redirect"
        },
        async (token, tokenSecret, profile, done) => {
            // find  user in UserModel
            const newUser = await new User({
                name: profile._json.data.full_name,
                screen_name: profile._json.data.username,
                social_id: profile._json.data.id,
                social_platform_name: "reddit",
                profile_image_url: profile._json.data.profile_picture,
                email: null
            }).save();
            if (newUser) {
                done(null, newUser);
            }

        }
    )
);


//////////////////////////////////////////////    INSTAGRAM AUTH      ////////////////////////////////////////////////


passport.use('instagram-authz',
    new InstagramStrategy(
        {
            clientID: keys.TOKENS.instagramAuth.clientID,
            clientSecret: keys.TOKENS.instagramAuth.clientSecret,
            callbackURL:"/auth/instagram/redirect/loggedIn"
        },
        async (token, tokenSecret, profile, done) => {
            // find  user in UserModel
            const newUser = await new User({
                name: profile._json.data.full_name,
                screen_name: profile._json.data.username,
                social_id: profile._json.data.id,
                social_platform_name: "instagram",
                profile_image_url: profile._json.data.profile_picture,
                email: null
            }).save();
            if (newUser) {
                done(null, newUser);
            }

        }
    )
);

passport.use(
    new InstagramStrategy(
        {
            clientID: keys.TOKENS.instagramAuth.clientID,
            clientSecret: keys.TOKENS.instagramAuth.clientSecret,
            callbackURL:"/auth/instagram/redirect"
        },
        async (token, tokenSecret, profile, done) => {
            // find  user in UserModel
                const newUser = await new User({
                    name: profile._json.data.full_name,
                    screen_name: profile._json.data.username,
                    social_id: profile._json.data.id,
                    social_platform_name: "instagram",
                    profile_image_url: profile._json.data.profile_picture,
                    email: null
                }).save();
                if (newUser) {
                    done(null, newUser);
                }

            }
    )
);

//////////////////////////////////////////////    TWITTER AUTH      ////////////////////////////////////////////////


passport.use('twitter-authz',
    new TwitterStrategy(
        {
            consumerKey: keys.TOKENS.twitterAuth.TWITTER_CONSUMER_KEY,
            consumerSecret: keys.TOKENS.twitterAuth.TWITTER_CONSUMER_SECRET,
            callbackURL: "http://localhost:4000/auth/twitter/redirect/loggedIn"
        },
        async (token, tokenSecret, profile, done) => {
            console.log("here")
            console.log(profile._json)
            const newUser = await new User({
                name: profile._json.name,
                screen_name: profile._json.screen_name,
                social_id: profile._json.id_str,
                social_platform_name: "twitter",
                profile_image_url: profile._json.profile_image_url,
                email: null
            }).save();
            if (newUser) {
                console.log("here2")
                done(null, newUser);
            }
        }
    )
);


passport.use(
    new TwitterStrategy(
        {
            consumerKey: keys.TOKENS.twitterAuth.TWITTER_CONSUMER_KEY,
            consumerSecret: keys.TOKENS.twitterAuth.TWITTER_CONSUMER_SECRET,
            callbackURL: "/auth/twitter/redirect"
        },
        async (token, tokenSecret, profile, done) => {
            // find  user in UserModel
            console.log(profile._json)
                const newUser = await new User({
                    name: profile._json.name,
                    screen_name: profile._json.screen_name,
                    social_id: profile._json.id_str,
                    social_platform_name: "twitter",
                    profile_image_url: profile._json.profile_image_url,
                    email: null
                }).save();
                if (newUser) {
                    done(null, newUser);
                }

        }
    )
);
