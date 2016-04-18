import Backbone from 'backbone';

const votedBandModel = Backbone.Model.extend({
	initialize: function(){
      console.log('these are bands');
  	},
	defaults: {
		bandName: '',
		imageUrl: '',
	},
	idAttribute: '_id',
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/danas_bands'
});

export default votedBandModel