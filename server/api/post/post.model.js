'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  contents: String
});

module.exports = mongoose.model('Post', PostSchema);
