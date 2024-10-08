import React from 'react';
import Projects from '../Data/Project';
import Link from 'next/link';
import Image from 'next/image';
import useTiltEffect from './useTiltEffect'; // Adjust path as necessary

const Project = () => {
  // Optionally, define tilt options
  const tiltOptions = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  };

  return (
    <section className="project-section">
      <h1 className="heading">WORK</h1>

      <div className="card-list">
        {Object.keys(Projects).map((key, i) => {
          // Each card should have its own tilt effect
          const TiltCard = () => {
            const tiltRef = useTiltEffect(tiltOptions);

            return (
              <Link href={`/${Projects[key].title}`} className={Projects[key].forPosition}>
                <div>
                  <Image
                    src={Projects[key].image}
                    alt={Projects[key].title}
                    height={200}
                    width={400}
                    className={Projects[key].orientation}
                    ref={tiltRef}
                  />
                  <div className="projectTitlebox">
                    <p className='projectTitle'>{Projects[key].title}</p>
                    <p>{Projects[key].index}</p>
                  </div>
                </div>
              </Link>
            );
          };

          return <TiltCard key={i} />;
        })}
      </div>
    </section>
  );
};

export default Project;
