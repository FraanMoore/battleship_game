/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import React from "react";
import ReactDOM from "react-dom";
import FireButton from "./shoot";

function App() {
  //hacer boton emergente para agregar las coordenadas
  //agregar tablero de coordenadas
  //que las coordenadas ingresadas las lea el tablero
  //al momento de poner las coordenadas tiene que aparecer el mensaje de "shoot"

  // let fireTorpedo;
  // function openFireTorpedo() {
  //   fireTorpedo = onclick;
  // }
  // 0 = empty
  // 1 = part of a ship
  // 2 = a sunken part of a ship
  // 3 = a missed shot

  let gameBoard = [
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
  ];

  const shoot = (line, column) => {
    if (gameBoard[line][column] === 1) {
      alert("Diste al blanco!");
      gameBoard[line][column] = 2;
    } else if (gameBoard[line][column] === 0) {
      alert("Fallaste!");
      gameBoard[line][column] = 3;
    } else {
      alert("Ya habías dispado aquí!");
    }
  };

  //shoot(1, 1);

  //HASTA AQUI FUNCIONA BIEN//

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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>4</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>5</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>6</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>7</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>8</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>9</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        {/* <div class="position-relative">
          <button
            id="fireButton"
            type="button"
            class="btn btn-outline-secondary"
          >
            Disparar
          </button>
        </div> */}
      </div>

      {/* <FireButton /> */}
    </div>
  );
}
document.addEventListener("DOMContentLoaded", function() {
  const app = document.getElementById("fireButton");
  ReactDOM.render(<FireButton />, app);
});
export default App;
