import React, { PropTypes } from 'react';
import GymsListElem from '../GymsListElem/GymsListElem.component';

const GymsList = (props) => {
  return (
    <ul className='uk-align-center uk-width-7-10 uk-margin-large-top fadeInUp'>
      {props.gyms.map((gym, i) => (
        <GymsListElem key={i} gym={gym} />
      ))}
    </ul>
  );
};

GymsList.propTypes = {
  gyms: PropTypes.array
};

export default GymsList;
