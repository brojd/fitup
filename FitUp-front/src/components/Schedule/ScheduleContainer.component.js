import React, { Component, PropTypes } from 'react';
import 'dhtmlx-scheduler';
import Schedule from './Schedule.component';
import EventBox from '../EventBox/EventBox.component';
import EventBoxList from '../EventBoxList/EventBoxList.component';
import FilterForm from '../FilterForm/FilterForm.component';
import compact from 'lodash/compact';

class ScheduleContainer extends Component {
  constructor() {
    super();
    this.state = {
      chosenClasses: [],
      trainerName: ''
    };
    this._handleUserInput = this._handleUserInput.bind(this);
  }
  
  _isEventInCity(event, city) {
    let gymId = event.gymId;
    let currGym = this._findElem(gymId, this.props.gyms, false);
    if (currGym.address.city === city) {
      return true;
    }
    return false;
  }
  
  _handleUserInput(chosenClasses, city, chosenGyms, chosenTrainers) {
    function filterArray(itemToCheck, userChoices) {
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
    let newEvents = [];
    let gymsName = (event) => this._findElem(event.gymId, this.props.gyms, false).name;
    this.state.events.forEach((event) => {
      if ((filterArray(event.classesName, chosenClasses)) &&
          (this._isEventInCity(event, city)) &&
          (filterArray(gymsName(event), chosenGyms)) &&
          (filterArray(event.trainerName, chosenTrainers))) {
        newEvents.push(event);
      }
    });
    this.setState({
      chosenClasses: chosenClasses,
    });
    global.scheduler.clearAll();
    global.scheduler.parse(newEvents, 'json');
    global.scheduler.updateView();
    return false;
  }
  
  _findElem(id, arrayOfObj, isEvent) {
    if (isEvent) {
      return arrayOfObj.find((n) => n.id == id);
    } else {
      return arrayOfObj.find((n) => n._id == id);
    }
  }

  _configureSchedule() {
    global.scheduler.config.scroll_hour = new Date().getHours();
    global.scheduler.config.details_on_dblclick = false;
    global.scheduler.config.dblclick_create = false;
    global.scheduler.config.readonly = true;
    global.scheduler.config.icons_select = [
      'icon_details'
    ];
    global.scheduler.attachEvent('onClick', (id, event) => {
      let currentEvent = this._findElem(id, this.props.events, true);
      let currentTrainer = this._findElem(currentEvent.trainerId, this.props.trainers, false);
      let currentClasses = this._findElem(currentEvent.typeOfClassesId, this.props.classes, false);
      let currentGym = this._findElem(currentEvent.gymId, this.props.gyms, false);
      let eventTop = ((window.innerHeight / event.clientY) > 2) ? (event.clientY - 80 ) : (event.clientY - 470);
      let eventLeft = ((window.innerWidth / event.pageX) > 2) ? (event.pageX + 30) : (event.pageX - 450);
      this.setState({
        currentEvent: currentEvent,
        currentTrainer: currentTrainer,
        currentClasses: currentClasses,
        currentGym: currentGym,
        eventTop: eventTop,
        eventLeft: eventLeft,
        eventVisible: true
      });
      return true;
    });
    global.scheduler.attachEvent('onEmptyClick', () => {
      this.setState({
        eventVisible: false
      });
      return true;
    });
    global.scheduler.templates.event_header = function(start, end, event) {
      return `<b>${event.classesName || 'Type of classes'}</b>`;
    };
    global.scheduler.templates.event_text = (start, end, event) => {
      let currentGym = this._findElem(event.gymId, this.props.gyms, false);
      return `${global.scheduler.templates.event_date(start)} - ${global.scheduler.templates.event_date(end)}
             <i>${currentGym.name || 'Gym'}</i>`;
    };
  }
  
  componentDidMount() {
    let eventsToParse = this.props.events;
    eventsToParse.forEach((event) => {
      Object.assign(event, {
        start_date: new Date(event.start_date),
        end_date: new Date(event.end_date),
      });
    });
    this.setState({
      events: eventsToParse,
      trainers: this.props.trainers,
      classes: this.props.classes,
      gyms: this.props.gyms
    });
    this._configureSchedule();
    eventsToParse = eventsToParse.map((event) => {
      if (this._isEventInCity(event, this.props.userLocation)) {
        return event;
      }
    });
    global.scheduler.parse(compact(eventsToParse), 'json');
    global.scheduler.init('scheduler_here', new Date(), 'week');
  }
  
  componentWillUnmount() {
    global.scheduler.detachEvent(global.scheduler.attachEvent('onClick'));
    global.scheduler.detachEvent(global.scheduler.attachEvent('onEmptyClick'));
    global.scheduler.clearAll();
  }
  
  render() {
    return(
      <div>
        <FilterForm onUserInput={this._handleUserInput}
                    gyms={this.props.gyms}
                    classes={this.props.classes}
                    trainers={this.props.trainers}
                    userLocation={this.props.userLocation}/>
        <Schedule>
          <EventBox { ...this.state }>
            <EventBoxList currentTrainer={this.state.currentTrainer}
                          currentGym={this.state.currentGym} />
          </EventBox>
        </Schedule>
      </div>
    );
  }
}

ScheduleContainer.propTypes = {
  events: PropTypes.array,
  gyms: PropTypes.array,
  trainers: PropTypes.array,
  classes: PropTypes.array,
  userLocation: PropTypes.string
};

export default ScheduleContainer;
