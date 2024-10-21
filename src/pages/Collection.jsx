import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const {products}=useContext(ShopContext);
    const [showFilter,setShowFilter]=useState(false);
const [filterProducts,setFiterProducts]=useState([]);
const [category,setCategory]=useState([]);
const [subCategory,setSubcategory]=useState([]);
const [sortType,setSortType]=useState('relavent')
const toggleCategory=(e)=>{
if(category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item =>item !== e.target.value))

}else{
   setCategory(prev =>[...prev,e.target.value]) 
}
}
const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
        setCategory(prev=>prev.filter(item =>item !== e.target.value))
    }
    else {
        setSubcategory(prev =>[...prev,e.target.value])
    }
}
const applyFilter=()=>{
    let productsCopy=products.slice();
    if(category.length>0){
        productsCopy=productsCopy.filter(item =>category.includes(item.category))
    }
    if(subCategory.length>0){
        productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))

    }
    setFiterProducts(productsCopy)
}

const sortProduct=()=>{
   let fpCopy=filterProducts.slice();
   switch(sortType) {
    case 'low-high':
    setFiterProducts(fpCopy.sort((a,b)=>(a.price -b.price)));
    break;
    case 'high-low':
    setFiterProducts(fpCopy.sort((a,b)=>(b.price -a.price)));
    break;
    default :applyFilter();
    break;

   }
}

useEffect(()=>{
   applyFilter();

},[category,subCategory])
useEffect(()=>{
 sortProduct();
 
 },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t bg-white '>
      
      {/*Filter*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer gap-2 '><p className='text-gray-600'>Filter</p>
<img className={`h-3 sm:hidden ${showFilter ? 'rotate-90 ':''}`} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD6+voiIiLY2NgeHh6Wlpbm5uatra27u7ubm5vt7e1WVlYZGRkXFxdAQED09PTe3t7ExMSkpKSqqqqNjY1qampxcXFjY2OHh4dGRkbNzc0ICAgwMDAzMzO0tLQpKSk7Ozt+fn5NTU1XV1fJycmMimfGAAACcElEQVR4nO3a61biQBCFUUICQRIjeOEyIAyo7/+Ks5QZTU7LQNMFdFzf/qeQWieGdHUKOx0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJ0I68Xqp8u037E9YI9J++eC6Nyo9VHvZVROQPTZKeXmZQbp3/rTU3KGciTT28G5RZf5XKDchbWX5GSgWm1G4N0Fvq1TMlTYLFhvdjQJF+4QT1U4M2zbdRaGyUMlTVSJS8BraxslrJZuQy8NHOlpy4Qxe9modI0ZYiiGSxZnva3zyqpY9VfDYxvJdspi+C91KjG5jkDjDYS78G7xKNU2ER0BT/MJODc8/gnOX52lpRBthJx4rWkTuXo7blihhhKyLvjT7Erq3E0rV7cSMzbY7tGnsqRsXR6x0KCJotzHnYVubTsoy6GXvqTNwwXMfrlfUM96O07ukDOENo1Di2KugRH2CXUXCK//vfdoW30KpyP3f7NifOh9t8KXYVuMHv7NphOl7i/aM4AmW7Evx/faJeoonkcPCzfSPjvusZa3rOKukuort5g7ng3YJMXB91KTzxfb4G+nEJZv0bd14PXuAUGchK1R9riTl4LH7Nexd6xhDP0aE2XUGPtd7uu8Sa/3dsvW6DYyMk8dtxP7yq2gYwXZ0WZOwOZsm1dQumzQ09+jnIg40c7e1OkAxk/ujura2mXUM4c5pPFF6pRyPXm2zl6FtcCzpPuu+gHMl66E+cEZ23vEkrHNz+gS6hm12jls8Qh9clvLP9kYSz7t6Qa/WdRjNZltazKaL93sfHTVlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQLT+AO/VErsGFn8vAAAAAElFTkSuQmCC' alt=''/>
</p>
   {/*Category Filter*/}
   <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '' :"hidden"} sm:block`}>
<p className='mb-3 text-sm font-medium'>CATEGORIES</p>
<div className='flex flex-col gap-2 text-sm font-light text-black'>
    <p className='flex gap-2'>
        <input className='w-3' type='checkbox' value={"Men"} onChange={toggleCategory}/>Men
    </p>
    <p className='flex gap-2'>
        <input className='w-3' type='checkbox' value={"Women"} onChange={toggleCategory}/>Women
    </p>
    <p className='flex gap-2'>
        <input className='w-3' type='checkbox' value={"Kids"} onChange={toggleCategory}/>Kids
    </p>

</div>
   </div>
   {/*Sub Filter*/}
   <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter? '' :"hidden"} sm:block`}>
<p className='mb-3 text-sm font-medium'>Type</p>
<div className='flex flex-col gap-2 text-sm font-light text-black'>
    <p className='flex gap-2'>
        <input className='w-3' type='checkbox' value={"Topwear"} onChange={toggleSubCategory}/>Topwear
    </p>
    <p className='flex gap-2'>
        <input className='w-3' type='checkbox' value={"Bottomwear"} onChange={toggleSubCategory}/>Bottomwear
    </p>
    <p className='flex gap-2'>
        <input className='w-3' type='checkbox' value={"Winterwear"} onChange={toggleSubCategory}/>winter
    </p>

</div>
   </div>

      </div>
         {/*Rigth side*/}
         <div className='flex-1'>

            <div className='flex justify-between text-base sm:text-2xl mb-4 '>
<h1 className='text-center text-black '>All collection</h1>
<select onChange={(e)=>setSortType(e.target.value)} className='border-2 text-black  text-sm px-2 '>
    <option value="relavent">Normal price</option>
    <option value="low-high">Low to High</option>
    <option value="high-low">High to Low</option>


</select>
            </div>
             {/*Map Products*/}
             <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6  text-red-400'>
{
    filterProducts.map((item,index)=>(
        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
    ))
}
             </div>


         </div>

    </div>
  )
}

export default Collection
