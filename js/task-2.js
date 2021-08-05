const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const elemIngredients = ingredients.map(ingredient => {
  const elemIngredient = document.createElement('li');
  elemIngredient.textContent = ingredient;

  return elemIngredient;
});

const listIngredients = document.querySelector('#ingredients');
listIngredients.append(...elemIngredients);
console.log(listIngredients);