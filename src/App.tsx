import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectedTableTile from './SelectedTableTile';

function App() {
  return (
    <div className="App">
      {/* <SelectedTableTile table="My Table" onAddColumnClick={() => {}} /> */}
      <SelectedTableTile/>
    </div>
  );
}

export default App;
