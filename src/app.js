/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //hacer boton emergente para agregar las coordenadas
  //agregar tablero de coordenadas
  //que las coordenadas ingresadas las lea el tablero

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

  function shoot(line, column) {
    if (gameBoard[line][column] === 1) {
      alert("Diste al blanco!");
      gameBoard[line][column] = 2;
    } else if (gameBoard[line][column] === 0) {
      alert("Fallaste!");
      gameBoard[line][column] = 3;
    } else {
      alert("Ya habías dispado aquí!");
    }
  }
  //shoot(1, 1);
};
