import React from 'react';
import Navigation from './Navigation';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="medium-6 large-6 columns small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
