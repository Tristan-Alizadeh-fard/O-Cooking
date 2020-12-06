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
