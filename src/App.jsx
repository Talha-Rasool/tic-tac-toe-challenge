import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player IntialName='Player 1' symbol='X' />
        <Player IntialName='Player 2' symbol='Y' />
          
          
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
