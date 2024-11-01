import React,{useEffect,useState} from 'react'



const BestSeller = () => {
    const[data,setData]=useState([])

    
    useEffect(() => {
      fetch('./img/Product/Products.json')
      .then(response=>response.json())
      .then(data=>setData(data.products))
      .catch(error=>console.log('Error :',error)
      )
    }, [])
  return (
    <>
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 py-6'>
        {data.length >0 && data.slice(3,9).map((product)=> (
          <div className='' key={product.id}>
          <div className='w-full h-full hover:cursor-pointer '>
    
    <div className='relative'>
      <img src={product.images} alt={product.name}/>
    </div>
    <div className='flex justify-center items-center   '>
    <button className='absolute  rounded-lg p-3 bg-lime-300 hover:bg-lime-700 transition-all ease-linear duration-500'>Add To cart</button>
    </div>
    <div className='py-6'>
    <div className='flex justify-between items-center'>
    <h1 className='font-bold'>{product.name}</h1>
    <h4 className='font-bold text-lime-500'>{product.price}</h4>
    </div>
    
</div>
    
  </div>
        </div>  
        )
            
        )}

   

</div>

 
    </>
  )
}

export default BestSeller
