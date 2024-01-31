/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import FireButton from "./shoot";

function App() {
  const [gameBoard, setGameBoard] = useState([
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
  ]);

  const shoot = (X, Y) => {
    if (gameBoard[X][Y] === 1) {
      alert("Diste al blanco!");
      setGameBoard(prevBoard => {
        const newBoard = [...prevBoard];
        newBoard[X][Y] = 2;
        return newBoard;
      });
    } else if (gameBoard[X][Y] === 0) {
      alert("Fallaste!");
      setGameBoard(prevBoard => {
        const newBoard = [...prevBoard];
        newBoard[X][Y] = 3;
        return newBoard;
      });
    } else {
      alert("Ya habías dispado aquí!");
    }
  };

  return (
    <div>
      <div id="app" className="container">
        <table>
          <thead>
            <tr id="coordinateA">
              <th></th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
            </tr>
          </thead>
          <tbody>
            {gameBoard.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th>{rowIndex + 1}</th>
                {row.map((cell, YIndex) => (
                  <td key={YIndex}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="position-relative">
          <FireButton onFire={shoot} />
        </div>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<App />);
});

export default App;
