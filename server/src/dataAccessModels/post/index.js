const mongoose = require('mongoose');

const postSchema = require('./postDb');

const postDb = mongoose.model('Post', postSchema);

module.exports = { postSchema };
module.exports = postDb;
