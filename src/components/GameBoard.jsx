const intialBoardGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {intialBoardGame.map((row, rowInd) => (
        <li key={rowInd}>
          <ol>
            {row.map((col, colInd) => (
              <li key={colInd}>
                <button>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
