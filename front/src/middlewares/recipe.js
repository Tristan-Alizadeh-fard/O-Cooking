import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import { formatIG, formatTime, formatStep, formatSetMeasure, formatTags } from 'src/utils';
import { setFormSettings, setMeasures, emptyForm, sendMessage, setTags } from 'src/actions/recipe';
import { saveUserName, setSearchBarSettings } from 'src/actions/user';

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
        tags: formatTags(recipe.selectedTags),
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
          // créer une action de réponse avec message et effacement des champs
          store.dispatch(emptyForm());
          store.dispatch(saveUserName());
          store.dispatch(sendMessage('success', true));
        })
        .catch((error) => {
          store.dispatch(sendMessage('error', true));
          setTimeout(() => {
            store.dispatch(sendMessage('error', false));
          }, 3000);
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
          store.dispatch(setFormSettings(response.data.categories));
          store.dispatch(setTags(response.data.tags));
          store.dispatch(setSearchBarSettings(formatSetMeasure(response.data.categories)));
          store.dispatch(setMeasures(formatSetMeasure(response.data.measure)));
        })
        .catch((error) => {
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
