const elemCategories = document.querySelector('#categories');
const itemCategories = elemCategories.querySelectorAll('li.item')

console.log(`В списке ${itemCategories.length} категории.`);

itemCategories.forEach(category => {
   const categoryItem = category.querySelector('h2').textContent;
   const categoryElements = category.querySelectorAll('li').length;
   console.log(`Категория: ${categoryItem}`);
   console.log(`Количество элементов: ${categoryElements}`);
});