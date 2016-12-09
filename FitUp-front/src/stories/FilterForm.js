import React from 'react';
import { storiesOf} from '@kadira/storybook';
import FilterForm from '../components/FilterForm/FilterForm.component';

storiesOf('FilterForm', module)
  .add('filter form', () => (
    <div style={{margin: '200px 0 0 0'}}>
      <FilterForm />
    </div>
  ));

