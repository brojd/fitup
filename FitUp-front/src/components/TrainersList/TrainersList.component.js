import React, { Component, PropTypes } from 'react';
import TrainersListElem from '../../components/TrainersListElem/TrainersListElem.component';
import classNames from 'classnames';

class TrainersList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className='uk-align-center uk-width-8-10 uk-margin-large-top uk-list'>
        {this.props.trainers.map((trainer, i) => (
          i % 2 === 0 ? <TrainersListElem key={i}
                                          trainer={trainer}
                                          gyms={this.props.gyms}
                                          className={classNames('uk-float-left trainerInLeft')} /> :
                        <TrainersListElem key={i}
                                          trainer={trainer}
                                          gyms={this.props.gyms}
                                          className={classNames('uk-float-right trainerInRight')} />
        ))}
      </ul>
    );
  }
}

TrainersList.propTypes = {
  trainers: PropTypes.array,
  gyms: PropTypes.array
};

export default TrainersList;
