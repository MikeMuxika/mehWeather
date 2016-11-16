import React from 'react';

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <div>
        Meh Weather App was built in an effort to learn es6 and React.js. This project incorporates the following technologies:
        <ul style={{marginTop: '15px'}}>
          <li><a href="https://facebook.github.io/react/" target="_blank">React.js</a></li>
          <li><a href="http://es6-features.org/" target="_blank">es6/es2015</a></li>
          <li><a href="http://babeljs.io/" target="_blank">Babel.js</a></li>
          <li><a href="http://expressjs.com/" target="_blank">Express.js</a></li>
          <li><a href="http://webpack.github.io/" target="_blank">Webpack.js</a></li>
          <li><a href="http://openweathermap.org/api" target="_blank">The OpenWeatherMap API</a></li>
          <li><a href="http://foundation.zurb.com/sites/docs/" target="_blank">Zurb's Foundation 6 css Framework</a></li>
          <li><a href="heroku.com" target="_blank">Heroku</a></li>
        </ul>
        <p>You can view my other projects over at <a href="github.com/muxica" target="_blank">Github</a></p>
      </div>
    </div>
  )
};

module.exports = About;
