/*eslint-env es6*/

function move(x,y) {
  window.scrollTo(x,y);
}

function scrollFunction(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const sun_moon = document.getElementById('sun');

const body = document.body;

const theme = localStorage.getItem('theme');
const icon = localStorage.getItem('icon');

if(theme) {
	body.classList.add(theme);
}

if(icon) {
  document.getElementById('sun_icon').className = icon;
}

sun_moon.onclick = () => {
  if(body.classList == 'light') {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('sun_icon').className = "fas fa-moon";
    localStorage.setItem('icon', 'fas fa-moon');
  }
  else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById('sun_icon').className = "fas fa-sun";
    localStorage.setItem('icon', 'fas fa-sun');
  }
}

function openGithub(url) {
  window.open(url);
}
