import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from "../lib/client";


import { useLayoutEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import {PortableText} from "@portabletext/react"
import Blog from './Blog';
const Blogpost = () => {
  const [blogpost,setBlogpost]=useState([]);
  const [stories,setStories]=useState([])
  const {slug}=useParams()

  
  useEffect(()=>{
    client.fetch(
        `*[slug.current == "${slug}"]{
        title,
     
        slug,
       secondmainImage{
        asset -> {
        _id,
        url
        },
        alt,
        },
        body,
        publishedAt,
        mainImage{
        asset -> {
        _id,
        url
        },
        alt,
        },
        "name":author ->name,

        }| order(publishedAt desc)`
    ).then((data)=>{setBlogpost(data[0])
      
    }).catch(console.error);

},[slug]);
/*
useEffect(()=>{
  document.title=`Reading | ${blogpost.title}`
},[slug])*/
  return <>
{blogpost && <section className='my-4 px-6 font-serif'>

     {blogpost.mainImage && <img src={blogpost.mainImage.asset.url} alt={blogpost.mainImage.alt} className='object-cover rounded-lg  h-svh w-full '/>} 
     
<div className='text-balance text-black bg-white  text-sm  '> 

<h1 className=' text-4xl mb-4 xl:text-6xl mt-2 ml-10'>{blogpost.title}</h1>
<div className='ml-10'>

<PortableText value={blogpost.body}/>
<div className='mt-10 '>
{blogpost.secondmainImage&& <img src={blogpost.secondmainImage.asset.url} alt={blogpost.secondmainImage.alt} className=' object-cover w-96 h-96 pb-10'/>} 

</div>
</div>
    
     
</div>






     <div className='max-w-7xl mx-auto px-5 mb-20 flex items-center justify-end'>
     <Link to="/blog">
      <button className="     bg-neutral-900 font-com text-sm capitalize  shadow-black/60  border      ml-5 mt-20 mb-10 py-2 px-8 mr-5 rounded shadow text-white shadow-xltracking-wide hover:opacity-75 transition-all duration-200 ">Plus d'actualité</button>
      </Link>
     </div>
   
     </section>
     
     
     }
     </>
}

export default Blogpost
