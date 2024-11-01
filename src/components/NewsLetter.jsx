import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full bg-gray-200 h-full flex justify-center items-center py-14'>
        <div className='max-w-md w-full'>
          <h1 className='py-3 font-bold'>Subscribe for Exclusive Updates </h1>
          <div className="flex w-full">
          <input className='w-full border focus:outline-none focus:border-gray-400 border-gray-400 h-10' type="email" name="newsletteremail" id="newsletteremail" />
          <button className='bg-black text-white px-5 hover:bg-slate-900 transition-all ease-linear duration-500'>Send</button>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter