import React from 'react';
import Header from './header'

const Search = React.createClass({
  render: function() {
    return (
		<section>
      <Header />
  			<h2>search results:</h2>
  			<div className="search-results">
  				<div className="search-result">
  					<h3>band name</h3>
  					<img src='' />
  					<button type="submit" className="vote-btn">vote!</button>
  				</div>
  			</div>
		</section>
    )
  }
});

export default Search