import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './FilterForm.stylesheet.css';
import CitySelect from '../CitySelect/CitySelect.component';
import SearchBar from '../SearchBar/SearchBar.component';
import AdvancedInput from '../AdvancedInput/AdvancedInput.component';
import Button from '../Button/Button.component';

class FilterForm extends React.Component {
  constructor() {
    super();
    this._handleCityChange = this._handleCityChange.bind(this);
    this._handleClassesChange = this._handleClassesChange.bind(this);
    this._handleGymChange = this._handleGymChange.bind(this);
    this._handleTrainerChange = this._handleTrainerChange.bind(this);
    this._toggleAdvancedSearch = this._toggleAdvancedSearch.bind(this);
    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this.state = {
      textInputFocused: true,
      classes: [],
      gym: '',
      trainer: '',
      advancedSearch: false,
      gymsInCity: [],
      trainersInCity: [],
      classesInCity: [],
      overflowVisible: false
    };
  }
  _handleCityChange(city) {
    let trainersInCity = this.props.trainers.filter((trainer) => {
      let currGym = this.props.gyms.find((gym) => gym._id === trainer.gymId);
      return currGym.address.city === city;
    });
    let classesInCity = this.props.classes.filter((oneClasses) => {
      let currGym = this.props.gyms.find((gym) => gym._id === oneClasses.gymId);
      return currGym.address.city === city;
    });
    this.setState({
      city: city,
      gymsInCity: this.props.gyms.filter((gym) => gym.address.city.toLowerCase() === city.toLowerCase()),
      trainersInCity: trainersInCity,
      classesInCity: classesInCity
    });
    this.props.onUserInput(this.state.classes, city, this.state.gym, this.state.trainer);
    return false;
  }
  _handleClassesChange(classes) {
    this.setState({
      classes: classes
    });
    this.props.onUserInput(classes, this.state.city, this.state.gym, this.state.trainer);
    return false;
  }
  _handleGymChange(gym) {
    this.setState({
      gym: gym
    });
    this.props.onUserInput(this.state.classes, this.state.city, gym, this.state.trainer);
    return false;
  }
  _handleTrainerChange(trainer) {
    this.setState({
      trainer: trainer
    });
    this.props.onUserInput(this.state.classes, this.state.city, this.state.gym, trainer);
    return false;
  }
  _toggleAdvancedSearch() {
    this.setState({
      clickedAdvanced: true,
      advancedSearch: !this.state.advancedSearch
    });
  }
  _handleInputFocus() {
    this.setState({ overflowVisible: true });
  }
  _handleInputBlur() {
    this.setState({ overflowVisible: false });
  }
  componentDidMount() {
    let trainersInCity = this.props.trainers.filter((trainer) => {
      let currGym = this.props.gyms.find((gym) => gym._id === trainer.gymId);
      return currGym.address.city === this.props.userLocation;
    });
    let classesInCity = this.props.classes.filter((oneClasses) => {
      let currGym = this.props.gyms.find((gym) => gym._id === oneClasses.gymId);
      return currGym.address.city === this.props.userLocation;
    });
    this.setState({
      city: this.props.userLocation,
      gymsInCity:  this.props.gyms.filter(
        (gym) => gym.address.city.toLowerCase() === this.props.userLocation.toLowerCase()
      ),
      trainersInCity: trainersInCity,
      classesInCity: classesInCity
    });
  }
  render() {
    return (
      <div className={styles.formWrapper}>
        <form className={classNames('uk-width-4-10 uk-form-icon uk-align-center', styles.filterForm,
                        {'rolled': !this.state.advancedSearch && this.state.clickedAdvanced},
                        {'unrolled': this.state.advancedSearch && this.state.clickedAdvanced},
                        {'visible': this.state.overflowVisible},
                        {'hidden': !this.state.overflowVisible })}>
          <CitySelect onChange={this._handleCityChange}
                      gyms={this.props.gyms}
                      userLocation={this.props.userLocation} />
          {this.state.advancedSearch ?
            <Button text='Hide'
                    type='button'
                    className={classNames(styles.advancedButton)}
                    onClick={this._toggleAdvancedSearch} /> :
            <Button text='Advanced'
                    type='button'
                    className={classNames(styles.advancedButton)}
                    onClick={this._toggleAdvancedSearch} />
          }
          <SearchBar
            placeholder='Search for your classes...'
            onChange={this._handleClassesChange}
            onFocus={this._handleInputFocus}
            onBlur={this._handleInputBlur}
            autoFocus={false}
            items={this.state.classesInCity}
          />
          <div className={classNames(
            'uk-width-9-10 uk-align-center',
            styles.advancedInputWrapper,
            {'uk-invisible': !this.state.advancedSearch && this.state.overflowVisible}
            )}>
            <AdvancedInput placeholder='Search by gyms...'
                           onChange={this._handleGymChange}
                           onFocus={this._handleInputFocus}
                           onBlur={this._handleInputBlur}
                           items={this.state.gymsInCity} />
            <AdvancedInput placeholder='Search by trainers...'
                           onChange={this._handleTrainerChange}
                           onFocus={this._handleInputFocus}
                           onBlur={this._handleInputBlur}
                           items={this.state.trainersInCity}
                           className={styles.trainerSearchBar}/>
          </div>
        </form>
      </div>
    );
  }
}

FilterForm.propTypes = {
  onUserInput: PropTypes.func,
  gyms: PropTypes.array,
  classes: PropTypes.array,
  trainers: PropTypes.array,
  userLocation: PropTypes.string
};

FilterForm.defaultProps = {
  gyms: []
};

export default FilterForm;
