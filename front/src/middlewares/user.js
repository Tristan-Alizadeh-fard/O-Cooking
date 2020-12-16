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
      axios.post('http://localhost:8000/api/login_check', {
        username: email,
        password: pass,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response, 'success login');
          store.dispatch(saveUserLogin(response.data.token));
          store.dispatch(saveUserName());
          store.dispatch(updateUserField('pass', ''));
          store.dispatch(getFormSettings());
          store.dispatch(getUserRecipesAction());
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware LOGIN error');
          store.dispatch(errorLogin());
        });
      next(action);
      break;
    }
    case USER_INSCRIPTION: {
      const { email, confirmEmail, pass, confirmPass, name } = store.getState().user;
      if (email === confirmEmail && pass === confirmPass && email !== '' && pass !== '' && name !== '') {
        // http://ec2-100-25-30-18.compute-1.amazonaws.com/api/v1/users/add
        axios.post('http://localhost:8000/api/v1/users/add', {
          email,
          password: pass,
          pseudo: name,
        },
        {
          headers: {
            // Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            console.log(response, 'post success');
            store.dispatch(saveUserInscription());
            store.dispatch(updateUserField('email', ''));
            store.dispatch(updateUserField('pass', ''));
            store.dispatch(updateUserField('confirmPass', ''));
            store.dispatch(updateUserField('confirmEmail', ''));
            store.dispatch(updateUserField('inscriptionSuccess', false));
          })
          .catch((error) => {
            console.log(error, 'Je suis dans le middleware LOGIN error');
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
      axios.get('http://localhost:8000/api/v1/recipes', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response.data, 'get all recipes ok');
          store.dispatch(saveAllrecipes(response.data.recipes));
          store.dispatch(updateUserField(null, 'searchInput'));
          store.dispatch(updateUserField('Toutes les recettes', 'selectedCategory'));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware getALLRECIPES');
        });
      next(action);
      break;
    }
    case SHOW_ONE_RECIPE: {
      axios.get(`http://localhost:8000/api/v1/recipes/${action.id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response.data, 'get one recipe ok');
          store.dispatch(saveRecipe(response.data.recipes));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware get one recipe error');
        });
      next(action);
      break;
    }
    case SAVE_USER_NAME: {
      axios.get('http://localhost:8000/api/v1/users/read', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response, 'save user name ok');
          store.dispatch(saveInfosUser(response.data));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware saveUserName');
        });
      next(action);
      break;
    }
    case GET_USER_RECIPES_ACTION: {
      axios.get(`http://localhost:8000/api/v1/recipes/browse/user/${store.getState().user.idUser}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response, 'getrecipesUser ok');
          store.dispatch(saveUserRecipes(response.data.user));
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware getrecipeUser error');
        });
      next(action);
      break;
    }
    case SET_SIGNALED_ACTION: {
      axios.put(`http://localhost:8000/api/v1/recipes/${action.id}/edit/signaled`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response, 'mid set signaled ok');
          store.dispatch(setRecipe(response.data));
        })
        .catch((error) => {
          console.log(error, 'mid set signaled');
        });
      next(action);
      break;
    }
    case SET_FAVORITE_ACTION: {
      axios.put(`http://localhost:8000/api/v1/users/favorites/add/${action.id}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response.data, 'set favorite ok');
          // store.dispatch(setUserFavorite(response)); // TODO
          store.dispatch(saveUserName());
        })
        .catch((error) => {
          console.log(error, 'set favorite error');
        });
      next(action);
      break;
    }
    case UNSET_FAVORITE_ACTION: {
      axios.put(`http://localhost:8000/api/v1/users/favorites/remove/${action.id}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response.data, 'unset favorite ok');
          store.dispatch(saveUserName());
        })
        .catch((error) => {
          console.log(error, 'unset favorite error');
        });
      next(action);
      break;
    }
    case ADD_SHOPLIST_ACTION: {
      axios.put(`http://localhost:8000/api/v1/shoppinglist/edit/${action.id}`,
        {},
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response, 'add shoplist ok');
          store.dispatch(getShopListAction());
        })
        .catch((error) => {
          console.log(error, 'add shoplist error');
        });
      next(action);
      break;
    }
    case GET_SHOPLIST_ACTION: {
      axios.get('http://localhost:8000/api/v1/shoppinglist/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${store.getState().user.token}`,
        },
      })
        .then((response) => {
          console.log(response, 'get shoplist ok');
          console.log(response.data.recipes);
          store.dispatch(setShopListAction(response.data.recipes));
        })
        .catch((error) => {
          console.log(error, 'get shoplist errore');
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
      axios.post(`http://localhost:8000/api/v1/recipes/search`, {
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
        .catch((error) => {
        });
      next(action);
      break;
    }
    case REMOVE_SHOP_RECIPE: {
      axios.delete(`http://localhost:8000/api/v1/shoppinglist/delete/${action.index}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response, 'shoplist delete ok');
          store.dispatch(getShopListAction());
        })
        .catch((error) => {
          console.log(error, 'shoplist delete error');
        });
      next(action);
      break;
    }
    case SHARE_RECIPE_ACTION: {
      axios.get(`http://localhost:8000/api/v1/recipes/send/${action.id}`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response, 'share recipe ok');
          store.dispatch(setEmailSuccessAction());
        })
        .catch((error) => {
          console.log(error, 'share recipe error');
        });
      next(action);
      break;
    }
    case SEND_SHOPPINGLIST_ACTION: {
      axios.get(`http://localhost:8000/api/v1/shoppinglist/send/`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        })
        .then((response) => {
          console.log(response, 'send shoplist ok');
          store.dispatch(setEmailShoppingListSuccessAction());
        })
        .catch((error) => {
          console.log(error, 'send shoplist error');
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
