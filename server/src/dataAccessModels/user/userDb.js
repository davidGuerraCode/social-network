const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { postSchema } = require('../post');

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  gender: String,
  isVerified: { type: Boolean, default: false },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  // posts: [postSchema],
});

module.exports = userSchema;
