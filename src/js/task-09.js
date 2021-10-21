/*function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}*/

const buttonRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  spanRef.innerHTML = "#" + randomColor;
  
}

buttonRef.addEventListener('click', setBg);
  
