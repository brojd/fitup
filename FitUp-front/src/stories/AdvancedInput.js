import React from 'react';
import { storiesOf} from '@kadira/storybook';
import AdvancedInput from '../components/AdvancedInput/AdvancedInput.component';

storiesOf('AdvancedInput', module)
  .add('search by gyms', () => (
    <div className='uk-width-4-10'>
      <AdvancedInput placeholder='Search by gyms...'/>
    </div>
  ));

storiesOf('AdvancedInput', module)
  .add('search by trainers', () => (
    <div className='uk-width-4-10'>
      <AdvancedInput placeholder='Search by trainers...'/>
    </div>
  ));
