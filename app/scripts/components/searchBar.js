import React from 'react';
import $ from 'jquery';

const BandSearch = React.createClass({
  handleSearch: function(e) {
    e.preventDefault();

  },

  render: function() {
    return (
      <form onSubmit={this.handleSearch}>
        <input type="text" placeholder="search for your favorite band!" />
        <button type="submit" className="search-btn">search!</button>
      </form>
    )
  }
});

export default BandSearch;