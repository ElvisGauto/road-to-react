import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('<CounterApp /> tests', () => {
    let value;
    let wrapper = shallow(<CounterApp value={value} />);

    beforeEach( () => {
        value = 10;
        wrapper = shallow(<CounterApp value={value} />);
    });

    test('should show <CounterApp /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test('should show default value of props', () => {
        const value = 100;
        const wrapper = shallow(
            <CounterApp 
                value={value}
            />
        );
        const counterText = wrapper.find('p').text();
        expect( Number(counterText) ).toBe( value );
    })

    test('should increase value with button +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('p').text();

        expect( counterText ).toBe('11');
    })

    test('should decrease value with button -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('p').text();

        expect( counterText ).toBe('9');
    })
    
    test('should put a default value with reset button', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('p').text();

        expect(counterText).toBe('10');
    })
    
    
});