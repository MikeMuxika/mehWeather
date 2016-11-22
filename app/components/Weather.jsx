import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import OpenWeatherMap from 'api/OpenWeatherMap';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  handleSearch = (location) => {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  };
  render() {
    var {isLoading, location, temp, errorMessage} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }
    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message="Error: City Not Found"/>
        )
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}
