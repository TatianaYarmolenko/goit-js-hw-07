const counter = document.querySelector('#counter');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const increment = () => {
   counterValue += 1;
   document.getElementById('value').textContent = counterValue;
}

const decrement = () => {
   counterValue -= 1;
   document.getElementById('value').textContent = counterValue;
}

 buttonDecrement.addEventListener('click', decrement);
 buttonIncrement.addEventListener('click', increment);