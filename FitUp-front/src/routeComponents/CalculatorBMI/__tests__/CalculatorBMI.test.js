import React from 'react';
import CalculatorBMI from '../CalculatorBMI.component';
import { shallow, mount } from 'enzyme';

test('_handleCalculate() calculates the result and set state properly', () => {
  
  let event = document.createEvent('Event');
  const wrapper = shallow(<CalculatorBMI />);
  
  expect(wrapper.state('result')).toBeFalsy();
  expect(wrapper.state('resultVisible')).toBeFalsy();
  
  wrapper.setState({ height: 80,
                     weight: 80 });
  wrapper.instance()._handleCalculate(event);
  expect(wrapper.state('result')).toBe('125.00');
  expect(wrapper.state('resultVisible')).toBeTruthy();
  
  wrapper.setState({ height: 70,
                     weight: 90 });
  wrapper.instance()._handleCalculate(event);
  expect(wrapper.state('result')).toBe('183.67');
  expect(wrapper.state('resultVisible')).toBeTruthy();
  
});

test('_handleHeightChange() sets height and heightValid properly', () => {
  
  const wrapper = mount(<CalculatorBMI />);
  let event = {
    target: {
      value: 80
    }
  };
  
  expect(wrapper.state('height')).toBeFalsy();
  expect(wrapper.state('heightValid')).toBeTruthy();
  wrapper.instance()._handleHeightChange(event);
  expect(wrapper.state('heightValid')).toBeTruthy();
  expect(wrapper.state('height')).toBe(80);
  
  event.target.value = 1;
  wrapper.instance()._handleHeightChange(event);
  expect(wrapper.state('heightValid')).toBeTruthy();
  expect(wrapper.state('height')).toBe(1);
  
  event.target.value = 0;
  wrapper.instance()._handleHeightChange(event);
  expect(wrapper.state('heightValid')).toBeFalsy();
  expect(wrapper.state('height')).toBe(null);
  expect(event.target.value).toBe(null);
  
});

test('_handleWeightChange() sets weight and weightValid properly', () => {
  
  const wrapper = mount(<CalculatorBMI />);
  let event = {
    target: {
      value: 80
    }
  };
  
  expect(wrapper.state('weight')).toBeFalsy();
  expect(wrapper.state('weightValid')).toBeTruthy();
  wrapper.instance()._handleWeightChange(event);
  expect(wrapper.state('weightValid')).toBeTruthy();
  expect(wrapper.state('weight')).toBe(80);
  
  event.target.value = 1;
  wrapper.instance()._handleWeightChange(event);
  expect(wrapper.state('weightValid')).toBeTruthy();
  expect(wrapper.state('weight')).toBe(1);
  
  event.target.value = 0;
  wrapper.instance()._handleWeightChange(event);
  expect(wrapper.state('weightValid')).toBeFalsy();
  expect(wrapper.state('weight')).toBe(null);
  expect(event.target.value).toBe(null);
  
});
