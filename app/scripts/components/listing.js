var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var model = require('../models/model');

var ImagesComponent = React.createClass({displayName: "ImagesComponent",
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (React.createElement("div", null, 
      React.createElement("div", {className: "indPic"}, 
        React.createElement("img", {src: this.props.model.get('url')}), 
        React.createElement("p", {className: "pic-comments"}, this.props.model.get('description'))
      )
    )
    )
  },

});

var IndImg = React.createClass({displayName: "IndImg",
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var eachItem = this.props.collection.map(function(model){
     if (model.get('url') != ""){
       return (
         React.createElement(ImagesComponent, {
           model: model, 
           key: model.id}
          )
       )
     }
   }); //end of map

   return(
     React.createElement("div", {className: "row"}, 
        eachItem
    )
   )
  }
});
module.exports = {
  'ImagesComponent': ImagesComponent,
  'IndImg': IndImg
};