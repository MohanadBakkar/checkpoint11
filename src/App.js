import React from 'react';
//import Player from './Player';
//import playersData from './players';
//import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayerList';

function App() {
  return (
    <div>
      <h1>Famous Football Players</h1>
      <PlayersList />
    </div>
  );
}


/*function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {playersData.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}*/

export default App;
