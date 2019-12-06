import React from 'react';
import './App.css';

import History from './components/History'
import Launches from './components/Launches'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        SPACE X MISSIONS
      </header>
      <History/>
      <Launches/>
    </div>
  );
}

export default App;
