import { connect } from 'react-redux';
import Ingredient from 'src/components/AddRecipeForm/Ingredient';
import {
  updateRecipeIngredients,
  deleteRecipeIngredients,
} from 'src/actions/recipe';

const mapStateToProps = (state) => ({
  ingredients: state.recipe.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  updateRecipeIngredients: (value) => {
    dispatch(updateRecipeIngredients(value));
  },
  deleteRecipeIngredients: (newList) => {
    dispatch(deleteRecipeIngredients(newList));
  },
});

const ConnectedIngredient = connect(mapStateToProps, mapDispatchToProps)(Ingredient);

export default ConnectedIngredient;
