import React from 'react';
import Header from './header';
import $ from 'jquery';
import votedBandCollection from '../collections/votedBandCollection';
import searchResult from './searchResult';

const BandSearch = React.createClass({
  getInitialState: function() {
    return {artists: []}
  }, 

  handleSearch: function(e) {
    e.preventDefault();
    let searchString = 'https://api.spotify.com/v1/search?q='+this.refs.search.value+'*&type=artist'; 
    
    $.get(searchString, function(result) {
      // console.log(result.artists.items);
      this.setState({artists: result.artists.items});
    }.bind(this));
  },


  render: function() {
    let band = this.state.artists.map((val, i, arr) => {
      if(!val.images[0]) {
        val.images.push({url: 'http://www.enchanting-costarica.com/wp-content/uploads/2015/09/Sloth-babies-two-toed-hugging-Credit-Sam-Trull-2014.jpg'});
      }
      console.log('searching')
      return (
        <searchResult 
          key={val.id} 
          name={val.name} 
          image={val.images[0].url} 
          />
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
        <div>{band}</div>
		</section>
    )
  }
});

export default BandSearch