import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'components/Main';
import Weather from 'components/Weather';
import About from 'components/About';
import Examples from 'components/Examples';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather} />
      <Route path="/About" component={About} />
      <Route path="/Examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
