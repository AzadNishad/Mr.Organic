import React from 'react';
import HeroLeafImage from '../assets/logo-leaf-new.png';
import CoffeeImage from '../assets/coffee-asorted.jpg';
import SanitizerImage from '../assets/sanitizer.jpg';
import RedChilliesImage from '../assets/red-chillies.jpg';
import EdibleOilImage from '../assets/edible-oil.jpg';
import OrangeJuiceImage from '../assets/orage-juice-kariz.jpg';

const HeroLeaf = ({clsName}) => <img src={HeroLeafImage} alt="Hero Leaf" className={clsName} />;
const Coffee = ({clsName}) => <img src={CoffeeImage} alt="Coffee" className={clsName}/>;
const Sanitizer = ({clsName}) => <img src={SanitizerImage} alt="Sanitizer" className={clsName}/>;
const RedChillies = ({clsName}) => <img src={RedChilliesImage} alt="Red Chillies" className={clsName}/>;
const EdibleOil = ({clsName}) => <img src={EdibleOilImage} alt="Edible Oil" className={clsName}/>;
const OrangeJuice = ({clsName}) => <img src={OrangeJuiceImage} alt="Orange Juice" className={clsName}/>;

export { HeroLeaf, Coffee, Sanitizer, RedChillies, EdibleOil, OrangeJuice };
