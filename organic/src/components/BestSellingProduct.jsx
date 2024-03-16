import React from 'react'
import Card from './ProductCard';
import { HeroLeaf, Coffee, Sanitizer, RedChillies, EdibleOil } from './ImageComponent';
import Slider from './Slider';


export default function BestSellingProduct() {
  const Cards = [
    <Card
      // imgName={<Coffee clsName="mb-3 cursor-pointer" />}
      category="Groceries"
      productName="Assorted Coffee"
      price="35.00"
    />,
    <Card
      // imgName={<Sanitizer clsName="mb-3 cursor-pointer" />}
      category="Groceries"
      productName="Hand Sanitizer"
      price="15.00"
    />,
    <Card
      // imgName={<RedChillies clsName="mb-3 cursor-pointer" />}
      category="Groceries"
      productName="Handpicked Red Chillies"
      price="19.00"
    />,
    <Card
      // imgName={<EdibleOil clsName="mb-3 cursor-pointer" />}
      category="Juice"
      productName="Fresh Orange Juice"
      price="25.00"
    />
  ];

  return (
    <div className='px-[10%] pt-[150px] w-full'>
      <div className='mb-3'>
        <h1 className='text-[34px] font-bold w-full text-center tracking-wide' style={{ fontFamily: 'Merriweather' }}>Best Selling Products</h1>
      </div>
      <div className='w-full pb-10'>
        <HeroLeaf clsName="mx-auto" />
      </div>
      <div className='mb-4 flex justify-between'>
        {/* {Cards} */}
      </div>
      <div className='mb-4 flex justify-center'>
        <Slider slides={Cards} slidePview={1} sliderStyle="mySlider border border-black w-[80vw]  " />
      </div>
      <div className='mb-4 flex justify-between'>

      </div>

    </div>
  )
}
