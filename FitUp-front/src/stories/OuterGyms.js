import React from 'react';
import { storiesOf} from '@kadira/storybook';
import OuterGyms from '../routeComponents/OuterGyms/OuterGyms.component';

storiesOf('OuterGyms', module)
  .add('gyms component', () => (
    <OuterGyms />
  ));
