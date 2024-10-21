import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { GiSoccerField } from "react-icons/gi";
const Matchs = () => {
  const [matchs, setSmatch] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "matchs"]{
            symbol,
            first,
            second,
            slug,
            Hscore,
            Vscore,
            body,
            publishedAt,
         
               mainImage{
            asset -> {
            _id,
            url
            },
            alt,
            },
                   SecondImage{
            asset -> {
            _id,
            url
            },
            alt,
            },
            "name":author ->name,

            } | order(publishedAt desc)`
      )
      .then((data) => {
        setSmatch(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      

  

      <div className="match">
      <section className="    grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 bg-white ">

      
      
{matchs.map((match) => (
    <div  className="flex justify-center  ">
<div className="h-full w-80 mb-2 mt-10 ">


 <div className="gap-8 mb-10 bg-gray-100 pb-20 h-96 mt-6 ">
 <div className="bg-black border ">
 <h1 className="text-yellow-600 text-center text-sm mt-2 mb-2  pt-2">{match.symbol.current} </h1>
         <h1 className=" text-white  text-center  mb-3 pb-2">
      {match.name}
      {format(new Date(match.publishedAt), " dd MMMM yyyy ")}
    </h1>
 </div>
<div className="flex justify-center mb-6 gap-2">
<div className="">
{match.mainImage && (
            <img
              src={match.mainImage.asset.url}
              alt={match.mainImage.alt}
              loading="lazy"
              className=" rounded-full w-12 transition ease-in-out delay-100  mt-2"
            />
          )}

</div>
<div>
{match.SecondImage && (
            <img
              src={match.SecondImage.asset.url}
              alt={match.SecondImage.alt}
              loading="lazy"
              className=" rounded-full w-12 transition ease-in-out delay-100   mt-2"
            />
          )}

</div>





</div>

   
    <div className="flex  justify-center gap-2">

      <div> <h1 className=" mt-1   text-gray-600 ">
            {match.first.current}
          </h1></div>

          <div className="text-yellow-600">vs</div>
      <div> <p className="  text-gray-600 ">
            {match.second.current}
          </p></div>

    </div>

    <div className="flex justify-center ">
      <div className="flex mt-4 ">
      <div> <p className="border p-1 text-black text-2xl mr-2 rounded-lg">{match.Hscore.current}</p></div>
      <div>  <p className="border p-1 text-black text-2xl ml-2 rounded-lg ">{match.Vscore.current}</p></div>

      </div>
    



    </div>
  
    

  
  

 </div>

    </div>
    </div>
    
    
 
))}

</section>
      </div>
      
    </>
    
  );
};

export default Matchs;
