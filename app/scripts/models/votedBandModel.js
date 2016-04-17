import Backbone from 'backbone';

const votedBandModel = Backbone.Model.extend({
	initialize: function(){
      console.log('these are bands');
  	},
	defaults: {
		id: null,
		bandName: '',
		imageUrl: '',
		voted: false,
	},
	idAttribute: 'id',
	urlRoot: 'http://small-tiyfe.herokuapp.com/collections/'
});

export default votedBandModel