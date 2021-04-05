const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
  name: String,
  desc: String,
  count: Number,
});

module.exports = mongoose.model("Tags", TagsSchema);
