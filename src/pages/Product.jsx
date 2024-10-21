import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
    const {productId}=useParams();
    const {products,currency}=useContext(ShopContext);
    const[productData,setProductData]=useState(false);
    const [image,setImage]=useState('')
const fetchProductData=async()=>{
products.map((item)=>{
    if(item._id === productId){
        setProductData(item)
   setImage(item.image[0])
        return null
    }
})
}
useEffect(()=>{
fetchProductData()
},[productId])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-white'>
        {/*product*/}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
  {/*product Image*/}
  <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full  '>
{
    productData.image.map((item,index)=>(
        <img onClick={()=>setImage(item)} src={item} key={index} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
    ))
}
    </div>
    <div className='w-full sm:w-[80%]'>
        <img className='w-full h-auto' src={image} alt=''/>
    </div>

  </div>
  {/*Pro Info*/}
  <div className='flex-1 text-black'>
    <h1 className=''>{productData.name}</h1>
<div className='flex items-center gap-1 mt-2 '>
<img src='https://w7.pngwing.com/pngs/620/331/png-transparent-red-star-five-pointed-star-icon-star-angle-orange-triangle-thumbnail.png' alt='' className='w-3'/>
<img src='https://w7.pngwing.com/pngs/620/331/png-transparent-red-star-five-pointed-star-icon-star-angle-orange-triangle-thumbnail.png' alt='' className='w-3'/>
<img src='https://w7.pngwing.com/pngs/620/331/png-transparent-red-star-five-pointed-star-icon-star-angle-orange-triangle-thumbnail.png' alt='' className='w-3'/>
<img src='https://w7.pngwing.com/pngs/620/331/png-transparent-red-star-five-pointed-star-icon-star-angle-orange-triangle-thumbnail.png' alt='' className='w-3'/>

</div>
<p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
<p className='mt-5 text-black'>{productData.description}</p>
<div className='flex flex-col gap-4 my-8 '>
    <p>Size</p>
    <div className='flex gap-2'>
        {productData.sizes.map((item,index)=>(
            <button className={`border py-2 px-4 bg-gray-400`} key={index} >{item}</button>
        ))}

    </div>

</div>
  </div>


        </div>
      
    </div>
  ):<div className='opacity-0 '>

  </div>
}

export default Product
