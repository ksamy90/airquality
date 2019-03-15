import React from 'react';
import { shallow } from 'enzyme';
import SearchWeather from '../../components/SearchWeather';

test('should render SearchWeather correctly', () => {
    const wrapper = shallow(<SearchWeather />);
    expect(wrapper).toMatchSnapshot();
});

test('should render SearchWeather correctly with city value', () => {
    const city = 'Delhi'
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<SearchWeather onsubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmitSpy).toHaveBeenCalledWith(city);
});
