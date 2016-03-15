var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var model = require('../models/model');

var ImagesComponent = React.createClass({displayName: "ImagesComponent",
  render: function(){
    return React.createElement("div", null, 
      React.createElement("h1", null, "This will work"), 
      React.createElement("img", {src: this.props.model.get('url')}), 
      React.createElement("div", {className: "indPic"}, 
        React.createElement("p", {className: "pic-comments"}, this.props.model.get('description'))
      )
    )
  },

});

var indImg = React.createClass({displayName: "indImg",
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    var eachItem = this.props.collection.map(function(model){
     if (model.get('undefined') != ""){
       return (
         React.createElement(ImagesComponent, {
           model: model, 
           key: model.get('_id')}
          )
       )
     }
    });
   return(
     React.createElement("div", {className: "row"}, 
        eachItem
    )
   )
  }
});
module.exports = ImagesComponent;