import React from 'react';
import NavBar from '../NavBar.component';
import { mount } from 'enzyme';

test('markAsVisited() adds proper classes', () => {
  
  const wrapper = mount(<NavBar />);
  const wrapper2 = mount(<a href='#' onClick={wrapper.instance().markAsVisited}>link</a>);
  
  wrapper2.simulate('click');
  expect(wrapper2.hasClass('navList__anchor')).toBeTruthy();
  expect(wrapper2.hasClass('currentTab')).toBeTruthy();
  
});




