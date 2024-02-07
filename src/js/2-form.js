const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

init();

function init() {
  const data = loadFromLS(STORAGE_KEY) || {};
  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

function handleInput() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const formData = {
    email,
    message,
  };
  saveToLS(STORAGE_KEY, formData);
}

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    return JSON.parse(json);
  } catch {
    return json;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const formData = {
    email,
    message,
  };
  console.log(formData);
  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}
