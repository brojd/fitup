import React from 'react';
import { storiesOf} from '@kadira/storybook';
import TrainersListElem from '../components/TrainersListElem/TrainersListElem.component';
import TRAINERS from './mock_data/trainers';

storiesOf('TrainersListElem', module)
  .add('TrainersListElem', () => (
    <TrainersListElem trainer={TRAINERS[0]}/>
  ));

