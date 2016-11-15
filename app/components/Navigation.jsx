import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

var Navigation = (props) => {
  return (
    <div style={{backgroundColor: '#E0E0E0'}}>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
}

module.exports = Navigation;
