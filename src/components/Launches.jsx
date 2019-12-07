import React , { Component } from 'react';
import '../styles/launch.css';

import LaunchItem from './LaunchItem'
import { updateLaunch, LaunchApiRequest,  showErrorLaunch } from '../actions/launch-action'
import { revealLaunchModal }  from '../actions/modal-action'
import { connect } from 'react-redux'

class Launches extends Component {
  constructor(props) {
    super(props)
    this.state = {
       reveal_launch: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleModal = this.handleModal.bind(this)
  }

  async handleClick(){
    const rev = this.state.reveal_launch;
    return ( this.state.reveal_launch == true
      ?
       'Show Launches' 
      :
        await this.props.onLaunchApiRequest()
        .then( () => this.setState({reveal_launch:true}))
    )
  }

  handleModal(event){
    const name = event.currentTarget.childNodes[0].innerHTML
    const selected_mission = this.selectMission(name)
    this.displayModal(selected_mission)
  }

  //gets the mission data and changes modal state
  displayModal(mission){
    console.log(this.props)
    this.props.onRevealLaunchModal(mission)
  }
  
  // filters mission from mission name
  // return one mission from props
  selectMission(missionName){
    const mission = this.props.launch.filter( ( res, i ) => {
      return res.mission_name === missionName
    })

    return mission
  }

  render() {
    let launch = this.props.launch
    let launchItems = []
    // console.log("launch",typeof launch, launch)
    return (
      <div className="launch" onClick={this.handleClick}>
        <header className="launch-header">
          Launches
        </header>
        {
          (this.state.reveal_launch === false
            ?
              <div> Show Launches </div>
            :
              launchItems = launch.map( ( res, index ) => {
                return <LaunchItem  onClick={this.handleModal} mission={res.mission_name} nationality={res.rocket.second_stage.payloads[0].nationality} manufacturer={res.rocket.second_stage.payloads[0].manufacturer} type={res.rocket.second_stage.payloads[0].payload_type} key={index} />
              })
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
    history: state.history,
    launch: state.launch,
    select_launch: state.select_launch,
  }
}

const mapDispatchToProps = {
    onUpdateHistory: updateLaunch,
    onLaunchApiRequest: LaunchApiRequest,
    onShowError: showErrorLaunch,
    onRevealLaunchModal: revealLaunchModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Launches);