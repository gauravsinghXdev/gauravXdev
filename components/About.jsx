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
                {/* <span className="num">.</span> */}
                <span className="num">10</span>
                <span className="num">11</span>
                <span className="num">12</span>
                {/* <span className="num">13</span> */}
                {/* <span className="num">14</span>
                <span className="num">15</span>
                <span className="num">.</span>
                <span className="num">16</span>
                <span className="num">17</span> */}
            </div>
            <div className="info">
                <span className="details"><span className="blue">className</span> <span className="golden">GauravSingh</span> {"{"}</span>
                <span className="details"><span className="dots">..</span><span className="blue">constructor</span>() {"{"}</span>
                <span className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">name</span> <span className="pink">=</span> <span className="green">'Gaurav Singh'</span></span>
                {/* <span className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">dateOfBirth</span> <span className="pink">=</span><span className="green">'07th feb 2003'</span></span> */}
                <span className="details"><span className="dots">....</span><span className="pink">this.</span><span className="yellow">email</span> <span className="pink">=</span> <span className="green">'gaurav07singh10@gmail.com'</span></span>
                <span className="details"><span className="dots">..</span>{"}"}</span>
                {/* <span className="details"><span className="dots">....</span><span className="golden">education()</span> {"{"}</span>
                <span className="details"><span className="dots">....</span><span className="blue">return</span> {"["} </span>
                <span className="details"><span className="dots">......</span><span className="green">{2021{"-"}2025 {":"} 'Lakshmi Narian College of Technology and Exellence - B.Tech - CSE</span></span>
                <span className="details"><span className="dots">......</span><span className="green">(Artificial Intelligence and Machine Learning) }</span></span>
                <span className="details"><span className="dots">......</span><span className="green">{2021 : 'Kendriya Vidyalaya no.1 Bhopal - 12th - PCM stream}</span></span>
                <span className="details"><span className="dots">......</span><span className="green">{2019 : 'Kendriya Vidyalaya no.1 Bhopal - 10th - CBSE board}</span></span>
                <span className="details"><span className="dots">....</span>]</span>
                <span className="details"><span className="dots">..</span>}</span> */}
                <span className="details"><span className="dots">..</span><span className="golden">skills()</span> {"{"}</span>
                <span className="details"><span className="dots">....</span><span className="blue">return</span> {"["} <span className="green">'HTML/CSS', 'JavaScript', 'Python', 'Bootstrap/Tailwind',</span> </span>
                <span className="details"><span className="dots">......</span><span className="green">'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'ReactJs', 'NextJs',</span></span>
                <span className="details"><span className="dots">......</span><span className="green">'Firebase', 'Figma', 'UI/UX', 'Artificial Intelligence',</span></span>
                <span className="details"><span className="dots">......</span><span className="green">'Machine Learning Algorithms', 'WebRTC'</span> {"]"}</span>
                <span className="details"><span className="dots">..</span>{"}"}</span>
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
