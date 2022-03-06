const mongoose = require("../connection");

const schema = mongoose.Schema({
  title: String,
  description: String,
  tags: Array,
  file: String,
  author: { type: mongoose.Types.ObjectId, ref: "users" },
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("images", schema);

module.exports = model;
