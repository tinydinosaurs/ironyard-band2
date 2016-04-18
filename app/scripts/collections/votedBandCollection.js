import Backbone from 'backbone';
import votedBandModel from '../models/votedBandModel';


const votedBandCollection = Backbone.Collection.extend({
	model: votedBandModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/danas_bands'
});


var votedBands = new votedBandCollection();

export default votedBands