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
        <h2 className="text-center" style={{marginBottom: '25px'}}>Get the Weather</h2>
        <form onSubmit={this.onFormSubmit}>
          <div className="row">
            <div className="large-8 columns">
              <label>
                <input type="text" placeholder="Enter City Name" ref="location" />
              </label>
            </div>
            <div className="large-4 columns">
              <button className="button expanded hollow">
                Get the Weather
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
