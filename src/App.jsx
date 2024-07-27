import Header from "./components/Header";
import Player from "./components/Player";


export default function App() {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player IntialName="Player 1" symbol="X" />
          <Player IntialName="Player 2" symbol="Y" />
        </ol>
        Game board
      </div>
      LOG
    </main>
  );
}
