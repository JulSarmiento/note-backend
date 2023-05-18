const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users.model');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  username: {
    type: Schema.ObjectId,
    ref: User,
  },
  content: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 2000,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Note', noteSchema);