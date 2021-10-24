const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    alert('Please fill in all fields!');
  } else {
        const formData = { email, password, };
        console.log(formData);
  }

         form.reset();
}
