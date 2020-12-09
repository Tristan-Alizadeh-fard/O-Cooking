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
  SET_ALL_LOADERS,
  SEARCH,
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
  recipe: {},
  admin: false,
  isLoading: true,
  isLoadingOneRecipe: true,
  searchOption: [
    { key: 'all', text: 'Tout voir', value: 'all', id: null },
    { key: 'entrees', text: 'Entrée', value: 'entrees', id: 1 },
    { key: 'plats', text: 'Plat', value: 'plats', id: 2 },
    { key: 'deserts', text: 'Dessert', value: 'desserts', id: 3 },
  ],
  searchLocation: ['Mes recettes', 'Toutes les recettes'],
  selectedCagetory: '',
  selectedLocation: '',
  searchInput: null,
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
    case SAVE_ALL_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        isLoading: false,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        isLogged: false,
        token: '',
        pass: '',
      };
    case SAVE_RECIPE:
      return {
        ...state,
        recipe: action.recipe,
        isLoadingOneRecipe: false,
      };
    case SET_ALL_LOADERS:
      return {
        ...state,
        isLoading: !state.isLoading,
        isLoadingOneRecipe: !state.isLoadingOneRecipe,
      };
    case SEARCH: 
      console.log('search');
      return {
        ...state,
      }
    default: return { ...state };
  }
};

export default user;
