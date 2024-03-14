import React from 'react'
import Card from './ProductCard';
import { HeroLeaf, Coffee, Sanitizer, RedChillies, OrangeJuice } from './ImageComponent';

export default function TrendingProduct() {

    return (

        <div className='px-[10%] pt-[150px] w-full'>
            <div className='mb-3'>
                <h1 className='text-[34px] font-bold w-full text-center tracking-wide' style={{ fontFamily: 'Merriweather' }}>Trending Products</h1>
            </div>
            <div className='w-full pb-10'>
                <HeroLeaf clsName='mx-auto' />
            </div>
            <div className='mb-4 flex justify-between'>
                <Card
                    imgName={<Coffee clsName="mb-3 cursor-pointer"/>}
                    category="Groceries"
                    productName="Assorted Coffee"
                    price="35.00"
                />
                <Card
                    imgName={<OrangeJuice clsName="mb-3 cursor-pointer" />}
                    category="Juice"
                    productName="Fresh Orange Juice"
                    price="25.00"
                />
                <Card
                    imgName={<Sanitizer clsName="mb-3 cursor-pointer"/>}
                    category="Groceries"
                    productName="Hand Sanitizer"
                    price="15.00"
                />
                <Card
                    imgName={<RedChillies clsName="mb-3 cursor-pointer"/>}
                    category="Groceries"
                    productName="Handpicked Red Chillies"
                    price="19.00"
                />
            </div>
        </div>

    )
}