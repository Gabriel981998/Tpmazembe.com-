

import im1 from './117692761_732885390615908_2750831648620460405_n.jpg'
import im2 from './78976522_573463169891465_4011734535203979264_n.jpg'
import im3 from  './arrayshop.jpg'
import im4 from './79684288_573463743224741_483546968874811392_n.jpg'
import im5 from './80608507_573463286558120_1508748210661752832_n.jpg' 
import store1 from './store1.jpg'  
import store2 from './store2.jpg'  
import store3 from './store3.jpg'  
import store4 from './store4.jpg'  
import store5 from './store5.jpg'  
import store6 from './store6.webp'  



 export const assets={

    im1,
    im2,
    im3,
    im4,
im5,
 }


export const products=[
    {
        _id:"aaaa",
        name:"Women Round cotto",
        description:"A ligth djdjdhdbcc",
        price:100,
        image:[im1],
        category:"Women",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:12344445,
        bestseller:true


    },{
        _id:"aaaab",
        name:"Men Round cotto",
        description:"A ddligth djdjdhdbcc",
        price:200,
        image:[im2,im5,im4],
        category:"Kids",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:12344445,
        bestseller:true


    }
    ,{
        _id:"aaaab",
        name:"Men Round cotto",
        description:"A ddligth djdjdhdbcc",
        price:50,
        image:[im5,im3,im4],
        category:"Men",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:12344445,
        bestseller:true


    }
    ,{
        _id:"aaaarr",
        name:"Men Round cotto",
        description:"A ddligth djdjdhdbcc",
        price:25,
        image:[store2,store3,store4],
        category:"Men",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:12344445,
        bestseller:true


    }
    ,{
        _id:"aaaaff",
        name:"Men Round cotto",
        description:"A ddligth djdjdhdbcc",
        price:30,
        image:[store1],
        category:"Men",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:12344445,
        bestseller:true


    }
]