import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);

  return (
  <Link className=' bg-white text-black cursor-pointer' to={`/product/${id}`}>
    <div className='overflow-hidden mt-8 ml-4 mr-4'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt=''/>
        <button class="mt-2 mb-10 bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  border ">Shop now</button>

    </div>
    
  </Link>
  )
}

export default ProductItem
