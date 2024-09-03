"use client";

import React from 'react';
import Hero from './Hero';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';
import Designs from './Designs';

const Main = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []) 


  return (
    <>
      <section id='main-containter' ref={container}>
          <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
      </section>
        {/* <div className="section-1" >
          <Hero />
        </div>
        <div className="section-2">
          <Project />
        </div> */}
        <div className='section-3'>
          {/* <About /> */}
          <Designs />
        </div>
        <div className="section-4">
          <Contact />
        </div>
    </>
  );
};


const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} >
      <Hero />
  
    </motion.div>
  )
}


const Section2 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.div style={{scale, rotate, position:"relative", height:"100vh"}} className="relative h-screen">
      
        <Project />
      
    </motion.div>
  )
}


export default Main;
  