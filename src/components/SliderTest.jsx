import React from 'react'
import Card from './ProductCard';
// import { Coffee, Sanitizer, RedChillies, EdibleOil } from './ImageComponent';
import Slider from './Slider';

export default function SliderTest() {
    // Array of slide content
    const slides = [
        <Card
            imgName={<Coffee clsName="mb-3 cursor-pointer" />}
            category="Groceries"
            productName="Assorted Coffee"
            price="35.00"
        />,
        <Card
            imgName={<Sanitizer clsName="mb-3 cursor-pointer" />}
            category="Groceries"
            productName="Hand Sanitizer"
            price="15.00"
        />,
        <Card
            imgName={<RedChillies clsName="mb-3 cursor-pointer" />}
            category="Groceries"
            productName="Handpicked Red Chillies"
            price="19.00"
        />,
        <Card
            imgName={<EdibleOil clsName="mb-3 cursor-pointer" />}
            category="Juice"
            productName="Fresh Orange Juice"
            price="25.00"
        />
    ];
    // Render the Slider component and pass the slides array as a prop
    return (
        <div>

            <div>
                <h1>My Slider</h1>
                <Slider slides={slides} slidePview={2} sliderStyle="mySlider border border-black w-[602px] p-5 " />
            </div>

        </div>
    )
}
