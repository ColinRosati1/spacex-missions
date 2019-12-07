import HistoryItem from '../HistoryItem';
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// test # of props
// test length of div children


Enzyme.configure({ adapter: new Adapter() }) // look up how to do this globally

describe('historyItem component', () => {
    it('should render hitoryitems component', () => {
        const wrapper = shallow(
            <div className="history-item">
                <div className="history-item-title"></div>
                <div className="history-item-details"></div>
                <div className="history-item-event"></div>
                <div className="history-item-link"><a href>more</a></div>
            </div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should expect props to be valid', () => {
        const it = mount(<HistoryItem/>);
        expect(it.props().title).not.toBeNull();
        expect(it.props().details).not.toBeNull();
        expect(it.props().event_date_utc).not.toBeNull();
        expect(it.props().links).not.toBeNull();
    })

    it('should have 5 divs', () => {
        const wrapper = shallow( <HistoryItem/> )
        const children = wrapper.find('div').children()
        console.log(children.length)
        expect(children.length).toBe(5);
    })

    
    it('should be show contain text', () => {
        const wrapper = shallow( <HistoryItem/> )
        const text = wrapper.find('.history-item-link')
        expect(text.text()).toBe('more')
    })


})