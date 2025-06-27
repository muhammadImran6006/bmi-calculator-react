import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [bmi_value, setBmi_value] = useState(0);
  const [message, setMessage] = useState("");

  const check_bmi = (e) => {
    e.preventDefault();

    const w = parseFloat(weight);     // in KG
    const f = parseFloat(feet);       // in feet
    const heightInMeters = f * 0.3048; // convert feet to meters

    if (!w || !f || heightInMeters <= 0) {
      alert("Please enter valid weight and height!");
      return;
    }

    const bmi = w / (heightInMeters * heightInMeters); // BMI formula (kg/m²)
    const rounded = bmi.toFixed(1);
    setBmi_value(rounded);

    if (bmi < 18.5) {
      setMessage("You are underweight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage("You have a normal (healthy) weight");
    } else if (bmi >= 25 && bmi < 29.9) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };

  const reload = () => {
    setWeight("");
    setFeet("");
    setBmi_value(0);
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading">BMI Calculator</h2>
        <form onSubmit={check_bmi}>
          <div className="input_section">
            <label>Height (feet)</label>
            <input
              type="number"
              placeholder="Enter height in feet"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
          </div>

          <div className="input_section">
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input_section">
            <button className="btn_submit" type="submit">
              Check
            </button>
            <button className="btn_reload" type="button" onClick={reload}>
              Reset
            </button>
          </div>

          <div className="result_section">
            {bmi_value > 0 && (
              <>
                <h3>Your BMI is: {bmi_value}</h3>
                <p>{message}</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
