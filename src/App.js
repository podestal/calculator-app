import React from "react"
import Calculator from "./components/Calculator"

const App = () => {



  // const handleAddition = () => {

  //   if (secondNumber) {
  //     setResult(firstNumber + secondNumber)
  //     setFirstNumber()
  //     setSecondNumber()
  //   }
  // }

  return (
    <div>
      {/* <input onChange={handleChange} type="number" name="number" value={firstNumber}/>
      <button onClick={handleAdd}>+</button> */}
      {/* <p>{firstNumber}</p>
      <p>{secondNumber}</p>
      <h3>{result}</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" name="number"/>
      </form>
      <button onClick={handleAddition}>add</button>
      <button onClick={handleAddition}>substract</button>
      <button onClick={handleAddition}>multiply</button>
      <button onClick={handleAddition}>divide</button> */}
      <Calculator />
    </div>
  );
}

export default App;
