import {
  TEST_ALL,
  UPDATE_USER_FIELD,
  SAVE_USER_LOGIN,
  USER_INSCRIPTION_SUCCESS,
  ERROR_INSCRIPTION,
  ERROR_LOGIN,
  DESCRIPTION_ON,
  EMAIL_IN_USE,
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
  descriptionOn: false,
  token: '',
  emailInUse: false,
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
        isLogged: true,
        token: action.token,
      };
    case USER_INSCRIPTION_SUCCESS:
      return {
        ...state,
        inscriptionSuccess: true,
        errorInscription: false,
        emailInUse: false,
      };
    case ERROR_INSCRIPTION:
      return {
        ...state,
        errorInscription: true,
        emailInUse: false,
      };
    case EMAIL_IN_USE:
      return {
        ...state,
        emailInUse: true,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errorLogin: true,
      };
    case DESCRIPTION_ON:
      return {
        ...state,
        descriptionOn: !state.descriptionOn,
      };
    default: return { ...state };
  }
};

export default user;
