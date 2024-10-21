import React, { useEffect, useState } from 'react'
import { client } from '../lib/client'
import { Link } from 'react-router-dom'





 
 const Hero2 = () => {
  const [heroimage,setHeroimage]=useState([])

  useEffect(()=>{
    client.fetch(
        `*[_type == "heroimage"]{
        title,
        slug,
        firstimage,
        body,
        publishedAt,
       firstimage{
        asset -> {
        _id,
        url
        },
        alt,
        },
  
        secondimage{
        asset -> {
        _id,
        url
        },
        alt,
        },
        "name":author ->name,
  
        }| order(publishedAt desc)`
    ).then((data)=>{setHeroimage(data)
      console.log(data)
    
    }).catch(console.error);
  
  },[])
   return (
     <div className='mb-20'>
            <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 mt-20">
            {heroimage.map((hero)=>(
      
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      
        <div className="mb-6 w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className=" text-6xl mb-4 text font-bold sm:text-6xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="">
            We sell only the most excluse and high quality products for you.
            We are the best so come and hi
          </p>


        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
        <div className='relative left-12 top-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
        {
        hero. firstimage && <img src={hero. firstimage.asset.url} alt={hero. firstimage.alt} width={500} height={500}/>
        }
        </div>
          <div className='overflow-hidden-lg bg-gray-100 shadow-lg'>
        
          {
        hero. secondimage && <img src={hero.secondimage.asset.url} alt={hero.secondimage.alt} width={500} height={500}/>
        }
       </div>
        </div>
      </div>
                ))}

                <div className='flex flex-col items-center justify-between gap-8 md:flex-row '>
                  <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
                    <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 ">

                    Men
                    </Link>
                    <Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 ">

Women
</Link>
<Link href="/kids" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 ">

Kids
</Link>



                  </div>

                </div>
               
    </section>
 
     </div>
   )
 }
 
 export default Hero2
 















 


