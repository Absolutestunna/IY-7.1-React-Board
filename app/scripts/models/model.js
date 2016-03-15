var Backbone = require('backbone');

var ImageModel = Backbone.Model.extend({


});

var ImageCollection = Backbone.Model.extend({
  model: ImageModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/ReactImages'

});

module.exports = {
  'ImageModel': ImageModel,
  'ImageCollection': ImageCollection
};
