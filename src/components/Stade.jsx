import React from "react";
import Img1 from "./images/Caf-Champions-League-trophy.jpg";
import Img2 from "./images/tpmcup.jpg";
import Img3 from "./images/moisecup.jpg";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utility/animation";

const Stade = () => {
  return (

    
    <section>
       <hr className=""/>
      <div className="container my-14">
        <div className="grid grid-cols-2 m-5 gap-6">
          <motion.div
            variants={SlideRight(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="order-last md:order-first
           flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
              How it Helps people
            </h1>
          
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <a href="#" className="text-primary">
                Learn More
              </a>
            </p>
          
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img1} alt="" className="w-full rounded-3xl " />
            <p className="text-gray-400 mt-4">Coronavirus</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.6)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img2} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Diagnostic</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
          >
            <img src={Img3} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">Symptoms</p>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Stade;