import {
  TEST_ALL,
  UPDATE_USER_FIELD,
  SAVE_USER_LOGIN,
} from 'src/actions/user';

const initialState = {
  name: 'John',
  isLogged: true,
  email: 'johny@gmail.com',
  pass: 'allumerlefeu',
  confirmPass: '',
  confirmEmail: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_ALL:
      return {
        ...state,
      };
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER_LOGIN:
      return {
        ...state,
        islogged: true,
        name: action.name,
      };
    default: return { ...state };
  }
};

export default user;
