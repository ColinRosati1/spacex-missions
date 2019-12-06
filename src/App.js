import React from 'react';
import './styles/App.css';

import History from './components/History'
import Launches from './components/Launches'

import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        SPACE X MISSIONS
      </header>
      <div className="app-body">
        <History className="app-body-wrapper"/>
        <Launches className="app-body-wrapper"/>
      </div>
    </div>
  );
}

export default connect()(App);
