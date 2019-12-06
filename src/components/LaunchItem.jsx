import React from 'react';
import '../styles/launch.css';

function LaunchItem(props) {
  const {mission, location, event_date_utc,links} = props
  return (
    <div className="launch-item">
      <div className="launch-item-mission">{mission}</div>
      <div className="launch-item-location">{location}</div>
    </div>
  );
}

export default LaunchItem;