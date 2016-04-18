import React from 'react';
import $ from 'jquery'
import votedBandCollection from '../collections/votedBandCollection'

const searchResult = React.createClass({

  castVote: function(e) {
    e.preventDefault();
    // console.log(this.refs.name.innerHTML);
    let votedBand = {
      bandName: this.props.name,
      imageUrl: this.props.image
    };
    votedBandCollection.create(votedBand);
  },

  render: function() {
      return (
        <div className="search-result" key={this.props.id}>
          <h3 ref="name">{this.props.name}</h3>
          <img ref="image" src={this.props.image} />
          <button type="submit" className="vote-btn" onClick={this.castVote}>vote!</button>
        </div>
        )
    }
});

export default searchResult