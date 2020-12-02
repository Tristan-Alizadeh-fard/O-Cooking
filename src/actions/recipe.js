export const TEST_RECIPE_ALL = 'TEST_RECIPE_ALL';
export const UPDATE_RECIPE_FIELD = 'UPDATE_RECIPE_FIELD';
export const UPDATE_RECIPE_INGREDIENTS = 'UPDATE_RECIPE_INGREDIENTS';
export const UPDATE_RECIPE_STEPS = 'UPDATE_RECIPE_INGREDIENTS';

export const getRecipeState = () => ({
  type: TEST_RECIPE_ALL,
});

export const updateRecipeField = (value, name) => ({
  type: UPDATE_RECIPE_FIELD,
  value,
  name,
});

export const updateRecipeIngredients = (value) => ({
  type: UPDATE_RECIPE_INGREDIENTS,
  value,
});

export const updateRecipeSteps = (value) => ({
  type: UPDATE_RECIPE_STEPS,
  value,
});
