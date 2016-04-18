import React from 'react';
import $ from 'jquery';
import votedBandCollection from '../collections/votedBandCollection';



 const BandBox = React.createClass({
	render: function() {
		return (
			<div className="search-result" key={this.props.id}>
				<h3 ref="name">{this.props.name}</h3>
				<img ref="image" src={this.props.image} />
	 		</div> 
		);
	}
});

export default BandBox