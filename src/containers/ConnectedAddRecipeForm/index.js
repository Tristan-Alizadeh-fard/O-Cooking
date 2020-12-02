import { connect } from 'react-redux';
import AddRecipeForm from 'src/components/AddRecipeForm';
import {
  updateRecipeField,
  addRecipeIngredients,
  updateRecipeSteps,
  updateRecipeIngredients,
} from 'src/actions/recipe';

const mapStateToProps = (state) => ({
  recipeName: state.recipe.recipeName,
  preparationTime1: state.recipe.preparationTime1,
  preparationTime2: state.recipe.preparationTime2,
  PTS1: state.recipe.PTS1,
  PTS2: state.recipe.PTS2,
  cookingTime1: state.recipe.cookingTime1,
  cookingTime2: state.recipe.cookingTime2,
  CTS1: state.recipe.CTS1,
  CTS2: state.recipe.CTS2,
  ingredients: state.recipe.ingredients,
  ingredientInputValue: state.recipe.ingredientInputValue,
  selectedMeasure: state.recipe.selectedMeasure,
  steps: state.recipe.steps,
  stepInputValue: state.recipe.stepInputValue,
  recipeImage: state.recipe.recipeImage,
  tagList: state.recipe.tagList,
  quantityInputValue: state.recipe.quantityInputValue,
  optionsMeasure: state.recipe.optionsMeasure,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    console.log('updateField');
    dispatch(updateRecipeField(newValue, name));
  },
  addRecipeIngredients: (key, value) => {
    console.log('updateRecipeIngredients');
    dispatch(addRecipeIngredients(key, value));
  },
  updateRecipeSteps: (key, value) => {
    console.log('updateRecipeSteps');
    dispatch(updateRecipeSteps(key, value));
  },
  updateRecipeIngredients: (value) => {
    console.log('update qqch');
    dispatch(updateRecipeIngredients(value));
  },
});

const ConnectedAddRecipeForm = connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);

export default ConnectedAddRecipeForm;