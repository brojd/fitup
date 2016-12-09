import React from 'react';
import { storiesOf} from '@kadira/storybook';
import CitySelect from '../components/CitySelect/CitySelect.component';
import GYMS from './mock_data/gyms';

storiesOf('CitySelect', module)
  .add('search bar for type of classes', () => (
    <CitySelect gyms={GYMS}/>
  ));

