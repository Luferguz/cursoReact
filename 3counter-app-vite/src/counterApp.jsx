import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value);


  const sumar = () => {
    setCounter(counter + 1);
  }

  const restar = () => {
    setCounter(counter - 1);
  }

  const resetear = () => {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={sumar}>Sum</button>
      <button onClick={restar}>Rest</button>
      <button onClick={resetear}>Reset</button>
    </>
  )
}

CounterApp.protoTypes = {
  value: PropTypes.number
}

export { CounterApp };