import React , { Component } from 'react';
import '../styles/launch.css';

import LaunchItem from './LaunchItem'
import { updateLaunch, LaunchApiRequest, revealLaunchModal, showErrorLaunch } from '../actions/launch-action'
import { connect } from 'react-redux'

class Launches extends Component {
  constructor(props) {
    super(props)
    this.state = {
       reveal_launch: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick(){
    console.log("handleClick Launch", this.props)
    await this.props.onLaunchApiRequest()
    .then( () => this.setState({reveal_launch:true}))
  }
  
  render() {
    let launch = this.props.launch
    let launchItems = []
    console.log("launch",typeof launch, launch)
    return (
      <div className="launch">
        <header className="launch-header">
          Launches
        </header>
        {
          (this.state.reveal_launch === false
            ?
              <div onClick={this.handleClick}> Show Launches </div>
            :
              launchItems = launch.map( ( res, index ) => {
                return <LaunchItem mission={res.mission_name} nationality={res.rocket.second_stage.payloads[0].nationality} manufacturer={res.rocket.second_stage.payloads[0].manufacturer} type={res.rocket.second_stage.payloads[0].payload_type} key={index}/>
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
    onUpdateHistory: updateLaunch,
    onLaunchApiRequest: LaunchApiRequest,
    onShowError: showErrorLaunch,
    onRevealLaunchModal: revealLaunchModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Launches);