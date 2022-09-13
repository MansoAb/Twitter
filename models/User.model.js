const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  saves: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", schema);

module.exports = User;
