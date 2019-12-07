import History from '../History';
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() }) // look up how to do this globally

// test snapshot of component to be valid
// test states
// test handleClick method
// test header exists
// test body exists
// test conditional rendering
// test simulate onclick event


describe('History component', () => {
    it('should render hitoryitems component', () => {
        const reveal_history = false;
        const wrapper = shallow(
            <div className="history">
            <header className="history-header">
              History
            </header>
            {
              (reveal_history === false
                ?
                  <div onClick={"   "}> Show history </div>
                :
                  histItems = history.map( res => {
                    console.log(res.title)
                    return <HistoryItem title={res.title} details={res.details} date={res.event_date_utc} link={res.links} key={res.id}/>
                  })
              )
            }
          </div>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should expect state is either true of false', () => {
        const it = mount(<HistoryItem/>);
        expect(it.props().title).not.toBeNull();
        expect(it.props().details).not.toBeNull();
        expect(it.props().event_date_utc).not.toBeNull();
        expect(it.props().links).not.toBeNull();
    })

    // it('should have 5 divs', () => {
    //     const wrapper = shallow( <HistoryItem/> )
    //     const children = wrapper.find('div').children()
    //     console.log(children.length)
    //     expect(children.length).toBe(5);
    // })

    // it('should be show contain text', () => {
    //     const wrapper = shallow( <HistoryItem/> )
    //     const text = wrapper.find('.history-item-link')
    //     expect(text.text()).toBe('more')
    // })


})