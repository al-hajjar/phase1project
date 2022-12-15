// main.js

const form = document.querySelector('form');
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Form submitted!');
});