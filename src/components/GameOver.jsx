export default function GameOver ({ winner }){
    return <div id="game-over">
    <h2>Game over</h2>
    {winner && <p>{winner} won</p>}
    {!winner && <p>it draw !</p>}
    <p>
        <button>
            Rematch!
        </button>
    </p>

    </div>
}