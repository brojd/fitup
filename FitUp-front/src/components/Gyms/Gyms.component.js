import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import GymsList from '../GymsList/GymsList.component';
import SearchBar from '../SearchBar/SearchBar.component';
import CitySelect from '../CitySelect/CitySelect.component';
import Image from '../Image/Image.component';
import gymsImg1 from './gymsImg1.png';
import gymsImg2 from './gymsImg2.png';
import styles from './Gyms.stylesheet.css';

class Gyms extends Component {
  constructor() {
    super();
    this._handleGymChange = this._handleGymChange.bind(this);
    this._handleCityChange = this._handleCityChange.bind(this);
    this.state = {
      gyms: [],
      filteredGyms: [],
      gymsInCity: [],
      currentCity: '',
      currentChoices: [],
      userScrolledDown: false
    };
  }
  filterArray(itemToCheck, userChoices) {
    if (userChoices.length === 0) {
      return true;
    }
    for (let choice of userChoices) {
      if (choice.value === itemToCheck) {
        return true;
      }
    }
    return false;
  }
  _handleGymChange(chosenGyms) {
    let newGyms = this.state.gyms.filter((gym) =>
      (this.filterArray(gym.name, chosenGyms) &&
      gym.address.city.toLowerCase() === this.state.currentCity.toLowerCase())
    );
    this.setState({
      filteredGyms: newGyms,
      currentChoices: chosenGyms
    });
  }
  _handleCityChange(gymCity) {
    let newGyms = this.state.gyms.filter((gym) =>
      (gym.address.city.toLowerCase() === gymCity.toLowerCase() &&
      this.filterArray(gym.name, this.state.currentChoices))
    );
    this.setState({
      filteredGyms: newGyms,
      currentCity: gymCity,
      gymsInCity:  this.state.gyms.filter((gym) => gym.address.city.toLowerCase() === gymCity.toLowerCase())
    });
  }
  componentDidMount() {
    this.setState({
      gyms: this.props.gyms,
      currentCity: this.props.userLocation,
      filteredGyms: this.props.gyms.filter(
        (gym) => gym.address.city.toLowerCase() === this.props.userLocation.toLowerCase()
      ),
      gymsInCity:  this.props.gyms.filter(
        (gym) => gym.address.city.toLowerCase() === this.props.userLocation.toLowerCase()
      )
    });
    window.onscroll = () => {
      this.setState({scrollY: window.scrollY});
      if (window.scrollY > 140) {
        this.setState({ userScrolledDown: true });
      }
    };
  }
  componentWillUnmount() {
    window.onscroll = null;
  }
  render() {
    return (
      <div className={classNames(styles.allGyms, 'uk-position-relative')}>
        <div className={classNames(styles.gymSearch, 'uk-width-4-10 uk-align-center')}>
          <CitySelect onChange={this._handleCityChange}
                      gyms={this.state.gyms}
                      userLocation={this.props.userLocation} />
          <SearchBar
            placeholder='Search for gyms...'
            onChange={this._handleGymChange}
            autoFocus={false}
            items={this.state.gymsInCity} />
        </div>
        <Image src={gymsImg1}
               className={classNames(
                 styles.gymsImg1,
                 {'slideInLeft': this.state.scrollY > 100 && this.state.scrollY < 450},
                 {'slideOutLeft': (window.scrollY < 140 && this.state.userScrolledDown) || window.scrollY > 410}
               )}
               width={280}/>
        <GymsList gyms={this.state.filteredGyms} />
        <Image src={gymsImg2}
               className={classNames(
                 styles.gymsImg2,
                 {'slideInRight': this.state.scrollY > 550 && this.state.scrollY < 1150},
                 {'slideOutRight': this.state.scrollY > 1100 || this.state.scrollY < 600},
                 {'displayNone': this.state.scrollY < 550}
               )}
               width={280} />
      </div>
    );
  }
}

Gyms.propTypes = {
  gyms: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  userLocation: PropTypes.string
};

export default Gyms;
