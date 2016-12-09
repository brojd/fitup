import React from 'react';
import SlideshowContainer from '../SlideshowContainer.component';
import { shallow } from 'enzyme';

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

test('SlideshowContainer has proper initial value of currentTextPosition and currentSlide', () => {
  
  const wrapper = shallow(<SlideshowContainer slides={slides}
                                              currentTextPosition={0} />);
  
  expect(wrapper.state('currentTextPosition')).toBe(0);
  expect(wrapper.state('currentSlide')).toBe(0);
  
});

test('_updateTextPosition() changes currentTextPosition properly', () => {
  
  const wrapper = shallow(<SlideshowContainer slides={slides}
                                              currentTextPosition={0} />);
  
  expect(wrapper.state('currentTextPosition')).toBe(0);
  wrapper.instance()._updateTextPosition();
  expect(wrapper.state('currentTextPosition')).toBe(1);
  wrapper.instance()._updateTextPosition();
  expect(wrapper.state('currentTextPosition')).toBe(2);
  wrapper.instance()._updateTextPosition();
  expect(wrapper.state('currentTextPosition')).toBe(3);
  wrapper.instance()._updateTextPosition();
  expect(wrapper.state('currentTextPosition')).toBe(0);
  
});

test('_changeSlide() changes currentSlide properly', () => {
  
  const wrapper = shallow(<SlideshowContainer slides={slides}
                                              currentTextPosition={0} />);
  
  expect(wrapper.state('currentSlide')).toBe(0);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('currentSlide')).toBe(1);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('currentSlide')).toBe(2);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('currentSlide')).toBe(3);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('currentSlide')).toBe(0);
  
});

test('_changeSlide() changes visible property of each slide properly', () => {
  
  const wrapper = shallow(<SlideshowContainer slides={slides}
                                              currentTextPosition={0} />);
  
  expect(wrapper.state('slides')[0].visible).toBe(true);
  expect(wrapper.state('slides')[1].visible).toBe(false);
  expect(wrapper.state('slides')[2].visible).toBe(false);
  expect(wrapper.state('slides')[3].visible).toBe(false);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('slides')[0].visible).toBe(false);
  expect(wrapper.state('slides')[1].visible).toBe(true);
  expect(wrapper.state('slides')[2].visible).toBe(false);
  expect(wrapper.state('slides')[3].visible).toBe(false);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('slides')[0].visible).toBe(false);
  expect(wrapper.state('slides')[1].visible).toBe(false);
  expect(wrapper.state('slides')[2].visible).toBe(true);
  expect(wrapper.state('slides')[3].visible).toBe(false);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('slides')[0].visible).toBe(false);
  expect(wrapper.state('slides')[1].visible).toBe(false);
  expect(wrapper.state('slides')[2].visible).toBe(false);
  expect(wrapper.state('slides')[3].visible).toBe(true);
  wrapper.instance()._changeSlide();
  expect(wrapper.state('slides')[0].visible).toBe(true);
  expect(wrapper.state('slides')[1].visible).toBe(false);
  expect(wrapper.state('slides')[2].visible).toBe(false);
  expect(wrapper.state('slides')[3].visible).toBe(false);
  
});
