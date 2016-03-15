var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var model = require('../models/model');

var ImagesComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (<div>
      <div className="indPic">
        <img src={this.props.model.get('url')} />
        <p className="pic-comments">{this.props.model.get('description')}</p>
      </div>
    </div>
    )
  },

});

var IndImg = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var eachItem = this.props.collection.map(function(model){
     if (model.get('url') != ""){
       return (
         <ImagesComponent
           model={model}
           key={model.id}
          />
       )
     }
   }); //end of map

   return(
     <div className="row">
        {eachItem}
    </div>
   )
  }
});
module.exports = {
  'ImagesComponent': ImagesComponent,
  'IndImg': IndImg
};
