import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }
  onSearch = (e) => {
    e.preventDefault();
    alert('Not Yet Wired Up');
  }
  render() {
    return (
      <div className="top-bar" style={{marginBottom: '25px'}}>
        <div className="top-bar-left">
          <ul className="menu align-left">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather"/>
              </li>
              <li style={{paddingLeft: '10px'}}>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}


module.exports = Navigation;
