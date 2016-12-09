import React from 'react';
import { storiesOf} from '@kadira/storybook';
import OuterTrainers from '../routeComponents/OuterTrainers/OuterTrainers.component';

storiesOf('Trainers', module)
  .add('Trainers', () => (
    <div style={{'margin-top': '200px'}}>
      <OuterTrainers />
    </div>
  ));

