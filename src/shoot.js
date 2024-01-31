import React, { useState } from "react";

const FireButton = ({ onFire }) => {
  const [X, setX] = useState("");
  const [Y, setY] = useState("");

  const handleFire = () => {
    if (X && Y) {
      onFire(parseInt(X, 10) - 1, parseInt(Y, 10) - 1);
      setX("");
      setY("");
    } else {
      alert("Please enter valid coordinates.");
    }
  };

  return (
    <div className="fire-button-container">
      <label id="X">
        X:
        <input
          type="number"
          min="1"
          max="9"
          value={X}
          onChange={e => setX(e.target.value)}
        />
      </label>

      <label id="Y">
        Y:
        <input
          type="number"
          min="1"
          max="9"
          value={Y}
          onChange={e => setY(e.target.value)}
        />
      </label>

      <button id="fire" type="button" className="btn" onClick={handleFire}>
        Disparar
      </button>
    </div>
  );
};

export default FireButton;
