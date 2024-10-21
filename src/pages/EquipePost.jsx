import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from "../lib/client";


import { useLayoutEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import {PortableText} from "@portabletext/react"
import Equipe from './Equipe';
const EquipePost = () => {
  const [equipePost,setEquipePost]=useState([]);
  const [equipes,setEquipe]=useState([])

  const {slug}=useParams()


  
  useEffect(()=>{
    client.fetch(
        `*[slug.current == "${slug}"]{
        title,
     
        slug,
        body,
         firstname,
         lastname,
         number,
         position,
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
    ).then((data)=>{setEquipePost(data[0])
      
    }).catch(console.error);

},[slug]);
/*
useEffect(()=>{
  document.title=`Reading | ${blogpost.title}`
},[slug])*/
  return <>
{equipePost && <section>

    
<div className='text-balance text-black bg-slate-200 '> 
<div className='flex justify-around'>

<div>
<p className='text-whitefont-bold text-6xl pb-10 font-serif'>{equipePost.number} </p>
<p className='text-whitefont-bold text-3xl pb-3'>{equipePost.firstname} </p>
<p className='text-whitefont-bold text-6xl font-serif'>{equipePost.lastname} </p>

</div>
<div >
{equipePost.mainImage && <img src={equipePost.mainImage.asset.url} alt={equipePost.mainImage.alt} className=' h-96' />} 
</div>

</div>


     
<div className='bg-white  text-black text-center '>
<PortableText  value ={equipePost.body}/>
</div>
</div>




     <div className='max-w-7xl mx-auto px-5 mb-20 flex items-center justify-end'>
     <Link to="/blog">
      <button className="  bg-white  ml-5 mt-20 mb-10 py-2 px-8 mr-5 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 ">Read More Blogpost</button>
      </Link>
     </div>
   
     </section>
     
     
     }
     </>
}

export default EquipePost
