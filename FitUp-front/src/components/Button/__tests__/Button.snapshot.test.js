import React from 'react';
import Button from '../Button.component';
import renderer from 'react-test-renderer';

test('Button renders correctly with given props', () => {
  const someFunc = jest.fn();
  const component = renderer.create(
    <Button text='Press'
            className='Button'
            onClick={someFunc}
            disabled={false}
            autoFocus={false} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
