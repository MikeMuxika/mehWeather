import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fe080667fd2d20a2cc200a4f0426c84d&units=imperial';

// key=fe080667fd2d20a2cc200a4f0426c84d

module.exports = {
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
};
