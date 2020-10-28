const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  type: { type: String, required: true },
  url: { type: String, required: true },
  caption: String,
  postedAt: { type: Date, default: Date.now },
  interactions: {
    likesTo: [{ type: String }],
    interactReceiver: String,
    shares: [String],
    saved: [String],
    comments: [
      {
        writtenBy: { type: Schema.Types.ObjectId },
        comment: String,
      },
    ],
  },
});

module.exports = postSchema;
