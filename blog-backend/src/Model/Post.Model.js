const { default: mongoose } = require("mongoose");

const PostSchema = mongoose.Schema({
  post_title: { String },
  post_content: { String },
  post_author: { String },
  post_date: { Date },
});

module.exports = mongoose.model("Post", PostSchema);
