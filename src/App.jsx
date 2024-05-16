import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player IntialName='Player 1' symbol='X' />
        <Player IntialName='Player 2' symbol='Y' />
          
          
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
