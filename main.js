'Use strict'

//https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
const btn = document.querySelector(".btn__toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const modal = document.querySelector('.modal');
const modal__container = document.querySelector('.modal__container');
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const lmode = document.querySelectorAll('.lmode');
const dmode = document.querySelectorAll('.dmode');
let getMode;


const currentMode = localStorage.getItem("mode");

if (currentMode == "dark") {
    header.classList.toggle("darkMode");
    container.classList.toggle("darkMode");
    if(modal__container) {
        modal__container.classList.toggle("darkMode");
    }
  } else if (currentMode == 'light') {
    header.classList.toggle("lightMode");
    container.classList.toggle("lightMode");
    if(modal__container) {
        modal__container.classList.toggle("lightMode");
    }
  }

btn.addEventListener("click", function() {
  if(prefersDarkScheme.matches) {
    header.classList.toggle("lightMode");
    container.classList.toggle("lightMode");
    if(modal__container) {
        modal__container.classList.toggle("lightMode");
    }
    for(let x=0; x < lmode.length; x++) {
        getMode = lmode[x].classList.contains("lightMode") ? 'light':'dark';
    }    
  } else {
    header.classList.toggle("darkMode");
    container.classList.toggle("darkMode");
    if(modal__container) {
        modal__container.classList.toggle("darkMode");
    }
    for(let x=0; x < dmode.length; x++) {
        getMode = dmode[x].classList.contains("darkMode") ? 'dark':'light';
   } 
  }
   
  localStorage.setItem("mode", getMode);
});

/*------------------------------------*/
if(modal) {
    modal.addEventListener('click', function() {
        if(modal.innerHTML == 'Show Modal' && (lmode || dmode)) {
            modal.innerHTML = 'Hide Modal';
            container.classList.add('container--hide');
            modal__container.classList.add('modal__container--show');
        } else if(modal.innerHTML == 'Hide Modal' && (lmode || dmode)) {
            modal.innerHTML = 'Show Modal';
            container.classList.remove('container--hide');
            modal__container.classList.remove('modal__container--show');    
        }
    })
}

function nextPage() {
    location.href = 'next-page.html';
   
}

function backPage() {
    location.href = 'index.html';
}