import React, { useEffect, useState } from 'react'
import { client } from "../lib/client";
import{format} from "date-fns"
import { Link } from "react-router-dom";


const Blog = () => {



    const [stories,setStories]=useState([])
    useEffect(()=>{
      client.fetch(
          `*[_type == "post"]{
          title,
         
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
      ).then((data)=>{setStories(data)
      
      }).catch(console.error);

  },[])


  return (
  
    <> 
     
    
    
       <section className="  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 ">
      
    {stories.map((story)=>(<Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
    
      <article className=" ">
               <div>
               <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
   <div class="h-80">
   {story.mainImage && (


<img
src={story.mainImage.asset.url}
alt={story.mainImage.alt}
loading="lazy"
className="w-full  transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-90 duration-150 ..."
/>
)}
   </div>
   <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
   <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
     <h1 class="font-dmserif text-2xl font-bold text-white"> {format(new Date(story.publishedAt), "dd MMMM yyyy")}</h1>

    

     {
                   <p className="text-sm leading-relaxed font-sans h-14 text-white ">
                     {`${story.body[0].children[0].text.substring(
                       0,
                       200
                     )}...`}
                   </p>
                 }
     <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
     <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Voir plus</button>
   </div>
 </div>


               </div>
             
               <div className="p-4 ">
                

               </div>
             </article>
     
    
    </Link>  ))}
     

   </section>
   <div className='max-7xl mx-auto px-5 mb-20 flex items-end justify-end'>
   <Link to="/">
      <button className="  bg-white  ml-5 mt-20 mb-10 py-2 px-8 mr-5 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 ">Retour</button>
      </Link>

     
   </div>
      
    </>
  )
}

export default Blog

