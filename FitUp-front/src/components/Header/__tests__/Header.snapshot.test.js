import React from 'react';
import Header from '../Header.component';
import renderer from 'react-test-renderer';

test('Header renders correctly', () => {
  const component = renderer.create(
    <Header/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
