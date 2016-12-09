import React from 'react';
import { storiesOf} from '@kadira/storybook';
import EventBox from '../components/EventBox/EventBox.component';
import EventBoxList from '../components/EventBoxList/EventBoxList.component';
import event from './mock_data/eventInstance';

storiesOf('EventBox', module)
  .add('event box', () => (
    <EventBox { ...event }>
      <EventBoxList currentTrainer={event.currentTrainer} currentGym={event.currentGym} />
    </EventBox>
  ));

