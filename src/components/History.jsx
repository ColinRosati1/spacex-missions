import React, { Component } from 'react';
import '../styles/history.css';

import HistoryItem from './HistoryItem'

import { updateHistory, historyApiRequest, showErrorHistory } from '../actions/history-action'
import { connect } from 'react-redux'

export class History extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_history: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(){
    console.log("handleClick history", this.props)
    
    await this.props.onHistoryApiRequest()
    .then( () => this.setState({reveal_history:true}))
    
  }
  
  render() {
    let history = this.props.history
    let histItems = []
    return (
      <div className="history" onClick={this.handleClick}>
      <header className="history-header">
        History
      </header>
      {
        (this.state.reveal_history === false
          ?
            <div> Show history </div>
          :
            histItems = history.map( res => {
              return <HistoryItem title={res.title} details={res.details} date={res.event_date_utc} link={res.links} key={res.id}/>
            })
        )
      }
    </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
    launch: state.launch,
    history: state.history,
  }
}

const mapDispatchToProps = {
    onUpdateHistory: updateHistory,
    onHistoryApiRequest: historyApiRequest,
    onShowError: showErrorHistory
}


export default connect(mapStateToProps, mapDispatchToProps)(History);
