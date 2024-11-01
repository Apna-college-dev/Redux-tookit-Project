import React from 'react'

const OfferBanner = () => {
  return (
    <div className='w-full h-full flex justify-center items-center gap-4'>
      <div className='relative flex-1'>
        <div>
          <img src="./img/Hero_Banner/01.jpg" alt="banner" className='w-full h-full' />
        </div>
        <div className='absolute bottom-4 p-3'>
          <h1 className='text-[clamp(1em,2.5vw,5em)] font-semibold' >Exclusive Deal</h1>
          <h1 className='text-[clamp(1em,3vw,5em)] font-semibold' >Save Big on Stylish Chairs</h1>
        </div>
        </div>
        <div className='flex-1 relative'>
        <div>
          <img src="./img/Hero_Banner/04.jpg" alt="banner" className='w-full h-full' />
        </div>
        <div className='absolute top-4 p-3'>
          <h1 className='text-[clamp(1em,2.2vw,5em)] font-semibold' >Limited Time Offer</h1>
          <h1 className='text-[clamp(1em,3vw,5em)] font-semibold' >Get Cozy with Discounted Sofas!</h1>
        </div>
        </div>
        
    </div>
  )
}

export default OfferBanner
