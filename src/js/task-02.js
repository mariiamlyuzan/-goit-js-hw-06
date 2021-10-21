const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const containerListIngredients = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
return ingredients.map((ingredient) => {
 const listEL = document.createElement('li');
 listEL.textContent = ingredient;
 listEL.classList.add('item');

  return listEL;
  });
};

const listIngredients = makeIngredients(ingredients);
containerListIngredients.append(...listIngredients);