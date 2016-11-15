import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

var Navigation = (props) => {
  return (
    <div style={{backgroundColor: '#E0E0E0'}}>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} style={{color: '#03A9F4', textDecoration: 'none'}}>Get Weather</IndexLink>
      <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}} style={{color: '#03A9F4', textDecoration: 'none'}}>About</Link>
      <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}} style={{color: '#03A9F4', textDecoration: 'none'}}>Examples</Link>
    </div>
  );
}

module.exports = Navigation;
