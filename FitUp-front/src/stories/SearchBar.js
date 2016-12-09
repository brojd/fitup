import React from 'react';
import { storiesOf} from '@kadira/storybook';
import SearchBar from '../components/SearchBar/SearchBar.component';
import 'react-select/dist/react-select.css';
import CLASSES from './mock_data/classes';

storiesOf('SearchBar', module)
  .add('search bar for type of classes', () => (
    <SearchBar placeholder='Search for classes...' items={CLASSES}/>
  ));

