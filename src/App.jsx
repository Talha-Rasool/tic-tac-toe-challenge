import { act, useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const[activePlayer,setActivePlayer]=useState('X');

  function handleSelectSquare(){
    setActivePlayer((currActivePlayer)=> currActivePlayer==='X'?'Y':'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
          <Player initialName="Player 2" symbol="Y" isActive={activePlayer==='Y'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
