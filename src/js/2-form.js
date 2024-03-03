const form = document.querySelector('.feedback-form');

const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadForm = () => {
  const saveData = localStorage.getItem('feedback-form-state');
  if (saveData) {
    const { email, message } = JSON.parse(saveData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
};

form.addEventListener('input', saveForm);

window.addEventListener('load', loadForm);

form.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue) {
    alert('Please enter your email');
    return;
  }

  if (!messageValue) {
    alert('Please enter your message');
    return;
  }

  console.log({ email: emailValue, message: messageValue });

  form.reset();
});