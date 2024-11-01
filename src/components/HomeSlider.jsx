import React,{useEffect, useState} from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const HomeSlider = () => {
  const [slides,setSlides]=useState([])
   
   
  useEffect(()=>{
    fetch('./img/Hero_Slider/slider.json')
    .then(response=>response.json())
    .then(data=>setSlides(data))
    .catch(error=>console.log("error :",error)) },[])
  return (
    <div className='w-full' >
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides?.heroSlider?.length >0 && slides.heroSlider.map((slide)=>(
         <SwiperSlide key={slide.id} className='max-h-[90vh] relative'>
          <img src={slide.image} alt={'Slide'+slide.id} />
          <div className='text_container absolute top-1/2 text-center w-full h-full'>
            <h1 className='font-bold text-5xl text-slate-800'>{slide.title}</h1>
            <p className='text-sm italic py-3 text-black-500'>{slide.subtitle}</p>
            <Link to={slide.link}>
            <button className='font-bold bg-lime-400 px-5 py-3 text-sm hover:bg-lime-500 transition ease-in duration-200 '>{slide.buttonText}</button>
            </Link>
          </div>
         </SwiperSlide>
        ))}
        
       
      </Swiper>
    </div>
  )
}

export default HomeSlider
