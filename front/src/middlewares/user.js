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
  setUserFavorite,
  unsetUserFavorite,
} from 'src/actions/user';

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
          store.dispatch(setUserFavorite(response)); //TODO
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
          store.dispatch(unsetUserFavorite(response));
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
          store.dispatch();
        })
        .catch((error) => {
          console.log(error, 'get shoplist errore');
           });
      next(action);
      break;
      }
    case SEARCH: {
      const { searchInput, selectedCategory, searchOption, selectedLocation } = store.getState().user;
      let formatedCategory;
      searchOption.map((option) => {
        if (option.text === selectedCategory) {
          formatedCategory = option.id;
        }
      });
      // console.log(formatedCategory);
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
          console.log(response, 'search success');
          store.dispatch(saveAllrecipes(response.data.recipesSearch));
          console.log(response.data.recipesSearch);
        })
        .catch((error) => {
          console.log(error, 'Je suis dans le middleware, SEARCH ERROR');
          // store.dispatch(emailInUse());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default user;
