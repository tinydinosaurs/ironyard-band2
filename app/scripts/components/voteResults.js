import React from 'react';
import Header from './header';
import votedBands from '../collections/votedBandCollection'

const Voted = React.createClass({
  
  getInitialState: function() {
    return (
        {voted: []}
      )
  },

  componentDidMount: function() {
    
  },

  render: function() {
    


    return (
		<section>
      <Header />
      <h2>your favorite bands:</h2>
      <div class="voted-bands">
        <div class="voted-band">
          <h3>band name</h3>
          <img src="" />
        </div>
      </div>
		</section>
    )
  }
});

export default Voted