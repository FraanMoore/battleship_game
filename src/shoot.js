import React, { useState } from "react";
import ReactDOM from "react-dom";

const FireButton = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const openPopupWindow = () => {
    const popupWindow = window.open("", "Coordenadas", "width=400,height=400");

    const getCoordinate = () => {
      const coordinateX = x;
      const coordinateY = y;
      alert(`Coordenadas ingresadas: X=${coordinateX}, Y=${coordinateY}`);
      popupWindow.close();
    };
    const container = popupWindow.document.body;

    const contentShoot = (
      <div>
        <h2>Ingresa tus coordenadas:</h2>
        <div className="mb-3">
          <label htmlFor="x" className="form-label">
            Coordenada X
          </label>
          <input
            type="text"
            id="x"
            value={x}
            onChange={e => setX(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="y" className="form-label">
            Coordenada Y
          </label>
          <input
            type="text"
            id="y"
            value={y}
            onChange={e => setY(e.target.value)}
          />
        </div>
        <button onClick={getCoordinate}>Aceptar</button>
      </div>
    );
    ReactDOM.render(contentShoot, container);
  };

  return (
    <button type="button" onClick={openPopupWindow}>
      Disparar
    </button>
  );
};

export default FireButton;
