import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { render }  from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('<FirstApp /> tests', () => {
    // test('should show message "Hola, soy Goku"', async () => {
    //     const greeting = 'Hola, soy Goku';

    //     const { getByText } = render(<FirstApp greeting={greeting} />);

    //     expect( getByText(greeting) ).toBeInTheDocument();
    // })
    test('should show <FirstApp /> correctly', () => {
        const greeting = 'Hola, soy Goku';
        const wrapper = shallow(<FirstApp greeting={greeting} />);

        expect( wrapper ).toMatchSnapshot();
    })
    test('should show subtitile send by props', () => {
        const greeting = 'Hola, soy Goku';
        const subtitle = 'Soy un subtitle';

        const wrapper = shallow(
            <FirstApp 
                greeting={greeting}
                subtitle={subtitle} 
            />
        );
        
        const paragraph = wrapper.find('p').text();

        expect( paragraph ).toBe( subtitle );
        
    })

});