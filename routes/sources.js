var Source = require('../models/source');
var express = require('express');
var router = express.Router();

router.route('/sources')
  .post(function(req, res) {
    var source = new Source();

    source.endDate = req.body.endDate;
    source.startDate = req.body.startDate;
    source.source = req.body.source;
    source.format = req.body.format;
    source.subject = req.body.subject;
    source.title = req.body.title;
    source.author = req.body.author;
    source.titleOriginal = req.body.titleOriginal;
    source.rating = req.body.rating;
    source.duration = req.body.duration;
    source.year = req.body.year;
    source.description = req.body.description;
    source.review = req.body.review;
    source.link = req.body.link;
    source.language = req.body.language;
    source.tags = req.body.tags;

    source.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Source added',
        data: source
      });
    });
  })

  .get(function(req, res) {
    Source.find(function(err, sources) {
      if (err)
        res.send(err);

      res.json(sources);
    });
  });

router.route('/sources/:source_id')
  .get(function(req, res) {
    Source.findById(req.params.source_id, function(err, source) {
      if (err)
        res.send(err);

      res.json(source);
    });
  })
  .put(function(req, res) {
    Source.findById(req.params.source_id, function(err, source) {
      if (err)
        res.send(err);

      source.endDate = req.body.endDate;
      source.startDate = req.body.startDate;
      source.source = req.body.source;
      source.format = req.body.format;
      source.subject = req.body.subject;
      source.title = req.body.title;
      source.author = req.body.author;
      source.titleOriginal = req.body.titleOriginal;
      source.rating = req.body.rating;
      source.duration = req.body.duration;
      source.year = req.body.year;
      source.description = req.body.description;
      source.review = req.body.review;
      source.link = req.body.link;
      source.language = req.body.language;
      source.tags = req.body.tags;

      source.save(function(err) {
        if (err)
          res.send(err);

        res.json(source);
      });
    });
  })
  .delete(function(req, res) {
    Source.findByIdAndRemove(req.params.source_id, function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Source removed'
      });
    });
  });

module.exports = router;
