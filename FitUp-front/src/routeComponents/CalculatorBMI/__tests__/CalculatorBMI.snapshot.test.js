import React from 'react';
import CalculatorBMI from '../CalculatorBMI.component';
import renderer from 'react-test-renderer';

test('CalculatorBMI renders correctly', () => {
  
  const component = renderer.create(
    <CalculatorBMI />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});
