import React from 'react';
import { storiesOf} from '@kadira/storybook';
import TrainersList from '../components/TrainersList/TrainersList.component';
import TRAINERS from './mock_data/trainers';

storiesOf('TrainersList', module)
  .add('TrainersList', () => (
    <TrainersList trainers={TRAINERS}/>
  ));

