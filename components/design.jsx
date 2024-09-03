import React from 'react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';  
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const design = () => {
    const images = [
        'figma1.jpg',
        'figma2.jpg',
        'figma3.jpg',
        'letTalk.png',
        'natureLogin.png',
        'foodApp.png',
        'figma1.jpg', 
        'figma2.jpg',
        'figma3.jpg',
        'letTalk.png',
        'natureLogin.png',
        'letTalk.png'
    ]
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({width:1, height:1});
  
    const { scrollYProgress } = useScroll({
      target: gallery,
      offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  
    useEffect( () => {
      const lenis = new Lenis()
  
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      const resize = () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
      }
  
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();
  
      return () => {
        window.removeEventListener("resize", resize);
      }
    }, [])
  


  return (
    <>
    <div className="main">
    <div className='spacer'></div>
        <div className="gallery">
            <Column images={[images[0], images[1], images[2]]}/>
            <Column images={[images[3], images[4], images[5]]}/>
            <Column images={[images[6], images[7], images[8]]}/>
            <Column images={[images[9], images[10], images[12]]}/>
        </div>
        <div className='spacer'></div>
    </div>
    </>
  )
}


const Column = ({images, y}) => {
  return (
    <motion.div  
    className='column'
    style={{y}}
    >
        {
            images.map((src, index) => {
                return <div key={index} className='imageContainer'>
                    <Image
                     src={`/${src}`}
                    //  fill
                    height={200}
                    width={230}
                     alt="image"
                    />
                   </div>     
            })
        }
    </motion.div>
  )
}


export default design;