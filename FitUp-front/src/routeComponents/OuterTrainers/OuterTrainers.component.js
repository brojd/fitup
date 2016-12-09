import React, { Component, PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { API2_URL } from '../../../config';
import Trainers from '../../components/Trainers/Trainers.component';
import Loading from '../../components/Loading/Loading.component';
import FetchError from '../../components/FetchError/FetchError.component';

class OuterTrainers extends Component {
  constructor() {
    super();
  }
  render() {
    const { trainers, gyms } = this.props;
    const allFetches = PromiseState.all([trainers, gyms]);
    
    if (allFetches.pending) {
      return (<Loading />);
    } else if (allFetches.rejected) {
      return (<FetchError />);
    } else if (allFetches.fulfilled && this.props.userLocation) {
      const [trainers, gyms] = allFetches.value;
      return (
        <Trainers trainers={trainers}
                  gyms={gyms}
                  userLocation={this.props.userLocation} />
      );
    }
  }
}

OuterTrainers.propTypes = {
  trainers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  gyms: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  userLocation: PropTypes.string
};

export default connect(() => ({
  trainers: `${API2_URL}/api/trainers`,
  gyms: `${API2_URL}/api/gyms`
}))(OuterTrainers);
