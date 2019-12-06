import React from 'react';
import '../styles/history.css';

import HistoryItem from './HistoryItem'


function History() {
  return (
    <div className="history">
      <header className="history-header">
        History
      </header>
      <HistoryItem/>
    </div>
  );
}

export default History;
