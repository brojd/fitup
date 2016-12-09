import React from 'react';
import { storiesOf} from '@kadira/storybook';
import GymDetailsTd from '../components/GymDetailsTd/GymDetailsTd.component';
import GYMS from './mock_data/gyms';

storiesOf('GymDetailsTd', module)
  .add('GymDetailsTd component', () => (
    <div className='uk-width-2-10'>
      <table className='uk-table'>
        <tbody>
          <tr>
            <GymDetailsTd gym={GYMS[0]}/>
          </tr>
        </tbody>
      </table>
    </div>
  ));
