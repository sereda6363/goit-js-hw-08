import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const LOCALDATA_KEY = "feedback-form-state";
const formData = {}

form.addEventListener('submit', onFormSubmit)

populateTextarea()

function onFormSubmit(e) {
  e.preventDefault();

  if (email.value === '' || textarea.value === '') {
    return alert('Внимание! Все поля должны быть заполнены!')
  }

  e.currentTarget.reset();
  localStorage.removeItem(LOCALDATA_KEY);
}

form.addEventListener('input', throttle(e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALDATA_KEY, JSON.stringify(formData));
}), 1000)

function populateTextarea() {
  const savedData = localStorage.getItem(LOCALDATA_KEY)

  if (savedData) {
    const parseSaveData = JSON.parse(savedData)
    Object.entries(parseSaveData).forEach(([name, value]) => {
      form[name] = value;
      form.elements[name].value = value;
    });
  }
}