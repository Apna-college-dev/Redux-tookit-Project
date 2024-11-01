import React from 'react'
import ProductLists from '../Shop/ProductLists'

const Shop = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
     <div className='w-11/12 py-4'>
      <ProductLists/>
     </div>
    </div>
  )
}

export default Shop