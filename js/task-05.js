const input = document.querySelector('#name-input');
input.addEventListener('text', onInputText)

function onInputText(event) {
   event.preventDefault();
   console.log('Это текст');
   console.log(event.currentTarget);

   const text = inputElement.value

   const formData = new FormData(event.currentTarget);
   console.log(formData);
}