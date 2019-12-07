import ConnectedApp, { History } from '../History';
import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { connect } from 'react-redux'

// import { Provider } from 'react-redux'
// import { applyMiddleware,a compose, combineReducers, createStore } from 'redux'
// import store from '../../index.js'


Enzyme.configure({ adapter: new Adapter() }) // look up how to do this globally


function setup() {
    const wrapper = shallow(<History/>)
  
    return {
      wrapper
    }
  }

  describe('components', () => {
    const { wrapper } = setup()
      it('should render self and subcomponents', () => {
        // expect(wrapper.find('.history')).to.have.lengthOf(1)
      })

      it('should render header', () => {
        // expect(wrapper.find('.history-header')).to.have.lengthOf(1)
    });

  })

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
        const wrapper = shallow(<History/>)
        expect(wrapper.state().reveal_history).toBe(false);

    })

    it('should have default state 2 child div', () => {
        
    })

    it('should have a clickable div', () => {
        
    })

    it('should contain historyitem component', () => {
  
    })

})

describe("interaction", () => {
    it('should simulate click method', () => {
        
    })

    it('should click method call api', () => {
  
    })

    it('should api have async results', () => {
  
    })

})