import React from 'react';
import { storiesOf} from '@kadira/storybook';
import OuterSchedule from '../routeComponents/OuterSchedule/OuterSchedule.component';

storiesOf('OuterSchedule', module)
  .add('schedule', () => (
    <div style={{margin: '200px 0 0 0'}}>
      <OuterSchedule />
    </div>
  ));
