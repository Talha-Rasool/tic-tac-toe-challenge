import { useState } from "react";
const intialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
    const[gameBoard,setGameBoard]=useState(intialBoardGame);

    function handleGameClick(rowInd,colInd){
        setGameBoard((prevGame)=>{
            const updatedBoard=[...prevGame.map((innerArr)=>[...innerArr])];
            updatedBoard[rowInd][colInd]='X';
            
            return updatedBoard;

        })
    }
   
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowInd) => (
        <li key={rowInd}>
          <ol>
            {row.map((col, colInd) => (
              <li key={colInd}>
                <button onClick={()=>handleGameClick(rowInd,colInd)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
