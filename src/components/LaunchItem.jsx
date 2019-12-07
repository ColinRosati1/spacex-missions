import React from 'react';
import '../styles/launch.css';

function LaunchItem(props) {
  const {mission, nationality, manufacturer, type} = props
  return (
    <div className="launch-item" onClick={props.onClick}>
      <div className="launch-item-mission">{mission}</div>
      <div className="launch-item-nationality">{nationality}</div>
      <div className="launch-item-manufacturer">{manufacturer}</div>
      <div className="launch-item-type">{type}</div>
    </div>
  );
}

export default LaunchItem;