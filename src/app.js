import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateRandomNumber = (max)=>{
  return Math.floor(Math.random() * max)
}

const generateExcuse = () => {
  let num;
  let excuse = '';
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  for (let index = 0; index < 4; index++) {
    switch (index) {
      case 0:
        num =generateRandomNumber(who.length);
        excuse += ' ' + who[num];
        break;
      case 1:
        num = generateRandomNumber(action.length);
        excuse += ' ' + action[num];
        break;
      case 2:
        num = generateRandomNumber(what.length);
        excuse += ' ' + what[num];
        break;
      case 3:
        num = generateRandomNumber(when.length);
        excuse += ' ' + when[num];
        break;
    }
  }
  return excuse
}

window.onload = function () {
  //write your code here
  let excuse = generateExcuse();
  document.getElementById('excuse').innerHTML = excuse;
};
