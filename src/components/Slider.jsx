import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
// import { HeroLeaf, Coffee, Sanitizer, RedChillies, OrangeJuice } from './ImageComponent';


export default function Slider({ slides, slidePview, sliderStyle }) {
    return (
        <>
            <div className=''>
                <Swiper
                    slidesPerView={slidePview}
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    className={sliderStyle}
                >

                    {slides.map((slideContent, index) => (
                        <SwiperSlide className=' bg-indigo-300' key={index}>{slideContent}</SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}