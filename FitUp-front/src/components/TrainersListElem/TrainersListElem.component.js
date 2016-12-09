import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './TrainersListElem.stylesheet.css';
import Image from '../Image/Image.component';

class TrainersListElem extends Component {
  constructor() {
    super();
    this._getGymById = this._getGymById.bind(this);
  }
  _getSpecialties(trainer) {
    let specialties = [];
    for (let specialty in trainer.specialties) {
      if (trainer.specialties[specialty] === true) {
        specialties.push(specialty);
      }
    }
    return specialties;
  }
  _getGymById() {
    let gymToReturn = this.props.gyms.filter((n) => n._id == this.props.trainer.gymId);
    return gymToReturn[0];
  }
  render() {
    return (
      <li className={classNames(styles.trainersListElem, this.props.className, 'uk-width-7-10')}>
        <h1 className={styles.backName}>
          {`${this.props.trainer.name}`}
        </h1>
        <Image src={this.props.trainer.photo_url}
               alt={'trainer_photo'}
               className={styles.trainerPhoto} />
        <div className={classNames(styles.backPhotoWrapper)}>
          <Image src={this.props.trainer.photo_url}
                 alt={'trainer_back_photo'}
                 className={styles.trainerBackPhoto} />
        </div>
        <section className={classNames(styles.detailsWrapper, 'uk-width-6-10')}>
          <h2 className={styles.trainerName}>
            {`${this.props.trainer.name} ${this.props.trainer.surname}`}
          </h2>
          <h5>
            <Image src={this._getGymById().logo_url}
                   width={35}
                   alt='gym_logo'
                   className='uk-margin-small-right' />
            {this._getGymById().name}, {this._getGymById().address.city}
          </h5>
          <p className={classNames('uk-text uk-text-break', styles.aboutMe)}>
            {this.props.trainer.about_me}
          </p>
          <ul>
            {this._getSpecialties(this.props.trainer).map((specialty, i) => (
              <div className={classNames('uk-margin-small-right uk-margin-small-bottom uk-width-2-10', styles.specialty)}
                   key={i}>
                {specialty}
              </div>
            ))}
          </ul>
        </section>
      </li>
    );
  }
}

TrainersListElem.propTypes = {
  trainer: PropTypes.object,
  className: PropTypes.string,
  gyms: PropTypes.array
};

export default TrainersListElem;
