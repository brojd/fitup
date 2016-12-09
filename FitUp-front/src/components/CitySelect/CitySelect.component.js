import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './CitySelect.stylesheet.css';
import uniqBy from 'lodash/uniqBy';
import compact from 'lodash/compact';

class CitySelect extends React.Component {
  constructor() {
    super();
    this._handleCityChange = this._handleCityChange.bind(this);
  }
  _getUniqCities() {
    let cities = this.props.gyms.map((gym) => {
      return gym.address.city;
    });
    cities.push(this.props.userLocation);
    return compact(uniqBy(cities));
  }
  _handleCityChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <select
        onChange={this._handleCityChange}
        className={classNames('uk-float-right', styles.citySelect)}
        defaultValue={this.props.userLocation} >
        {this._getUniqCities().map((city, i) => {
          return (
            <option className={styles.cityOption}
                    value={city}
                    key={i}>
              {city}
            </option>
          );
        })}
      </select>
    );
  }
}

CitySelect.propTypes = {
  onChange: PropTypes.func,
  gyms: PropTypes.array,
  userLocation: PropTypes.string
};

CitySelect.defaultProps = {
  gyms: []
};

export default CitySelect;
