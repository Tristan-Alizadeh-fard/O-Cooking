import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import { formatIG, formatTime, formatStep } from 'src/utils';

import { submitRecipe } from 'src/actions/recipe';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case 'recipe/submit': {
      const { recipe } = store.getState();
      axios.post('http://localhost:8000/api/v1/recipes/add', {
        name: recipe.recipeName,
        picture: '',
        nbPeople: recipe.nbPerson * 1,
        preparationTime: formatTime(recipe.preparationTime1, recipe.preparationTime2),
        cookingTime: formatTime(recipe.cookingTime1, recipe.cookingTime2),
        category: {
          name: recipe.selectedCategory,
        },
        recipeIngredients: formatIG(recipe.ingredients),
        steps: formatStep(recipe.steps),
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response, 'success submit recipe', recipe);
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware submit error', recipe);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
