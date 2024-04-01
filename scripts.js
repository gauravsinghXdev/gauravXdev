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
  }  ;


// ScrollReveal().reveal(".slide-right", {
//   duration: 1500,
//   origin: "left",
//   distance: "300px",
//   easing: "ease-in-out"
// });

ScrollReveal().reveal(".slide-up", {
  duration: 1000,
  origin: "bottom",
  distance: "100px",
  // easing: "cubic-bezier(.37,.01,.74,1)",
  easing: "ease-in-out",
  opacity: 0,
  scale: 0.2
});

ScrollReveal().reveal('.cardbox', { 
  duration: 400,
  origin: "left",
  distance: "50px",
  easing: "ease-in-out" });

document.querySelector("#Frontend").onmouseenter = function() {
  document.querySelector("#FrontendBar").classList.remove("barset")
  document.querySelector("#FrontendBar").classList.add("show")
}
document.querySelector("#Frontend").onmouseleave = function() {
  document.querySelector("#FrontendBar").classList.add("barset")
  document.querySelector("#FrontendBar").classList.remove("show")
}

document.querySelector("#Backend").onmouseenter = function() {
  document.querySelector("#BackendBar").classList.remove("barset")
  document.querySelector("#BackendBar").classList.add("show")
}
document.querySelector("#Backend").onmouseleave = function() {
  document.querySelector("#BackendBar").classList.add("barset")
  document.querySelector("#BackendBar").classList.remove("show")
}

document.querySelector("#Database").onmouseenter = function() {
  document.querySelector("#DatabaseBar").classList.remove("barset")
  document.querySelector("#DatabaseBar").classList.add("show")
}
document.querySelector("#Database").onmouseleave = function() {
  document.querySelector("#DatabaseBar").classList.add("barset")
  document.querySelector("#DatabaseBar").classList.remove("show")
}

document.querySelector("#Design").onmouseenter = function() {
  document.querySelector("#DesignBar").classList.remove("barset")
  document.querySelector("#DesignBar").classList.add("show")
}
document.querySelector("#Design").onmouseleave = function() {
  document.querySelector("#DesignBar").classList.add("barset")
  document.querySelector("#DesignBar").classList.remove("show")
}

document.querySelector("#ProgLang").onmouseenter = function() {
  document.querySelector("#ProgLangBar").classList.remove("barset")
  document.querySelector("#frontendBar").classList.add("show")
}
document.querySelector("#ProgLang").onmouseleave = function() {
  document.querySelector("#ProgLangBar").classList.add("barset")
  document.querySelector("#ProgLangBar").classList.remove("show")
}

document.querySelector("#Automation").onmouseenter = function() {
  document.querySelector("#AutomationBar").classList.remove("barset")
  document.querySelector("#frontendBar").classList.add("show")
}
document.querySelector("#Automation").onmouseleave = function() {
  document.querySelector("#AutomationBar").classList.add("barset")
  document.querySelector("#AutomationBar").classList.remove("show")
}

