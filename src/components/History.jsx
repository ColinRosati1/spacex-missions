import React, { Component } from 'react';
import '../styles/history.css';

import HistoryItem from './HistoryItem'

import { updateHistory, historyApiRequest, showErrorHistory } from '../actions/history-action'
import { connect } from 'react-redux'

class History extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reveal_history: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log("handleClick history", this.props)
    this.props.onHistoryApiRequest()
    // .then(() => this.setState = {reveal_history: true})
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="history">
      <header className="history-header">
        History
      </header>
      {
        (this.state.reveal_history === false
          ?
            <div onClick={this.handleClick}> Show history </div>
          :
            <HistoryItem/>
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
