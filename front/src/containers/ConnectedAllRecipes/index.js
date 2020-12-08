import { connect } from 'react-redux';
import { showOneRecipe } from 'src/actions/user';
import AllRecipes from 'src/components/AllRecipes';

const mapStateToProps = (state) => ({
  recipes: state.user.recipes,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  showRecipe: (id) => {
    dispatch(showOneRecipe(id));
  },
});

const ConnectedAllRecipes = connect(mapStateToProps, mapDispatchToProps)(AllRecipes);

export default ConnectedAllRecipes;
