export const TEST_ALL = 'TEST_ALL';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';
export const USER_INSCRIPTION = 'USER_INSCRIPTION';
export const USER_INSCRIPTION_SUCCESS = 'USER_INSCRIPTION_SUCCESS';
export const ERROR_INSCRIPTION = 'ERROR_INSCRIPTION';
export const ERROR_LOGIN = 'ERROR_LOGIN';

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

export const saveUserLogin = (logged, name) => ({
  type: SAVE_USER_LOGIN,
  logged,
  name,
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
