import React from 'react';
import EventBox from '../EventBox.component';
import { shallow } from 'enzyme';

test('Start time is calculated properly when minutes are greater than 9', () => {
  const CURRENT_EVENT = {
    'start_date': '2016-11-14T14:50:00.000Z'
  };
  const wrapper = shallow(<EventBox currentEvent={CURRENT_EVENT}/>);
  expect(wrapper.instance()._startTime()).toBe('15:50');
});

test('Start time is calculated properly when minutes are less than 10', () => {
  const CURRENT_EVENT = {
    'start_date': '2016-11-14T14:08:00.000Z'
  };
  const wrapper = shallow(<EventBox currentEvent={CURRENT_EVENT}/>);
  expect(wrapper.instance()._startTime()).toBe('15:08');
});

test('End time is calculated properly when minutes are greater than 9', () => {
  const CURRENT_EVENT = {
    'end_date': '2016-11-14T14:25:00.000Z'
  };
  const wrapper = shallow(<EventBox currentEvent={CURRENT_EVENT}/>);
  expect(wrapper.instance()._endTime()).toBe('15:25');
});

test('End time is calculated properly when minutes are less than 10', () => {
  const CURRENT_EVENT = {
    'end_date': '2016-11-14T14:05:00.000Z'
  };
  const wrapper = shallow(<EventBox currentEvent={CURRENT_EVENT}/>);
  expect(wrapper.instance()._endTime()).toBe('15:05');
});
