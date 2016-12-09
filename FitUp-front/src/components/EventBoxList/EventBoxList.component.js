import React, { PropTypes } from 'react';
import styles from './EventBoxList.stylesheet.css';
import Image from '../Image/Image.component';

class EventBoxList extends React.Component {

  cards_accepted() {
    return (this.props.currentGym.cards_accepted.map((card, i) => {
      if (card.accepted) {
        return (
          <span className='uk-margin-small-right uk-badge' key={i}>{card.name}</span>
        );
      }
    }));
  }
  
  prices() {
    return (this.props.currentGym.pricing.map((price, i) => {
      return (
        <div key={i}>{price.name}: {price.price} PLN</div>
      );
    }));
  }
  
  render() {
    return (
      <ul className='uk-list uk-list-space uk-list-line'>
        <li>TRAINER
          <span className="uk-float-right">
            <Image className={styles.classesInfoWrapper__trainerPhoto}
                   src={this.props.currentTrainer.photo_url}
                   alt='trainer_photo' width={50}/>
            {this.props.currentTrainer.name} {this.props.currentTrainer.surname}
          </span>
        </li>
        <li>GYM <span className="uk-float-right">{this.props.currentGym.name}</span></li>
        <li>
          ADDRESS
          <span className="uk-float-right">
            {`${this.props.currentGym.address.street} ${this.props.currentGym.address.number}, ` +
             `${this.props.currentGym.address.city}`}
          </span>
        </li>
        <li>CARDS ACCEPTED <span className="uk-float-right">{this.cards_accepted()}</span></li>
        <li>PRICES <span className="uk-float-right">{this.prices()}</span></li>
      </ul>
    );
  }
}

EventBoxList.propTypes = {
  currentTrainer: PropTypes.object,
  currentGym: PropTypes.object
};

EventBoxList.defaultProps = {
  currentTrainer: {},
  currentGym: {
    address: {
      city:''
    },
    cards_accepted: [''],
    pricing: [{}]
  }
};

export default EventBoxList;
