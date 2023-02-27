'Use strict'

//https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
let btn = document.querySelector(".btn__toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const modal = document.querySelector('.modal');
const modal__container = document.querySelector('.modal__container');
const container = document.querySelector('.container');
const header = document.querySelector('.header');
const lmode = document.querySelectorAll('.lmode');
const dmode = document.querySelectorAll('.dmode');
let getMode, nextPageMode, modes;

/* Setting light & dark mode */
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

  setModeTitle();
 console.log(getMode);
});

function setModeTitle() {
    if(btn.innerHTML == 'Dark Mode' && getMode == 'dark') {
        btn.innerHTML = 'Light Mode';
    } else if(btn.innerHTML == 'Light Mode' && getMode == 'light') {
        btn.innerHTML = 'Dark Mode';
    }
}

/* grab mode on page reload and implement */
window.onbeforeunload = function() {
    console.log(getMode);
    localStorage.setItem('modes', getMode);
}

window.onload = function() {
    modes = localStorage.getItem('modes');
    console.log(modes);
    if (modes !== null) {
        if(btn.innerHTML == 'Dark Mode' && (localStorage.getItem('modes') == 'dark' || localStorage.getItem('mode') == 'dark')) {
            btn.innerHTML = 'Light Mode';
        } else if(btn.innerHTML == 'Light Mode' && (localStorage.getItem('modes') == 'light' || localStorage.getItem('mode') == 'light')) {
            btn.innerHTML = 'Dark Mode';
        }
    }
}
/*-----------------------------------------------------*/
/* modal element */
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

/* navigation between pages */
function nextPage() {
    location.href = 'next-page.html';
}

function backPage() {
    location.href = 'index.html';
}