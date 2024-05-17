import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(intialGameBoard);

  function handleClick(indexRow, playerI) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
      console.log(updatedBoard); 
      updatedBoard[indexRow][playerI] = "X";
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((playerN, playerI) => (
              <li key={playerI}>
                <button onClick={() => handleClick(indexRow, playerI)}>
                  {playerN}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
