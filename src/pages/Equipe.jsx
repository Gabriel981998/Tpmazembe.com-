import React, { useEffect, useState } from 'react'
import { client } from "../lib/client";
import{format} from "date-fns"
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { Link } from "react-router-dom";
import equipeheader from "../components/images/Screenshot 2024-10-20 at 03.23.04.png"
const Equipe = () => {



    const [equipes,setEquipe]=useState([])
    useEffect(()=>{
      client.fetch(
          `*[_type == "Equipe"]{
          title,
         firstname,
         lastname,
         number,
         position,
          slug,
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
      ).then((data)=>{setEquipe(data)
      
      }).catch(console.error);

  },[])


  return (
  
    <> 
      

    
    
    
    <div className='match'>
    <img src={equipeheader } alt='' className='flex justify-center w-full  '/>
    </div>
       <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5   bg-white pt-20  " >
    
      
    {equipes.map((equipe)=>(<Link to={`${equipe.slug.current}`} key={equipe.slug.current}>
    
     <article  className=" min-h-96 bg-slate-50 shadow-md hover:bg-yellow-600 ">


       <div className="flex justify-between ">
        
      
      
       <div>
<div className='pb-3 text-black pt-10   pl-10 '>

<p className='pb-10 font-sans text-6xl hover:text-white'>{equipe.number}</p>
       <p className='font-sans'>{equipe.firstname}</p>
       <p className='font-sans text-3xl'>{equipe.lastname}</p>
       <p className='font-sans'>{equipe.position}</p>
</div>

       
       
       </div>
       
       {
equipe.mainImage && <img src={equipe.mainImage.asset.url} alt={equipe.mainImage.alt} loading="lazy" className="hover:transition w-50  delay-150 duration-300"/>
}
      
    
       </div>
     </article>
    
    </Link>  ))}
     

   </section>
   
      
    </>
  )
}

export default Equipe
