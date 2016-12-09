import React from 'react';
import { storiesOf} from '@kadira/storybook';
import CalculatorBMI from '../routeComponents/CalculatorBMI/CalculatorBMI.component';

storiesOf('CalculatorBMI', module)
  .add('BMI calculator', () => (
    <CalculatorBMI />
  ))
