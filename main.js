// form validation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const li = document.createElement('li');

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please Enter all fields';

    return setTimeout(() => msg.remove(), 3000);
  } else {
    li.appendChild(
      document.createTextNode(`${nameInput.value} - ${emailInput.value}`)
    );
    userList.appendChild(li);

    // clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

myForm.addEventListener('submit', onSubmit);
