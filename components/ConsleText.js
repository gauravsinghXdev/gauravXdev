// components/ConsoleText.js
import { useEffect, useRef } from 'react';

const ConsoleText = ({ words }) => {
  const targetRef = useRef(null);
  const consoleRef = useRef(null);

  useEffect(() => {
    const colors = ['white']; // Default color
    let visible = true;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = targetRef.current;
    const con = consoleRef.current;

    target.setAttribute('style', 'color:' + colors[0]);

    const intervalId = window.setInterval(() => {
      if (letterCount === 0 && !waiting) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(() => {
          const usedColor = colors.shift();
          colors.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && !waiting) {
        waiting = true;
        window.setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (!waiting) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    const underscoreIntervalId = window.setInterval(() => {
      if (visible) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);

    return () => {
      window.clearInterval(intervalId);
      window.clearInterval(underscoreIntervalId);
    };
  }, [words]);

  return (
    <div>
      <span id="text" ref={targetRef}></span>
      <div id="console" ref={consoleRef} style={consoleStyles.underscore}>_</div>
      <style jsx>{`
        .console-underscore {
          display: inline-block;
        }
        .hidden {
          visibility: hidden;
        }
      `}</style>
    </div>
  );
};

const consoleStyles = {
  underscore: {
    display: 'inline-block',
  },
};

export default ConsoleText;



  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  // let interval = null;
  
  // document.querySelector("#HOME").onmouseover = event => {  
  //   let iteration = 0;
    
  //   clearInterval(interval);
    
  //   interval = setInterval(() => {
  //     event.target.innerText = event.target.innerText
  //       .split("")
  //       .map((letter, index) => {
  //         if(index < iteration) {
  //           return event.target.dataset.value[index];
  //         }
        
  //         return letters[Math.floor(Math.random() * 26)]
  //       })
  //       .join("");
      
  //     if(iteration >= event.target.dataset.value.length){ 
  //       clearInterval(interval);
  //     }
      
  //     iteration += 1 / 3;
  //   }, 20);
  // }  
  // document.querySelector("#PROJECTS").onmouseover = event => {  
  //   let iteration = 0;
    
  //   clearInterval(interval);
    
  //   interval = setInterval(() => {
  //     event.target.innerText = event.target.innerText
  //       .split("")
  //       .map((letter, index) => {
  //         if(index < iteration) {
  //           return event.target.dataset.value[index];
  //         }
        
  //         return letters[Math.floor(Math.random() * 26)]
  //       })
  //       .join("");
      
  //     if(iteration >= event.target.dataset.value.length){ 
  //       clearInterval(interval);
  //     }
      
  //     iteration += 1 / 3;
  //   }, 20);
  // }  
  // document.querySelector("#SKILLS").onmouseover = event => {  
  //   let iteration = 0;
    
  //   clearInterval(interval);
    
  //   interval = setInterval(() => {
  //     event.target.innerText = event.target.innerText
  //       .split("")
  //       .map((letter, index) => {
  //         if(index < iteration) {
  //           return event.target.dataset.value[index];
  //         }
        
  //         return letters[Math.floor(Math.random() * 26)]
  //       })
  //       .join("");
      
  //     if(iteration >= event.target.dataset.value.length){ 
  //       clearInterval(interval);
  //     }
      
  //     iteration += 1 / 3;
  //   }, 20);
  // }  
  // document.querySelector("#CONTACT").onmouseover = event => {  
  //   let iteration = 0;
    
  //   clearInterval(interval);
    
  //   interval = setInterval(() => {
  //     event.target.innerText = event.target.innerText
  //       .split("")
  //       .map((letter, index) => {
  //         if(index < iteration) {
  //           return event.target.dataset.value[index];
  //         }
        
  //         return letters[Math.floor(Math.random() * 26)]
  //       })
  //       .join("");
      
  //     if(iteration >= event.target.dataset.value.length){ 
  //       clearInterval(interval);
  //     }
      
  //     iteration += 1 / 3;
  //   }, 20);
  // }  
  // document.querySelector("#RESUME").onmouseover = event => {  
  //   let iteration = 0;
    
  //   clearInterval(interval);
    
  //   interval = setInterval(() => {
  //     event.target.innerText = event.target.innerText
  //       .split("")
  //       .map((letter, index) => {
  //         if(index < iteration) {
  //           return event.target.dataset.value[index];
  //         }
        
  //         return letters[Math.floor(Math.random() * 26)]
  //       })
  //       .join("");
      
  //     if(iteration >= event.target.dataset.value.length){ 
  //       clearInterval(interval);
  //     }
      
  //     iteration += 1 / 3;
  //   }, 20);
  // }  ;
