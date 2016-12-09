import React from 'react';
import NavBar from '../NavBar.component';
import renderer from 'react-test-renderer';

test('NavBar renders correctly', () => {
  const component = renderer.create(
    <NavBar className='someClass' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
