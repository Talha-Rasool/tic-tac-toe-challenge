
const intialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectPlayer , onActive, turns }) {
    let gameBoard=intialBoardGame;
    for(const turn of turns){
        const{square,player}=turn;
        const{row,col}=square;
        gameBoard[row][col]=player
        
    }
    // const[gameBoard,setGameBoard]=useState(intialBoardGame);

    // function handleGameClick(rowInd,colInd){
    //     setGameBoard((prevGame)=>{
    //         const updatedBoard=[...prevGame.map((innerArr)=>[...innerArr])];
    //         updatedBoard[rowInd][colInd]=onActive;
            
    //         return updatedBoard;

    //     })
    //     onSelectPlayer();
        
    // }
   
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowInd) => (
        <li key={rowInd}>
          <ol>
            {row.map((col, colInd) => (
              <li key={colInd}>
                <button onClick={()=>onSelectPlayer(rowInd,colInd)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
