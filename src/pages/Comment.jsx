














import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { LiaCommentDotsSolid } from "react-icons/lia";


const Comment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "comment"]{
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
      )
      .then((data) => {
        setComments(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
    
     <div className="bg-black">
     <hr/>
     </div>
     <div className="fontmatch">
     <section className=" bg-black pl-10 pt-10">

     

{comments.map((comment) => (
  <Link to={`//${comment.slug.current}`} key={comment.slug.current}>
    <div className="flex">
      {
        <p className="text-2xl ml-10 mb-10 text-white mb-3 ">
          {`${comment.body[0].children[0].text.substring(0, 200)}...`}
        </p>
      }
        <LiaCommentDotsSolid size={50} className="text-white"/>

      
    </div>
    <div className="flex">
      {comment.mainImage && (
        <img
          src={comment.mainImage.asset.url}
          alt={comment.mainImage.alt}
          loading="lazy"
          className="w-10 h-10  rounded-full  ml-10 mb-5"
        />
      )}

      <div className="flex flex-col ">
        <p className=" pl-2 pt-3 text-white ">{comment.title}</p>

       
      </div>
    </div>

    <div>
      <div></div>

      <div class=""></div>
    </div>
    
  </Link>
    
))}
<hr/>
</section>

     </div>
     
    
    </>
  );
};

export default Comment;
