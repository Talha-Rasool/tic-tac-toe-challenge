export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((currTurn, currInd) => {
        <li key={`${currTurn.square.row}${currTurn.square.col}`}>
          {currTurn.player} selected {currTurn.square.col},{currTurn.square.col}
        </li>;
      })}
    </ol>
  );
}
