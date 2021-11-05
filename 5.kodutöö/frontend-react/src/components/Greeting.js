import React from "react"
import PropTypes from 'prop-types' 

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Greeting title { name }</h1>
      <p>Greeting text { age }</p>
    </>
  )
}

Greeting.defaultProps = {
  name: "Hello",
  age: 2
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Greeting