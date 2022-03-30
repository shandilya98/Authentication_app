const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    MobileNo:{
        type: Number,
        required: true,
        min: 10,
        max: 10,
        unique: true,
    }
}
);
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);

    