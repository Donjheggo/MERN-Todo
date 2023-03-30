const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    email: {
      type: String,
      require: [true, "Please add a email"],
      unique: true,
      lowercase: true, // this line makes email addresses case-insensitive and store them in lowercase
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
