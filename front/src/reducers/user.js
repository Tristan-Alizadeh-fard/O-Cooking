import {
  TEST_ALL,
  UPDATE_USER_FIELD,
  SAVE_USER_LOGIN,
  USER_INSCRIPTION_SUCCESS,
  ERROR_INSCRIPTION,
  ERROR_LOGIN,
  DESCRIPTION_ON,
  EMAIL_IN_USE,
  SAVE_ALL_RECIPES,
  LOG_OUT_USER,
  SAVE_RECIPE,
  SET_IS_LOADING,
  SAVE_INFOS_USER,
  SAVE_USER_RECIPE,
  SET_RECIPE,
  SET_SHOPLIST_ACTION,
  REMOVE_FROM_LIST,
  SET_EMAIL_SUCCESS_ACTION,
  UNSET_EMAIL_SUCCESS_ACTION,
  SET_SEARCHBAR_SETTINGS,
  SET_ERROR_INSCRIPTION_ACTION,
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
  recipes: [],
  recipe: [],
  admin: false,
  isLoading: true,
  searchOption: [],
  searchLocation: ['Mes recettes', 'Toutes les recettes'],
  selectedCagetory: 'Toutes les recettes',
  selectedLocation: 'Toutes les recettes',
  searchInput: null,
  idUser: null,
  roleUser: [],
  recipesUser: null,
  userFavorite: {},
  listCheck: [],
  shoppingList: [],
  shoppingListCheck: [],
  emailSuccess: false,
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
        errorLogin: false,
        token: action.token,
        isLoading: false,
        pass: '',
        confirmPass: '',
        listCheck: [],
      };
    case USER_INSCRIPTION_SUCCESS:
      return {
        ...state,
        inscriptionSuccess: true,
        errorInscription: false,
        emailInUse: false,
        pass: '',
        confirmPass: '',
      };
    case ERROR_INSCRIPTION:
      return {
        ...state,
        errorInscription: true,
        emailInUse: false,
        pass: '',
        confirmPass: '',
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
        pass: '',
        confirmPass: '',
      };
    case DESCRIPTION_ON:
      return {
        ...state,
        descriptionOn: !state.descriptionOn,
      };
    case SAVE_ALL_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        isLoading: false,
      };
    case LOG_OUT_USER:
      localStorage.clear();
      return {
        ...state,
        isLogged: false,
        token: '',
        pass: '',
        confirmPass: '',
        inputSearch: null,
      };
    case SAVE_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
        isLoading: false,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_INFOS_USER:
      return {
        ...state,
        idUser: action.idUser,
        roleUser: action.roleUser,
        name: action.name,
        userFavorite: action.userFavorite,
      };
    case SAVE_USER_RECIPE:
      return {
        ...state,
        recipesUser: action.recipesUser,
        isLoading: false,
      };
    case SET_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
        isLoading: false,
      };
    case SET_SHOPLIST_ACTION:
      return {
        ...state,
        shoppingList: action.value,
      };
    case REMOVE_FROM_LIST: {
      if (state.listCheck.includes(action.index)) {
        return {
          ...state,
          listCheck: [...state.listCheck].filter((elt) => elt !== action.index),
        };
      }
      if (!state.listCheck.includes(action.index)) {
        return {
          ...state,
          listCheck: [...state.listCheck, action.index],
        };
      }
      break;
    }
    case SET_SEARCHBAR_SETTINGS: {
      action.value.push({ key: undefined, text: 'Toutes les recettes', value: 'Toutes les recettes' });
      return {
        ...state,
        searchOption: action.value,
      };
    }
    case SET_EMAIL_SUCCESS_ACTION: {
      return {
        ...state,
        emailSuccess: true,
      };
    }
    case UNSET_EMAIL_SUCCESS_ACTION: {
      return {
        ...state,
        emailSuccess: false,
      };
    }
    case SET_ERROR_INSCRIPTION_ACTION: {
      return {
        ...state,
        errorInscription: false,
      };
    }
    default: return { ...state };
  }
};

export default user;
