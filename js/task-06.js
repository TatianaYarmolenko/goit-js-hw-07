const input = document.querySelector('#validation-input')
console.log(input);
const dataLength = Number(input.dataset.length);

input.addEventListener('change', onInputChange);

function onInputChange(event) {
   if (event.currentTarget.value.length === dataLength && !event.currentTarget.classList.contains('invalid')) {
      event.currentTarget.classList.add("valid");
      return;
}
   if (event.currentTarget.value.length != dataLength && event.currentTarget.classList.contains('valid')) {
      event.currentTarget.classList.add("invalid");
      return;
}
   if (event.currentTarget.value.length === dataLength && event.currentTarget.classList.contains('invalid')) {
      event.currentTarget.classList.replace("invalid", "valid");
      return;
}
currentTarget.classList.replace('valid', 'invalid');
}