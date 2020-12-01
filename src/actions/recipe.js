export const TEST_RECIPE_ALL = 'TEST_RECIPE_ALL';
export const UPDATE_RECIPE_FIELD = 'UPDATE_RECIPE_FIELD';

export const getRecipeState = () => ({
  type: TEST_RECIPE_ALL,
});

export const updateRecipeField = (value, name) => ({
  type: UPDATE_RECIPE_FIELD,
  value,
  name,
});
