import React, { Component, PropTypes } from 'react';
import { connect, PromiseState } from 'react-refetch';
import { API2_URL } from '../../../config';
import Gyms from '../../components/Gyms/Gyms.component';
import Loading from '../../components/Loading/Loading.component';
import FetchError from '../../components/FetchError/FetchError.component';

class OuterGyms extends Component {
  render() {
    const { gyms } = this.props;
    const allFetches = PromiseState.all([gyms]);
    if (allFetches.pending) {
      return (<Loading />);
    } else if (allFetches.rejected) {
      return (<FetchError />);
    } else if (allFetches.fulfilled && this.props.userLocation) {
      const [gyms] = allFetches.value;
      return (
        <Gyms gyms={gyms}
              userLocation={this.props.userLocation} />
      );
    }
  }
}

OuterGyms.propTypes = {
  gyms: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  userLocation: PropTypes.string
};

export default connect(() => ({
  gyms: `${API2_URL}/api/gyms`
}))(OuterGyms);
