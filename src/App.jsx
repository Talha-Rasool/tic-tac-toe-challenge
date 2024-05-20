import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [players,setPlayers]=useState({
    X:'Player 1',
    Y:'Player 2'
  })

  let gameBoard = [...intialGameBoard.map(innerArr=>[...innerArr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const SecondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === SecondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner= players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length===9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "Y" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "Y";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });

    
  }
  function handleRestart(){
    setGameTurns([])
  }

  function handlePlayerNameChange(symbol,newName){
    setPlayers((prevPlayers)=>{
      return {
        ...prevPlayers,
        [symbol]:newName
      }
    })
  }



  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangePlayer={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="Y"
            isActive={activePlayer === "Y"}
            onChangePlayer={handlePlayerNameChange}
          />
        </ol>
        {(winner|| hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
