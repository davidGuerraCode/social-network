const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  commenter: { type: Schema.Types.ObjectId },
  comment: String,
});

module.exports = commentsSchema;
