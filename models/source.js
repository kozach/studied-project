var mongoose = require('mongoose');

var SourceSchema = new mongoose.Schema({
  startDate: {
    type: Array,
    require: true
  },
  endDate: {
    type: Array
  },
  // source: {
  //   type: String,
  //   require: true
  // },
  format: {
    type: String,
    require: true
  },
  // subject: {
  //   type: String,
  //   require: true
  // },
  title: {
    type: String,
    require: true
  },
  author: {
    type: Array,
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
  // description: {
  //   type: String
  // },
  review: {
    type: String
  },
  link: {
    type: String
  },
  // language: {
  //   type: String
  // },
  tags: {
    type: Array
  }
});

module.exports = mongoose.model('Source', SourceSchema);