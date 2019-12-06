import React from 'react';
import '../styles/launch.css';

import LaunchItem from './LaunchItem'


function Launches() {
  return (
    <div className="launch">
      <header className="launch-header">
        History
      </header>
      <LaunchItem/>
    </div>
  );
}

export default Launches;
