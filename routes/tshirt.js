var Tshirt = require('../models/tshirt.js');

module.exports = function(app) {
  findAll = function(req, res) {
    console.log("GET - /tshirt");
    return Tshirt.find(function(err, tshirts) {
      if(!err) {
        return res.send(tshirts);
      } else {
        res.statusCode = 500;
        console.log('Internal error(%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };

  findById = function(req, res) {

    console.log("GET - /tshirt/:id");
    return Tshirt.findById(req.params.id, function(err, tshirt) {

      if(!tshirt) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if(!err) {
        return res.send({ status: 'OK', tshirt:tshirt });
      } else {

        res.statusCode = 500;
        console.log('Internal error(%d): %s', res.statusCode, err.message);
        return res.send({ error: 'Server error' });
      }
    });
  };

  addTshirt = function(req, res) {

    console.log('POST - /tshirt');

    var tshirt = new Tshirt({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      source: req.body.source,
      format: req.body.format,
      subject: req.body.subject,
      title: req.body.title,
      author: req.body.author,
      titleOriginal: req.body.titleOriginal,
      rating: req.body.rating,
      duration: req.body.duration,
      year: req.body.year,
      description: req.body.description,
      review: req.body.review,
      link: req.body.link,
      language: req.body.language,
      tags: req.body.tags
    });

    tshirt.save(function(err) {

      if(err) {

        console.log('Error while saving tshirt: ' + err);
        res.send({ error:err });
        return;

      } else {

        console.log("Tshirt created");
        return res.send({ status: 'OK', tshirt:tshirt });

      }

    });

  };

  updateTshirt = function(req, res) {

    console.log("PUT - /tshirt/:id");
    return Tshirt.findById(req.params.id, function(err, tshirt) {

      if(!tshirt) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      if (req.body.startDate != null) tshirt.startDate = req.body.startDate;
      if (req.body.endDate != null) tshirt.endDate = req.body.endDate;
      if (req.body.source != null) tshirt.source = req.body.source;
      if (req.body.format != null) tshirt.format  = req.body.format;
      if (req.body.subject != null) tshirt.subject = req.body.subject;
      if (req.body.title != null) tshirt.title = req.body.title;
      if (req.body.author != null) tshirt.author = req.body.author;
      if (req.body.titleOriginal != null) tshirt.titleOriginal = req.body.titleOriginal;
      if (req.body.rating != null) tshirt.rating = req.body.rating;
      if (req.body.duration != null) tshirt.duration = req.body.duration;
      if (req.body.year != null) tshirt.year = req.body.year;
      if (req.body.description != null) tshirt.description = req.body.description;
      if (req.body.review != null) tshirt.review = req.body.review;
      if (req.body.link != null) tshirt.link = req.body.link;
      if (req.body.language != null) tshirt.language = req.body.language;
      if (req.body.tags != null) tshirt.tags = req.body.tags;

      return tshirt.save(function(err) {
        if(!err) {
          console.log('Updated');
          return res.send({ status: 'OK', tshirt:tshirt });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Server error' });
          }
          console.log('Internal error(%d): %s',res.statusCode,err.message);
        }

        res.send(tshirt);

      });
    });
  };

  deleteTshirt = function(req, res) {

    console.log("DELETE - /tshirt/:id");
    return Tshirt.findById(req.params.id, function(err, tshirt) {
      if(!tshirt) {
        res.statusCode = 404;
        return res.send({ error: 'Not found' });
      }

      return tshirt.remove(function(err) {
        if(!err) {
          console.log('Removed tshirt');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Internal error(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Server error' });
        }
      })
    });
  }

  //Link routes and actions
  app.get('/api/tshirt', findAll);
  app.get('/api/tshirt/:id', findById);
  app.post('/api/tshirt', addTshirt);
  app.put('/api/tshirt/:id', updateTshirt);
  app.delete('/api/tshirt/:id', deleteTshirt);

}