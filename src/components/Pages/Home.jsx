import React from 'react'
import HomeSlider from '../HomeSlider'
import Categories from '../Categories'
import FeaturesProduct from '../FeaturesProduct'
import OfferBanner from '../OfferBanner'
import BestSeller from '../BestSeller'
import NewsLetter from '../NewsLetter'


const Home = () => {
  return (
    <div className='w-full h-full flex-col justify-center items-center'>
      <div>
        <HomeSlider />
      </div>
      <div className='w-11/12 py-3 px-6'>
        <div className='title_container py-3'>
          <h1 className='title font-bold text-3xl'>Find your style:Categories</h1>
        </div>
        <Categories />
      </div>
      <div className='w-11/12 px-6 py-3'>
        <div className='title_container py-3 '>
          <h1 className='title font-bold text-center text-3xl '>Discover our Featured Product  </h1>
        </div>
        <FeaturesProduct />
      </div>

      <div className='w-11/12 py-3 px-6'>
        
        <OfferBanner />
        <div className='w-full py-3'>
        <div className='title_container py-3 '>
          <h1 className='title font-bold text-center text-3xl '>Discover our best Seller  </h1>
        </div>
        <BestSeller />
      </div>
      </div>
      <div className='w-11/12 py-3 px-6'>
        
        <NewsLetter />
      </div>
      <div className='w-11/12 px-6'>
        
       
      </div>
      
    </div>
  )
}

export default Home
