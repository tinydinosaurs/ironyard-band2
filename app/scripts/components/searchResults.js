import React from 'react';
import Header from './header'
import $ from 'jquery'

const BandSearch = React.createClass({
  getInitialState: function() {
    return {artists: []}
  }, 


  handleSearch: function(e) {
    e.preventDefault();
    let searchString = 'https://api.spotify.com/v1/search?q='+this.refs.search.value+'*&type=artist'; 
    
    $.get(searchString, function(result) {
      console.log(result.artists.items);
      this.setState({artists: result.artists.items});
    }.bind(this));
  },

  castVote: function(e) {
    e.preventDefault();
    console.log('send this shit along');
  },

  render: function() {
    let band = this.state.artists.map((val, i, arr) => {
      if(!val.images[0].url) {
        val.images[0].url = 'http://www.enchanting-costarica.com/wp-content/uploads/2015/09/Sloth-babies-two-toed-hugging-Credit-Sam-Trull-2014.jpg'
      }
      return (
        <div className="search-result">
          <h3>{val.name}</h3>
          <img src={val.images[0].url} />
          <button type="submit" className="vote-btn" onClick={this.castVote}>vote!</button>
        </div>
        )
    });


    return (
		<section>
      <Header />
        <form className="band-search" onSubmit={this.handleSearch}>
          <input type="text" ref="search" placeholder="search for your favorite band!" />
          <button type="submit" className="search-btn">search!</button>
        </form>
  			<h2>search results:</h2>
  			<div className="search-results">
  				{band}
  			</div>
		</section>
    )
  }
});

export default BandSearch