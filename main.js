const btn = document.querySelector(".btn-toggle");
const modal = document.getElementsByClassName('modal')[0];
const modal__container = document.querySelector('.modal__container');
const container = document.querySelector('.container');
const header = document.querySelector('.header');

const currentMode = localStorage.getItem("mode");
if (currentMode == "dark") {
    header.classList.add("header--darkMode");
    container.classList.add("container--darkMode");
    modal__container.classList.add("modal__container--darkMode");
  }

btn.addEventListener("click", function () {
    header.classList.toggle("header--darkMode");
    container.classList.toggle("container--darkMode");
    modal__container.classList.toggle("modal__container--darkMode");
    btn.innerHTML = 'Dark Mode';
    let mode = "light";
  if (
      header.classList.contains("header--darkMode") &&
      container.classList.contains("container--darkMode") &&
      modal__container.classList.contains("modal__container--darkMode")
  ) {
    mode = "dark";
    btn.innerHTML = 'Light Mode';
  }
  localStorage.setItem("modeType", mode);
});

/*------------------------------------*/


modal.addEventListener('click', function() {
    if(modal.innerHTML == 'Show Modal') {
      modal.innerHTML = 'Hide Modal';
      container.classList.add('container--hide');
      modal__container.classList.add('modal__container--show');
    } else {
      modal.innerHTML = 'Show Modal';
      container.classList.remove('container--hide');
      modal__container.classList.remove('modal__container--show');
    }
})