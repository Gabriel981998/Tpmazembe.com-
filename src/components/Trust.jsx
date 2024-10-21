import React from "react";
import Icon1 from "./images/stadeseats.jpg";

import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite  mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-3xl font-bold text-darkBlue text-center"
        >
TEMPLE DE BADIANGWENA 
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-row gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon1} alt="" className="w-full " />
  
           
           
          </motion.div>
        
        </div>
      </div>
    </section>
   
  );
};

export default Trust;


