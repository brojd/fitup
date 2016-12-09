import React from 'react';
import AdvancedInput from '../AdvancedInput.component';
import renderer from 'react-test-renderer';

jest.mock('react-select');

test('AdvancedInput renders correctly excluding 3rd party react-select', () => {
  const component = renderer.create(
    <AdvancedInput />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
