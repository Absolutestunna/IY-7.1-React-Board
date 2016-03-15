var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var HeaderComponent = React.createClass({displayName: "HeaderComponent",
  mixins: [Backbone.React.Component.mixin],
  addImage: function(e){
    e.preventDefault();
    var formData = {
      url: $('#url').val(),
      description: $('#form-description').val()
    }
  this.props.collection.create(formData);
  //  this.props.collection.get(formData);
  //  this.props.collection.save(formData);
   $('#url').val('');
   $('#form-description').val('');
   this.render();
 },
  handleSlider: function(){
    $(".form-body").slideToggle(500);
  },
  render: function (){
    return React.createElement("div", null, 

          React.createElement("div", {className: "row header"}, 
            React.createElement("div", {className: "col-md-12", id: "header"}), 
            React.createElement("div", {className: "form-nav"}, React.createElement("i", {onClick: this.handleSlider, className: "fa fa-plus-circle fa-2x"}))
          ), 

          React.createElement("form", {className: "form-body"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {type: "email", name: "url", className: "form-control", id: "url"})
              ), 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("textarea", {className: "form-control", name: "description", rows: "5", id: "form-description"})
              ), 
              React.createElement("button", {onClick: this.addImage, type: "button", className: "add btn btn-success"}, "Add Image"), 
              React.createElement("button", {onClick: this.clickEvent, type: "button", className: "cancel btn btn-default"}, "Cancel")
          )
      )
  },
});
module.exports = HeaderComponent;