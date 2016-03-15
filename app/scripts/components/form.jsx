var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var $ = require('jquery');
require('backbone-react-component');


var HeaderComponent = React.createClass({
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
    return <div>

          <div className="row header">
            <div className="col-md-12" id='header'></div>
            <div className="form-nav"><i onClick = {this.handleSlider} className="fa fa-plus-circle fa-2x"></i></div>
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
