import React from 'react';
import './styles/App.css';
import History from './components/History'
import Launches from './components/Launches'
import LaunchModal from './components/LaunchModal'

import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SPACE X MISSIONS</h1>
        <h5>a history of all the space x missions</h5>
      </header>
      <LaunchModal/>
      <div className="app-body">
        <History className="app-body-wrapper"/>
        <Launches className="app-body-wrapper"/>
      </div>
    </div>
  );
}

export default connect()(App);
