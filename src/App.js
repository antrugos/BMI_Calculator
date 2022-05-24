import React, { useState } from "react";
import "./index.css";

function App() {
  // State
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    // Se previende de un envio
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please, enter a valid value!! ");
    } else {
      let imc = weight / (height * height);
      setBmi(imc.toFixed(1));

      // Mesagge
      if (imc < 18.5) {
        setMessage("Underweight");
      } else if (imc >= 18.5 && imc <= 24.9) {
        setMessage("Normal and Healthy weight");
      } else if (imc > 24.9 && imc <= 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    }
  };

  // Show the image based on calculo IMC
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } else if (bmi < 18.5) {
    imgSrc = require("../src/assets/underweight.png");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    imgSrc = require("../src/assets/healthy.png");
  } else if (bmi > 24.9 && bmi <= 29.9) {
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
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label> Weight (Kg)</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label> Height (Meters)</label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
        </form>

        <div className="center">
          <h3> Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
