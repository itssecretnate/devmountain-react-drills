import React, {useState} from 'react'

function Image(props) {
    const {imgURL} = props;
  return (
    <img src={imgURL}></img>
  )
}

export default Image