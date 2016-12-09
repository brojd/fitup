import React from 'react';
import { storiesOf} from '@kadira/storybook';
import FetchError from '../components/FetchError/FetchError.component';

storiesOf('FetchError', module)
  .add('fetch error message', () => (
    <FetchError />
  ));
