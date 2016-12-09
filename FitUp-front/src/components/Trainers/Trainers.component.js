import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import TrainersList from '../../components/TrainersList/TrainersList.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import CitySelect from '../../components/CitySelect/CitySelect.component';
import styles from './Trainers.stylesheet.css';

class Trainers extends Component {
  constructor() {
    super();
    this._handleTrainerChange = this._handleTrainerChange.bind(this);
    this._handleCityChange = this._handleCityChange.bind(this);
    this.state = {
      filteredTrainers: [],
      trainersInCity: [],
      currentChoices: [],
      currentCity: '',
      currentTrainerText: ''
    };
  }
  _filterArray(itemToCheck, userChoices) {
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
  _handleTrainerChange(chosenTrainers) {
    let newTrainers = this.props.trainers.filter((trainer) => {
      let trainerFullName = `${trainer.name} ${trainer.surname}`;
      let currGym = this.props.gyms.find((gym) => gym._id === trainer.gymId);
      return (this._filterArray(trainerFullName, chosenTrainers) &&
              currGym.address.city === this.state.currentCity);
    });
    this.setState({
      filteredTrainers: newTrainers,
      currentChoices: chosenTrainers
    });
  }
  _handleCityChange(trainerCity) {
    let newTrainers = this.props.trainers.filter((trainer) => {
      let trainerFullName = `${trainer.name} ${trainer.surname}`;
      let currGym = this.props.gyms.find((gym) => gym._id === trainer.gymId);
      return (this._filterArray(trainerFullName, this.state.currentChoices) &&
              currGym.address.city === trainerCity);
    });
    let trainersInCity = this.props.trainers.filter((trainer) => {
      let currGym = this.props.gyms.find((gym) => gym._id === trainer.gymId);
      return currGym.address.city === trainerCity;
    });
    this.setState({
      filteredTrainers: newTrainers,
      trainersInCity: trainersInCity,
      currentCity: trainerCity
    });
  }
  componentDidMount() {
    let filteredTrainers = this.props.trainers.filter((trainer) => {
      let currGym = this.props.gyms.find((gym) => gym._id === trainer.gymId);
      return currGym.address.city === this.props.userLocation;
    });
    this.setState({
      trainers: this.props.trainers,
      currentCity: this.props.userLocation,
      filteredTrainers: filteredTrainers,
      trainersInCity: filteredTrainers,
      gyms: this.props.gyms
    });
  }
  render() {
    return (
      <div>
        <div className={classNames(styles.trainerSearch, 'uk-width-4-10 uk-align-center')}>
          <CitySelect onChange={this._handleCityChange}
                      gyms={this.props.gyms}
                      userLocation={this.props.userLocation} />
          <SearchBar
            placeholder='Search for trainers...'
            onChange={this._handleTrainerChange}
            autoFocus={false}
            items={this.state.trainersInCity} />
        </div>
        <TrainersList trainers={this.state.filteredTrainers}
                      gyms={this.props.gyms} />
      </div>
    );
  }
}

Trainers.propTypes = {
  trainers: PropTypes.array,
  gyms: PropTypes.array,
  userLocation: PropTypes.string
};

export default Trainers;
