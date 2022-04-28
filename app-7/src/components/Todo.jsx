import React from 'react'

function Todo(props) {
    const {item} = props;

  return (
      <h2>{item}</h2>
  )
}

export default Todo