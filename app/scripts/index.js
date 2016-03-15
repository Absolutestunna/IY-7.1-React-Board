var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Model = require('./models/model');
var FormComponent = require('./components/form.jsx');
var listComponent = require('./components/listing.jsx');

var IndividualImageComponent = listComponent.IndImg;
var ListImageComponent = listComponent.ImagesComponent;

var imageModel = new Model.ImageModel();
var imageCollection = new Model.ImageCollection();
imageCollection.fetch()


ReactDOM.render(<div>
              <FormComponent collection={imageCollection} />
              </div>
  , document.getElementById('body'));

ReactDOM.render(<IndividualImageComponent collection={imageCollection}/>, document.getElementById('pics-container'));
