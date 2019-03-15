import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

test('should render App correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

test('should submit correct data', () => {
    const data = {
        name: "Faridabad",
        aqi: "220 PM2.5",
        cigg: "10"
    };
    const wrapper = shallow(<App />);
    wrapper.find('Weather').prop('onsubmit')(data.name);
    expect(wrapper.state('apiData')).toBe(data.name);
    expect(wrapper.state('aqi')).toBe(data.aqi);
    expect(wrapper.state('cigg')).toBe(data.cigg);
});
