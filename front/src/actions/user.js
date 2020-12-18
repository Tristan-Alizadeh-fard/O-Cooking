export const TEST_ALL = 'TEST_ALL';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';
export const USER_INSCRIPTION = 'USER_INSCRIPTION';
export const USER_INSCRIPTION_SUCCESS = 'USER_INSCRIPTION_SUCCESS';
export const ERROR_INSCRIPTION = 'ERROR_INSCRIPTION';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const DESCRIPTION_ON = 'DESCRIPTION_ON';
export const EMAIL_IN_USE = 'EMAIL_IN_USE';
export const ALL_RECIPES = 'ALL_RECIPES';
export const SAVE_ALL_RECIPES = 'SAVE_ALL_RECIPES';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const SHOW_ONE_RECIPE = 'SHOW_ONE_RECIPE';
export const SAVE_RECIPE = 'SAVE_RECIPE';
export const SET_IS_LOADING = 'SET_IS_LOADING';
export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const GET_USER_RECIPES_ACTION = 'GET_USER_RECIPES_ACTION';
export const SEARCH = 'SEARCH';
export const SAVE_INFOS_USER = 'SAVE_INFOS_USER';
export const SAVE_USER_RECIPE = 'SAVE_USER_RECIPE';
export const SET_SIGNALED_ACTION = 'SET_SIGNALED_ACTION';
export const SET_FAVORITE_ACTION = 'SET_FAVORITE_ACTION';
export const UNSET_FAVORITE_ACTION = 'UNSET_FAVORITE_ACTION';
export const ADD_SHOPLIST_ACTION = 'ADD_SHOPLIST_ACTION';
export const SET_RECIPE = 'SET_RECIPE';
export const GET_SHOPLIST_ACTION = 'GET_SHOPLIST_ACTION';
export const SET_SHOPLIST_ACTION = 'SET_SHOPLIST_ACTION';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const REMOVE_SHOP_RECIPE = 'REMOVE_SHOP_RECIPE';
export const SHARE_RECIPE_ACTION = 'SHARE_RECIPE_ACTION';
export const SET_EMAIL_SUCCESS_ACTION = 'SET_EMAIL_SUCCESS_ACTION';
export const UNSET_EMAIL_SUCCESS_ACTION = 'UNSET_EMAIL_SUCCESS_ACTION';
export const SEND_SHOPPINGLIST_ACTION = 'SEND_SHOPPINGLIST_ACTION';
export const SET_SEARCHBAR_SETTINGS = 'SET_SEARCHBAR_SETTINGS';
export const SET_ERROR_INSCRIPTION_ACTION = 'SET_ERROR_INSCRIPTION_ACTION';

export const getUserState = () => ({
  type: TEST_ALL,
});

export const updateUserField = (value, name) => ({
  type: UPDATE_USER_FIELD,
  value,
  name,
});

export const logInUser = () => ({
  type: LOG_IN,
});

export const saveUserLogin = (token) => ({
  type: SAVE_USER_LOGIN,
  token,
});

export const userInscription = () => ({
  type: USER_INSCRIPTION,
});

export const saveUserInscription = () => ({
  type: USER_INSCRIPTION_SUCCESS,
});

export const errorInscription = () => ({
  type: ERROR_INSCRIPTION,
});

export const errorLogin = () => ({
  type: ERROR_LOGIN,
});

export const descriptionOn = () => ({
  type: DESCRIPTION_ON,
});

export const emailInUse = () => ({
  type: EMAIL_IN_USE,
});

export const allRecipes = () => ({
  type: ALL_RECIPES,
});

export const saveAllrecipes = (recipes) => ({
  type: SAVE_ALL_RECIPES,
  recipes,
});

export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export const showOneRecipe = (id) => ({
  type: SHOW_ONE_RECIPE,
  id,
});

export const saveRecipe = (recipe) => ({
  type: SAVE_RECIPE,
  recipe,
});

export const setisLoading = () => ({
  type: SET_IS_LOADING,
});

export const saveUserName = () => ({
  type: SAVE_USER_NAME,
});

export const getUserRecipesAction = () => ({
  type: GET_USER_RECIPES_ACTION,
});

export const searchBar = () => ({
  type: SEARCH,
});

export const saveInfosUser = (data) => ({
  type: SAVE_INFOS_USER,
  idUser: data.id,
  name: data.pseudo,
  roleUser: data.roles,
  userFavorite: data.favorites,
});

export const saveUserRecipes = (data) => ({
  type: SAVE_USER_RECIPE,
  recipesUser: data.recipes,
});

export const setSignaledAction = (id) => ({
  type: SET_SIGNALED_ACTION,
  id,
});

export const setFavoriteAction = (id) => ({
  type: SET_FAVORITE_ACTION,
  id,
});

export const unsetFavoriteAction = (id) => ({
  type: UNSET_FAVORITE_ACTION,
  id,
});

export const setRecipe = (data) => ({
  type: SET_RECIPE,
  recipe: data,
});

export const addShopListAction = (id) => ({
  type: ADD_SHOPLIST_ACTION,
  id,
});

export const getShopListAction = () => ({
  type: GET_SHOPLIST_ACTION,
});

export const setShopListAction = (value) => ({
  type: SET_SHOPLIST_ACTION,
  value,
});

export const removeFromList = (index) => ({
  type: REMOVE_FROM_LIST,
  index,
});

export const removeShoppingRecipe = (index) => ({
  type: REMOVE_SHOP_RECIPE,
  index,
});

export const shareRecipeAction = (id) => ({
  type: SHARE_RECIPE_ACTION,
  id,
});

export const setEmailSuccessAction = () => ({
  type: SET_EMAIL_SUCCESS_ACTION,
});

export const unsetEmailSuccessAction = () => ({
  type: UNSET_EMAIL_SUCCESS_ACTION,
});

export const sendShoppingListAction = () => ({
  type: SEND_SHOPPINGLIST_ACTION,
});

export const setSearchBarSettings = (value) => ({
  type: SET_SEARCHBAR_SETTINGS,
  value,
});

export const setErrorInscriptionAction = () => ({
  type: SET_ERROR_INSCRIPTION_ACTION,
});
