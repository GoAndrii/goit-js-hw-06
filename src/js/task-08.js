const { button, form } = {
  button: document.querySelector('[type="submit"]'),
  form: document.querySelector(".login-form"),
};
const values = {};
const email = form.elements.email;
const password = form.elements.password;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (Number(email.value) === 0 || Number(password.value) === 0) {
    alert("Все поля должны быть заполнены!");
  }
  values.email = email.value;
    values.password = password.value;
        console.log(values);
  form.reset();
}