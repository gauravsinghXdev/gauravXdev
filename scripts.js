consoleText(['website.', 'ui/ux.', 'things.'], 'text',['white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
      
    } else {
      con.className = 'console-underscore'
      
      visible = true;
    }
  }, 400)
}


  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let interval = null;
  
  document.querySelector("#HOME").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 20);
  }  
  document.querySelector("#PROJECTS").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 20);
  }  
  document.querySelector("#SKILLS").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 20);
  }  
  document.querySelector("#CONTACT").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 20);
  }  
  document.querySelector("#RESUME").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 20);
  }  
;

function namehacked() {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

};

// VanillaTilt.init(document.querySelectorAll(".card"),{
//   max: 25,
//   speed: 400,
//   glare: true,
//   "max-glare": 0.3
// });
  

// VanillaTilt.init(document.querySelector(".box"), {
//   max: 25,
//   speed: 400
// });

// const Frontend = document.querySelector('#Frontend');
// document.querySelector('.fcard').addEventListener = e => {
//   //  skillimg.classList.remove('.hideImg');
//    Frontend.classList.remove('.barset');
//    console.log("done")
// }
// const Frontend = document.querySelector('#Frontend');
document.querySelector("#Frontend").addEventListener("mouseover", myFunction);

function myFunction() {
  document.getElementsById("Frontend").classList.remove(".barset")
}

// const trailer = document.getElementById("trailer");

// window.onmouseover = e => {
//   const x = e.clientX - trailer.offsetWidth / 2;
//   const y = e.clientY - trailer.offsetHeight / 2;

//   const keyframes = {
//     trasform: `translate($(x)px, (y)px)`
//   }

//   trailer.animate(keyframes, {
//     duration: 800,
//     fill: "forwards"
//   })
// }

const corsorDot = document.querySelector("[data-cursor-dot]");
const corsorOutline = document.querySelector("[data-cursor-outlne]");

window.addEventListener("mouseover", function(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  corsorDot.style.left = `${posX}px`;  
  corsorDot.style.top = `${posY}px`;  
  
  corsorOutline.animate({
    left: `${posX}px`,  
    top: `${posY}px`  
  }, {duration: 500, fill: "forwards"});
})

// const intro = document.querySelector(".intro");
// const name = document.querySelector("#name");
// const des = document.querySelector("#des");
// const lineOne = document.querySelector("#lineOne");
    
// const tl = new TimelineMax();
// tl.fromTo(
//     "#intro", 1 , {height:"0%"}, {heigth:"100%"}
// )
// .fromTo(
//     "#name", 1.2, {x:"-100%"}, {x:"0%"}
// )      
// .fromTo(
//     "#intro", 1.2, {opacity: 0, x:30}, {opacity: 1, x:0}  
// )


const text =  baffle(".data");
text.set({
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});

text.start();
text.reveal(4000);