// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js

var exports = module.exports = {};

exports.TOKENS = {
    'twitterAuth' : {
        'TWITTER_CONSUMER_KEY': "P30yndVeYLQLbvVGiuABq6ta1",
        'TWITTER_CONSUMER_SECRET': "vgM7xMnNhjF9EyS5UrBfWftnDGEXseUEAAWxMIEmB7Bepgkofz",
        'TWITTER_ACCESS_TOKEN': "827804731477258240-jpx9bcZulMy08250ZdqXoIRrXuuaaXm",
        'TWITTER_TOKEN_SECRET': "19BywUWMzkKmniPEyMdT6KW1tFTejwd4vlYUMsrjTPrnL",
    },
    'instagramAuth': {
        'clientID': '09705dc092794013b525ad1c8fad0ae7',
        'clientSecret': '6cd3e802f3fd4d19979bb87611560298',
        'callbackURL': 'http://localhost:4000/auth/instagram/redirect'
    },
    'redditAuth': {
        'clientID': 'Y7ElSEFlu91IaQ',
        'clientSecret': 'lHOPv8WDsVIRJccljWmI3MqLpiM',
        'callbackURL': 'http://localhost:4000/auth/reddit/redirect'
    }

};


exports.MONGODB = {
  MONGODB_URI: `mongodb://taha:qwe123@ds151596.mlab.com:51596/clover`
};

exports.SESSION = {
  COOKIE_KEY: "thisappisawesome"
};



