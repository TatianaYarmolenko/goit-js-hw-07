const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

span.style.fontSize = '40px'
function onInputChange(event) {
   const textSize = event.target.value;
   text.style.fontSize = `${textSize}px`;
}

input.addEventListener('input', onInputChange);