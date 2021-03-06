module.exports = function(app) {
  var express = require('express');
  var <%= camelizedModuleName %>Router = express.Router();

  <%= camelizedModuleName %>Router.get('/', function(req, res) {
    res.send({
      '<%= dasherizedModuleName %>': []
    });
  });

  <%= camelizedModuleName %>Router.get('/:id', function(req, res) {
    res.send({
      '<%= dasherizedModuleName %>': {
        id: req.params.id
      }
    });
  });

/**
  The POST and PUT call will not contain a request body
  because the body-parser is not included by default.
  To use req.body, run:

     npm install --save-dev body-parser

  After installing, you need to `use` the body-parser for
  this mock by appending:

     app.use('/api/<%= decamelizedModuleName %>', require('body-parser'));

*/   
  <%= camelizedModuleName %>Router.post('/', function(req, res) {
    res.status(201).end();
  });

  <%= camelizedModuleName %>Router.put('/:id', function(req, res) {
    res.send({
      '<%= dasherizedModuleName %>': {
        id: req.params.id
      }
    });
  });

  <%= camelizedModuleName %>Router.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/<%= decamelizedModuleName %>', <%= camelizedModuleName %>Router);
};
