import React from "react";
import HeroImage from "./images/shoppick.jpg";
import { SlideUp } from "../utility/animation";
import { motion } from "framer-motion";

const Hero3 = () => {
  return (
    <section className=" bg-white">
      <hr/>
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1 md:grid-cols-2  ">
        {/* Text section */}
        <div className="flex flex-col justify-center xl:pr-40">
          <div className="mt-24   mb-10 md:mt-0 md:mb-0 space-y-6 text-center md:text-left">
            <motion.h1
              variants={SlideUp(0.2)}
              whileInView={"animate"}
              initial="initial"
              className="text-5xl font-bold text-yellow-600 "
              
            >
              <h1 className="font">LA BOUTIQUE</h1>  <br /> 
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              whileInView={"animate"}
              initial="initial"
              className="font-sans text-gray-600 mt-4 "
            >
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding .
            </motion.p>
      
          </div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center"
        >
          <img src={HeroImage} alt=" " className=" mt-10 mb-10" />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero3;