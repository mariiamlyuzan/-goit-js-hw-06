
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const initialValue = document.querySelector('#value');

let counterValue = 0;
decrementBtn.addEventListener ('click', () => {
    initialValue.textContent = counterValue;
    counterValue -= 1;

});

incrementBtn.addEventListener('click', () => {
    initialValue.textContent = counterValue;
    counterValue += 1;
     
});