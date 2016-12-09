import React, { PropTypes } from 'react';
import styles from './EventBox.stylesheet.css';
import Image from '../Image/Image.component';
import classNames from 'classnames';

class EventBox extends React.Component {
  
  constructor() {
    super();
    this._startTime = this._startTime.bind(this);
    this._endTime = this._endTime.bind(this);
  }
  
  _startTime() {
    let hours = (new Date(this.props.currentEvent.start_date)).getHours();
    let minutes = (new Date(this.props.currentEvent.start_date)).getMinutes();
    if (minutes.toString().length === 1) {
      minutes = '0'.concat(minutes);
    }
    return `${hours}:${minutes}`;
  }
  
  _endTime() {
    let hours = (new Date(this.props.currentEvent.end_date)).getHours();
    let minutes = (new Date(this.props.currentEvent.end_date)).getMinutes();
    if (minutes.toString().length === 1) {
      minutes = '0'.concat(minutes);
    }
    return `${hours}:${minutes}`;
  }
  
  render() {
    return (
        <aside style={this.props.eventVisible ? {top: this.props.eventTop, left: this.props.eventLeft} :
                                                {top: this.props.eventTop, left: 5000}}
               className={classNames(styles.eventDetails, 'uk-width-2-10',
               this.props.eventVisible ? 'fadeInFast' : 'hide')}>
          <div className={styles.classesImgWrapper}>
            <Image className={classNames('uk-width-9-10 uk-align-center', styles.classesImgWrapper__classesImg)}
                   src={this.props.currentClasses.photo_url}
                   alt={this.props.currentClasses.name}/>
            <div className={styles.classesImgWrapper__durationBack}>
              <span className={styles.classesImgWrapper__durationText}>
                {this.props.currentEvent.duration_in_minutes} min
              </span>
            </div>
            <div className={styles.classesImgWrapper__time}>
              {this._startTime()} - {this._endTime()}
            </div>
          </div>
          <div className={classNames(styles.classesInfoWrapper, 'uk-width-9-10 uk-align-center')}>
            <h3 className={classNames(styles.classesInfoWrapper__header,
                                      'uk-text-center uk-width-5-10 uk-align-center')}>
              {this.props.currentClasses.name}
            </h3>
            {this.props.children}
          </div>
        </aside>
    );
  }
}

EventBox.propTypes = {
  currentEvent: PropTypes.object,
  currentTrainer: PropTypes.object,
  currentClasses: PropTypes.object,
  currentGym: PropTypes.object,
  eventTop: PropTypes.number,
  eventLeft: PropTypes.number,
  eventVisible: PropTypes.bool,
  children: PropTypes.element
};

EventBox.defaultProps = {
  currentEvent: {},
  currentTrainer: {},
  currentClasses: {},
  currentGym: {
    address:{
      city:''
    },
    cards_accepted: [''],
    pricing: [{}]
  },
  eventTop: 100,
  eventLeft: 100,
  eventVisible: false
};

export default EventBox;
