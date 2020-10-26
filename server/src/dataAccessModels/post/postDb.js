const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { interactionSchema } = require('../interaction');

const postSchema = new Schema({
  type: { type: String, required: true },
  url: { type: String, required: true },
  caption: String,
  postedAt: { type: Date, default: Date.now },
  interactions: interactionSchema,
});

module.exports = postSchema;
