import {
  TEST_RECIPE_ALL,
  UPDATE_RECIPE_FIELD,
} from 'src/actions/recipe';

const initialState = {
  recipeName: '',
  preparationTime1: '',
  preparationTime2: '',
  cookingTime1: '',
  cookingTime2: '',
};

const recipe = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_RECIPE_ALL:
      return {
        ...state,
      };
    case UPDATE_RECIPE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    default: return { ...state };
  }
};

export default recipe;
