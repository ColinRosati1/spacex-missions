import LaunchModal from '../LaunchModal';
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() }) 

describe('LaunchItem component', () => {
    it('should render hitoryitems component', () => {
        const wrapper = shallow( <LaunchModal/> );
        expect(wrapper).toMatchSnapshot();
    });

    it('should expect props to be valid', () => {
        const it = shallow( <LaunchModal />).dive();
        expect(it.props().mission).not.toBeNull();
        expect(it.props().nationality).not.toBeNull();
        expect(it.props().manufacturer).not.toBeNull();
        expect(it.props().type).not.toBeNull();
    })

    it('should have 4 divs', () => {
        const wrapper = shallow(<LaunchModal/>).dive()
        const children = wrapper.find('div').children()
        expect(children.length).toBe(4);
    })


})