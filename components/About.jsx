import React from 'react';

const About = () => {
  return (
    <>
      <section id='about'>
        <div className="topbar">
          <div className="cut"></div>
          <div className="expand"></div>
          <div className="minimize"></div>
        </div>
        <div className="filename">
          <span>about.me</span>
        </div>
        <div className="Portfolio">        
          <div className="number">
            <span className="num">01</span>
            <span className="num">02</span>
            <span className="num">03</span>
            <span className="num">04</span>
            <span className="num">05</span>
            <span className="num">06</span>
            <span className="num">07</span>
            <span className="num">08</span>
            <span className="num">09</span>
            <span className="num">10</span>
            <span className="num">11</span>
            <span className="num">12</span>
          </div>
          <div className="info">
            <span className="details"><span className="blue">className</span> <span className="golden">GauravSingh</span> {"{"}</span>
            <span className="details"><span className="dots">..</span><span className="blue">constructor</span>() {"{"}</span>
            <span className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">name</span> <span className="pink">=</span> <span className="green">&#39;Gaurav Singh&#39;</span></span>
            <span className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">email</span> <span className="pink">=</span> <span className="green">&#39;gaurav07singh10@gmail.com&#39;</span></span>
            <span className="details"><span className="dots">..</span>{"}"}</span>
            <span className="details"><span className="dots">..</span><span className="golden">skills()</span> {"{"}</span>
            <span className="details"><span className="dots">....</span><span className="blue">return</span> {"["} <span className="green">&#39;HTML/CSS&#39;, &#39;JavaScript&#39;, &#39;Python&#39;, &#39;Bootstrap/Tailwind&#39;,</span> </span>
            <span className="details"><span className="dots">......</span><span className="green">&#39;Node.js&#39;, &#39;Express.js&#39;, &#39;MySQL&#39;, &#39;MongoDB&#39;, &#39;ReactJs&#39;, &#39;NextJs&#39;,</span></span>
            <span className="details"><span className="dots">......</span><span className="green">&#39;Firebase&#39;, &#39;Figma&#39;, &#39;UI/UX&#39;, &#39;Artificial Intelligence&#39;,</span></span>
            <span className="details"><span className="dots">......</span><span className="green">&#39;Machine Learning Algorithms&#39;, &#39;WebRTC&#39;</span> {"]"}</span>
            <span className="details">{"}"};</span>
          </div>            
        </div>
        <div className="bottombar">
          <p>@gauravXdev</p>
        </div>
      </section>
    </>
  )
}

export default About;
