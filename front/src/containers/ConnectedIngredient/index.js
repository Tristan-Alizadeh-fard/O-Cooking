import { connect } from 'react-redux';
import Ingredient from 'src/components/AddRecipeForm/Ingredient.js';
import {
  updateRecipeIngredients,
  deleteRecipeIngredients,
} from 'src/actions/recipe';

const mapStateToProps = (state) => ({
  ingredients: state.recipe.ingredients,

});

const mapDispatchToProps = (dispatch) => ({
  updateRecipeIngredients: (index, value) => {
    dispatch(updateRecipeIngredients(index, value));
  },
  deleteRecipeIngredients: (index) => {
    dispatch(deleteRecipeIngredients(index));
  },
});

const ConnectedIngredient = connect(mapStateToProps, mapDispatchToProps)(Ingredient);

export default ConnectedIngredient;
