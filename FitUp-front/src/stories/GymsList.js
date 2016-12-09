import React from 'react';
import { storiesOf} from '@kadira/storybook';
import GymsList from '../components/GymsList/GymsList.component';
import GYMS from './mock_data/gyms';

storiesOf('GymsList', module)
  .add('GymsList component', () => (
    <GymsList gyms={GYMS}/>
  ));
