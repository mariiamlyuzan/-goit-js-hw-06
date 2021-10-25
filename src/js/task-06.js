const inputRef = document.querySelector('#validation-input');
 
inputRef.addEventListener('blur', onEnterInput);

function onEnterInput () {
   if(inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
      
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
}