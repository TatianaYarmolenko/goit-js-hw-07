const ingredients = [
   'Картошка',
   'Грибы',
   'Чеснок',
   'Помидоры',
   'Зелень',
   'Приправы',
 ];

// const elIngr = document.querySelector('#ingredients');
//  elemIngredients.append('ingredients');
//  console.log(elIngr);
//  console.log(elemIngredients);
//  document.ul.ingredients.firstChild(elemIngredients);

const elemIngredientsParent = document.getElementById('ingredients')
console.log(elemIngredientsParent);

const elemIngredients = document.createElement('li')
elemIngredients.textContent = 'Картошка'
// elemIngredients.classList.add('Картошка')
// console.log(elemIngredients);

elemIngredientsParent.prepend(elemIngredients)