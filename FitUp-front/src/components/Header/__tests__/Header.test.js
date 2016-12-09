import React from 'react';
import Header from '../Header.component';
import { mount } from 'enzyme';

test('Header has proper classes on ComponentDidMount', () => {
  
  const wrapper = mount(<Header className='addedClass'/>);
  let header = wrapper.find('header');
  
  expect(header.hasClass('uk-width-10-10')).toBeTruthy();
  expect(header.hasClass('Header')).toBeTruthy();
  expect(header.hasClass('addedClass')).toBeTruthy();
  
});

test('this.state.fixedHeader is true when window.scrollY > 150 and change back to false when window.scrollY < 3', () => {
  
  const wrapper = mount(<Header />);
  
  window.scrollY = 149;
  wrapper.instance()._handleScroll();
  expect(wrapper.state().headerFixed).toBeFalsy();
  
  window.scrollY = 150;
  wrapper.instance()._handleScroll();
  expect(wrapper.state().headerFixed).toBeFalsy();
  
  window.scrollY = 151;
  wrapper.instance()._handleScroll();
  expect(wrapper.state().headerFixed).toBeTruthy();
  
  window.scrollY = 4;
  wrapper.instance()._handleScroll();
  expect(wrapper.state().headerFixed).toBeTruthy();
  
  window.scrollY = 2;
  wrapper.instance()._handleScroll();
  expect(wrapper.state().headerFixed).toBeFalsy();
  
  window.scrollY = 3;
  wrapper.instance()._handleScroll();
  expect(wrapper.state().headerFixed).toBeFalsy();
  
});

test('Header has headerFixed class when this.state.headerFixed is truthy, otherwise it should not have one', () => {
  
  const wrapper = mount(<Header />);
  let header = wrapper.find('header');
  
  wrapper.setState({ headerFixed: false });
  expect(header.hasClass('fixedHeader')).toBeFalsy();
  
  wrapper.setState({ headerFixed: true });
  expect(header.hasClass('fixedHeader')).toBeTruthy();
  
});

