import { useState } from "react";

export default function Player({ IntialName, symbol }) {
  const[playerName,setPlayerName]=useState(IntialName)
  const [isEditing, setIsEditing] = useState(false);


  function handleChange(event){
    setPlayerName(event.target.value);
  };


  function handleClick() {
    setIsEditing((editing)=>!editing);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
      editablePlayerName = <input type="text" value={playerName} onChange={handleChange}/>;
    }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
    </li>
  );
}
