import React from "react"

function Sum() {
    const [number1, setNumber1] = React.useState(0)
    const [number2, setNumber2] = React.useState(0)
    return (
      <>
        <label>Enter number 1</label>
        <input type = "text" onChange={event => setNumber1(+ event.target.value)}/>
        <label>Enter number 2</label>
        <input type = "text" onChange={event => setNumber2(+ event.target.value)}/>
        <h1>{number1 != number2 && (number1 + number2)}</h1>
      </>
    )
}

export default Sum