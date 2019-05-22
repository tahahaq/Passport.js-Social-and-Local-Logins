const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  screen_name: String,
  social_id: String,
  email : String,
  social_platform_name : String,
  profile_image_url: String
});

const User = mongoose.model("user", userSchema);

module.exports = User;
