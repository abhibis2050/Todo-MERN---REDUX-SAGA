const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    unique: true,
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
