var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};


var HeaderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  addImage: function(e){
    e.preventDefault();
    var formData = {
      url: $('#url').val(),
      description: $('#form-description').val()
    }
   this.props.collection.get(formData);
   this.props.collection.save(formData);
 },
  handleClick: function(){
    $(".form-body").slideToggle(500);
  },
  render: function (){
    return <div>
          <div className="row header">
            <div className="col-md-12" id='header'></div>
              <button onClick = {this.handleClick} className="button"><div className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></div></button>
          </div>

          <form className = 'form-body'>
              <div className="form-group">
                <input type="email" name="url" className="form-control" id="url"/>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="description" rows="5" id='form-description'></textarea>
              </div>
              <button onClick={this.addImage}  type="button" className='add btn btn-success'>Add Image</button>
              <button onClick={this.clickEvent} type="button" className='cancel btn btn-default'>Cancel</button>
          </form>
      </div>
  },

});

module.exports = HeaderComponent;
