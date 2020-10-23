const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { interactionSchema } = require('../interaction');

const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  type: { type: String, required: true },
  url: { type: String, required: true },
  caption: String,
  posted: { type: Date, default: Date.now },
  interactions: [interactionSchema],
});

module.exports = postSchema;
