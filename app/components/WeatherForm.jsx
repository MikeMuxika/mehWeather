import React from 'react';

export default class WeatherForm extends React.Component {
  onFormSubmit = (e) => {
    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  };
  render() {
    return (
      <div>
        <h1>Get the Weather</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Enter City Name"
            ref="location"
          />
          <button>
            Get the Weather
          </button>
        </form>
      </div>
    );
  }
}
