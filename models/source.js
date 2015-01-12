var mongoose = require('mongoose');

var SourceSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    default: Date.now,
    require: true
  },
  endDate: {
    type: Date
  },
  source: {
    type: String,
    require: true
  },
  format: {
    type: String,
    require: true
  },
  subject: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  titleOriginal: {
    type: String
  },
  rating: {
    type: Number
  },
  duration: {
    type: String
  },
  year: {
    type: Number
  },
  description: {
    type: String
  },
  review: {
    type: String
  },
  link: {
    type: String
  },
  language: {
    type: String
  },
  tags: {
    type: Array
  }
});

module.exports = mongoose.model('Source', SourceSchema);