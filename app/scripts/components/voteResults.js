import React from 'react';
import Header from './header';
import votedBands from '../collections/votedBandCollection';
import BandBox from './band';

const Voted = React.createClass({
  
  getInitialState: function() {
    return (
        {voted: []}
      )
  },

  componentDidMount: function() {
    votedBands.on('add', () => {
      this.setState({voted: votedBands})
    });
    votedBands.fetch()
  },

  render: function() {
    let votedBand = votedBands.map((value, i, arr) => {
       return (
          <BandBox 
            key={value.get('_id')}
            name={value.get('bandName')}
            image={value.get('imageUrl')}
          /> ) 
    })

  return (
    <section>
      <Header />
      <h2>your favorite bands:</h2>
      <div class="voted-bands">
        {votedBand}
      </div>
    </section>
    )
  }
    
});

export default Voted