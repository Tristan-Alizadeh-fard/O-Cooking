import axios from 'axios';
import {
  LOG_IN,
  USER_INSCRIPTION,
  ALL_RECIPES,
  SHOW_ONE_RECIPE,
  SAVE_USER_NAME,
  GET_USER_RECIPES_ACTION,
  SET_SIGNALED_ACTION,
  SET_FAVORITE_ACTION,
  UNSET_FAVORITE_ACTION,
  ADD_SHOPLIST_ACTION,
  GET_SHOPLIST_ACTION,
  SEARCH,
  REMOVE_SHOP_RECIPE,
  SHARE_RECIPE_ACTION,
  SEND_SHOPPINGLIST_ACTION,
  saveUserLogin,
  saveUserInscription,
  errorInscription,
  errorLogin,
  emailInUse,
  saveAllrecipes,
  saveRecipe,
  saveUserName,
  saveInfosUser,
  saveUserRecipes,
  setRecipe,
  setShopListAction,
  getShopListAction,
  setEmailSuccessAction,
  updateUserField,
} from 'src/actions/user';
import { getFormSettings } from '../actions/recipe';
import { getUserRecipesAction, userInscription } from '../actions/user';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { email, pass } = store.getState().user;
      // http://ec2-100-25-30-18.compute-1.amazonaws.com/api/login_check
      axios.post('/api/api/login_check', {
        username: email,
        password: pass,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          store.dispatch(saveUserLogin(response.data.token));
          store.dispatch(saveUserName());
          store.dispatch(updateUserField('pass', ''));
          store.dispatch(getFormSettings());
          store.dispatch(getUserRecipesAction());
        })
        .catch(() => {
          store.dispatch(errorLogin());
        });
      next(action);
      break;
    }
    case USER_INSCRIPTION: {
      const { email, confirmEmail, pass, confirmPass, name } = store.getState().user;
      if (email === confirmEmail && pass === confirmPass && email !== '' && pass !== '' && name !== '') {
        // http://ec2-100-25-30-18.compute-1.amazonaws.com/api/v1/users/add
        axios.post('/api/api/v1/users/add', {
          email,
          password: pass,
          pseudo: name,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        })
          .then(() => {
            store.dispatch(saveUserInscription());
            store.dispatch(updateUserField('', 'pass'));
            store.dispatch(updateUserField('', 'confirmPass'));
            store.dispatch(updateUserField('', 'confirmEmail'));
          })
          .catch(() => {
            store.dispatch(emailInUse());
          });
      }
      else {
        store.dispatch(errorInscription());
      }
      next(action);
      break;
    }
    case ALL_RECIPES: {
      axios.get('/api/api/v1/recipes', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveAllrecipes(response.data.recipes));
          store.dispatch(updateUserField(null, 'searchInput'));
          store.dispatch(updateUserField('Toutes les recettes', 'selectedCategory'));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SHOW_ONE_RECIPE: {
      axios.get(`/api/api/v1/recipes/${action.id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveRecipe(response.data.recipes));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SAVE_USER_NAME: {
      axios.get('/api/api/v1/users/read', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveInfosUser(response.data));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case GET_USER_RECIPES_ACTION: {
      axios.get(`/api/api/v1/recipes/browse/user/${store.getState().user.idUser}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveUserRecipes(response.data.user));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SET_SIGNALED_ACTION: {
      axios.put(`/api/api/v1/recipes/${action.id}/edit/signaled`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          store.dispatch(setRecipe(response.data));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SET_FAVORITE_ACTION: {
      axios.put(`/api/api/v1/users/favorites/add/${action.id}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then(() => {
          store.dispatch(saveUserName());
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case UNSET_FAVORITE_ACTION: {
      axios.put(`/api/api/v1/users/favorites/remove/${action.id}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then(() => {
          store.dispatch(saveUserName());
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case ADD_SHOPLIST_ACTION: {
      axios.put(`/api/api/v1/shoppinglist/edit/${action.id}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          store.dispatch(getShopListAction());
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case GET_SHOPLIST_ACTION: {
      axios.get('/api/api/v1/shoppinglist/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          store.dispatch(setShopListAction(response.data.recipes));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SEARCH: {
      const {
        searchInput,
        selectedCategory,
        searchOption,
      } = store.getState().user;
      store.dispatch(updateUserField(null, 'searchInput')); // prévient d'un reste de valeur non souhaitée donnée par le Rehydrate
      store.dispatch(updateUserField(searchInput, 'searchInput')); // réassigne la valeur souhaitée de searchInput dans le champ de recherche
      store.dispatch(updateUserField('Toutes les recettes', 'selectedCategory'));
      store.dispatch(updateUserField(selectedCategory, 'selectedCategory'));
      var formatedCategory;
      searchOption.map((option) => { // récupère l'id de la catégorie souhaitée pour la DB
        if (option.text === selectedCategory) {
          formatedCategory = option.key;
        }
      });
      axios.post('/api/api/v1/recipes/search', {
        name: searchInput,
        category: formatedCategory,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveAllrecipes(response.data.recipesSearch));
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case REMOVE_SHOP_RECIPE: {
      axios.delete(`/api/api/v1/shoppinglist/delete/${action.index}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          store.dispatch(getShopListAction());
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SHARE_RECIPE_ACTION: {
      axios.get(`/api/api/v1/recipes/send/${action.id}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then(() => {
          store.dispatch(setEmailSuccessAction());
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    case SEND_SHOPPINGLIST_ACTION: {
      axios.get('/api/api/v1/shoppinglist/send/',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then(() => {
          store.dispatch(setEmailShoppingListSuccessAction());
        })
        .catch(() => {
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
