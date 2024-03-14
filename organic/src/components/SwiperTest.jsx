import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
// import { HeroLeaf, Coffee, Sanitizer, RedChillies, OrangeJuice } from './ImageComponent';



// const Slider = ({slides, slidePview, sliderStyle }) => {
//     return (
//         <>
//             <div className=''>
//                 <Swiper
//                     slidesPerView={slidePview}
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 4000,
//                         disableOnInteraction: false,
//                     }}

//                     modules={[Autoplay]}
//                     className={sliderStyle}
//                 >
//                     {/* <SwiperSlide>Slide 1</SwiperSlide>
//                     <SwiperSlide>Slide 2</SwiperSlide>
//                     <SwiperSlide>Slide 3</SwiperSlide>
//                     <SwiperSlide>Slide 4</SwiperSlide> */}

//                     {slides.map((slideContent, index) => (
//                         <SwiperSlide key={index}>{slideContent}</SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>
//         </>
//     )
// }

const ParagraphLoop = ({ no, textPara }) => {
    // Create an array of length 'no' and fill it with null values
    const paragraphs = Array.from({ length: no }, (_, index) => (
        <p key={index}>{textPara}</p>
    ));
    return (<paragraphs/>)
}
export default function SwiperTest() {
    return (
        <>

            {/* // <Slider slides='Hello India' slidePview={1} sliderStyle="mySwiper" /> */}
            <h1>Looping Paragraphs</h1>
            <ParagraphLoop no={5} textPara="This is a paragraph." />
        </>
    );
}
