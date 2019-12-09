import React , { Component } from 'react';
import '../styles/launch.css';

import LaunchItem from './LaunchItem'
import { LaunchApiRequest, launchUpdate, showErrorLaunch } from '../actions/launch-action'
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
    this.handleSearchLaunch = this.handleSearchLaunch.bind(this)
  }

  async handleClick(){
    const rev = this.state.reveal_launch;
    var x = document.getElementsByClassName("launch")[0];
    x.querySelector(".launch-body").innerHTML = "Searching ...";
    console.log(x)
    return ( rev == true
      ?
       null
      :
        await this.props.onLaunchApiRequest()
        .then( () => this.setState({reveal_launch:true}))
    )
  }

  // pass selected modal to display modal method 
  handleModal(event){
    const name = event.currentTarget.childNodes[0].innerHTML
    const selected_mission = this.selectMission(name)
    this.displayModal(selected_mission)
  }

  //gets the mission data and changes modal state
  displayModal(mission){
    this.props.onRevealLaunchModal(mission)

  }
  
  // filters mission from mission name
  // return missions matchin search
  selectMission(missionName){
    console.log(document.getElementsByClassName('launch-body'), this.props.launch.name)
    let mission_array = []
          this.props.launch.filter( ( res, i ) => {
            let _name = res.mission_name  
            let _lower_name = _name.toLowerCase() // convert to lower case
            let _lower_mission =  missionName.toLowerCase()  // convert to lower case
            let x = (_lower_name.includes(_lower_mission) == true ? // case insensitive search
              mission_array.push(res)
            : null
            )
          })

    return mission_array
  }

  // search part of the string
  async handleSearchLaunch(event){
    event.preventDefault()
    const data = new FormData(event.target);
    const name = data.get('name')
 
   !name ? 
        await this.props.onLaunchApiRequest() // if no name searched but submitted call api request
      :
        this.props.onLaunchUpdate( this.selectMission(name))
    
  }

  render() {
    let launch = this.props.launch
    let launchItems = []
    return (
      <div className="launch" onClick={this.handleClick}>
        <header className="launch-header">
          Launches
          <form onSubmit={this.handleSearchLaunch}>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="search" />
        </form>
        </header>
        {
          (this.state.reveal_launch === false
            ?
              <div className="launch-body"> Show Launches </div>
            :
            <div className="launch-body"> 
            { 
                launchItems = launch.map( ( res, index ) => {
                return <LaunchItem  onClick={this.handleModal} mission={res.mission_name} nationality={res.rocket.second_stage.payloads[0].nationality} manufacturer={res.rocket.second_stage.payloads[0].manufacturer} type={res.rocket.second_stage.payloads[0].payload_type} key={index} />
              })
            }
            </div>
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
    onLaunchApiRequest: LaunchApiRequest,
    onLaunchUpdate: launchUpdate,
    onShowError: showErrorLaunch,
    onRevealLaunchModal: revealLaunchModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Launches);