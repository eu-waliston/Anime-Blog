const { default: mongoose } = require("mongoose");

const PostSchema = mongoose.Schema({
  post_title: { String, required: true },
  post_content: { String, required: true },
  post_author: { String, required: true },
  post_date: { Date, required: true },
});

module.exports = mongoose.model("Post", PostSchema);
