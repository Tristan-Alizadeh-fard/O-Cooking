import axios from 'axios';

import { submitRecipe } from 'src/actions/recipe';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case 'recipe/submit': {
      const { recipe } = store.getState();
      axios.post('http://localhost:8000/api/recipe_add', {

      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
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
