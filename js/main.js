/*eslint-env es6*/

function back_home(x,y) {
  window.scrollTo(x,y);
}

function to_allProjects(x,y) {
  window.scrollTo(x,y);
}

function to_projects(x,y) {
  window.scrollTo(x,y);
}

function to_contact() {
    window.open("https://github.com/amber1bhatt/Tech-Resume/blob/master/Job%20Search%20Resume/Software%20Resume/Update%202-17-2020/Software2172020.pdf");
}

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');

if(theme) {
	body.classList.add(theme);
}

darkButton.onclick = () => {
	body.classList.replace('light', 'dark');
	localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
	body.classList.replace('dark', 'light');
	localStorage.setItem('theme', 'light');
};


//
function openGOL() {
  window.open("https://github.com/amber1bhatt/javascriptProjects/tree/master/gameOfLife");
}

//
function openC4A() {
  window.open("https://github.com/amber1bhatt/pythonProjects/tree/master/connectFourAI/dist");
}

//
function openTD() {
  window.open("https://github.com/amber1bhatt/Processing-and-p5/tree/master/thinkingDots");
}

//
function openTODO() {
  window.open("https://github.com/amber1bhatt/ToDo-App");
}
