import { connect } from 'react-redux';
import AddRecipeForm from 'src/components/AddRecipeForm';
import { updateRecipeField } from 'src/actions/recipe';

const mapStateToProps = (state) => ({
  recipeName: state.recipe.recipeName,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    console.log('here');
    dispatch(updateRecipeField(newValue, name));
  },
});

const ConnectedAddRecipeForm = connect(mapStateToProps, mapDispatchToProps)(AddRecipeForm);

export default ConnectedAddRecipeForm;
