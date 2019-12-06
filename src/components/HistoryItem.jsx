import React from 'react';
import '../styles/history.css';

function HistoryItem(props) {
  const {title, details, event_date_utc,links} = props
  return (
    <div className="history-item">
      <div className="history-item-title">{title}</div>
      <div className="history-item-details">{details}</div>
      <div className="history-item-event">{event_date_utc}</div>
      <div className="history-item-link"><a href={links}>more</a></div>
    </div>
  );
}

export default HistoryItem;
