import React from 'react'
import {useEffect, useState } from 'react'

const Categories = () => {
    const[data,setData]=useState([])
     
     

      useEffect(() => {
        fetch('./img/Category/categories.json')
        .then(response=>response.json())
        .then(data=>setData(data))
        .catch(error=>console.log("error :",error)
        )
      }, [])
        
    
    
  return (
    <div className='w-full flex flex-wrap justify-center items-center py-5 px-2 gap-3'>
      {data.length>0 && data.map((category,index)=>(
        <div className='flex flex-col justify-center items-center p-3 rounded-full h-32 w-32 bg-lime-200 hover:bg-lime-600 cursor-pointer transition-all duration-500 ease-linear' key={index}>
            <img src={category.image} alt={category.name} className='w-10 h-10' />
            <h1 className='text-sm py-3 text-center font-bold text-nowrap'>{category.name}</h1>
        </div>

      ))}
    </div>
  )
}

export default Categories
