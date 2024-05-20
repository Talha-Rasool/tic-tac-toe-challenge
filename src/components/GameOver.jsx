export default function GameOver ({ winner, onRestart }){
    return <div id="game-over">
    <h2>Game over</h2>
    {winner && <p>{winner} won</p>}
    {!winner && <p>it draw !</p>}
    <p>
        <button onClick={onRestart}>
            Rematch!
        </button>
    </p>

    </div>
}