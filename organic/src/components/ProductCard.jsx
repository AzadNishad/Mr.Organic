import { FaRegStar } from "react-icons/fa6";

const Card = ({ imgName, category, productName, price }) => (
    <div className='w-[285px] flex flex-col items-center'>
      <img src="https://picsum.photos/seed/picsum/300/300" alt="" className='mb-3 cursor-pointer' />
      {/* {imgName} */}
      <span className='text-sm text-[#7f7f7f] mb-1'>{category}</span>
      <h2 className='text-lg font-bold mb-1 leading-5 cursor-pointer' style={{ fontFamily: 'Merriweather' }}>{productName}</h2>
      <span className='flex text-base text-[#7f7f7f] mb-2'>
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </span>
      <p className='font-bold text-base'>${price}</p>
    </div>
  );

  export default Card;

  