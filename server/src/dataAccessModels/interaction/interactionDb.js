const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const { commentsSchema } = require('../comments');

const interactionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  likes: {
    likers: [{ type: String, unique: true }],
    likeReceiver: String,
  },
  comments: [commentsSchema],
});

module.exports = interactionSchema;
