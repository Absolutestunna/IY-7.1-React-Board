var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

var model = require('../models/model');

var ImagesComponent = React.createClass({
  render: function(){
    return <div>
      <h1>This will work</h1>
      <img src={this.props.model.get('url')}/>
      <div className="indPic">
        <p className="pic-comments">{this.props.model.get('description')}</p>
      </div>
    </div>
  },

});

var indImg = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    var eachItem = this.props.collection.map(function(model){
     if (model.get('undefined') != ""){
       return (
         <ImagesComponent
           model={model}
           key={model.get('_id')}
          />
       )
     }
    });
   return(
     <div className="row">
        {eachItem}
    </div>
   )
  }
});
module.exports = ImagesComponent;
