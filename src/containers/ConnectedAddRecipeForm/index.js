import { connect } from 'react-redux';
import AddRecipeForm from 'src/components/AddRecipeForm';
import {
  updateRecipeField,
  updateRecipeIngredients,
  updateRecipeSteps,
} from 'src/actions/recipe';

const mapStateToProps = (state) => ({
  recipeValue: state.recipe.recipeValue,
  preparationTime1: state.recipe.preparationTime1,
  preparationTime2: state.recipe.preparationTime2,
  cookingTime1: state.recipe.cookingTime1,
  cookingTime2: state.recipe.cookingTime2,
  ingredients: state.recipe.ingredients,
  ingredientInputValue: state.recipe.ingredientInputValue,
  steps: state.recipe.steps,
  stepInputValue: state.recipe.stepInputValue,
  recipeImage: state.recipe.recipeImage,
  tagList: state.recipe.tagList,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    console.log('updateField');
    dispatch(updateRecipeField(newValue, name));
  },
  updateRecipeIngredients: (key, value) => {
    console.log('updateRecipeIngredients');
    dispatch(updateRecipeIngredients(key, value));
  },
  updateRecipeSteps: (key, value) => {
    console.log('updateRecipeSteps');
    dispatch(updateRecipeSteps(key, value));
  },
});

const ConnectedAddRecipeForm = connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);

export default ConnectedAddRecipeForm;
