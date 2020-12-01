export const TEST_ALL = 'TEST_ALL';
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_LOGIN = 'SAVE_USER_LOGIN';

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
