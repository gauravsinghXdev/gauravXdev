import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const useTiltEffect = (options) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltInstance = VanillaTilt.init(tiltRef.current, options);

    // Cleanup function to destroy the instance
    return () => tiltInstance && tiltInstance.destroy();
  }, [options]);

  return tiltRef;
};

export default useTiltEffect;
