import React, { useState } from 'react';

const certificates = [
  {
    name: 'Full Stack Web Development',
    image: '/certificates/fullstack.jpg',
  },
  {
    name: 'Machine Learning Specialization',
    image: '/certificates/ml.jpg',
  },
  {
    name: 'Cloud Practitioner',
    image: '/certificates/cloud.jpg',
  },
  {
    name: 'Frontend Web Development',
    image: '/certificates/fullstack.jpg',
  },
  {
    name: 'Cyber Specialization',
    image: '/certificates/ml.jpg',
  },
  {
    name: 'AI Practitioner',
    image: '/certificates/cloud.jpg',
  },
];

const glassStyle = {
  background: 'rgba(255, 255, 255, 0.29)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
};

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <section id='about' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className='heading' style={{ color: '#fff', marginBottom: '2rem', letterSpacing: 2 }}>ABOUT ME</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '80px', paddingRight: '50px', gap: '20px', fontFamily: 'monospace', lineHeight: '20px' }}>

      <p>Hi, I’m a full-stack developer with a passion for crafting applications that solve real-world problems. I work comfortably across the stack, building intuitive frontends with React and robust backends using Python, FastAPI, and the MERN stack.</p>
      <p>Beyond web development, I enjoy diving deep into SQL databases and experimenting with machine learning algorithms to make data-driven applications smarter and more efficient. Lately, I've been exploring LangChain and cloud technologies—always on the lookout for new tools and ideas that can push my skills further.</p>
      <p>At heart, I’m a builder: I love turning ideas into working products, learning new technologies along the way, and constantly growing as a developer.</p>
        </div>
        <img src="/Version control-bro.svg" alt="me" height={500} width="auto" style={{ marginRight: '50px' }} />
      </div>
      <div
        style={{
          border: '1.5px solid #333',
          borderRadius: '18px',
          // maxWidth: 700,
          width: '100%',
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => setActiveTab('about')}
            style={{
              padding: '0.7rem 1.5rem',
              border: 'none',
              borderRadius: '12px 12px 0 0',
              color: 'white',
              fontWeight: activeTab === 'about' ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: '100%',
              backgroundImage: 'linear-gradient(315deg, #da98b71d 0%, #722ae61c 74%)',
              background: 'black',
              fontFamily: 'monospace'
            }}
          >
            Know About Me
          </button>
          <button
            onClick={() => setActiveTab('cert')}
            style={{
              padding: '0.7rem 1.5rem',
              border: 'none',
              borderRadius: '12px 12px 0 0',
              color: 'white',
              fontWeight: activeTab === 'cert' ? 'bold' : 'normal',
              cursor: 'pointer',
              transition: 'all 0.2s',
              width: '100%',
              backgroundImage: 'linear-gradient(315deg, #da98b71d 0%, #722ae61c 74%)',
              background: 'black',
              fontFamily: 'monospace'
            }}
          >
            Certification
          </button>
        </div>
        <div className='about-container' style={{
          borderRadius: '0 0 12px 12px',
          padding: '2rem 1rem',
          minHeight: 250,
        }}>
          {activeTab === 'about' && (
            <div className="Portfolio">        
              <div className="number" style={{ color: '#aaa'}}>
                {[...Array(11)].map((_, i) => (
                  <span className="num" key={i} style={{ marginRight: 4 }}>{(i+1).toString().padStart(2, '0')}</span>
                ))}
              </div>
              <div className="info" style={{ fontFamily: 'monospace', color: '#fff', fontSize: 16 }}>
                <p className="details"><span className="blue">className</span> <span className="golden">GauravSingh</span> {'{'}</p>
                <p className="details"><span className="dots">..</span><span className="blue">constructor</span>() {'{'}</p>
                <p className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">name</span> <span className="pink">=</span> <span className="green">'Gaurav Singh'</span></p>
                <p className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">email</span> <span className="pink">=</span> <span className="green">'gaurav07singh10@gmail.com'</span></p>
                <p className="details"><span className="dots">..</span>{'}'}</p>
                <p className="details"><span className="dots">..</span><span className="golden">skills()</span> {'{'}</p>
                <p className="details"><span className="dots">....</span><span className="blue">return</span> [<span className="green">'HTML/CSS', 'JavaScript', 'Python', 'Bootstrap/Tailwind',</span> </p>
                <p className="details"><span className="dots">......</span><span className="green">'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'ReactJs', 'NextJs', 'FastAPI'</span></p>
                <p className="details"><span className="dots">......</span><span className="green">'Firebase', 'Figma', 'UI/UX', 'Artificial Intelligence',</span></p>
                <p className="details"><span className="dots">......</span><span className="green">'Machine Learning Algorithms', 'WebRTC', 'NumPy', 'Pandas'</span> {']'}</p>
                <p className="details">{'}'};</p>
              </div>            
            </div>
          )}
          {activeTab === 'cert' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
              {certificates.map((cert, idx) => (
                <div key={idx} style={{
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  padding: '1rem',
                  width: '220px',
                  background: 'rgba(24,24,32,0.95)',
                  color: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  ...(glassStyle),
                }}>
                  <img src={cert.image} alt={cert.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>{cert.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
