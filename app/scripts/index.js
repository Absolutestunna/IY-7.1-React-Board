var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Model = require('./models/model');
var FormComponent = require('./components/form.jsx');
// var listComponent = require('./components/list.jsx');


var imageCollection = new Model.ImageCollection();
ReactDOM.render(
  <FormComponent collection={imageCollection} />,
  document.getElementById('body')
);

// new Model.ImageCollection();
