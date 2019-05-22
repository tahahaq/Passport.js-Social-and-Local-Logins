// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: "P30yndVeYLQLbvVGiuABq6ta1",
  TWITTER_CONSUMER_SECRET: "vgM7xMnNhjF9EyS5UrBfWftnDGEXseUEAAWxMIEmB7Bepgkofz",
  TWITTER_ACCESS_TOKEN: "827804731477258240-jpx9bcZulMy08250ZdqXoIRrXuuaaXm",
  TWITTER_TOKEN_SECRET: "19BywUWMzkKmniPEyMdT6KW1tFTejwd4vlYUMsrjTPrnL"
};


const MONGODB = {
  MONGODB_URI: `mongodb://taha:qwe123@ds151596.mlab.com:51596/clover`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
