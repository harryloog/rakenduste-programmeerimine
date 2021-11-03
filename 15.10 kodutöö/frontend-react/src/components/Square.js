import React from "react"

const Square = (props) => {
    const number = props.number
    const squared = number**2
    return (
      <>
        <h1>{squared}</h1>
      </>
    )
} 

export default Square