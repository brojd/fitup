import React from 'react';
import { storiesOf} from '@kadira/storybook';
import Loading from '../components/Loading/Loading.component';

storiesOf('Loading', module)
  .add('loading icon', () => (
    <Loading />
  ));
