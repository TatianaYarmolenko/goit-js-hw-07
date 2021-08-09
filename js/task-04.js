const counter = document.querySelector('#counter');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');
console.log(buttonIncrement);

buttonDecrement.addEventListener('click', () => {
   span.addEventListener('click', decrement);
});

buttonIncrement.addEventListener('click', () => {
   span.addEventListener('click', increment);
});
// let counter = 0;
//   function decrement() {
//    counterValue.textContent = counter-= 1;
// }
// function increment() {
//     counterValue.textContent =counter  += 1;
// }

// buttonDecrement.addEventListener('click', decrement);
// buttonIncrement.addEventListener('click', increment);