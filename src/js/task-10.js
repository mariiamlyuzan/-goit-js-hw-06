function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/*<div id="controls">
      <input type="number" min="1" max="100" step="1" />
      <button type="button" data-create>Create</button>
      <button type="button" data-destroy>Destroy</button>
    </div>

    <div id="boxes"></div>*/
    const createButtonRef = document.querySelector('[data-create]');
    const destroyButtonRef = document.querySelector('[data-destroy]');
    const divRef = document.querySelector('#boxes');
    const inputRef = document.querySelector('input');

    function createBoxes (amount) {
      let newArray = [];
      amount = inputRef.value;
      for (let i = 0; i < amount; i += 1) {
      let size = 30 + i * 10;

     const divEl = document.createElement("div");
     divEl.style.width = `${size}px`;
     divEl.style.height = `${size}px`;
     divEl.style.backgroundColor = getRandomHexColor(); 
     newArray.push(divEl);
    }
    divRef.append(...newArray);
    }
    
    function destroyBoxes() {
     divRef.innerHTML = ' ';
    }
    createButtonRef.addEventListener('click', createBoxes); 
    destroyButtonRef.addEventListener('click',destroyBoxes);