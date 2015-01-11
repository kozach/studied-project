var Beer = require('../models/beer');
var express = require('express');
var router = express.Router();

router.route('/beers')
  .post(function(req, res) {
    var beer = new Beer();

    beer.endDate = req.body.endDate;
    beer.startDate = req.body.startDate;
    beer.source = req.body.source;
    beer.format = req.body.format;
    beer.subject = req.body.subject;
    beer.title = req.body.title;
    beer.author = req.body.author;
    beer.titleOriginal = req.body.titleOriginal;
    beer.rating = req.body.rating;
    beer.duration = req.body.duration;
    beer.year = req.body.year;
    beer.description = req.body.description;
    beer.review = req.body.review;
    beer.link = req.body.link;
    beer.language = req.body.language;
    beer.tags = req.body.tags;

    beer.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Beer added to the locker!',
        data: beer
      });
    });
  })

  .get(function(req, res) {
    Beer.find(function(err, beers) {
      if (err)
        res.send(err);

      res.json(beers);
    });
  });

router.route('/beers/:beer_id')
  .get(function(req, res) {
    Beer.findById(req.params.beer_id, function(err, beer) {
      if (err)
        res.send(err);

      res.json(beer);
    });
  })
  .put(function(req, res) {
    Beer.findById(req.params.beer_id, function(err, beer) {
      if (err)
        res.send(err);

      beer.endDate = req.body.endDate;
      beer.startDate = req.body.startDate;
      beer.source = req.body.source;
      beer.format = req.body.format;
      beer.subject = req.body.subject;
      beer.title = req.body.title;
      beer.author = req.body.author;
      beer.titleOriginal = req.body.titleOriginal;
      beer.rating = req.body.rating;
      beer.duration = req.body.duration;
      beer.year = req.body.year;
      beer.description = req.body.description;
      beer.review = req.body.review;
      beer.link = req.body.link;
      beer.language = req.body.language;
      beer.tags = req.body.tags;

      beer.save(function(err) {
        if (err)
          res.send(err);

        res.json(beer);
      });
    });
  })
  .delete(function(req, res) {
    Beer.findByIdAndRemove(req.params.beer_id, function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Beer removed from the locker!'
      });
    });
  });

module.exports = router;
