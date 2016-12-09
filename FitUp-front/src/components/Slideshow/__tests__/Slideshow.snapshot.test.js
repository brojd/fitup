import React from 'react';
import Slideshow from '../Slideshow.component';
import renderer from 'react-test-renderer';

test('Slideshow renders correctly', () => {
  const slides = [
    {
      id: 1,
      imgSrc: 'http://www.noupe.com/wp-content/uploads/2012/10/pixabay-beach-49877.jpg',
      text: 'All fitness classes on one website',
      visible: true
    },
    {
      id: 2,
      imgSrc: 'http://www.noupe.com/wp-content/uploads/2012/10/pixabay-beach-49879.jpg',
      text: 'Filter the schedule easily',
      visible: false
    },
    {
      id: 3,
      imgSrc: 'http://sm4u.pl/wp-content/uploads/2014/04/Pixabay-Free-photos.png',
      text: 'Review all trainers from Wroclaw',
      visible: false
    },
    {
      id: 4,
      imgSrc: 'https://cdn.pixabay.com/blog/post/2013/03/23/23-02-28-603_640.jpg',
      text: 'Save your time',
      visible: false
    }
  ];
  const component = renderer.create(
    <Slideshow slides={slides} />
  );
  let tree = component.toJSON();
  
  expect(tree).toMatchSnapshot();
});
