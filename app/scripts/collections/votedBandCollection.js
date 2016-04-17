import Backbone from 'backbone';
import votedBand from '../models/votedBandModel';


const votedBandCollection = Backbone.Collection.extend({
	model: PostingModel,
	url: 'http://small-tiyfe.herokuapp.com/collections/'
});


var votedBands = new votedBandCollection();

export default votedBands