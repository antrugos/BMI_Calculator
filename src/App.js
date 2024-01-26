import React, { useState } from "react";
import "./index.css";

function App() {
  // State
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState("");
  const [mensage, setMensage] = useState("");

  let calcImc = (e) => {
    // Se previene de un envio
    e.preventDefault();
    if (peso === 0 || altura === 0) {
      alert("please, enter a valid value!! ");
    } else {
      let imc = peso / (altura * altura);
      setImc(imc.toFixed(1));

      // Mesagge
      if (imc < 18.5) {
        setMensage("Bajo peso");
      } else if (imc >= 18.5 && imc < 24.9) {
        setMensage("Peso normal and saludable");
      } else if (imc >= 24.9 && imc < 29.9) {
        setMensage("Sobrepeso");
      } else {
        setMensage("Obesidad");
      }
    }
  };

  // Muestra la imagen basada en el calculo de IMC
  let imgSrc;

  if (imc < 1) {
    imgSrc = null;
  } else if (imc < 18.5) {
    imgSrc = require("../src/assets/underweight.png");
  } else if (imc >= 18.5 && imc < 24.9) {
    imgSrc = require("../src/assets/healthy.png");
  } else if (imc >= 25 && imc < 29.9) {
    imgSrc = require("../src/assets/overweight.png");
  } else {
    imgSrc = require("../src/assets/obesity.png");
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">Calculadora IMC</h2>
        <form onSubmit={calcImc}>
          <div>
            <label> Peso (Kg)</label>
            <input
              value={peso}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = inputValue.replace(/[^0-9]/g, "");
                setPeso(numericValue);
              }}
              placeholder="0"
            />
          </div>
          <div>
            <label> Altura (Metros)</label>
            <input
              value={altura}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = inputValue.replace(/[^0-9.]/g, "");
                setAltura(numericValue);
              }}
              placeholder="0"
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Enviar
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Recargar
            </button>
          </div>
        </form>

        <div className="center">
          <h3> Tu IMC es: {imc}</h3>
          <p>{mensage}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
