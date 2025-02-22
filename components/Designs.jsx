import React from 'react'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Designs = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 4.7]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 5.3]);

    const pictures = [
        {
            src: "/LetsTalk.png",
            scale: scale4
        },
        {
            src: "/figma2.jpg",
            scale: scale5
        },
        {
            src: "/natureLogin.png",
            scale: scale6
        },
        {
            src: "/figma3.jpg",
            scale: scale8
        },
        {
            src: "/newArrival.png",
            scale: scale9
        },
        {
            src: "/figma1.jpg",
            scale: scale9
        },

    ]
    
    return (
        <>
        <h1 className='heading design-head'>Designs</h1>
            <div ref={container} className='design-container'>
                <div className="sticky">
                    {pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className="el">
                            <div className="imageContainer">
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                // placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })}
                </div> 
            </div>
        </>
    )
}

export default Designs