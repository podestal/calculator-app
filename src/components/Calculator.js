import React from "react"

const Calculator = () => {
    const resultRef = React.useRef()
    const inputRef = React.useRef()
    let [secondNumber, setSecondNumber] = React.useState()
    let [result, setResult] = React.useState(0)

    const handleAddition = (e) => {
        e.preventDefault()
        const number = Number(inputRef.current.value)
        setResult(result => result + number)
        inputRef.current.value = ""
    }

    const handleSubstraction = (e) => {
        e.preventDefault()
        const number = Number(inputRef.current.value)
        setResult(result => result - number)
        inputRef.current.value = ""
    }

    const handleMultiplication = (e) => {
        e.preventDefault()
        const number = Number(inputRef.current.value)
        setResult(result => result * number)
        inputRef.current.value = ""
    }

    const handleDivision = (e) => {
        e.preventDefault()
        const number = Number(inputRef.current.value)
        setResult(result => result / number)
        inputRef.current.value = ""
    }
    

    return (
        <div>
            <h1>Calculator</h1>
            <form>
                <p ref={resultRef}>{result > 0 && result}</p>
                <input type="number" ref={inputRef}/>
                <div>
                    <button onClick={handleAddition}>add</button>
                    <button onClick={handleSubstraction}>substract</button>
                    <button onClick={handleMultiplication}>multiplication</button>
                    <button onClick={handleDivision}>division</button>
                </div>
            </form>
        </div>
    )
}

export default Calculator