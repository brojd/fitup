import React from 'react';
import { storiesOf} from '@kadira/storybook';
import GymsListElem from '../components/GymsListElem/GymsListElem.component';
import GYMS from './mock_data/gyms';

storiesOf('GymsListElem', module)
  .add('GymsListElem component', () => (
    <GymsListElem key={GYMS[0].id} gym={GYMS[0]}/>
  ));
