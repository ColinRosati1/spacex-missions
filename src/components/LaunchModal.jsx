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
    height                : '30%',
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
    this.closeModal = this.closeModal.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this)
  }
 
  openModal() {
       this.setState({modalIsOpen: true})
  }
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  // Modal reacts to updata selected mission props
  // using outdated react effect for the time being. I realize this is depricated
  componentWillReceiveProps(nextProps){
    if(nextProps.select_launch!==this.props.select_launch){
      console.log("new launch props")
      this.openModal()
    }
  }

  // send mission and user input to imaginary API
  handleModalSubmit(event){
    event.preventDefault()
    const eData = new FormData(event.target) // grat the target
    const name = eData.get('name') //get the input data
    const formData = {
      'user_favorite': name,
      "mission": this.props.select_launch[0]
    }
    const url = 'https://api.spacexdata.com/v3/launches/67'
    fetch(url, {
      type: "POST",
      data: formData
    })
    .then(res => console.log("imaginary API response",res))
  }


  render() {
   console.log(this.props.select_launch[0])
   let mission = ''
   if(this.props.select_launch[0]){
     mission = this.props.select_launch[0];
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
          <button className={"modal-button"} onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>{mission.mission_name}</h2>
          
          <div>{mission.details}</div>
          <div>{mission.launch_year}</div>
          <div>{mission.launch_date_local}</div>
          <form onSubmit={this.handleModalSubmit}>
          <label className="modal-form">Enter your favorite mission 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="search" />
        </form>
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