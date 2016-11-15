import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      It is {temp}° in {location}
    </div>
  );
}

module.exports = WeatherMessage
