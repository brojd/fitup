import React from 'react';
import { storiesOf} from '@kadira/storybook';
import Button from '../components/Button/Button.component';

storiesOf('Button', module)
  .add('enable advanced search', () => (
    <Button text="Advanced search" type="button" className="uk-button-mini uk-border-rounded my_button" />
  ))
  .add('search events', () => (
    <Button text="Search" type="button" className="uk-button-small uk-button-success uk-border-rounded" />
  ));
