import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import { formatIG, formatTime, formatStep, formatSetMeasure } from 'src/utils';
import { setFormSettings, setMeasures, emptyForm, sendMessage } from 'src/actions/recipe';
import { saveUserName } from 'src/actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case 'recipe/submit': {
      const { recipe } = store.getState();
      axios.post('http://localhost:8000/api/v1/recipes/add', {
        name: recipe.recipeName,
        picture: recipe.recipeImage,
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
          console.log(response, 'success submit recipe');
          // créer une action de réponse avec message et effacement des champs
          store.dispatch(emptyForm());
          store.dispatch(saveUserName());
          store.dispatch(sendMessage('success', true));
          setTimeout(() => {
            store.dispatch(sendMessage('success', false));
          }, 10000);
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware submit error');
          store.dispatch(sendMessage('error', true));
          setTimeout(() => {
            store.dispatch(sendMessage('error', false));
          }, 10000);
        });
      next(action);
      break;
    }
    case 'recipe/getFormSettings': {
      store.dispatch(emptyForm());
      axios.get('http://localhost:8000/api/v1/recipes/add', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response, 'success get settings');
          store.dispatch(setFormSettings(response.data.categories));

          store.dispatch(setMeasures(formatSetMeasure(response.data.measure)));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware recipe; get settings error');
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
