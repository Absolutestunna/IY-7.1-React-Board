var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Model = require('./models/model');
var FormComponent = require('./components/form.jsx');
var ListComponent = require('./components/listing.jsx');


var imageCollection = new Model.ImageCollection();
imageCollection.fetch()

ReactDOM.render(<div>
              <FormComponent collection={imageCollection} />
              </div>
  , document.getElementById('body'));

ReactDOM.render(<ListComponent collection={imageCollection}/>, document.getElementById('pics-container'));
