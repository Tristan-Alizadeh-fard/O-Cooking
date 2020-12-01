import {
  TEST_ALL,
} from 'src/actions/user';

const initialState = {
  name: 'John',
  isLogged: true,
  email: 'johny@gmail.com',
  pass: 'allumerlefeu',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_ALL:
      return {
        ...state,
      };
    default: return { ...state };
  }
};

export default user;
