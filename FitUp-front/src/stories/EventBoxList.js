import React from 'react';
import { storiesOf} from '@kadira/storybook';
import EventBoxList from '../components/EventBoxList/EventBoxList.component';
import event from './mock_data/eventInstance';

storiesOf('EventBoxList', module)
  .add('event box list', () => (
    <div className='uk-width-2-10'>
      <EventBoxList currentTrainer={event.currentTrainer} currentGym={event.currentGym} />
    </div>
  ));

