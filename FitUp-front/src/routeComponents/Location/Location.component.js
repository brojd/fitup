import React, { Component, PropTypes } from 'react';
import { GEOCODING_API_URL, GEOCODING_API_KEY, DEFAULT_CITY } from '../../../config';
import axios from 'axios';

class Location extends Component {
  constructor() {
    super();
    this._setLocation = this._setLocation.bind(this);
    this.state = {
      userLocation: '',
    };
  }
  _setLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      let userLat = position.coords.latitude;
      let userLng = position.coords.longitude;
      axios.get(`${GEOCODING_API_URL}?latlng=${userLat},${userLng}&key=${GEOCODING_API_KEY}`)
        .then((response) => {
          if (response.data.status === 'OK') {
            let currentCity = response.data.results[0].address_components[2].long_name;
            this.setState({userLocation: currentCity});
            return currentCity;
          } else {
            this.setState({userLocation: DEFAULT_CITY});
            return DEFAULT_CITY;
          }
        })
        .catch((error) => console.error(error));
    });
  }
  componentDidMount() {
    this._setLocation();
  }
  render() {
    return(
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          userLocation: this.state.userLocation
        })}
      </div>
    );
  }
}

Location.propTypes = {
  children: PropTypes.element
};

export default Location;
