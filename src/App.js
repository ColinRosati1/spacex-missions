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
        SPACE X MISSIONS
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
