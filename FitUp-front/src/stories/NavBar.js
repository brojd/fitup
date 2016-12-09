import React from 'react';
import { storiesOf} from '@kadira/storybook';
import NavBar from '../components/NavBar/NavBar.component';

storiesOf('NavBar', module)
  .add('header navigation bar', () => (
    <NavBar />
  ));
