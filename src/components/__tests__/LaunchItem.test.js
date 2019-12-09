import LaunchItem from '../LaunchItem';
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() }) 

describe('LaunchItem component', () => {
    it('should render hitoryitems component', () => {
        const wrapper = shallow(<LaunchItem/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should expect props to be valid', () => {
        const it = mount(<LaunchItem/>);
        expect(it.props().mission).not.toBeNull();
        expect(it.props().nationality).not.toBeNull();
        expect(it.props().manufacturer).not.toBeNull();
        expect(it.props().type).not.toBeNull();
    })

    it('should have 4 divs', () => {
        const wrapper = shallow( <LaunchItem/> )
        const children = wrapper.find('div').children()
        expect(children.length).toBe(4);
    })

})