import {
  TEST_ALL,
  UPDATE_USER_FIELD,
  SAVE_USER_LOGIN,
  USER_INSCRIPTION_SUCCESS,
  ERROR_INSCRIPTION,
  ERROR_LOGIN,
} from 'src/actions/user';

const initialState = {
  name: '',
  isLogged: false,
  email: '',
  pass: '',
  confirmPass: '',
  confirmEmail: '',
  inscriptionSuccess: false,
  errorInscription: false,
  errorLogin: false,
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
        email: '',
        pass: '',
      };
    case USER_INSCRIPTION_SUCCESS:
      return {
        ...state,
        inscriptionSuccess: true,
        errorInscription: false,
      };
    case ERROR_INSCRIPTION:
      return {
        ...state,
        errorInscription: true,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: true,
      };
    default: return { ...state };
  }
};

export default user;
