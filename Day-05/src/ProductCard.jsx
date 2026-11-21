import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='p-2 border-2 rounded-xl flex flex-col gap-4'>
      <div className='w-60'>
        <img src= {product.image} alt="" />
      </div>
      <div>
        <h2 className='font-semibold'>{product.title.substring(0,20)}</h2>
        <p className='text-xs'>{product.category} </p>
        <p className='text-green-600'>{product.price}</p>
      </div>
      <button onClick={()=>{
        {product.slice()}
      }} className='p-2 bg-red-600 rounded-xl'>Delete</button>
    </div>
  )
}

export default ProductCard
