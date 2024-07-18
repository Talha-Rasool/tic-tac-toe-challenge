import { useState } from "react";

export default function Player({ IntialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(IntialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
  }

  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {editPlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
