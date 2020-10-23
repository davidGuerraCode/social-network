const mongoose = require('mongoose');

const userSchema = require('./userDb');

const userDb = mongoose.model('User', userSchema);

module.exports = userDb;
