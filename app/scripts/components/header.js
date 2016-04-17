import React from 'react';
import {Link} from 'react-router';


const Header = React.createClass({
  render: function() {
    return (
    <header>
      <h1>bring the band!</h1>
      <Link to="/">search</Link>
      <Link to="/voted">voted</Link>
    </header>
    )
  }
}); 

export default Header