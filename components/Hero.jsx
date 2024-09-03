import React, { useEffect, useRef, useState } from 'react';
import ConsoleText from './ConsleText';
import BaffleText from './BaffleText';

const Hero = ({ scrollYProgress }) => {
  const words = ['website.', 'ui/ux.', 'things.'];
  const colors = ['white', 'white', 'white'];

  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (heroRef.current) {
        const { clientX: mouseX, clientY: mouseY } = event;
        const { offsetWidth: width, offsetHeight: height } = heroRef.current;

        const x = ((mouseX / width) - 0.5) * 80; // Adjust sensitivity
        const y = ((mouseY / height) - 0.5) * 80; // Adjust sensitivity
        const z = ((mouseX / width) - 0.5) * 30; // Adjust z-direction sensitivity

        setTransform(`translate3d(${x}px, ${y}px, ${z}px)`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='hero' >
      <section id="homepage" className="home">
        <video width="600" autoPlay loop muted id='hero-bg'>
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
 
          <div className="intro" ref={heroRef} style={{ transform }}>
            <BaffleText />
            <span className="line3">
              I <span id="des">design</span> and <span id="dev">develop</span>
              <ConsoleText words={words} colors={colors} />
            </span>
          </div>
          <div className="gridLines" ref={heroRef} style={{ transform }}></div>

      </section>
      <div className="blur"></div>
    </div>
  );
};

export default Hero;

