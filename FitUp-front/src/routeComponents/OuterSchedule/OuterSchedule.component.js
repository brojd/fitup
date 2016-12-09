import React, { Component, PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { API2_URL } from '../../../config';
import ScheduleContainer from '../../components/Schedule/ScheduleContainer.component';
import Loading from '../../components/Loading/Loading.component';
import FetchError from '../../components/FetchError/FetchError.component';

class OuterSchedule extends Component {
  constructor() {
    super();
  }
  render() {
    const { events, trainers, classes, gyms } = this.props;
    const allFetches = PromiseState.all([events, trainers, classes, gyms]);
  
    if (allFetches.pending) {
      return (<Loading />);
    } else if (allFetches.rejected) {
      return (<FetchError />);
    } else if (allFetches.fulfilled  && this.props.userLocation) {
      const [events, trainers, classes, gyms] = allFetches.value;
      return (
        <ScheduleContainer events={events}
                           trainers={trainers}
                           classes={classes}
                           gyms={gyms}
                           userLocation={this.props.userLocation}/>
      );
    }
  }
}

OuterSchedule.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  trainers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  classes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  gyms: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  userLocation: PropTypes.string
};

export default connect(() => ({
  events: `${API2_URL}/api/events`,
  trainers: `${API2_URL}/api/trainers`,
  classes: `${API2_URL}/api/classes`,
  gyms: `${API2_URL}/api/gyms`
}))(OuterSchedule);
