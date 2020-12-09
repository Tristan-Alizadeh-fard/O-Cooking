import { connect } from 'react-redux';
import { showOneRecipe, setisLoading } from 'src/actions/user';
import AllRecipes from 'src/components/AllRecipes';

const mapStateToProps = (state) => ({
  recipes: state.user.recipes,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  showRecipe: (id) => {
    dispatch(showOneRecipe(id));
  },
  setLoader: () => {
    dispatch(setisLoading());
  },
});

const ConnectedAllRecipes = connect(mapStateToProps, mapDispatchToProps)(AllRecipes);

export default ConnectedAllRecipes;
