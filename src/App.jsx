import { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectPlayer(rowInd, colInd) {
    setActivePlayer((currActive) => (currActive === "X" ? "Y" : "X"));
    setGameTurns((prevTurn) => {
      let currentPlayer = "X";
      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        currentPlayer = "Y";
      }
      const updatedTurns = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevTurn,
      ];
     
      return updatedTurns;
    });
  }
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            IntialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            IntialName="Player 2"
            symbol="Y"
            isActive={activePlayer === "Y"}
          />
        </ol>
        <GameBoard
          onSelectPlayer={handleSelectPlayer}
          onActive={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
      LOG
    </main>
  );
}
