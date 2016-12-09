import React from 'react';
import Image from '../Image.component';
import renderer from 'react-test-renderer';

test('Image renders correctly with given props', () => {
  const someFunc = jest.fn();
  const component = renderer.create(
    <Image  src='https://cdn.pixabay.com/photo/2016/10/20/17/41/travel-1756150_960_720.jpg'
            className='Image'
            onClick={someFunc}
            height={200}
            width={300}
            alt='travel_image' />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
