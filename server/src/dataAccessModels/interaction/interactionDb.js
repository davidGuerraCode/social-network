const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interactionSchema = new Schema({
  likesTo: [{ type: String }],
  interactReceiver: String,
  shares: [String],
  saved: [String],
  comments: {
    writtenBy: { type: Schema.Types.ObjectId },
    comment: String,
  },
});

module.exports = interactionSchema;
