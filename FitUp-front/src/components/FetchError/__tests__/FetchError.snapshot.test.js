import React from 'react';
import FetchError from '../FetchError.component';
import renderer from 'react-test-renderer';

test('FetchError renders correctly', () => {
  const component = renderer.create(
    <FetchError />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
