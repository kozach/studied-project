var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tshirt = new Schema({
  startDate: {
    type: Date,
    default: Date.now,
    require: true
  },
  endDate: {
    type: Date,
    default: Date.now
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
    type: Number,
    max: 5,
    min: 1
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

// Tshirt.path('model').validate(function(v) {
//   return ((v != "") && (v != null));
// });

module.exports = mongoose.model('Tshirt', Tshirt);
