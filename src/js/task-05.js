const refs = {
input: document.querySelector('#name-input'),
span: document.querySelector('#name-output'),
};

function onInputTypeText (event) {
  refs.span.textContent = event.currentTarget.value === '' ? "Anonymous" : event.currentTarget.value;
};

refs.input.addEventListener('input', onInputTypeText)