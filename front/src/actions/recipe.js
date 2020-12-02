export const TEST_RECIPE_ALL = 'TEST_RECIPE_ALL';
export const UPDATE_RECIPE_FIELD = 'UPDATE_RECIPE_FIELD';
export const ADD_RECIPE_INGREDIENTS = 'ADD_RECIPE_INGREDIENTS';
export const UPDATE_RECIPE_STEPS = 'UPDATE_RECIPE_STEPS';
export const UPDATE_RECIPE_INGREDIENTS = 'UPDATE_RECIPE_INGREDIENTS';

export const getRecipeState = () => ({
  type: TEST_RECIPE_ALL,
});

export const updateRecipeField = (value, name) => ({
  type: UPDATE_RECIPE_FIELD,
  value,
  name,
});

export const addRecipeIngredients = (value) => ({
  type: ADD_RECIPE_INGREDIENTS,
  value,
});

export const updateRecipeSteps = (value) => ({
  type: UPDATE_RECIPE_STEPS,
  value,
});

export const updateRecipeIngredients = (index, name, measure, quantity) => ({
  type: UPDATE_RECIPE_INGREDIENTS,
  index,
  value: {
    name,
    measure,
    quantity,
  },
});
