var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var Model = require('./models/model');
var FormComponent = require('./components/form.jsx');
var listComponent = require('./components/listing.jsx');

var IndividualImageComponent = listComponent.IndImg;
var ListImageComponent = listComponent.ImagesComponent;

var imageModel = new Model.ImageModel();
var imageCollection = new Model.ImageCollection();
imageCollection.fetch();

ReactDOM.render(
  React.createElement(IndividualImageComponent, {collection: imageCollection})
  , document.getElementById('pics-container')
);
