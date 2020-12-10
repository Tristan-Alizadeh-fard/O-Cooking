import { connect } from 'react-redux';
import { showOneRecipe, setisLoading, setFavoriteAction, unsetFavoriteAction } from 'src/actions/user';
import AllRecipes from 'src/components/AllRecipes';

const mapStateToProps = (state) => ({
  recipes: state.user.recipes,
  isLoading: state.user.isLoading,
  favorite: state.user.userFavorite,
});

const mapDispatchToProps = (dispatch) => ({
  showRecipe: (id) => {
    dispatch(showOneRecipe(id));
  },
  setLoader: () => {
    dispatch(setisLoading());
  },
  setFavorite: (id) => {
    dispatch(setFavoriteAction(id));
  },
  unsetFavorite: (id) => {
    dispatch(unsetFavoriteAction(id));
  },
});

const ConnectedAllRecipes = connect(mapStateToProps, mapDispatchToProps)(AllRecipes);

export default ConnectedAllRecipes;
