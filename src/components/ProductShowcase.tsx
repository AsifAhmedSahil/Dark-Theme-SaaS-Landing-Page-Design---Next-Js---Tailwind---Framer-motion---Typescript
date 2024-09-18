'use client'
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null)
  const {scrollYProgress} = useScroll({
    target: imageRef,
    offset:["start end","end end"]
  })

  const rotateX = useTransform(scrollYProgress,[0,1],[15,0])
  const opacity = useTransform(scrollYProgress,[0,1],[0.5,1])


  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-24 sm:py-[72px] ">
      <div className="container ">
        <h2 className="text-center text-5xl sm:text-6xl tracking-tighter font-bold">Intutive Interface</h2>
        <div className="sm:max-w-2xl max-w-xl mx-auto">
        <p className="text-xl text-center text-white/70 mt-5">Discover the ease of managing your media with Pixle-Pulse AI’s Intuitive Interface, designed for both simplicity and efficiency.</p>
        </div>
        <motion.div
        style={{
          opacity:opacity,
          rotateX:rotateX,
          transformPerspective:"800px"
        }}
        >

        <Image ref={imageRef} src={appScreen} alt="The product screenshot" className="mt-14 lg:w-[80%] mx-auto"/>
        </motion.div>

      </div>

    </div>
  );
};
