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
      <div style={{marginBottom: '25px'}}>
        <h1>Get the Weather</h1>
        <form style={{width: '450px', margin: '0px auto'}} onSubmit={this.onFormSubmit}>
          <input
            style={{padding: '10px 5px', border: '1px solid #E0E0E0', color: '#000000', width: '440px', fontSize: '16px',  marginBottom: '15px'}}
            placeholder="Enter City Name"
            ref="location"
          />
          <button
            style={{color: '#03A9F4', border: '1px solid #03A9F4', backgroundColor:'#FFFFFF', padding: '10px 25px', width: '450px', fontSize: '17px'}}
          >
            Get the Weather
          </button>
        </form>
      </div>
    );
  }
}
