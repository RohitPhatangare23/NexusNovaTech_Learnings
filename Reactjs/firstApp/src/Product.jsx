import React from 'react'

function Product({value,data}) {
  return (
    <>
    <div className='text-green-600'>Product</div>
    <p>value passing through parameters :- </p>
    <h1>{value}</h1>
    <h2>{data.name}</h2>
    <h2>{data.price}</h2>
    
    </>
    
  )
}

export default Product