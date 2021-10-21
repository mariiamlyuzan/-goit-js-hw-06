const inputRef = document.querySelector('#validation-input');
 
inputRef.addEventListener('blur',onEnterInput);

function onEnterInput () {
inputRef.value.length <= inputRef.dataset.length ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
}

