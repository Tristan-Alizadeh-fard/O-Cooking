import { connect } from 'react-redux';
import AddRecipeForm from 'src/components/AddRecipeForm';
import {
  updateRecipeField,
  addToRecipe,
  updateRecipe,
  removeFromRecipe,
  selectCategory,
  selectTags,
  changeImage,
  submitRecipe,
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
  nbPerson: state.recipe.nbPerson,
  ingredients: state.recipe.ingredients,
  ingredientInputValue: state.recipe.ingredientInputValue,
  selectedMeasure: state.recipe.selectedMeasure,
  steps: state.recipe.steps,
  stepInputValue: state.recipe.stepInputValue,
  recipeImage: state.recipe.recipeImage,
  alertSize: state.recipe.alertSize,
  tagList: state.recipe.tagList,
  selectedTags: state.recipe.selectedTags,
  categories: state.recipe.categories,
  selectedCategory: state.recipe.selectedCategory,
  quantityInputValue: state.recipe.quantityInputValue,
  optionsMeasure: state.recipe.optionsMeasure,
});

const mapDispatchToProps = (dispatch) => ({
  updateRecipeField: (target, value) => {
    dispatch(updateRecipeField(target, value));
  },
  addToRecipe: (target, value) => {
    dispatch(addToRecipe(target, value));
  },
  updateRecipe: (target, index, value) => {
    dispatch(updateRecipe(target, index, value));
  },
  removeFromRecipe: (target, index) => {
    dispatch(removeFromRecipe(target, index));
  },
  selectCategory: (value) => {
    dispatch(selectCategory(value));
  },
  selectTags: (value) => {
    dispatch(selectTags(value));
  },
  changeImage: (value) => {
    dispatch(changeImage(value));
  },
  submitRecipe: () => {
    dispatch(submitRecipe());
  },
});

const ConnectedAddRecipeForm = connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);

export default ConnectedAddRecipeForm;
