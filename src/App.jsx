import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const[activePlayer,setActivePlayer]=useState('X')

  function handleActivePlayer(){
    setActivePlayer((curActivePlayer)=> curActivePlayer==='X'?'Y':'X');
    
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player IntialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
        <Player IntialName='Player 2' symbol='Y' isActive={activePlayer === 'Y'} />
          
          
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
