import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'
import Modal from 'react-modal';
import { revealLaunchModal }  from '../actions/modal-action'
import { connect } from 'react-redux'

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               : ' 1em',
    transform             : 'translate(-50%, -50%)',
    width                 : '80%',
    background            : 'black',
    color                 : 'white'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(App)
 
class LaunchModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
      let x = this.setState({modalIsOpen: true})
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    console.log('close')
    this.setState({modalIsOpen: false});
  }
 
  componentWillReceiveProps(nextProps){
    console.log(nextProps,this.props)
    if(nextProps.select_launch!==this.props.select_launch){
      console.log("new launch props")
      this.openModal()
    }
  }

//   static getDerivedStateFromProps(nextProps, prevState, state){
//     console.log(nextProps.select_launch, prevState, nextProps.select_launch.length)
//     let _st;
//     if(nextProps.select_launch.length <= 1){
//       // this.openModal()
//       // return this.setState({modalIsOpen: true})
//       if(prevState.modalIsOpen === true){
//           // return { modalIsOpen: false}
//       } else{
//          return { modalIsOpen: true}
//       }
      

//    }
//    else return null;
//  }

  render() {
   console.log(this.props.select_launch[0])
   let mission = ''
   let rocket = ''
   let links;
   if(this.props.select_launch[0]){
     mission = this.props.select_launch[0];
    //  rocket = this.props.select_launch[0].mission.rocket;
     links = this.props.select_launch[0].links;
   }
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>{mission.mission_name}</h2>
          
          <div>{mission.details}</div>
          <div>{mission.launch_year}</div>
          <div>{mission.launch_date_local}</div>
        </Modal>
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
      onRevealLaunchModal: revealLaunchModal
  }

export default connect(mapStateToProps, mapDispatchToProps)(LaunchModal)