import { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";


export default function App() {
    const[activePlayer,setActivePlayer]=useState('X');

    function handleSelectPlayer(){
        setActivePlayer((currActive)=>currActive==='X'?'Y':'X');
       
    }
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player IntialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player IntialName="Player 2" symbol="Y" isActive={activePlayer==='Y'} />
        </ol>
        <GameBoard onSelectPlayer={handleSelectPlayer} onActive={activePlayer}/>
      </div>
      LOG
    </main>
  );
}
