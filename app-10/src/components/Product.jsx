import React from 'react'
import { Link } from 'react-router-dom'

function Product(props) {

  return (
    // <div className='productPreview'>
    //     <p>{props.productName}</p>
    //     <img src={props.productImg} />
    //     <p>{`$${props.productPrice}`}</p>
    // </div>
    <Link to={'/product/' + props.productId}>
        <img src={props.productImg} className='productPreview'/>
    </Link>
  )
}

export default Product