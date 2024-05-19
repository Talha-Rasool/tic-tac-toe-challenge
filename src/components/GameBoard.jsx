import { useState } from "react";

const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



export default function GameBoard() {
    const[gameBoard,setGameBoard]=useState(intialGameBoard);

    function handleSelectSqure(rowIndex,colIndex){
        setGameBoard((prevBoard =>{
            const updatedBoard=[...prevBoard.map(innerArr => [...innerArr])]
            updatedBoard[rowIndex][colIndex]='X';
            return updatedBoard;
        }))
    }


  return (
    <ol id="game-board" >
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectSqure(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
